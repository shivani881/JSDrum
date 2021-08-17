console.log("welcome to drumkit");

window.addEventListener('keydown' , keypressed);
function keypressed(e){
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    if(!audio){ 
        return;
    }
    else{  
      key.classList.add('playing');
        audio.currentTime = 0;  //it will rewind from starting
        audio.play();
    
    }
}
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
     function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        e.target.classList.remove('playing');
      }


