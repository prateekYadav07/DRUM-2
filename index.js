

window.addEventListener('keydown', playSound);

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition)
});

function removeTransition(key){
    if(!key.propertyName == 'transform') return
    this.classList.remove('playing');
}

function playSound(e){
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return; // stop the listener if there's no key present in html
    audio.currentTime = 0; // rewind event to start
    audio.play()
    key.classList.add('playing')
}