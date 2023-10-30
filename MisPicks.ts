interface Cagar{
    terminado:boolean,
    color:string
}

type cagar = Pick<Cagar,"terminado" | "color">

const cagar:cagar = {
    terminado: false,
    color:"Naranja"
}

console.log(cagar)
