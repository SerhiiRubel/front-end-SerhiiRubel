var navItem = document.querySelectorAll('.tabBtn__item');
var tabItem = document.querySelectorAll('.tabContent__item');

function hideTabContent(a){
    for (var i = a; i < tabItem.length; i++) {
        tabItem[i].classList.remove('show');
    }
}

function removeActiveClass (a) {
    for (var i = 0; i < navItem.length; i++) {
        navItem[i].classList.remove('active');
    }
}

document.querySelector('.tabBtn').onclick = function(e) {
    var target = e.target;
    for (var i = 0; i < navItem.length; i++) {
        if (target == navItem[i]){
            showContent(i);
        }
    }
}

function showContent (index) {
    removeActiveClass(0);
    navItem[index] .classList.add('active');
    hideTabContent(0);
    tabItem[index].classList.add('show');
}