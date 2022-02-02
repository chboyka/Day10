var move = 0;
function m(event){
    if(event.which === 39){
        var div1 = document.getElementById("d1");
        move += 20;
        div1.style.marginLeft = move + "px";
    }

    
    if(event.which === 37){
        var div1 = document.getElementById("d1");
        move -= 20;
        div1.style.marginLeft = move + "px";
    }

    if(event.which === 40){
        var div1 = document.getElementById("d1");
        move += 20;
        div1.style.marginTop = move + "px";
    }

    
    if(event.which === 38){
        var div1 = document.getElementById("d1");
        move -= 20;
        div1.style.marginTop = move + "px";
    }
}

function start(){
    window.interval = setInterval(n,200);
}
function stop(){
    clearInterval(interval);
}

function n(){
    var div1 = document.getElementById('d1');
    move += 20;
    div1.style.marginLeft = move+"px";
}