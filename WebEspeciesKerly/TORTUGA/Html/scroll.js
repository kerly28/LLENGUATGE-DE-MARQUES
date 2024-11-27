window.addEventListener('scroll', function (){
    const header=document.querySelector("header");
    const maxHeight=120;
    const minHeight=60;
    const scroll=window.scrollY

    const newHeight= Math.max(minHeight,maxHeight-scroll)
    header.style.height= newHeight+'px';
});


