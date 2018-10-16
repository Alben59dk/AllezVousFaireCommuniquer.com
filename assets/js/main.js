
    let offset = 0;
    let call;

    function scroll() {
    if ((offset - document.documentElement.scrollTop) > 0) {
        document.documentElement.scrollTop += 10
    }
    else if ((offset - document.documentElement.scrollTop) < 0) {
        document.documentElement.scrollTop -= 10
    }
    else {
        clearInterval(call)
    }
};
// Add Event Listener to parent Element 
document.querySelector('.navbar').addEventListener("click", reply_click);

//CallBack Function
function reply_click() {
    event.preventDefault();
    call = setInterval(scroll, 10);
    target = event.srcElement.dataset.scroll;
    offset = document.getElementById(target).offsetTop

}
