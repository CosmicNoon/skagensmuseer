/**
 *  Funktion til at skifte den viste side
 * @param {integer} jumpTo 
 */
function changePage(jumpTo) {

    // Gør det nemmere at få fat i alle af en type element.
    let $all = (element) => {
        return document.querySelectorAll(element)
    }

    // Få menuen
    // let menu = $('.menu');
    let menu = document.querySelector('.menu');

    // Få siderne der skal skiftes imellem, som array (HTMLCollection)
    let frames = $all('.frame');

    // Få transisionstiden fra en af siderne (de er ens). 
    // Den returneres som sekunder men skal bruges som millisekunder
    // så derfor ganges der med 1000.
    let transitionTime = parseFloat(getComputedStyle(frames[0])['transitionDuration']) * 1000;

    // Her gemmes index for den viste side, i array
    let currentShow = 0;

    // Her gemmes den side som allerede vises, som objekt.
    let currentFrame = null;

    // Gemmer den ønskede side, som objekt.
    let showPage = frames[jumpTo];

    // Looper igennem arrayet af sider
    for (let i = 0; i < frames.length; i++) {

        // Tjekker om et af ellementerne bliver vist
        if (frames[i].classList.contains('show')) {

            // Gem index'et den viste side har.
            currentShow = i;

            // Gemmer den viste side, som objekt.
            currentFrame = frames[i];

            // Bryder ud af loopet (Der burde ikke være mere end 1)
            break;
        }
    }

    // Sørg for at menuen altid er lukket når der skiftes side.
    menu.classList.remove('show-menu');

    // Fjern størrelses begrænsninger på den viste side.
    restrictSize('remove');

    // Bryd ud af funtionen hvis den viste side er den samme som den ønskede side
    if (currentShow == jumpTo) {
        return;
    }

    // Vis den ønskede side med ".show" klassen
    showPage.classList.add('show');

    // Sørg for den ønskede side altid ligger øverst med ".stack-top" klassen.
    showPage.classList.add('stack-top');

    // Vent den tid det tager at skifte side (transitionTime)
    setTimeout(function () {
        // Fjern den viste side
        currentFrame.classList.remove('show');

        // Fjern ".stack-top" når den gamle side er væk.
        showPage.classList.remove('stack-top');

        // Brug den transisionstid vi fik fra css klassen.
    }, transitionTime);
}


function showMenu() {
    let menu = document.querySelector('.menu');
    menu.classList.toggle('show-menu');
    restrictSize();
}

function restrictSize(remove) {
    let currentShow = document.querySelector('.show');
    if(remove === 'remove'){
        currentShow.classList.remove('restrict-size')
    } else {
        currentShow.classList.toggle('restrict-size')
    }
}

// var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
// var scrollPosition = Math.max(document.documentElement.scrollTop, document.body.scrollTop, window.pageYOffset);
// console.log(scrollPosition);

var headers = document.querySelectorAll('.frame header');
var headerHeight = headers[0].offsetHeight;
console.log(headerHeight);

var frameContainer = document.querySelector('.frame-container');

// frameContainer.onscroll = function () {
//     console.log(frameContainer.scrollTop);

//     headers.forEach(header => {
//         header.style.willChange = "height";
        
//         if(frameContainer.scrollTop > (headerHeight / 2)) {
//             frameContainer.style.height = 'calc(100% - 40px)';
//             header.classList.add('shrink');
//             // frameContainer.style.marginBottom = -(headerHeight / 2);
            
//         } else {
//             header.classList.remove('shrink');
//             frameContainer.removeAttribute('style');
//         }
//         // setTimeout(function() {

//         // }, 500);
//         // if(frameContainer.scrollTop > (headerHeight / 2)) {
//         //     header.style.height = headerHeight / 2 + 'px';
//         // } else {
//         //     header.style.height = headerHeight - frameContainer.scrollTop + 'px';
//         // }
        
//     });
// }







