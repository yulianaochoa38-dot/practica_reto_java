const estudiantes = [
    { id: 1, nombre: 'Ana', edad: 20 },
    { id: 2, nombre: 'Juan', edad: 22 },
    { id: 3, nombre: 'María', edad: 21 },
];

function obtenerEstudiantePorId(id) {
    return new Promise((resolve, reject) => {
        const estudianteEncontrado = estudiantes.find(est => est.id === id);
        if (estudianteEncontrado) {
            resolve(estudianteEncontrado);
        } else {
            reject(`Error: No existe un estudiante con el ID ${id}.`);
        }
    });
}

console.log("Búsqueda del estudiante con ID 2");
obtenerEstudiantePorId(2)
    .then((estudiante) => {
        console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}\n`);
    })
    .catch((error) => {
        console.log(error);
    });

console.log("Búsqueda del estudiante con ID 1");
obtenerEstudiantePorId(1)
    .then((estudiante) => {
        console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}\n`);
    })
    .catch((error) => {
        console.log(error);
    });

console.log("Búsqueda del estudiante con ID 10");
obtenerEstudiantePorId(10)
    .then((estudiante) => {
        console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}\n`);
    })
    .catch((error) => {
        console.log(error);
    });

document.getElementById("btnBuscar").addEventListener("click", () => {
    const idIngresado = parseInt(document.getElementById("inputId").value);
    const resultadoDiv = document.getElementById("resultado");

    if (isNaN(idIngresado)) {
        resultadoDiv.textContent = "Por favor, ingresa un ID válido.";
        return;
    }

    obtenerEstudiantePorId(idIngresado)
        .then((estudiante) => {
            resultadoDiv.textContent = `Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`;
        })
        .catch((error) => {
            resultadoDiv.textContent = error;
        });
});