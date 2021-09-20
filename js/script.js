'use strict'
let links = document.querySelectorAll('.nav__link'),
    tabs = document.querySelectorAll('.tab');

//Remove active classes of blocks and links    
function delActiveClass() {
    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove('nav__link_active');
        tabs[i].classList.add('notActive-tab');
    }
}

//Generates tabs for further navigation through them
(function addDataAttr() {
    for (let i = 0; i < links.length; i++) {
        links[i].setAttribute('data-tab', i);
    }
})();


//Opening blocks by links
Array.prototype.forEach.call(links, function(item) {
    item.addEventListener('click', function() {
        let tab = this.getAttribute('data-tab');
        delActiveClass()
        tabs[tab].classList.remove('notActive-tab');
        this.classList.add('nav__link_active');
    });
});