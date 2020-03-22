var button = document.getElementById("button");
var button_1 = document.getElementById("button_1");
var button_2 = document.getElementById("button_2");

button.onclick = function() {
    var img = document.getElementsByClassName("back-face");
    img.src = "../img/carterecto1.png";
};

button_1.onclick = function() {
    var img = document.getElementsByClassName("back-face")
    img.src = "../img/carterecto1.png";
    console.log(img);
};

button_2.onclick = function() {
    var img = document.getElementsByClassName("back-face")
    img.src = "../img/carterecto3.png";
    console.log(img);
};
