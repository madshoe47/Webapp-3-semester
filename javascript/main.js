"use strict"




let programTitle = ""

// Jonathan //
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
        appendPrograms(programmer, current)



    });

}

function getPrograms(part) {
    var title = ""

    if (part == "abs") {
        loadPrograms(abs)
        title = "Abs"
    } else if (part == "legs") {
        loadPrograms(legs)
        title = "Legs"
    } else if (part == "as") {
        loadPrograms(as)
        title = "Arms & Shoulder"
    } else if (part == "back") {
        loadPrograms(back)
        title = "Back"
    } else if (part == "booty") {
        loadPrograms(booty)
        title = "Booty"
    } else if (part == "cardio") {
        loadPrograms(cardio)
        title = "Cardio"
    } else if (part == "chest") {
        loadPrograms(chest)
        title = "Chest"
    } else if (part == "yoga") {
        loadPrograms(yoga)
        title = "Yoga"
    }
    return title


};
let current = window.location.hash.replace(/#/g, '')
let title = getPrograms(current)


function goToPart(name) {
    current = name;
    getPrograms(name)
    navigateTo(name)
}

function appendPrograms(programs, part) {
    let HTMLtemplate = `<h1 class="overskrift">${title}</h1>`;
    for (const program of programs) {
        console.log(program)
        HTMLtemplate += /*html*/ `

       <a onclick="loadExer('${program.title}')" href="#ovleser" class="pro">

        <button class="noback_border" onClick="reply('${program.title}')">
             
            <article class="program">
            <div class="img_t_l">
                <img class="proIMG" src="${program.img}" alt="">
                <p class="time"><img src="img/Icon ionic-md-stopwatch.svg" alt="Stopwatch icon">: ${program.time} min</p>
                <p class="location"><img src="img/Icon material-location-on.svg" alt="Location icon">: ${program.location}</p>
            </div>
            <div>
                <h1 class="title">${program.title}</h1>
                <div class="purpose">
                    <p class="marginnul"> ${program.purpose}</p>
                </div>


                <p class="description">${program.description}</p>
            </div>
        </article>
    
   
            
    </button>
 </a>
        
        `
    }
    document.querySelector(`#${part}`).innerHTML += HTMLtemplate

}

function reply(clicked_title) {
    programTitle = clicked_title
    console.log(programTitle)
}



console.log(programTitle)

//øvelserne

// Maja //
function loadExer(part) {
    console.log(part)
    pegasus.onSnapshot(function (snapshotData) {
        let ovelser = [];
        snapshotData.forEach(function (doc) {
            let ovelse = doc.data();
            ovelse.id = doc.id;
            ovelser.push(ovelse);
        });
        console.log(ovelser)
        appendExercises(ovelser)

    });

}


// Jonathan //
function appendExercises(programs) {
    let HTMLtemplate = `<h1 class="overskrift"></h1>`;
    for (const ovelse of programs) {
        console.log(ovelse)
        
        HTMLtemplate += 
        /*html*/ `

       <a href="#ovleser" class="pro">

        <article class="exercise">
            <div class="exer">
                <div class="exerbrep">
                    <img class="proIMG" src="${ovelse.img}" alt="">
                    <div class="headrep">
                        <h1 class="marginnul">${ovelse.description}</h1>
                        <div class="reps">
                            <h4 class="marginnul">${ovelse.rep} reps</h4>
                            <img src="img/close.svg" alt="">
                            <h4 class="marginnul">${ovelse.sets} sets</h4>
                        </div>


                    </div>

                </div>

                <div><img src="img/skraldespand.svg" alt="">
                    <p class="marginnul">Delete</p>
                </div>

            </div>
            </div>


            <hr class="marginnul">
        </article>
    </button>
 </a>
 console.log(HTMLtemplate)
        
        `
    }
    document.querySelector('#ovelser').innerHTML += HTMLtemplate
}


