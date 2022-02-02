const getOffset = () => {
    const topDist = window.scrollY;
    let res = 100;
    res = Math.max(90,res-(topDist/50));
    return res;
}

const getOpacity = () => {
    const topDist = window.scrollY;
    let op = 0;
    op = Math.min(0.5,topDist/300);
    return op;
}

window.onload = () => {
    let nav = document.getElementById("Navbar");
    let wid = getOffset(), op = getOpacity();
    nav.style.width = wid + "%";
    nav.style.backgroundImage = 'linear-gradient(90deg,rgba(255, 238, 151,' + op + '),rgba(251, 228, 255,' + op + '))';
    nav.style.backgroundImage = '-webkit-gradient(linear,left top,right top,from(rgba(255, 238, 151,' + op + ')),to(rgba(251, 228, 255,' + op + ')))';
    
    const changeWidth = () => {
        wid = getOffset();
        op = getOpacity();
        nav.style.width = wid + "%";
        nav.style.backgroundImage = 'linear-gradient(90deg,rgba(255, 238, 151,' + op + '),rgba(251, 228, 255,' + op + '))';
        nav.style.backgroundImage = '-webkit-gradient(linear,left top,right top,from(rgba(255, 238, 151,' + op + ')),to(rgba(251, 228, 255,' + op + ')))';
    }
    document.addEventListener('scroll',changeWidth);
}