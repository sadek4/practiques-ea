var tot=0;
var nid=1;

function comprar(descrip, preu){
	var espacio=document.getElementById("total");
    var parrafo=document.createElement("p");
    idp=nid;
    parrafo.setAttribute("id",nid);
    anclaN=document.createElement("a");
    anclaN.setAttribute("href","#");
    anclaN.setAttribute("title","X");
    anclaN.setAttribute("onClick","borrar("+nid+")");   
    var ids=document.getElementById(idp);
    var contenido=document.createTextNode(descrip+"  "+preu+"€");
    parrafo.appendChild(contenido);
    espacio.appendChild(parrafo);
    var boton=document.createElement("input");
    boton.setAttribute("type","button");
    boton.setAttribute("id","b"+ nid);
    boton.setAttribute("value","x");
    boton.setAttribute("onClick","borrar("+nid+","+preu+");");
    espacio.appendChild(boton);
    tot+=parseFloat(preu);
    document.getElementById("suma").innerHTML="Total "+tot.toFixed(2)+"€";
    nid++;
}

function borrar(nid,pre){
	var borrar=document.getElementById(nid);
	borrar.parentNode.removeChild(borrar);
	var borrarx=document.getElementById('b'+nid);
	borrarx.parentNode.removeChild(borrarx);
	tot-=pre;
	document.getElementById("suma").innerHTML="Total "+tot.toFixed(2)+"€";
}