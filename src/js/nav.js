

// document.addEventListener(DOM)
var pages = document.querySelectorAll('.frame');
var menu = document.querySelector('.menu');

var $ = (element) => {
    return document.querySelector(element)
} 



// document.getElementById('show-frontpage') = function () {
//     // this.classList.add('show');
//     menu.classList.remove('menu-appear');
//     $('.frame1').classList.toggle('test');
// }

$('#show-frontpage').onclick = function () {
    menu.classList.toggle('menu--appear');
    $('.frame1').classList.toggle('test');
}


document.querySelectorAll('.menu--toggle').forEach( button => {
    button.onclick = function () {
        menu.classList.toggle('menu--appear');
        // button.classList.toggle('menu--appear');
    }
});



