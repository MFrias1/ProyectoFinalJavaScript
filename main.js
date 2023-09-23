
/*consultar el estado academico del estudiante 

/*Debo incluir métodos/, 
promesas con fetch, cargar datos desde JSON local. */

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

    //VENTANA EMERGENTE

    div.addEventListener("click", () => {
        Swal.fire({
            title: 'Consulta tu estado académico',
            text: 'ingresa la note de tu primer parcial',
            html: "<div> <input id=primerNota>  coloca tu nota de primer parcial </input> <input id=segundaNota>  coloca tu nota de segundo parcial </input> </div>",
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Consultar',
        }).then((result) => {
            if (result.isConfirmed) {
                function notafinal() {
                    if ((primerNota.value == 0 && segundaNota.value == 0) || (primerNota.value < 4 && segundaNota.value < 4)) {
                        Swal.fire(text = "No aprobaste, deberás recursar la materia el próximo cuatrimestre")
                    } else if ((((primerNota.value > 3) && (primerNota.value < 6)) && (segundaNota.value < 11 && segundaNota.value > 3)) || (primerNota.value == 4 && segundaNota.value == 4) || ((primerNota.value < 11 && primerNota.value > 3) && segundaNota.value == 4)) {
                        Swal.fire(text = "Deberás rendir un examen final")
                    } else if (primerNota.value >= 6 && segundaNota.value >= 6) {
                        Swal.fire(text = "¡Felicidades! Promocionaste la materia")
                    } else {
                        while ((primerNota.value != Number && segundaNota.value != Number) || (primerNota.value > 10 && segundaNota.value > 10)) {
                            Swal.fire(text = "Intentalo nuevamente")
                            notafinal()
                            break;
                        }
                    }
                };
                notafinal()
            };
        })
    })
});


/*const ventanaEmergente = document.createElement("div");
ventanaEmergente.className = "Ventana-enemergente";
ventanaEmergente.innerHTML = `
    
    <div>
            <input id=primerNota>  coloca tu nota de primer parcial </input>
    </div>
    <div>
            <input id=segundaNota>  coloca tu nota de segundo parcial </input>
    </div>
    
`;
contenedor.append(ventanaEmergente);
 
//BOTON CONSULTAR NOTA
const input = document.createElement("div");
input.innerHTML = `<button id="consultaNota">Consultar Nota</button>`;
input.className = "botonConsultaNota"
 
ventanaEmergente.append(input);
 
// BOTON CERRAR VENTANA
const ventanaEmergenteBoton = document.createElement("h1");
ventanaEmergenteBoton.innerHTML = `<div>X</div>`;
ventanaEmergenteBoton.className = "Ventana-emergente-boton";
 
ventanaEmergente.append(ventanaEmergenteBoton);
//evento para cerrar ventana emergente
ventanaEmergenteBoton.addEventListener("click", () => {
    ventanaEmergente.style.display = "none";
});
 
let ventanaemergentee = [];*/

/* input.addEventListener("click", () => {
     ventanaemergentee.push({
         materias: item.materia,
     });
     ventanaemergentee.forEach((materiass) => {

         const ventanaEmergente2 = document.createElement("div")
         ventanaEmergente2.className = "Ventana-enemergente";
         ventanaEmergente2.innerHTML = `
             <p> ${materiass.materias} </p>
         `;
         ventanaEmergente.append(ventanaEmergente2)

         const ventanaEmergente3 = document.createElement("p")
         ventanaEmergente3.className = "EstadoActual";
         notafinal();

         function notafinal() {
             if ((primerNota.value == 0 && segundaNota.value == 0) || (primerNota.value < 4 && segundaNota.value < 4)) {
                 ventanaEmergente3.innerText = "No aprobaste, deberás recursar la materia el próximo cuatrimestre";
             } else if ((((primerNota.value > 3) && (primerNota.value < 6)) && (segundaNota.value < 11 && segundaNota.value > 3)) || (primerNota.value == 4 && segundaNota.value == 4) || ((primerNota.value < 11 && primerNota.value > 3) && segundaNota.value == 4)) {
                 ventanaEmergente3.innerText = "Deberás rendir un examen final";
             } else if (primerNota.value >= 6 && segundaNota.value >= 6) {
                 ventanaEmergente3.innerText = "¡Felicidades! Promocionaste la materia";
             } else {
                 while ((primerNota.value != Number && segundaNota.value != Number) || (primerNota.value > 10 && segundaNota.value > 10)) {
                     ventanaEmergente3.innerText = "Intentalo nuevamente";
                     notafinal()
                     break;
                 }
             }

         };

         ventanaEmergente2.append(ventanaEmergente3);

         const BotonEliminacion = document.createElement("h1");
         BotonEliminacion.innerHTML = `<div>X</div>`;
         BotonEliminacion.className = "Ventana-emergente-boton";

         ventanaEmergente2.append(BotonEliminacion);

         BotonEliminacion.addEventListener("click", () => {
             ventanaEmergente2.style.display = "none";
         });


     });
 });


});


});*/
