/* 
Creare uno slider di immagini come visto questa mattina a lezione.
Potete usare le immagini che desiderate. Per facilitarvi la vita usate immagini delle stesse dimensioni :faccia_leggermente_sorridente:
Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider.
Inoltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera.
Utilizziamo una classe first e last per capire quali sono la prima e ultima immagine dello slider.
Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider.
*/
$(document).ready(function(){

// RIFERIMENTI IMMAGINE
var next = $(".next .fa-angle-right");
var prev = $(".prev .fa-angle-left");

// RIFERIMENTO CIRCLE
var circle = $(".nav .fa-circle");

// LOGICA FRECCIA NEXT "DESTRA"
next.click(function(){
    prevNextImage("next");

})
// LOGICA FRECCIA PREV "SINISTRA"
prev.click(function(){
    prevNextImage("prev");
})

// LOGICA PER CAMBIARE IMMAGGINI CON LA TASTIERA
$(document).keydown(function(event){
    if(event.keyCode === 39){
        prevNextImage("next")
    }else if(event.keyCode === 37){
        prevNextImage("prev")
    }
})


});

/*************************************
            UTILITIES FUNCTION
***************************************/

/**
 * IN QUESTA FUNZIONE VADO A DARE LOGICA ALLE DUE FRECCE NEXT E PREV
 * @param direzione("NEXT" O "PREV") 
 */
function prevNextImage(direzione){
    // VAR DI RIFERIMENTO IMMAGINI
    var imageActive = $(".images img.active");
    var imageActiveFirst = $(".images img.first");
    var imageActiveLast = $(".images img.last");
    
    // IMMAGINE DA RESETTARE
    imageActive.removeClass("active");

    // VAR DI RIFERIMENTO CERCHIETTI
    var circleActive = $(".nav i.active");
    var circleActiveFirst = $(".nav i.first");
    var circleActiveLast = $(".nav i.last");
    //CERCHI DA RESETTARE
    circleActive = $(".nav i.active").removeClass("active");

    //DIREZIONE NEXT
    if(direzione === "next"){
        /* NEL PASSAGGIO IF VADO A CONTROLLARE SE LA VARIABILE imageActive HA LA CLASSE "FIRST" NEL CASO IN CUI SI VERIFICA VADO AD AGGIUNGERE ALLA VARIBILE IMAGE ACTIVE LAST LA CLASSE ACTIVE IN MODO DA AVERE VISIBILE LA PRIMA IMMAGINE COSI AL CLICK SUL TASTO NEXT IL SELETTORE NON ESCE DAL NODO IMG NELL HTML MA TORNA ALLA PRIMA IMMAGINE */
        if(imageActive.hasClass("last")){
            imageActiveFirst.addClass("active");
            circleActiveFirst.addClass("active");
        } else{
            imageActive.next("img").addClass("active");
            circleActive.next("i").addClass("active");
        }
    }
    //DIREZIONE PREV 
    else if (direzione === "prev"){
        /* NEL PASSAGGIO IF VADO A CONTROLLARE SE LA VARIABILE imageActive HA LA CLASSE "FIRST" NEL CASO IN CUI SI VERIFICA VADO AD AGGIUNGERE ALLA VARIBILE imageActiveLast LA CLASSE ACTIVE IN MODO DA AVERE VISIBILE LA PRIMA IMMAGINE COSI AL CLICK SUL TASTO NEXT IL SELETTORE NON ESCE DAL NODO IMG NELL HTML MA TORNA ALLA PRIMA IMMAGINE */
        if(imageActive.hasClass("first")){
            imageActiveLast.addClass("active");
            circleActiveLast.addClass("active");
        } else{
            imageActive.prev("img").addClass("active");
            circleActive.prev("i").addClass("active");
        }
    }

}