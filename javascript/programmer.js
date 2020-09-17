"use strict";

function loadSingleExer(ovelse) {
    console.log(ovelse)
    let singleExer = [];
    ovelse.onSnapshot(function (snapshotData) {
        snapshotData.forEach(function (doc) {
            let exer = doc.data();
            exer.id = doc.id;
            singleExer.push(ovelse);
        });
        appendSingleExercises(singleExer);
        navigateTo('exercise');
        console.log(singleExer)
    });

}


let index = 0


function resultOfIndex(singleExer) {
    return singleExer[index]
}

function motionsHandler() {
    const backbutton = document.getElementById('backbutton')
    const forwardbutton = document.getElementById('forwardbutton')

    if (forwardbutton.clicked == true) {
        index++
    }
    if (backbutton.clicked == true) {
        index--
    }

    console.log(buttons);
}




function appendSingleExercises(programs) {
    let HTMLtemplate = "";

    HTMLtemplate += /*html*/ `
 
 <section id = "exercise" class = "page">
     <button onclick = "location.href=''" class = "close-sign"> <img src = "img/closex.svg" alt = ""> </button>

     <div id = "gifonexercise" class = "picture-exercise" >
        <img src = "${singleExer[i].gif}" alt = "">
        <h1 id = "overskriftexercise" > ${singleExer[i].title} </h1> 
        <p class = "sets" > ${singleExer[i].sets} </p> 
    </div>

     <button id="backbutton" class = "motionsknap tilbagepil" > <img src = "img/tilbagepil.svg" alt = "" > </button> 
     <button id="forwardbutton" class = "motionsknap frempil" > <img src = "img/pilfrem.svg" alt = "" > </button>

     <!--https: //codepen.io/cassidoo/pen/wEXQaG -->
     <div class = "container" >
        <div class = "progress" >
            <div class = "percent" > 
        </div> 
    </div> 
        <div class = "steps">
        <div class = "step" id = "0" > 
    </div> 
        <div class = "step" id = "1" >  
    </div> 
        <div class = "step" id = "2" > 
    </div> 
        <div class = "step" id = "3" > 
    </div> 
    </div> 
    </div>

     </section>     
`

};
/*console.log(HTMLtemplate);
document.querySelector("#ovelser").innerHTML = `<h1 class="overskrift"></h1>` + HTMLtemplate */