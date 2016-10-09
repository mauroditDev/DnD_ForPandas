function dado(caras)
{
var dResult;
dResult=Math.floor((Math.random()*caras)+1);
return dResult;
}


var enemigo=new Array("Goblin",17,12,1,0);
	var nombreEnem=document.getElementById("nombreEnem");
	nombreEnem.innerHTML=enemigo[0];
	var CAenem=document.getElementById("CAenem");
	CAenem.innerHTML=enemigo[1];
	var PVenem=document.getElementById("PVenem");
	PVenem.innerHTML=enemigo[2];
	var cantidadEnem=document.getElementById("cantidadEn");
	cantidadEnem.innerHTML=enemigo[3];
	var muertos=document.getElementById("muertos");
	muertos.innerHTML=enemigo[4];

var heroe=new Array("Panda",20,25,5,1)
	var nombreH=document.getElementById("nombreHeroe");
	nombreH.innerHTML=heroe[0];
	var CAheroe=document.getElementById("CAheroe");
	CAheroe.innerHTML=heroe[1];
	var PVheroe=document.getElementById("PVheroe");
	PVheroe.innerHTML=heroe[2];
	var AtqHer=document.getElementById("Ataque");
	AtqHer.innerHTML=heroe[3];
	var nivel=document.getElementById("Nivel");
	nivel.innerHTML=heroe[4];

var noRepLvl=0;
var pociones=2;
var varitas=1;

var lastString="Prepárate para combatir!";
document.getElementById("alertas").innerHTML=lastString;

var turnCounter=1;
	var contador=document.getElementById("contador");
	contador.innerHTML=turnCounter;

var hAlive=new Boolean(true)
var eAlive=new Boolean(true)
var enReac=new Boolean(false)
var enAct=new Boolean(false)
var ableCont=new Boolean(false)
var ableCura=new Boolean(false)
var defBuf=0;
var lvlUp=new Boolean(false)
var contadorConsola=0;

//--------------------------------------------------------------------------------------------------------
function ataquePod()
{
	if(checkAliveH())
	{
		if(checkAliveE())
		{
		defBuf=0;
			if (checkImpactoHer(dado(20)))
			{
				damage = heroe.fuerza + dado(6) + dado(6) + equipo.bonusDamArma;
				damageE(damage);
				consola("Toma hostia de "+damage+" le has calzado!");
				enReac=true;
				enAct=Reaction();
				enAct=false;
			}
			else
			{
				consola("Has fallado tu ataque.");
				enReac=true;
				enAct=Reaction();
				enAct=false;
			}
		}
		else
		{consola("Tu enemgio ha caído, puedes continuar")}
	}
else
	{consola("Has Muerto y remuerto!")}
}
//--------------------------------------------------------------------------------------------------------
function ataqueDef()
{
if(checkAliveH())
	{
		if(checkAliveE())
		{
		var tirada=d20();
		defBuf=1+heroe.nivel;
		consola("Bonus defensivo: "+defBuf);
		if ((tirada+heroe[3])>=enemigo[1])
			{
			var damage=d8()+4;
			damageE(damage);
			consola("Toma hostia de "+damage)+"le has calzado";
			enReac=true;
			enAct=Reaction();
			enAct=false;
			
			}
		else
			{
			consola("Has fallado tu ataque.");
			enReac=true;
			enAct=Reaction();
			enAct=false;
			}
		}
		else
		{consola("Tu enemigo ha caído, puedes continuar");}
	}
else
	{consola("Has Muerto y remuerto!");}
}
//--------------------------------------------------------------------------------------------------------
function pocion()
{
	hAlive=checkAliveH();
	if(hAlive==true)
		{
		if(pociones>0)
		{
		ableCura=checkCura();
			if(ableCura==true)
			{
				pociones--;
				d8Res1=d8();
				d8Res2=d8();
				curacion=d8Res1+d8Res2+3;
				heroe[2]=heroe[2] + curacion;
				consola("Tu poción te cura: "+curacion);
				PVheroe.innerHTML=heroe[2];
				enReac=true;
				enAct=Reaction();
				enAct=false;
			}
			else
			{consola("Tienes toda la vida!");}
		}
		else
			{consola("No te quedan pociones!");}
		}
	else
	{consola("Has Muerto y remuerto!");}
}
//--------------------------------------------------------------------------------------------------------

