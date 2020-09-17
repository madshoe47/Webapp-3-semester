"use strict";

function loadSingleExer(ovelse) {
    console.log(ovelse)
    ovelse.onSnapshot(function (snapshotData) {
        let singleExer = [];
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
let index = [0]

loadSingleExer(Gemini)






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

     <button onclick = "index++" class = "tilbagepil" > <img src = "img/tilbagepil.svg" alt = "" > </button> 
     <button onclick = "index--" class = "frempil" > <img src = "img/pilfrem.svg" alt = "" > </button>

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
console.log(HTMLtemplate);
document.querySelector("#ovelser").innerHTML = `<h1 class="overskrift"></h1>` + HTMLtemplate