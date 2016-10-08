function menuAct(element)
{
element.style.color="red"
}
function menuNorm(element)
{
element.style.color="white"
}
//----------------------------------
var maxAltura=740
var imagen=document.getElementById("imagenMostrada")

function imgSelect(a)
{
	imagen.src=a.src;
	imagen.style.width="900px";
	imagen.style.height="auto";
	var altura=imagen.height;
	checkAltura(altura);
}

function checkAltura(value)
{
		if(value>maxAltura)
		{
			imagen.style.height=maxAltura+"px";
			imagen.style.width="auto";
			altura=maxAltura;
		}
}
