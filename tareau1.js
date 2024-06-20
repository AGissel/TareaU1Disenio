// 1. Dado el siguiente listado de objetos:
// const libros = [ { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año:
// 1967 }, { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", año: 1605 }, {
// titulo: "1984", autor: "George Orwell", año: 1949 } ]
// Genere una lista que contenga solo los autores de dicha lista en una variable
// llamada: autores.

const libros = [
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967 },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", año: 1605 },
    { titulo: "1984", autor: "George Orwell", año: 1949 }
];

let autores = [];
for (let libro of libros) {
    autores.push(libro.autor);
}
console.log(autores);

// 2. Dado el siguiente objeto:
// const empleado = { nombre: "Juan", salario: 10000, antiguedad: 6 };
// Modifique el valor del salario, siempre y cuando la antigüedad sea mayor a 5 años, el
// aumento será del 10%. Imprima los nuevos valores.

const empleado = { nombre: "Juan", salario: 10000, antiguedad: 6 };

if (empleado.antiguedad > 5) {
    empleado.salario *= 1.10;
}

console.log(`Nombre: ${empleado.nombre}, Salario: ${empleado.salario}, Antigüedad: ${empleado.antiguedad}`);

// 3. Dado el siguiente listado:
// const numeros = [5, 8, 12, 3, 7, 19, 1, 10, 2]
// imprima el número mayor de la lista (sin ordenarla)

const numeros = [5, 8, 12, 3, 7, 19, 1, 10, 2];

const numeroMayor = Math.max(...numeros);
console.log(numeroMayor);

// 4. Con el listado anterior, calcule el promedio de todos los números impares
let impares = [];
for (let numero of numeros) {
    if (numero % 2 !== 0) {
        impares.push(numero);
    }
}
let sumaImpares = 0;
for (let numero of impares) {
    sumaImpares += numero;
}
const promedioImpares = sumaImpares / impares.length;

console.log(promedioImpares);

// 5. Dado el siguiente objeto:
// const persona = { nombre: "Ana", edad: 25, ciudad: "SPS" };
// Desestructure el objeto para extraer los valores en 3 variables diferentes y mostrarlas
// en consola.

const persona = { nombre: "Ana", edad: 25, ciudad: "SPS" };
const { nombre: nombrePersona, edad: edadPersona, ciudad } = persona;

console.log(`Nombre: ${nombrePersona}, Edad: ${edadPersona}, Ciudad: ${ciudad}`);
