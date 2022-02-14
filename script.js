let color1 = document.querySelector(".color1")
let color2 = document.querySelector(".color2")
const h3 = document.querySelector("h3") 
const body = document.getElementById("gradient")
const colorGenerator = document.getElementById("colorGenerator")


body.style.background = "linear-gradient(to right, " 
                        + color1.value 
                        + ", " 
                        + color2.value 
                        + ")"
h3.innerHTML = body.style.background + ";"

    function setGradient() {
    
        body.style.background = "linear-gradient(to right, " 
        + color1.value 
        + ", " 
        + color2.value 
        + ")"
        h3.innerHTML = body.style.background + ";"
    }

    color1.addEventListener("input", setGradient)

    color2.addEventListener("input", setGradient)



    function randomColor(){
        return Math.floor(Math.random()*256)
    } 

    function randomOpacity() {
        return Math.random()
    }


    function setRandColorButton() {
    
    color1 = "rgba(" + randomColor() + ", "+ randomColor() +", " + randomColor() +","+ randomOpacity() + ")"
    color2 = "rgba(" + randomColor() + ", "+ randomColor() +", " + randomColor() +","+ randomOpacity() + ")"

    
    console.log(color1)
    console.log(color2)

    body.style.background = "linear-gradient(to right, " 
    + color1 
    + ", " 
    + color2
    + ")"
    h3.innerHTML = body.style.background + ";"  
    }

colorGenerator.addEventListener("click", setRandColorButton)





