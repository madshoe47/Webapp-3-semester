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

        <!-- Slide image --> 
    <div class="sliderDiv">
        <img src = "${exercise.gif}" alt = "">
        <h1 id = "overskriftexercise" > ${exercise.title} </h1> 
        <p class = "sets" > ${exercise.sets} </p> 
    </div>

`
    }
    document.querySelector('.slideContainer').innerHTML = HTMLtemplate;
    console.log(HTMLtemplate)
};



const slide = document.querySelector(".slideContainer");

function update() {
    var result = slide.style.transform = "translateX(-" + (100 * count) + "%)";
    console.log(slide.style.transform)
    console.log(result)

}

let count = 0;
let forwardButton = document.getElementById("forwardbutton");
let backButton = document.getElementById("backbutton");


forwardButton.onclick = function () {
    count++;
    console.log(count)
    update()

    if (count > 5) {
        location.href = '#complete'
        showMenu()
    }
};

backButton.onclick = function () {
    count--;
    console.log(count)
    update()

    if (count < 0) {
        location.href = '#allprograms'
        showMenu()
    };
}