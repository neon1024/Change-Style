
var theme = "black";

function toggleTheme() {

    if(theme == "black") {

        theme = "white";

        document.getElementById("theme").innerHTML = "Dark Theme";

        document.body.style.backgroundColor = "white";

        document.getElementById("title").style.color = "black";

        document.getElementById("text1").style.color = "black";
        document.getElementById("text2").style.color = "black";
        document.getElementById("text3").style.color = "black";

        document.getElementById("text1").style.borderColor = "black";
        document.getElementById("text2").style.borderColor = "black";
        document.getElementById("text3").style.borderColor = "black";

    }
    else if(theme == "white") {

            theme = "black";

            document.getElementById("theme").innerHTML = "White Theme";

            document.body.style.backgroundColor = "#121212";

            document.getElementById("title").style.color = "white";

            document.getElementById("text1").style.color = "white";
            document.getElementById("text2").style.color = "white";
            document.getElementById("text3").style.color = "white";

            document.getElementById("text1").style.borderColor = "white";
            document.getElementById("text2").style.borderColor = "white";
            document.getElementById("text3").style.borderColor = "white";

        }

}

function getRandomColor() {

    var letters = '0123456789ABCDEF';

    var color = '#';

    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;

  }

function changeTextColor() {

    document.getElementById("text1").style.color = getRandomColor();
    document.getElementById("text2").style.color = getRandomColor();
    document.getElementById("text3").style.color = getRandomColor();

}

function getRandomSize() {
    return Math.floor(Math.random() * (32 + 1));
}

function changeTextSize() {

    document.getElementById("text1").style.fontSize = getRandomSize() + "px";
    document.getElementById("text2").style.fontSize = getRandomSize() + "px";
    document.getElementById("text3").style.fontSize = getRandomSize() + "px";

}

window.onload = changeTheme();
window.onload = changeColor();
