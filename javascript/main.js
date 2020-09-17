"use strict"




let programTitle = ""

// Jonathan //
// ========== READ ==========
// watch the database ref for changes
function loadPrograms(part) {
    let slidervalu = document.querySelector('#minSlider').value
    let time = Number(slidervalu)
    part.where("time", "<", time).onSnapshot(function (snapshotData) {
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


//Mads//
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

//Jonathan//
let current = window.location.hash.replace(/#/g, '')
let title = getPrograms(current)


function goToPart(name) {
    current = name;
    getPrograms(name)
    navigateTo(name)
}

function appendPrograms(programs, part) {
    let HTMLtemplate = "";
    for (const program of programs) {
        console.log(program)
        HTMLtemplate += /*html*/ `

       <a onclick="getExer('${program.title}')" href="#ovleser" class="pro">

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
    document.querySelector(`#${part}`).innerHTML = `<button onClick="filterside('${part}')" class="noback_border filter"><img src="img/filter.svg" alt=""></button>` + `<h1 class="overskrift">${title}</h1>` + HTMLtemplate

}

function reply(clicked_title) {
    programTitle = clicked_title
    console.log(programTitle)
}


//øvelserne

// Maja //
function loadExer(program) {
    console.log(program)
    program.onSnapshot(function (snapshotData) {
        let ovelser = [];
        snapshotData.forEach(function (doc) {
            let ovelse = doc.data();
            ovelse.id = doc.id;
            ovelser.push(ovelse);
        });
        console.log(ovelser)
        appendExercises(ovelser)
        navigateTo('ovelser')

    });

}

//Mads//
function getExer(program) {
    var titleProgram = ""

    if (program == "Pegasus") {
        loadExer(Pegasus)
        titleProgram = "Pegasus"
    } else if (program == "Gemini") {
        loadExer(Gemini)
        titleProgram = "Gemini"
    } else if (program == "Hercules") {
        loadExer(Hercules)
        titleProgram = "Hercules"
    } else if (program == "back") {
        loadExer(back)
        titleProgram = "Back"
    } else if (program == "Fornax") {
        loadExer(Fornax)
        titleProgram = "Fornax"
    } else if (program == "Caroli") {
        loadExer(Caroli)
        titleProgram = "Cor Caroli"
    } else if (program == "Mensa") {
        loadExer(Mensa)
        titleProgram = "Mensa"
    } else if (program == "Delphinus") {
        loadExer(Delphinus)
        titleProgram = "Delphinus"
    } else if (program == "Gemma") {
        loadExer(Gemma)
        titleProgram = "Gemma"
    }
    return titleProgram

};
let recent = window.location.hash.replace(/#/g, '')
let titleProgram = getExer(recent)
console.log()


// Jonathan //
function appendExercises(programs) {
    let HTMLtemplate = "";
    for (const ovelse of programs) {
        console.log(ovelse)

        HTMLtemplate +=
            /*html*/
            `

       <a href="#ovleser" class="pro">

        <article class="exercise">
            <div class="exer">
                <div class="exerbrep">
                    <img class="proIMG" src="${ovelse.gif}" alt="">
                    <div class="headrep">
                        <h1 class="marginnul">${ovelse.title}</h1>
                        <div class="reps">
                            <h4 class="marginnul">${ovelse.sets}</h4>
                        </div>


                    </div>

                </div>

                <div><img src="img/skraldespand.svg" alt="">
                    <p class="marginnul">Delete</p>
                </div>

            </div>
            </div>


            <hr >
        </article>
    </button>
 </a>   
`

    };
    console.log(HTMLtemplate);
    document.querySelector("#ovelser").innerHTML = `<h1 class="overskrift"></h1>` + HTMLtemplate + `<button class="noback_border bigbutton startKnap" onClick="location.href='#exercise'; hideMenu()">Start</button>`

}

function hideMenu() {
    let menu = document.querySelector('#menuvis');
    let startknap = document.querySelector('.startKnap');

    if (startknap.clicked = true) {
        menu.style.display = 'none'
    }
}

function showMenu() {
    let menu = document.querySelector('#menuvis');
    let closesign = document.querySelector('.close-sign');
    console.log(menu)

    if (closesign.clicked = true) {
        menu.style.display = 'block'
    }

}