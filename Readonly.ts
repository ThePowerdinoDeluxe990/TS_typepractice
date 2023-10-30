interface Persona  {
  nombre:string
  edad:number

}

const Pepita:Readonly <Persona> ={
  nombre:"Pepita",
  edad: 12
}

console.log(Pepita)

