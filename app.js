// get switch off and on 
const switchOff = document.querySelector('.switch');

// geting a video
const video = document.querySelector('.video-s');

// get btn
const btn = document.querySelector('.btn-switch');

// get preloader
const preLoader = document.querySelector('.preloader');

// add event to btn
btn.addEventListener('click', function(){
    console.log(btn);
    if (switchOff.classList.contains('switch-off')){
        switchOff.classList.remove('switch-off');
        video.pause();
        
    } else {
        switchOff.classList.add('switch-off');
        video.play();
    }
});

// add preloader on load window
window.addEventListener('load', function(){
    preLoader.classList.add('preloader-off');

})