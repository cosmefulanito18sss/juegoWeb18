document.getElementById('player').addEventListener("mouseover",sumarPuntos);


function sumarPuntos(){
   puntos++;
   document.getElementById("puntos");
   randNum =  Math.round(Math.random()*500);
   randNum2 =  Math.round(Math.random()*500);
   document.getElementById("player").style.marginTop =randNum + "px";
   document.getElementById("player").style.marginLeft =randNum2 + "px";
   
}


function restarTiempo() {
	tiempo--;
	document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;PRIMERA LEY DE ELECTROSTATICA "; 
	if (tiempo == 0) {
		tiempo = 0;
		puntos = 0;
	}
}

setInterval(restarTiempo,1000);
//------------------------------------
function sigueme()
{
    var x = window.event.x;
    var y = window.event.y;

    document.getElementById("siguelo").style.left = x + "px";
    document.getElementById("siguelo").style.top = y + "px";
}

//------------------------------------
movimiento=function(div)
{
	
	difX=0;
	difY=0;
 
	div.addEventListener('mousedown',inicio,false);
 
	function inicio(e)
	{
		var eX=e.pageX;
		var eY=e.pageY;
		var oX=parseInt(div.style.left);
		var oY=parseInt(div.style.top);
		difX=oX-eX;
		difY=oY-eY;
 
		document.addEventListener('mousemove',mover,false);
		document.addEventListener('mouseup',soltar,false);
	}
 
	function mover(e)
	{
		var tY=e.pageY+difY+'px';
		var tX=e.pageX+difX+'px'
		div.style.top=tY;
		div.style.left=tX;
	}
 
	function soltar(e)
	{
		document.removeEventListener('mousemove',mover,false);
		document.removeEventListener('mouseup',soltar,false);
	}
}
var recu1=new movimiento(document.getElementById("arrastrar"));