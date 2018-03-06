interface FullName {
    nombre: string;
    apellidos: string;
}

class FullNameCl {
    constructor (public nombre: string,
                public apellidos: string) {}
}

class User {

/*  public nombre: string;
    private apellidos: string;
    private edad: number;
    private genero: any;

    constructor  (nombre, apellidos, edad, genero) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.genero = genero;
        // ++User.prototype.numUsers;
    } */

    // Forma guay de hacer constructores en TS
    constructor  (public fullName: FullName,
                public fullNameCl: FullNameCl,
                private edad: number,
                private genero: string) {}

        saludar () {
            console.log (` Hola, soy ${this.fullName.nombre} ya somos muchos`);
        }
}

// prpiedad static
// User.prototype.numUsers = 0

/* class Alumno extends User {
    curso;
    constructor(nombre, apellidos, edad, genero, curso) {
        super(nombre, apellidos, edad, genero);
        this.curso = curso;
    }

    saludar () {
        console.log (` Hola, soy ${this.nombre} ya somos muchos`);
    }
} */

let oUser1 = new User( {nombre: 'Juan', apellidos: 'Lopez'}, {nombre: 'Juan', apellidos: 'Lopez'}, 33, 'H');

// oUser1.pais = 'Francia';    // Error de mentira: no va a dar error al ejecutar.

oUser1.saludar();
console.log(oUser1);

/*
oAlumno1 = new Alumno ("Felipe", "Martinez", 33, "H", "Angular")
oAlumno1.notas = [9, 8, 10]
oAlumno1.saludar()
console.log(oAlumno1)

oAlumno2 = new Alumno ("Luis", "Gomez", 33, "H", "Angular")
console.log(oAlumno2) */
