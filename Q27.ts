//27:Alien Color #3:Turn your if-else chain from exercise 5-4 into an if-else chain
//.If the alien is green,print a message that the player earned 5 points.
//.If the alien is yellow,print a message that the player earned 10 points
//.If alien the alien is red,print a message that the player earned 15 points
//.Write three version of this program,making sure each message is printed for the appropriate color alien.

let alienColor1 = "green"

if(alienColor1 == "red"){
    console.log("Congratulations! You earned 5 points")
}
if(alienColor1 == "yellow"){
    console.log("Congratulations! You earned 10 points")
}else{
    console.log("Congratulations! You earned 15 points")
}

let aliensColor2 = "yellow"

if(aliensColor2 == "yellow"){
    console.log("Congrats! You earned 5 points")
}
if(aliensColor2 == "green"){
    console.log("Congrats! You earned 10 points")
}else{
    console.log("Congrats!You earned 15 points")
}

let alienColor3 = "green"

if(alienColor3 == "yellow"){
    console.log("Bravo! You earned 5 points")
}
if(alienColor3 == "green"){
    console.log("Bravo! You earned 10 points")
}else{
    console.log("Bravo! You earned 15 points")
}