function varita()
{
	hAlive=checkAliveH();
	if(hAlive==true)
	{
		eAlive=checkAliveE();
		if(eAlive==true)
		{
		if(varitas>0)
			{
			varitas--;
			d8Res1=d8();
			d8Res2=d8();
			damage=d8Res1+d8Res2+3;
			enemigo[2]=enemigo[2] - damage;
			damageE(damage)
			enReac=true;
			enAct=Reaction();
			enAct=false;
			}
		else
			{consola("Tu varita está agotada!");}
		}
	}
	else
	{consola("Has Muerto y remuerto!");}
}
//--------------------------------------------------------------------------------------------------------
function Reaction()
{
	if (enReac==true)
	{
		var i=0
		while(i<enemigo[3])
		{
			if(enemigo[0]=="Goblin")
				{
				var hostia=d20()+3
				if (hostia>=(heroe[1]+defBuf))
					{
					var damage = d8()+4;
					heroe[2]=heroe[2] - damage;
					PVheroe.innerHTML=heroe[2];
					consola("Te han dado un guantazo de "+damage+" a que jode?");
					hAlive=checkAliveH();
					if(hAlive==true)
						{
						i++;
						}
					else
						{
						consola("Has Muerto y remuerto!");
						i++;
						return true;	
						}
					}
					else
						{i++;consola("Te has librado del golpe.");}
				}
			else if(enemigo[0]=="Hechicero")
				{
				var hostia=d20()+11
				if (hostia>=(heroe[1]+defBuf))
					{
					var d6Res1=d6();
					var d6Res2=d6();
					var d6Res3=d6();
					var damage=d6Res1 + d6Res2 + d6Res3
					heroe[2]=heroe[2] - damage;
					PVheroe.innerHTML=heroe[2];
					consola("Te han dado un guantazo de "+damage+" a que jode?");
					hAlive=checkAliveH();
					if(hAlive==true)
						{
						i++;
						}
					else
						{
						consola("Has Muerto y remuerto!");
						return true;
						}	
					}
				else
					{i++;consola("Te has librado del golpe.");}
				}
			else if(enemigo[0]=="Temible Koala")
				{
				while(i<enemigo[3])
					{
					var o=0
					while(o<2)
						{
						var hostia=d20()+5
						if (hostia>=(heroe[1]+defBuf))
							{
							var d6Res1=d6();
							var d6Res2=d6();
							var damage=d6Res1 + d6Res2 +3
							heroe[2]=heroe[2] - damage;
							PVheroe.innerHTML=heroe[2];
							consola("Te han dado un guantazo de "+damage+" a que jode?");
							hAlive=checkAliveH();
							if(hAlive==true)
								{o++;}
							else
								{
								consola("Has Muerto y remuerto!");
								return true;
								}
							}
						else
							{o++;consola("Te has librado del golpe.");}
						}
					i++;
					}
				}
			}
	while(i==enemigo[3])
		{
		turnCounter++;
		contador.innerHTML=turnCounter;
		i++;
		return true;
		}
	}
	else
	{return true;}
}
//--------------------------------------------------------------------------------------------------------
function checkAliveE()
{
	if(enemigo[2]>=0)
	{return true;}
	else
	{return false;}
}
function checkAliveH()
{
	if(heroe[2]>=0)
	{return true;}
	else
	{alert("Te han matado! Eres un perdedor!");document.getElementById("imgHer").src="imgs/dyd/dyd2-pana-muerto.jpg";return false;}
}
//--------------------------------------------------------------------------------------------------------
function checkCura()
{
hAlive=checkAliveH();
	if(hAlive=true)
	{
		while(heroe[4]==1)
		{
			if(heroe[2]<25)
			{return true}
			else
			{return false}
		}
		while(heroe[4]==2)
		{
			if(heroe[2]<37)
			{return true}
			else
			{return false}
		}
		while(heroe[4]==3)
		{
			if(heroe[2]<47)
			{return true}
			else
			{return false}
		}
		while(heroe[4]==4)
		{
			if(heroe[2]<52)
			{return true}
			else
			{return false}
		}
		while(heroe[4]==5)
		{
			if(heroe[2]<57)
			{return true}
			else
			{return false}
		}
	}
	else
	{consola("<br>"+"Has Muerto y remuerto!");}
}
//--------------------------------------------------------------------------------------------------------
function damageE(a)
{
	enemigo[2]=enemigo[2] - a;
	PVenem.innerHTML=enemigo[2];
	eAlive=checkAliveE();
	if(eAlive==true)
		{
		enReac=true;
		enAct=Reaction();
		enAct=false;
		}
	else
		{
		enemigo[3]--;
		if(enemigo[3]==0)
			{ableCont=true;consola("Ese era el último, puedes seguir")}
		else
			{
			eAlive=true;
			if (enemigo[0]="Goblin")
			{enemigo[2]=12; PVenem.innerHTML=enemigo[2];}
			else if (enemigo[0]="Hechicero")
			{enemigo[2]=20; PVenem.innerHTML=enemigo[2];}
			else if (enemigo[0]="Temible Koala")
			{enemigo[2]=40; PVenem.innerHTML=enemigo[2];}
			consola("ha caído uno, todavía quedan "+enemigo[3]);
			cantidadEnem.innerHTML=enemigo[3];
			checkImg();
			}
		enemigo[4]++;
		muertos.innerHTML=enemigo[4];
		}
}
//--------------------------------------------------------------------------------------------------------
function continuar()
{
	if(ableCont==true)
		{
		var i=0
		while(i==0)
			{
			consola("Enhorabuena! has vencido");
			i++;
			}
		while(i==1)
			{
			tirada=d100();
			if(tirada<11)			
				{
				enemigo[3]=1;
				enemigo[0]="Temible Koala";
				enemigo[1]=22;
				enemigo[2]=40;
				}
			else if(tirada<21)
				{
				enemigo[3]=2;
				enemigo[0]="Hechicero";
				enemigo[1]=16;
				enemigo[2]=20;
				}
			else if(tirada<49)
				{
				enemigo[3]=1;
				enemigo[0]="Hechicero";
				enemigo[1]=16;
				enemigo[2]=20;				
				}
			else
				{
				d3Res=d3();
				enemigo[3]=d3Res;
				enemigo[0]="Goblin";
				enemigo[1]=17;
				enemigo[2]=12;
				}
			checkImg();
			i++;
			}
		while(i==2)
			{
			lvlUp=false;
			lvlUp=checkLvlUp();
			if(lvlUp==true)
			{
				if(heroe[4]==2)
					{
					alert("enhorabuena, has subido de nivel");
					heroe[1]=heroe[1]+1;
					heroe[2]=37;
					heroe[3]=heroe[3]+3;
					nivel.innerHTML=heroe[4];
					PVheroe.innerHTML=heroe[2];
					AtqHer.innerHTML=heroe[3];
					CAheroe.innerHTML=heroe[1];
					lvlUp=false;
					}
				else if(heroe[4]==3)
					{
					alert("enhorabuena, has subido de nivel");
					heroe[1]=heroe[1]+2;
					heroe[2]=47;
					heroe[3]=heroe[3]+1;
					nivel.innerHTML=heroe[4];
					PVheroe.innerHTML=heroe[2];
					AtqHer.innerHTML=heroe[3];
					CAheroe.innerHTML=heroe[1];
					lvlUp=false;
					}
				else if(heroe[4]==4)
					{
					alert("enhorabuena, has subido de nivel");
					heroe[1]=heroe[1]+1;
					heroe[2]=52;
					heroe[3]=heroe[3]+1;
					nivel.innerHTML=heroe[4];
					PVheroe.innerHTML=heroe[2];
					AtqHer.innerHTML=heroe[3];
					CAheroe.innerHTML=heroe[1];
					lvlUp=false;
					}
				else if(heroe[4]==5)
					{
					alert("enhorabuena, has subido de nivel");
					heroe[1]=heroe[1]+1;
					heroe[2]=57;
					heroe[3]=heroe[3]+1;
					nivel.innerHTML=heroe[4];
					PVheroe.innerHTML=heroe[2];
					AtqHer.innerHTML=heroe[3];
					CAheroe.innerHTML=heroe[1];
					lvlUp=false;
					}
				consola("Has subido al Nivel "+heroe[4]);
				}
			i++;
			}
		while(i==3)
			{
			consola("Ahora te estperan "+enemigo[3]+" "+enemigo[0]+", ten cuidado!")
			var nombreEnem=document.getElementById("nombreEnem");
			nombreEnem.innerHTML=enemigo[0];
			var CAenem=document.getElementById("CAenem");
			CAenem.innerHTML=enemigo[1];
			var PVenem=document.getElementById("PVenem");
			PVenem.innerHTML=enemigo[2];
			var cantidadEnem=document.getElementById("cantidadEn");
			cantidadEnem.innerHTML=enemigo[3];
			var muertos=document.getElementById("muertos");
			muertos.innerHTML=enemigo[4];
			ableCont=false;
			i++;
			break;
			}
		}
	else
	{
	consola("Todavía estás combatiendo!");
	return;
	}
}
//---------------------------------------------------------------------------------------------------------
function consola(a)
{
	contadorConsola++;
	lastString=lastString+"<br>"+a;
	document.getElementById("alertas").innerHTML=lastString;
	while(contadorConsola>3)
	{
		lastString=a;
		contadorConsola=0;
	}
}
//---------------------------------------------------------------------------------------------------------
function checkImg()
{
	var imagEn=document.getElementById("imgEn");
	var defin=0
	if(enemigo[0]=="Goblin")
			{defin=1}
	if(enemigo[0]=="Hechicero")
			{defin=2}
	if(enemigo[0]=="Temible Koala")
			{defin=3;}
	if(enemigo[3]==2){defin=defin+20;}
	if(enemigo[3]==3){defin=defin+30;}
	switch(defin)
	{
		case 1:
			imagEn.src="imgs/dyd/dyd2-1-goblin.jpg";
			imagEn.style.width="350px";
			break;
		case 21:
			imagEn.src="imgs/dyd/dyd2-2-goblin.jpg";
			imagEn.style.width="350px";
			break;
		case 31:
			imagEn.src="imgs/dyd/dyd2-3-goblin.jpg";
			imagEn.style.width="350px";
			break;
		case 2:
			imagEn.src="imgs/dyd/dyd2-1-hechicero.jpg";
			imagEn.style.width="350px";
			break;
		case 22:
			imagEn.src="imgs/dyd/dyd2-2-hechicero.jpg";
			imagEn.style.width="350px";
			break;
		case 3:
			imagEn.src="imgs/dyd/dyd2-koala.jpg";
			imagEn.style.width="350px";
			break;
	}
}
//---------------------------------------------------------------------------------------------------------
function checkLvlUp()
{
	var muerCount=enemigo[4];
	switch(heroe[4])
	{
	case 1:
		if(muerCount>=3)
			{
				heroe[4]=2;
				return true;
				break;
			}
		else
			{
				return false;
				break;
			}
	case 2:
		if(muerCount>=7)
		{
			heroe[4]=3;
			return true;
			break;
		}
		else
		{
			return false;
			break;
		}
	case 3:	
		if(muerCount>=12)
		{
			heroe[4]=4;
			return true;
			break;
		}
		else
		{
			return false;
			break;
		}
	case 4:
		if(muerCount>=18)
		{
			heroe[4]=5;
			return true;
			break;
		}
		else
		{
			return false;
			break;
		}
	case 5:
		return false;
		break;
	}
}
//---------------------------------------------------------------------------------------------------------
function instrAtq(a)
{
	a.src="imgs/dyd/dyd-4-ofensivo-instr.png";
	a.style.width="150px";
	a.style.height="150px"
}
function iAtqNorm(a)
{
	a.src="imgs/dyd/dyd-4-ofensivo.png";
	a.style.width="120px";
	a.style.height="120px"
}
//---------------------------------------------------------------------------------------------------------
function instrDef(a)
{
	a.src="imgs/dyd/dyd-4-defensivo-instr.png";
	a.style.width="150px";
	a.style.height="150px"
}
function iDefNorm(a)
{
	a.src="imgs/dyd/dyd-4-defensivo.png";
	a.style.width="120px";
	a.style.height="120px"
}
//---------------------------------------------------------------------------------------------------------
function instrPoc(a)
{
	a.src="imgs/dyd/dyd-4-pocion-instr.png";
	a.style.width="150px";
	a.style.height="150px"
}
function iPocNorm(a)
{
	a.src="imgs/dyd/dyd-4-pocion.png";
	a.style.width="120px";
	a.style.height="120px"
}
//---------------------------------------------------------------------------------------------------------
function instrVari(a)
{
	a.src="imgs/dyd/dyd-4-varita-instr.png";
	a.style.width="150px";
	a.style.height="150px"
}
function iVariNorm(a)
{
	a.src="imgs/dyd/dyd-4-varita.png";
	a.style.width="120px";
	a.style.height="120px"
}