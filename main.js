
/*consultar el estado academico del estudiante */

//Listado de materias con Array/objetos.
const planDeEstudio = [
    { materia: "Matemática para informática I ", Año: "Primer año", Estado: "Consultar" }, { materia: "Organización de computadoras II", Año: "Primer año", Estado: "Consultar" }, { materia: "Sistemas de comunicación ", Año: "Primer año", Estado: "Consultar" }, { materia: "Inglés I", Año: "primer año", Estado: "Consultar" },
    { materia: "Introducción a lógica y problemas computacionales ", Año: "Primer año", Estado: "Consultar" }, { materia: "Taller de intérpretes de comandos", Año: "Primer año", Estado: "Consultar" },
    { materia: "Organización de computadoras I ", Año: "Primer año", Estado: "Consultar" }
];

let contenedor = document.getElementById("contenedor");
let materias = document.getElementById("materias1");
let consultaNota = document.getElementById("consultaNota");
let materiasAdicionales = document.getElementById("MateriaAdicionales");

//DOM
planDeEstudio.forEach((item) => {

    let article = document.createElement("div");
    article.className = "articulos";
    article.innerHTML = `
        <p> ${item.materia} </p>
        <p> Año: ${item.Año}</p>`;
    materias.append(article);

    let div = document.createElement("button");
    div.className = "botton";
    div.innerText = `Estado: ${item.Estado}`;
    materias.append(div);

    //VENTANA EMERGENTE, EVENTO
    div.addEventListener("click", () => {

        function consultarNota() {

            Swal.fire({
                title: 'Consulta tu estado académico',
                html: "<div class=inputs><div><input id=primerNota type='text' required><p>Nota del primer parcial</p></input></div> <div><input id=segundaNota type='text' required></input><p>Nota del segundo parcial</p></div> </div>",
                confirmButtonColor: 'rgb(36, 36, 90);',
                confirmButtonText: 'Consultar',
            }).then((result) => {

                if (result.isConfirmed) {
                    function notafinal() {
                        if ((((primerNota.value < 4) && (primerNota.value > 0)) && ((segundaNota.value < 4) && (segundaNota.value > 0))) || (((primerNota.value <= 3) && (primerNota.value > 0)) && ((segundaNota.value <= 10) && (segundaNota.value > 0))) || ((primerNota.value <= 10) && (primerNota.value > 0) && segundaNota.value < 4)) {
                            let estado = "Reprobado";
                            localStorage.setItem("estado", JSON.stringify(estado));// Guarda el estado en localStorage
                            Swal.fire(text = `No aprobaste, deberás recursar la materia el próximo cuatrimestre`)
                            div.innerText = `${estado}`;
                            div.className = "bottonClickReprobado";
                            article.className = "articulosClickReprobado";
                           
                        } else if ((((primerNota.value > 3) && (primerNota.value < 6)) && (segundaNota.value < 11 && segundaNota.value > 3)) || (primerNota.value == 4 && segundaNota.value == 4) || ((primerNota.value < 11 && primerNota.value > 3) && segundaNota.value == 4)) {
                            let estado = "Regular";
                            localStorage.setItem("estado", JSON.stringify(estado));
                            Swal.fire(text = "Deberás rendir un examen final")
                            div.innerText = `${estado}`;
                            article.className = "articulos";
                            div.className = "botton";

                        } else if (primerNota.value >= 6 && segundaNota.value >= 6) {
                            let estado = "Promocionado";
                            localStorage.setItem("estado", JSON.stringify(estado));
                            Swal.fire(text = "¡Felicidades! Promocionaste la materia")
                            div.innerText = `${estado}`;
                            article.className = "articulos";
                            div.className = "botton";

                        } else {
                            while ((primerNota.value != Number && segundaNota.value != Number) || (primerNota.value == 0 && segundaNota.value == 0) || (primerNota.value > 10 && segundaNota.value > 10)) {
                                Swal.fire({
                                    title: "Intentalo nuevamente",
                                    confirmButtonText: 'Ok',
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        consultarNota();
                                    }
                                })
                                break;
                            }
                        }
                    };
                    notafinal();
                };
            });
        };
        consultarNota();
    })
});

fetch("./document.json")
    .then((response) => response.json())
    .then((data) => {

        data.forEach((nombre) => {
            let dive = document.createElement('div')
            dive.className = "MateriasAdicionales";
            dive.innerHTML = `
            <p>${nombre.Materia}<p>`;
            materiasAdicionales.append(dive);
            function consultarEstado(){
                dive.addEventListener("click", () => {
                    Toastify({
                        text: "Para cursar estas materias deberás aprobar todas las materias del primer año",
                        duration: 3000,
                        style: {
                            background: "#000000",
                        }
                    }).showToast();
                });
            }
            consultarEstado();
        })
    });




