const mtxContainer = document.querySelector('.mtx');
const idContainer = document.querySelector('.wrap');
const spanText = document.querySelector('.text');
const cursor = document.querySelector('.cursor');
const twitter = document.querySelector('.twitter');
const github = document.querySelector('.github');
const dev = document.querySelector('.dev');
const blog = document.querySelector('.blog');
const email = document.querySelector('.email');
const text = ['Wake up...', 'mohamedation has you...', 'Follow the white rabbit...'];


let activeText = 0;
let activeLetter = -50;
const time = 100;
let showTime = -750;

let baseStyles = [
    "color: #009966",
    "background-color: #000",
    "padding: 2px 4px",
    "border-radius: 2px"
  ].join(";");

const addLetter = () => {
    if (activeLetter >= 0) {
        spanText.textContent += text[activeText][activeLetter];
    }
    activeLetter++;
    if (activeLetter === text[activeText].length) {
        activeText++;
        if (activeText === text.length){
            spanText.classList.add('animationDone')
            cursor.classList.add('stop')
            setTimeout(function() {
                mtxContainer.classList.add('hide');
            }, 3000);
            idContainer.classList.add('reveal');
            twitter.classList.add('slideup');
            github.classList.add('slideup');
            dev.classList.add('slideup');
            blog.classList.add('slideup');
            email.classList.add('slideup');
            const interval = setInterval(function() {
                setRandomClass();
            }, 3000);
            return
        };
        return setTimeout(() => {
            activeLetter = 0;
            spanText.textContent = '';
            addLetter()
        }, 1000)
        

    }
    setTimeout(addLetter, 100)
    

}
const cursorAnimation = () => {
    cursor.classList.toggle('active')
    if (activeText === text.length){
        cursor.classList.remove('active')
        return
    }
}

// const showImage = () => {
//     if (showTime >= 0) {
//         image.classList.toggle('active');
        
//     }
//     showTime++;
//     if (showTime === 1000) return;
    
// }

addLetter()





function setRandomClass() {
    let x = Math.floor((Math.random() * 36) + 1);
    var dev = document.querySelector('.dev'+x);
    dev.classList.toggle("devanimation");
}

console.log("%cAre You trying some F12 hacking?!", baseStyles);