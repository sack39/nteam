"use strict";
document.addEventListener("DOMContentLoaded", function() {
    let n = window.innerWidth <= 768;
    window.addEventListener("resize", function() {
        n = window.innerWidth <= 768;
    });
    document.querySelectorAll(".p-footer__block > *").forEach(e => {
        e.querySelectorAll(".p-footer__block-head").forEach(innerElement => {
            innerElement.addEventListener("click", function() {
                n && e.classList.toggle("is-open");
            });
        });
    });
});