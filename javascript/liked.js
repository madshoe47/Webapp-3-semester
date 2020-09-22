"use strict"
//jonathan //
function likeKnap() {
    let igang = []

    for (const program of valgteProgramer) {
        if (program.includes(programTitle)) {
            igang.push(program)
        }
    }
    appendFarvorit(igang)
    hearts()

}


function appendFarvorit(igang) {

    let likedSide = document.querySelector("#liked")

    likedSide.innerHTML += igang

}

function hearts() {

    let tomthjerte = document.querySelector("#tomthjerte")

    let fullheart = document.querySelector("#fullheart")

    tomthjerte.style.display = "none";
    fullheart.style.display = "inline";

}
