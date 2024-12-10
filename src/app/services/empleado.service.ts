import { HttpClient } from '@angular/common/http';
import { Injectable } from  '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  selectedEmpleado: Empleado;
  empleados:Empleado[];
  readonly URL_API = "https://desplieguebd.vercel.app/api/empleados";



  constructor(private http: HttpClient) {
    this.selectedEmpleado = new Empleado();
    this.empleados= [];
   }

   getEmpleados(){
    return this.http.get(this.URL_API);
   }

   postEmpleado(Empleado:Empleado){
    return this.http.post(this.URL_API, Empleado);
   }

   putEmpleado(Empleado: Empleado){
    return this.http.put(this.URL_API + `/${Empleado._id}`, Empleado);
   }

   deleteEmpleado(_id:string){
    return this.http.delete(this.URL_API + `/${_id}`);

   }
}
