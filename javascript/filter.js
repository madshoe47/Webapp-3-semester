"use strict"

let list = ""
let minut = ""
let purpose = ""
let loca = ""

function filterside(side) {
    list = side
    console.log(list)
    navigateTo("filter")
}

function valFunk(value) {
    document.querySelector("#slival").innerHTML = value + " Minutter"

}

function locaKnap(loc) {
    if (loca.includes(loc)) {
        loca = ""
    }
    else {
        loca += loc + ' '
    }

    console.log(loca)


}

if (document.querySelector("#home").clicked == true) {

    let knapimg = document.querySelector('#homeblue')
    knapimg.style.display = "block"

    let ogknapimg = document.querySelector('#homeknap')
    ogknapimg.style.display = "none"

}



function locaKnapFarve() {
    let knapimg = document.querySelector('.homeblue')
    knapimg.style.display = "block"

    let ogknapimg = document.querySelector('.homeknap')
    ogknapimg.style.display = "none"
}

function purposeKnap(pur) {
    if (purpose.includes(pur)) {
        purpose = ""
    }
    else {
        purpose += pur + ' '
    }
    console.log(purpose)
}



function nulstil() {
    document.querySelector('#minSlider').value = 32.5;
    purpose = ""
    loca = ""

}





function updateFilter() {
    console.log(document.querySelector('#minSlider').value)
    goToPart(`${list}`)


}

