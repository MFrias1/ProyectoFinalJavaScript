
/*consultar el estado academico del estudiante 

/*Debo incluir promesas con fetch/, cargar datos desde JSON local. */

//Listado de materias con Array/objetos.
const planDeEstudio = [
    { materia: "Matemática para informática I ", año: "primer año", estado: "Consultar" }, { materia: "Organización de computadoras II", año: "primer año", estado: "Consultar" }, { materia: "Sistemas de comunicación ", año: "primer año", estado: "Consultar" }, { materia: "Inglés I", año: "primer año", estado: "Consultar" },
    { materia: "Introducción a lógica y problemas computacionales ", año: "primer año", estado: "Consultar" }, { materia: "Sistemas de comunicación", año: "primer año", estado: "Consultar" }, { materia: "Taller de intérpretes de comandos", año: "primer año", estado: "Consultar" },
    { materia: "Organización de computadoras I ", año: "primer año", estado: "Consultar" }
];

let contenedor = document.getElementById("contenedor");
let materias = document.getElementById("materias1");
let consultaNota = document.getElementById("consultaNota");


//DOM
planDeEstudio.forEach((item) => {

    let article = document.createElement("div");
    article.className = "articulos";
    article.innerHTML = `
            <p> Materia: ${item.materia} </p>
            <p> año: ${item.año}</p>
    `;
    materias.append(article);

    let div = document.createElement("button");
    div.className = "botton";
    div.innerText = `Estado: ${item.estado}`;

    materias.append(div);

    //VENTANA EMERGENTE, EVENTO
    div.addEventListener("click", () => {

        Swal.fire({
            title: 'Consulta tu estado académico',
            html: "<div><input id=primerNota> coloca tu nota de primer parcial </input> <input id=segundaNota> coloca tu nota de segundo parcial </input> </div>",
            confirmButtonColor: 'rgb(36, 36, 90);',
            confirmButtonText: 'Consultar',
        }).then((result) => {
            if (result.isConfirmed) {

                function notafinal() {
                    if ((primerNota.value == 0 && segundaNota.value == 0) || (primerNota.value < 4 && segundaNota.value < 4) || (primerNota.value <= 3 && segundaNota.value <= 10) || (primerNota.value <= 10 && segundaNota.value <4)) {
                        planDeEstudio.estado = "Reprobado";
                        localStorage.setItem("estado", JSON.stringify(planDeEstudio.estado)); // Guarda el estado en localStorage
                        Swal.fire(text = `No aprobaste, deberás recursar la materia el próximo cuatrimestre`) 
                        div.innerText = `Estado : ${planDeEstudio.estado}
                        `;

                    } else if ((((primerNota.value > 3) && (primerNota.value < 6)) && (segundaNota.value < 11 && segundaNota.value > 3)) || (primerNota.value == 4 && segundaNota.value == 4) || ((primerNota.value < 11 && primerNota.value > 3) && segundaNota.value == 4)) {
                        planDeEstudio.estado = "Regular";
                        Swal.fire(text = "Deberás rendir un examen final")
                        localStorage.setItem("estado", JSON.stringify(planDeEstudio.estado));  // Guarda el estado en localStorage
                        div.innerText=`Estado : ${planDeEstudio.estado} 
                        `;

                    } else if (primerNota.value >= 6 && segundaNota.value >= 6) {
                        planDeEstudio.estado = "Promocionado";
                        Swal.fire(text = "¡Felicidades! Promocionaste la materia")
                        localStorage.setItem("estado", JSON.stringify(planDeEstudio.estado));  // Guarda el estado en localStorage
                        div.innerText = `Estado : ${planDeEstudio.estado}`;

                    } else {
                        while ((primerNota.value != Number && segundaNota.value != Number) || (primerNota.value > 10 && segundaNota.value > 10)) {
                            Swal.fire(text = "Intentalo nuevamente")
                            notafinal()
                            break;
                        }
                    }
                    
                };
             notafinal();
            };
        })
                
        

    })
});