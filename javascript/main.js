"use strict"

const _db = firebase.firestore();
const abs = _db.collection("Abs");
const legs = _db.collection("Legs");
const as = _db.collection("Arms & Shoulder");
const back = _db.collection("Back");
const booty = _db.collection("Booty");
const cardio = _db.collection("Cardio");
const chest = _db.collection("Chest");
const yoga = _db.collection("Yoga");




// ========== READ ==========
// watch the database ref for changes
function loadPrograms(part) {
    part.onSnapshot(function (snapshotData) {
        let programmer = [];
        snapshotData.forEach(function (doc) {
            let program = doc.data();
            program.id = doc.id;
            programmer.push(program);
        });
        console.log(programmer)
        appendPrograms(programmer, part)

    });
}

function getPrograms(part) {
    if (part == "abs") {
        loadPrograms(abs)
    } else if (part == "legs") {
        loadPrograms(legs)
    } else if (part == "Arms & Shoulder") {
        loadPrograms(Arms & Shoulder)
    } else if (part == "back") {
        loadPrograms(back)
    } else if (part == "booty") {
        loadPrograms(booty)
    } else if (part == "cardio") {
        loadPrograms(cardio)
    } else if (part == "chest") {
        loadPrograms(chest)
    } else if (part == "yoga") {
        loadPrograms(yoga)
    }
};


let current = window.location.hash.replace(/#/g, '')
getPrograms(current)


function appendPrograms(programs, part) {
    let HTMLtemplate = `"<h1 class="overskrift">${part}</h1>"`;
    for (const program of programs) {
        console.log(program)
        HTMLtemplate += /*html*/ `
         
        <article class="program">
            <div class="img_t_l">
                <img class="proIMG" src="${program.img}" alt="">
                <p class="time"><img src="img/Icon ionic-md-stopwatch.svg" alt="Stopwatch icon">:${program.time}</p>
                <p class="location"><img src="img/Icon material-location-on.svg" alt="Location icon">:${program.location}</p>
            </div>
            <div>
                <h1 class="title">${program.title}</h1>
                <div class="purpose">
                    <p class="marginnul"> ${program.purpose}</p>
                </div>


                <p class="description">${program.description}</p>
            </div>
        </article>
        `
    }
    document.querySelector("#abs").innerHTML = HTMLtemplate

}