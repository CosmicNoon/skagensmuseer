

var $ = (element) => {
    return document.querySelector(element)
}

var $all = (element) => {
    return document.querySelectorAll(element)
}

var frames = $all('.frame');

// console.log(frames);

var navLinks = $all('.navbar li');

// console.log(navLinks);

// var headerEl = $('.main-header');
// console.log(headerEl);
let transitionTime = parseFloat(getComputedStyle(frames[0])['transitionDuration']) * 1000;
// let transitionTime = parseFloat(getComputedStyle($('.filler'))['transitionDuration']) * 1000;
// console.log('transtime: ' + transitionTime)
// console.log(navLinks);
// console.log(imgs);

var globalCurrentShow = null;

var currentPanel = null;


function changeImg(jumpTo = null, forward = true) {
    let currentShow = 0;
    let currentShowEnd = 0;
    
    for (let i = 0; i < frames.length; i++) {
        if (frames[i].classList.contains('show')) {
            currentShow = i;
            // console.log(currentShow);
            break;
        }
    }
    console.log(transitionTime);
    frames[currentShow].classList.remove('show');
    // setInterval(function() {
    // }, transitionTime);

    if (forward) {
        if (currentShow == frames.length - 1) {
            currentShow = -1;
        }
        if(jumpTo){
            currentShow = jumpTo - 1;
            if(jumpTo == 0){
                currentShow = -1;
            }
        }

        frames[currentShow + 1].classList.add('show');
        console.log(currentShow + 1);


        setTimeout(function(){
            frames[currentShow + 1].classList.add('show-end');
        },transitionTime);

        navLinks[currentShow + 1].classList.add('active');

        for(let i = 0; i < navLinks.length; i++) {
            if(i != currentShow + 1) {
                navLinks[i].classList.remove('active');
            }
        }


        for (let i = 0; i < frames.length; i++) {
            if (i != currentShow + 1) {
                setTimeout(() => {
                    frames[i].classList.remove('show-end');
                }, transitionTime);
            }
        }

        globalCurrentShow = currentShow + 1;
        currentPanel = frames[currentShow + 1];

        return currentShow + 1;

    } else {
        if (currentShow == 0) {
            currentShow = frames.length;
        }
        if(jumpTo){
            currentShow = jumpTo + 1;
            if(jumpTo == 0){
                currentShow = 1;
            }
        }
        frames[currentShow - 1].classList.add('show');
        navLinks[currentShow - 1].classList.add('active');

        for(let i = 0; i < navLinks.length; i++) {
            if(i != currentShow - 1) {
                navLinks[i].classList.remove('active');
            }
        }

        globalCurrentShow = currentShow - 1;

        setTimeout(function(){
            frames[currentShow - 1].classList.add('show-end');
        },transitionTime);

        for (let i = 0; i < frames.length; i++) {
            if (i != currentShow - 1) {
                frames[i].classList.remove('show-end');
            }
        }

        currentPanel = frames[currentShow - 1];

        return currentShow - 1;
    }
}



function classToAdd(elem, classToAdd) {
    elem.classList.add(classToAdd);
}

// panels.forEach(panel => panel.addEventListener('transitionend', toggleActive(panel)
// // this.classList.toggle('test');
// // console.log(this);
// ));
function getAllSiblings(elem, filter) {
    var sibs = [];
    elem = elem.parentNode.firstChild;
    do {
        if (elem.nodeType === 3) continue; // text node
        if (!filter || filter(elem)) sibs.push(elem);
    } while (elem = elem.nextSibling)
    return sibs;
}

function getAllNew(elem) {
    var parent = elem.parentNode;
    var children = parent.children;
    return children;
}

// panels.forEach(panel => panel.addEventListener('transitionend', toggleActive(panel)));
function toggleActive(el) {
    // console.log(e);
    // var sibs = getAllSiblings(this);
    var sibs = getAllNew(el);
    // console.log(sibs);

    for(let i = 0; i<sibs.length; i++){
        sibs[i].classList.remove('test')
    }
    // sibs.forEach(sib => sib.classList.remove('test'));
    // console.log(this);
    // this.classList.add('test');
    el.classList.add('test');
    // if (e.classList.contains('show')) {
    //      e.classList.toggle('open-active');
    // }
}



