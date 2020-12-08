let button = document.querySelectorAll(".button");

let audio = "";
// let i = 0;

for(let i = 0;i<7;i++){
    button[i].addEventListener("click", function(){
        if(i === 0){
            audio = new Audio("sounds/crash.mp3");
            button[0].classList.add("clicked");
            audio.addEventListener("ended", () => {
                button[0].classList.remove("clicked");
            });
        }else if(i === 1){
            audio = new Audio("sounds/kick-bass.mp3");
            button[1].classList.add("clicked");
            audio.addEventListener("ended", () => {
                button[1].classList.remove("clicked");
            });
        }else if(i === 2){
            audio = new Audio("sounds/snare.mp3");
            button[2].classList.add("clicked");
            audio.addEventListener("ended", () => {
                button[2].classList.remove("clicked");
            });
        }else if(i === 3){
            audio = new Audio("sounds/tom-1.mp3");
            button[3].classList.add("clicked");
            audio.addEventListener("ended", () => {
                button[3].classList.remove("clicked");
            });
        }else if(i === 4){
            audio = new Audio("sounds/tom-2.mp3");
            button[4].classList.add("clicked");
            audio.addEventListener("ended", () => {
                button[4].classList.remove("clicked");
            });
        }else if(i === 5){
            audio = new Audio("sounds/tom-3.mp3");
            button[5].classList.add("clicked");
            audio.addEventListener("ended", () => {
                button[5].classList.remove("clicked");
            });
        }else{
            audio = new Audio("sounds/tom-4.mp3");
            button[6].classList.add("clicked");
            audio.addEventListener("ended", () => {
                button[6].classList.remove("clicked");
            });
        }
        audio.play(); 
    });

};


    document.addEventListener("keydown", e => {
        if(e.key === "w"){
            audio = new Audio("sounds/crash.mp3");
            button[0].classList.add("clicked");
            audio.addEventListener("ended", () => {
                button[0].classList.remove("clicked");
            });
        }else if(e.key === "a"){
            audio = new Audio("sounds/kick-bass.mp3");
            button[1].classList.add("clicked");
            audio.addEventListener("ended", () => {
                button[1].classList.remove("clicked");
            });
        }else if(e.key === "s"){
            audio = new Audio("sounds/snare.mp3");
            button[2].classList.add("clicked");
            audio.addEventListener("ended", () => {
                button[2].classList.remove("clicked");
            });
        }else if(e.key === "d"){
            audio = new Audio("sounds/tom-1.mp3");
            button[3].classList.add("clicked");
            audio.addEventListener("ended", () => {
                button[3].classList.remove("clicked");
            });
        }else if(e.key === "j"){
            audio = new Audio("sounds/tom-2.mp3");
            button[4].classList.add("clicked");
            audio.addEventListener("ended", () => {
                button[4].classList.remove("clicked");
            });
        }else if(e.key === "k"){
            audio = new Audio("sounds/tom-3.mp3");
            button[5].classList.add("clicked");
            audio.addEventListener("ended", () => {
                button[5].classList.remove("clicked");
            });
        }else if(e.key === "l"){
            audio = new Audio("sounds/tom-4.mp3");
            button[6].classList.add("clicked");
            audio.addEventListener("ended", () => {
                button[6].classList.remove("clicked");
            });
        }else{

        }
        audio.play(); 
    });
