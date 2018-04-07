export class lugar{
    id:number;
    nombre:string;
    descripcion:string;
    zona:number;
    ciudad:number;
    latitud:number;
    longitud:number;
    constructor( id,nombre,descripcion,zona,ciudad,latitud,longitud){
        this.id=id;
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.zona=zona;
        this.ciudad=ciudad;
        this.latitud=latitud;
        this.longitud=longitud;
    }
}