var arrowLeft = $('.arrows__left');
var arrowRight = $('.arrows__right');
var indexSlide = 0;
var slides = $('.slider__item');


function showSlide(e, n) {
    e.preventDefault();
    indexSlide += n;
    if( indexSlide > slides.length - 1 ) {
        indexSlide = 0;
    }

    if(indexSlide < 0) {
        indexSlide = slides.length - 1;
    }
    slides.each( (i, elem) => {
        if(i === indexSlide) {
            clearSlide(i);
            $(elem).fadeIn(300);
        }
    });
}

function clearSlide(i) {
    slides.each( function (i, elem) {
        if( i !== indexSlide ) {
            $(elem).fadeOut(300);
        }
    });
}



$(document).ready( function() {
    clearSlide(indexSlide);
    arrowLeft.click( e => showSlide(e,-1));
    arrowRight.click( e => showSlide(e,1));
});