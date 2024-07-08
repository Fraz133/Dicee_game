var player1 = prompt("Enter player 1 name: ");
var player2 = prompt("Enter player  2 name:");

var random_one = Math.floor(Math.random()*6)+1;
var random_two =  Math.floor(Math.random()*6)+1;

var random_image_src_one  = "./images/dice" + random_one + ".png"
var random_image_src_two  = "./images/dice" + random_two + ".png"

var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");

image1.setAttribute("src", random_image_src_one);
image2.setAttribute("src", random_image_src_two);

var heading = document.querySelector("h1");
if(random_one > random_two){
    heading.innerHTML="🚩" + player1 + "  won";
}
else if(random_two>random_one){
    heading.innerHTML=player2 + "  won " + "🚩" ;
}
else if(random_one === random_two){
    heading.innerHTML= "Draw";
}