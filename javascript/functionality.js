theEnableFunction = (obj) => {
    var el = document.getElementById(obj);
    var k = "" + el.style.display;
    if (k == 'block' || k == 'flex') {
        el.style.display = 'none';
        return;
    }
    else {
        window.scrollTo(0, 0);
        el.style.display = 'flex';
        return;
    }
}