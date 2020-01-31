const btnScrollToTop = document.querySelector("#btnScrollToTop");
console.log(btnScrollToTop )
btnScrollToTop.addEventListener("click", function () {
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth"
    });
});