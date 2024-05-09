//EXPLICITO
/*let miString: string = "abc";
let miNumber: number = 0;
let miBoolean: boolean = true;
console.log(miString);
console.log(miNumber);
console.log(miBoolean);
miString = "xyz";
miNumber = 1;
miBoolean = false;
console.log(miString);
console.log(miNumber);
console.log(miBoolean);*/
// UNION DE TIPOS
/*let miId: string | number;
miId = "abc";
miId = 101;
console.log(miId);*/
//ESPECIALES
/*let miNull = null;
miNull = null;
console.log(miNull);
let miUndefined: undefined;
console.log(miUndefined);
let miUnknown: unknown;
miUnknown = "abc";
miUnknown = 1;
miUnknown = false;
console.log(miUnknown);
let miAny: any;
miAny = "abc";
miAny = 1;
miAny = false;
console.log(miAny);*/
//ARREGLOS
/*let arrNumber1 = [0, 1, 2];
let arrNumber2: Array<number>;
let arrNumber3: number[];
let arrString1: Array<string>;
arrString1 = ["a", "b", "c"];
let arrString2: string[] = ["x", "y", "z"];
let arrAny: any[];
arrAny = ["abc", 123, true];
console.log(arrAny);*/
//INFERENCIA DE TIPO
/*let arr = ["abc", 123, true, [], {}, function name() {}];
arr = ['abc'];
arr = [1, 2, 5];*/
//TUPLAS
/*let miTupla: [string, number, boolean];
miTupla = ["pepita", 555, true];
console.log(miTupla);*/
//OBJETOS
/*let miObjeto: Object;
miObjeto = {};
console.log(miObjeto);
let objPersona1 = {};
objPersona1 = {
  nombre: "pepita",
  usuario: "pepita@bit.com",
  contrasenia: "abcde",
};
console.log(objPersona1);
let objPersona2: {
  nombre: string;
  hijos: number;
  casado?: boolean; //con el signo de interrogacion se entiende que esa casilla es opcional
  activo: boolean;
};
objPersona2 = {
  nombre: "Brandon",
  hijos: 5,
  casado: false,
  activo: true,
};
console.log(objPersona2);*/
// ENUMS es un gruipo de constantes
/*enum CodigosPermisos {
  Administrador,
  Profesor,
  Estudiante,
  Acudiente,
}
console.log(CodigosPermisos);
console.log(CodigosPermisos.Administrador);*/
//ALIAS se usa para identificar un tipo de dato
/*type NombreEstudiante = string;
type HijosEstudiante = number;
type ActivoEstudiante = boolean;

type Estudiante = {
  nombre: NombreEstudiante;
  hijos: HijosEstudiante;
  activo: ActivoEstudiante;
};

let miEstudiante: Estudiante;
miEstudiante = {
  nombre: "Juanito",
  hijos: 0,
  activo: true,
};*/
//INTERFACES solamente se aplican a objetos
/*interface Profesor {
  id: number;
  nombre: string;
  curso: string;
  activo: boolean;
}
let miProfesor: Profesor;
miProfesor = {
  id: 1,
  nombre: "Jirafales",
  curso: "basico1",
  activo: true,
};*/
//FUNCIONES
/*function miFuncion1() {
    console.log("soy una funcion 1");
}
miFuncion1 ();

const miFuncion2 = () => {
    console.log("soy funcion 2");
}
retornado = miFuncion2();
console.log(retornado); */
/*function miFuncion(nombre: string = "desconocido"): string {
  return "hola, $(nombre)";
}
let retornado;
retornado = miFuncion();
console.log(retornado);
retornado = miFuncion("pepita");
console.log(retornado);*/
