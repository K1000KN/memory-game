const cards = document.querySelectorAll('.card');

let has_flipped_card = false;
let lock_board = false;
let first_card, second_card;
let Random = 0;
let i = document.getElementById('flips');
let count_flips = 0;
let z = document.getElementById('pairs');
let count_pairs = 0;

var second = 0, minute = 0; hour = 0;
var timer = document.querySelector(".timer");
var interval;

function flip_card() {
    if(lock_board) return;
    if (this === first_card) return;

    count_flips++;
    i.innerText = count_flips;

    if (count_flips == 1)
        start_timer();

    this.classList.add('flip');

    if(!has_flipped_card) {
        has_flipped_card = true;
        first_card = this;

        return;
    }

    second_card = this;

    check_match();

    if (count_pairs == 18) {
        alert("you win " + '\n' + "with "+count_flips +" moves" + '\n' + "in " + minute + " mins " + second + " sec");
        window.Location.reload();
    }
}

function check_match() {
    if (first_card.dataset.framework === second_card.dataset.framework) {
        stop_card();
        count_pairs++;
        z.innerText = count_pairs;
    }

    else {
        unflip_cards();
    }

}

function stop_card() {
    first_card.removeEventListener('click', flip_card);
    second_card.removeEventListener('click', flip_card);

    reset_array();
}

function unflip_cards() {
    lock_board = true;
    setTimeout(() => {
        first_card.classList.remove('flip');
        second_card.classList.remove('flip');

        reset_array();
    },550);
}

function reset_array() {
    [has_flipped_card, lock_board] = [false, false];
    [first_card, second_card] = [null, null];
}

function shuffle() {
    cards.forEach(card => {
        Random = Math.floor(Math.random() * 36);
        card.style.order = Random;
    });
};

shuffle();

function start_timer(){
    interval = setInterval(function(){
        timer.innerHTML =  minute+"mins "+second+"secs";
        second++;
        if(second == 60){
            minute++;
            second=0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    },1000);
}

function reset_timer() {
    second = 0;
    minute = 0;
    hour = 0;
    var timer = document.querySelector(".timer");
    timer.innerHTML = "0 mins 0 secs";
    clearInterval(interval);
}

cards.forEach(card => card.addEventListener('click', flip_card));
