 //basicos
 let numero:number=40; //int
 let apellido:string ="hola";//string
 let boleano:boolean=true;
 //array

 let arrnumber:number[] =[1,3,4,6,2,3,5,8,9,10];
 let arreglonumber2: Array<number>=[2,4,5,6,7,3,3,2,1,9];// en ambos casos es lo mismo
 let str: string[]=["hola","el","que","lea","esto","es",":","gay"];
 let arrstr: Array<string> = ["mi","name","is","elmo"];//se deben respetar las mayusculas
 let arreglo =[3,"hola",true];
 let arrany: any[] =[8,"api",false];
 let arrany2:  Array<any> =["esto","es","un","array",3,false];
 // Tuples
 let tuplaPayer: [string,number,boolean] = ["rosa",4,false];// en esta tupla se rellena con los datos que se declararon al principio
 //tupla array
let player:[number,string][];
player =[
    [1,"elmo"],
    [2,"rodolfo"],
    [3,"raul"],
    [4,"MICHI"],
    [5,"war"],

]