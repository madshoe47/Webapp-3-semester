'use strict'

//Mads//
function loadExercises(programchosen) {

    programchosen.onSnapshot(function (snapshotData) {
        let exercises = [];
        snapshotData.forEach(function (doc) {
            let exercise = doc.data();
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

    return choosenProgram


};
let choosen = programTitle




function appendSingleExercises(exercises) {
    let HTMLtemplate = "";
    for (let exercise of exercises) {
        HTMLtemplate += /*html*/ `

        <!-- Slide image --> 
    <div class="sliderDiv">
        <img src = "${exercise.gif}" alt = "">
        <h1 id = "overskriftexercise" > ${exercise.title} </h1> 
        <p class = "sets" > ${exercise.sets} </p> 
    </div>

`
    }
    document.querySelector('.slideContainer').innerHTML = HTMLtemplate;
};



const slide = document.querySelector(".slideContainer");

function update() {
    var result = slide.style.transform = "translateX(-" + (100 * count) + "%)";

}

let count = 0;
let forwardButton = document.getElementById("forwardbutton");
let backButton = document.getElementById("backbutton");


forwardButton.onclick = function () {
    count++;
    update()

    if (count > 5) {
        location.href = '#complete'
        count = 0;
        showMenu()
    }
};

backButton.onclick = function () {
    count--;
    update()

    if (count < 0) {
        location.href = '#allprograms'
        showMenu()
    };
}