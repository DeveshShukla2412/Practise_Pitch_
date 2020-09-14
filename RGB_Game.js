var Colors =[
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(150, 100, 150)",
    "rgb(25, 150, 0)",
    "rgb(55, 200, 200)"
];

var squares=document.querySelectorAll(".square");
var pickedColor=Colors[4];
var displayColor=document.getElementById("picked_color");
displayColor.textContent=pickedColor;
var resultDisplay=document.getElementById("message");

for(var i=0;i<squares.length;i++) {
    squares[i].style.backgroundColor = Colors[i];
    //Click event Listner
    squares[i].addEventListener("click", function()
    {
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        if(clickedColor===pickedColor)
        {
            alert("You have picked correct color");
            resultDisplay.textContent="Correct!";
            changeColor(clickedColor);
        }
        else
        {
            this.style.backgroundColor="#232323";
            resultDisplay.textContent="Try Again";
        }
    });
}

function changeColor(color)
{
for(var i=0;i<squares.length;i++)
{
    squares[i].style.backgroundColor=color;
}
}