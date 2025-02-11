let name = prompt("Enter Your Name Cutie!");
let noClickCount = 0;
let mainHead = document.querySelector("h1");
let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2");
let image = document.querySelector("#image");
mainHead.innerText = mainHead.innerText + " " + name;


    btn1.onclick = () => {
        mainHead.textContent = 'Mujhe Pta Tha'+ ' ' + name + ' Cutie Love You';
        // Check if the screen width is 576px or smaller (mobile view)
        if (window.matchMedia("(max-width: 576px)").matches) {
            btn1.style.visibility = "hidden";
            image.style.backgroundImage = "url('final.gif')";
            image.style.height = "40%";  // Adjust for mobile
            image.style.width = "100%";   // Adjust for mobile
            image.style.top = "-10%";    // Adjust for mobile
            image.style.left = "10%";     // Adjust for mobile
        } else {
            btn1.style.visibility = "hidden";
            image.style.backgroundImage = "url('final.gif')";
            image.style.height = "60%";
            image.style.width = "70%";
            image.style.top = "-17%";
            image.style.left = "5%";
        }
    };
    
btn2.onclick = () =>{
    noClickCount++
        if (noClickCount === 1) {
            mainHead.textContent = 'Soch le ache se?';
            image.style.backgroundImage = "url('image2.gif')"
        } else if (noClickCount === 2) {
            mainHead.textContent = 'Ek aur bar soch le?';
            image.style.backgroundImage = "url('image3.gif')"
        } else if(noClickCount===3){
            mainHead.textContent = "Manja yr! ese na kr";
            image.style.backgroundImage = "url('special.gif')"
        } else if(noClickCount===4){
            mainHead.textContent = "Ab kitna bhav khaegi"
            image.style.backgroundImage = "url('image4.gif')"
        } else if(noClickCount===5){
            mainHead.textContent = "Hye mar hi dalegi ab to tu"
            image.style.backgroundImage = "url('image7.gif')"
        } else if(noClickCount===6){
            image.style.backgroundImage = "url('image8.gif')"
            mainHead.textContent = "Chl Acha ab ese na kr"
            btn2.style.visibility = "hidden";
            btn1.style.width = "60%";
            btn1.style.marginLeft = "8%"; 
        };

}