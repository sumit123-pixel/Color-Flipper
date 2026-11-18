let colorbtn = document.querySelector("#colorbtn");
let body = document.querySelector("body");

let count=-1;

let color=["yellow","red","green","blue","purple","brown"];

const colorchange=()=>{
    count=(count+1)%color.length;
    body.style.backgroundColor=color[count];
}

colorbtn.addEventListener("click",()=>{
    console.log("button was clicked");
    colorchange();
})