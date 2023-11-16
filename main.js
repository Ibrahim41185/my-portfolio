let btn = document.getElementById("but");
console.log(btn);


window.onscroll = function(){
    if( scrollY>=600 ){
        btn.style.display = 'block'
    }else{
        btn.style.display = 'none'
    }
}
btn.onclick = function(){
    scroll({
        left:0,
        top:0,
        behavior:"smooth"
    })
}