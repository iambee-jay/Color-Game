var numsquares = 6
var colors = []
var pickedcolor
var squares = document.querySelectorAll(".square")
var picked = document.querySelector("#picked")
var message = document.querySelector("#message")
var h1 = document.querySelector("h1")
var resetbutton = document.querySelector("#reset")
var modebtns = document.querySelectorAll(".mode")

init()

function init(){
    setupmodebuttons()
    setupsquares()
    reset()
}

resetbutton.addEventListener("click", function(){
    reset()
})

function setupmodebuttons(){
    //mode buttons event listiners
    for (var i = 0; i < modebtns.length; i++){
        modebtns[i].addEventListener("click", function(){
        modebtns[0].classList.remove("selected")
        modebtns[1].classList.remove("selected")
        this.classList.add("selected") 
        this.textContent === "Easy" ? numsquares = 3: numsquares = 6
        reset()
    })
}
}

function setupsquares(){
    for (var i = 0; i < squares.length; i++){
        // add click listiners to squares
        squares[i].addEventListener("click", function(){
            // grab color of clicked square
            var clickedcolor = this.style.background
            // compare color of clicked square
            if (clickedcolor === pickedcolor){
                message.textContent = "Correct!!!"
                resetbutton.textContent = "Play Again ?"
                changecolor(pickedcolor)
                h1.style.background = pickedcolor
            }
            else {
                this.style.background = "#232323"
                message.textContent = "Wrong!!!, Try again"
            }
        })
    }
}

function changecolor(color){
    for (var i = 0; i < squares.length; i++){
        squares[i].style.background = color
    }
}

function pickcolor(){
    var random = Math.floor(Math.random() * colors.length)
    return colors[random]
}

function generaterandomcolor(num){
    //make array
    var arr = []
    //repeat num times
    for (var i = 0; i < num; i++){
        //get random num and push into array
        arr.push(randomcolor())
    }
    //return that array
    return arr
}

function randomcolor(){
    //pick a red from 0 - 255
    var r = Math.floor(Math.random() * 256)
    //pick a green from 0 - 255
    var g = Math.floor(Math.random() * 256)
    //pick a blue from 0 - 255
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")"
}

function reset(){
    //generate new random colors
    colors = generaterandomcolor(numsquares)
    //pick the new random colour
    pickedcolor = pickcolor()
    //change the text to the color that was picked
    picked.textContent = pickedcolor
    //changed the new squares to the colour that was picked
    resetbutton.textContent = "new colors"
    message.textContent = ""
    for (var i = 0; i < squares.length; i++){
        if (colors[i]){
            squares[i].style.display = "block"
            squares[i].style.background = colors[i]
        }
        else {
            squares[i].style.display = "none"
        }
    }
    h1.style.background = "steelblue"
}
