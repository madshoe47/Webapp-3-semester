'use strict'

//Mads//
function loadExercises(programchosen) {
    console.log(programchosen)
    programchosen.onSnapshot(function (snapshotData) {
        let exercises = [];
        snapshotData.forEach(function (doc) {
            let exercise = doc.data();
            console.log(exercise)
            exercise.id = doc.id;
            exercises.push(exercise);
        });
        appendSingleExercises(exercises);
        navigateTo('exercise');

    });
}


function getExercises(programchosen) {
    programchosen.toLowerCase()
    var choosenProgram = ""
    console.log(programchosen)

    if (programchosen == "Pegasus") {
        loadExercises(Pegasus)
        choosenProgram = "Pegasus"
    } else if (programchosen == "Gemini") {
        loadExercises(Gemini)
        choosenProgram = "Gemini"
    } else if (programchosen == "Hercules") {
        loadExercises(Hercules)
        choosenProgram = "Hercules"
    } else if (programchosen == "back") {
        loadExercises(back)
        choosenProgram = "Back"
    } else if (programchosen == "Fornax") {
        loadExercises(Fornax)
        choosenProgram = "Fornax"
    } else if (programchosen == "Caroli") {
        loadExercises(Caroli)
        choosenProgram = "Cor Caroli"
    } else if (programchosen == "Mensa") {
        loadExercises(Mensa)
        choosenProgram = "Mensa"
    } else if (programchosen == "Delphinus") {
        loadExercises(Delphinus)
        choosenProgram = "Delphinus"
    } else if (programchosen == "Gemma") {
        loadExercises(Gemma)
        choosenProgram = "Gemma"
    }
    console.log(choosenProgram)
    return choosenProgram


};
let choosen = programTitle
console.log(choosen)

console.log("Pegasus")


function appendSingleExercises(exercises) {
    let HTMLtemplate = "";
    for (let exercise of exercises) {
        console.log(exercise.title)
        console.log(exercise.sets)
        HTMLtemplate += /*html*/ `

<div class="slide">
    <div class="caption">
        <img src = "${exercise.gif}" alt = "">
        <h1 id = "overskriftexercise" > ${exercise.title} </h1> 
        <p class = "sets" > ${exercise.sets} </p> 
    </div>
</div>
`
    }
    document.querySelector('#gifonexercise').innerHTML = HTMLtemplate;
    console.log(HTMLtemplate)
};
/*console.log(HTMLtemplate);
document.querySelector("#ovelser").innerHTML = `<h1 class="overskrift"></h1>` + HTMLtemplate */

/*
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

*/