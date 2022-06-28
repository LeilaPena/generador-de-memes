// Botones para paneles de texto e imagen
const panelTexto = document.getElementById('panel-texto');
const panelImagen = document.getElementById('panel-imagen');
const botonPanelImagen= document.getElementById('boton-panel-imagen');
const botonPanelTexto = document.getElementById('boton-panel-texto');

botonPanelImagen.addEventListener('click',()=>{
    panelImagen.style.display= 'inline-block';
    panelTexto.style.display='none';
})
botonPanelTexto.addEventListener('click',()=>{
    panelTexto.style.display='inline-block';
    panelImagen.style.display='none';
})
// Botones para cartel de top text y bottom text
const textoSuperior= document.getElementById('texto-superior')
const textoInferior= document.getElementById('texto-inferior')
const checkboxSinTextoSuperior= document.getElementById('checkbox-sin-texto-superior')
const checkboxSinTextoInferior= document.getElementById('checkbox-sin-texto-inferior')
const checkboxFondoTransparente= document.getElementById('checkbox-fondo-transparente')
checkboxSinTextoSuperior.addEventListener('click',()=>{
    if (checkboxSinTextoSuperior.checked){
        textoSuperior.style.display= 'none';
    }
    else{
        textoSuperior.style.display='flex';
    }
})
checkboxSinTextoInferior.addEventListener('click',()=>{
    if (checkboxSinTextoInferior.checked){
        textoInferior.style.display= 'none';
    }
    else{
        textoInferior.style.display='flex';
    }
})
checkboxFondoTransparente.addEventListener('click',()=>{
    if (checkboxFondoTransparente.checked){
        textoInferior.style.visibility='hidden';
        textoSuperior.style.visibility= 'hidden';
    }
    else{
        textoInferior.style.visibility='visible';
        textoSuperior.style.visibility='visible';
    }
})
// Input para ingresar URL
const inputURL=document.getElementById('input-url');
const cuadradoImagen= document.getElementById('cuadrado-imagen')
inputURL.addEventListener('input',event =>{
const urlImagen= event.target.value;
cuadradoImagen.style.backgroundImage=`url("${urlImagen}")`;

})