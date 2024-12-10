import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';
import { NgForm } from '@angular/forms';
import { Empleado } from '../../models/empleado';

declare var M:any;


@Component({
  selector: 'app-empleados',
  standalone: false,
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  providers: [EmpleadoService]
})
export class EmpleadosComponent implements OnInit {

  constructor (public empleadoService: EmpleadoService){}

  ngOnInit(): void {
    this.getEmpleados(); // Asegúrate de cargar los empleados al inicializar el componente 
    } 
    getEmpleados() { 
      this.empleadoService.getEmpleados().subscribe(res => { 
        this.empleadoService.empleados = res as Empleado[]; 
      });
    
  }

    agregarEmpleado(form?: NgForm) {
        this.empleadoService.postEmpleado(form?.value)
            .subscribe(res => {
                this.resetForm(form);
                M.toast({html: 'Guardado satisfactoriamente'});
            });
    }

    resetForm(form?: NgForm) { // Limpiar el formulario, recibe un formulario como parámetro
        if (form) {
            form.reset();
            this.empleadoService.selectedEmpleado = new Empleado();
        }
    }
}


