"use strict"

function likeKnap() {
    console.log(valgteProgramer)
    let igang = []

    for (const program of valgteProgramer) {
        if (program.includes(programTitle)) {
            igang.push(program)
        }
        console.log(igang)
    }
    appendFarvorit(igang)
}

function appendFarvorit(igang) {

    let likedSide = document.querySelector("#liked")

    likedSide.innerHTML += igang

}
