window.addEventListener('scroll', function (){
    const header=document.querySelector("header");
    const maxHeight=600;
    const minHeight=100;
    const scroll=window.scrollY

    const newHeight= Math.max(minHeight,maxHeight-scroll)
    header.style.height= newHeight+'px';
});