var estudis=[];
var i=0;
var idiomes=[];
var desc=[];
var nota=[];

function afegirEstudi()
{
  var estudi=prompt("Afegeix Nom del Estudi: ");
  var descripcio=prompt("Afegeix Descripcio del estudi: ");

  var element=document.createElement("h3");
  var text=document.createTextNode(estudi);

  var element1=document.createElement("p");
  var text1=document.createTextNode(descripcio);

  element.appendChild(text);
  element1.appendChild(text1);

  document.getElementById("afEstudi").appendChild(element);
  document.getElementById("afEstudi").appendChild(element1);
  document.getElementById("afEstudi").lastChild.innerHTML=document.getElementById("afEstudi").lastChild.innerHTML+"<br> <br>";
  estudi=estudi+": ";
  estudis.push(estudi);
  desc.push(descripcio);

}


function afegirIdiomes()
{
  var estudi=prompt("Afegeix Nom del Idioma: ");
  var descripcio=prompt("Afegeix grau de coneixement del idioma 0-10: ");

  var element=document.createElement("h3");
  var text=document.createTextNode(estudi);

  var element1=document.createElement("p");
  var text1=document.createTextNode(descripcio);
/*
  element.appendChild(text);
  element1.appendChild(text1);

  document.getElementById("afEstudi").appendChild(element);
  document.getElementById("afEstudi").appendChild(element1);
  document.getElementById("afEstudi").appendChild("<br> <br> <br> ");*/
  estudi=estudi+": ";
  idiomes.push(estudi);
  nota.push(descripcio);
}
/*********************************************************************************************/




function crearElement(ident, tipus)
{
  var text=document.getElementById(ident).value;
  var element= opened.document.createElement(tipus);
  var texto=opened.document.createTextNode(text);
  element.appendChild(texto);
  opened.document.getElementById("bo").appendChild(element);
}

function crearText(txt, tipus)
{
  var text=txt;
  var element=opened.document.createElement(tipus);
  var texto=opened.document.createTextNode(text);
  element.appendChild(texto);
  opened.document.getElementById("bo").appendChild(element);
}

function crearElement2(ident1, ident2, tipus)
{
  var texta=document.getElementById(ident1).value;
  var textb=document.getElementById(ident2).value;
  var noma=texta.concat(" "+textb);
  var element= opened.document.createElement(tipus);
  var texto=opened.document.createTextNode(noma);
  element.appendChild(texto);
  opened.document.getElementById("bo").appendChild(element);
}
/*
function OrdenatedList(estudis)
{
  var i=0;
  for(i=0; i<estudis.length;i++)
  {
    var element=opened.document.createElement("li");
    var text=estudis[i];
    element.appendChild(text);
    opened.document.getElementById("bo").appendChild(element);
  }
}
*/
function comprovacionsAvansDeCrearPagina()
{
  var tel=document.getElementById("telefon").value;
  var mai=document.getElementById("mail").value;
  mai.indexOf("@");

  if ( mai.indexOf("@")==-1 )
  {
    alert("El mail introduit no es valid");
    document.getElementById("mail").focus();
    document.getElementById("mail").select();
  }

  else if(tel.length!=9)
  {
    alert("El telefon introduit no es valid");
    document.getElementById("telefon").focus();
    document.getElementById("telefon").select();
  }

  else {
    crearCurriculum();
  }
}

function crearCurriculum()
{
  opened = window.open("");
  opened.document.write("<html><head><title>Curriculum</title><link rel=\"stylesheet\" type=\"text/css\" href=\"estil.css\"></head><body><div id=\"bo\"> </div></body></html>");

  crearText("Currículum Vitare ","h1");
  crearText("Nom: ","h1");
  crearElement2("noms","cognom","p");
  crearText("Edad: ","h1");
  crearElement("edad","p");
  crearText("E-mail: ","h1");
  crearElement("mail","p");
  crearText("Direcció postal: ","h1");
  crearElement("direccio","p");
  crearText("Telefon: ","h1");
  crearElement("telefon","p");
  crearText("Estudis","h1");
  mostraEstudis();
  crearText("Idiomes","h1");
  mostraIdiomes();
  var casaco=document.getElementById("textarea1").value;
  if(value!="Introdueix altres dades d'interes" ||value!=null)
  {
    crearText("Altres Dades: ","h1");
    crearElement("textarea1","p");
  }

}

function mostraEstudis()
{
  var ele=opened.document.createElement("ol");
  opened.document.getElementById("bo").appendChild(ele);
  for(var i=0; i<estudis.length; i++)
  {
    var texto=estudis[i]+desc[i];
    var text=opened.document.createTextNode(texto);
    var tata=opened.document.createElement("li");
    tata.appendChild(text);
    opened.document.getElementsByTagName("ol")[0].appendChild(tata);
  }
}

function mostraIdiomes()
{
  var ele=opened.document.createElement("ol");
  opened.document.getElementById("bo").appendChild(ele);
  for(var i=0; i<estudis.length; i++)
  {
    var text=opened.document.createTextNode(idiomes[i]+" amb una nota de "+nota[i]);
    var tata=opened.document.createElement("li");
    tata.appendChild(text);
    opened.document.getElementsByTagName("ol")[1].appendChild(tata);
  }

}

function funcioIdiomes()
{
  var text=prompt("Afegeix Idioma");
  var nivell=prompt("Introdueix el nivell amb un valor de 0 a 10","0");
  idiomes.push(text);
  nota.push(nivell);
}

function addImage()
{
  var previwer=document.quertySelector()
}
