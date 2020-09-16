"use strict"

let list = ""
let minut = ""
let purpose = ""
let loca = ""




function filterside(side) {
    list = side
    navigateTo("filter")
    console.log(side)
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
    let sliderval = document.querySelector('#minSlider').value;
    minut = sliderval;


    navigateTo(`'${list}'`)


}

