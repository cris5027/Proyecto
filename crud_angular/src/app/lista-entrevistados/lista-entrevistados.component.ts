import { Component, OnInit } from '@angular/core';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { entrevistadoModel } from '../shared/entrevistado.model';
import { EntrevistadoService } from '../shared/entrevistado.service';

@Component({
  selector: 'app-lista-entrevistados',
  standalone: true,
  imports: [],
  templateUrl: './lista-entrevistados.component.html',
  styleUrl: './lista-entrevistados.component.css'
})
export class ListaEntrevistadosComponent implements OnInit {

    entrevitados: observable<entrevistadoModel[]> | undefined

    constructor(private entrevistadoService: EntrevistadoService){
      
      ngOnInit () {
        this.entrevitados = this.entrevistadoService.obtenerEntrevistados();
      }
      borrarentrevistado(id: string){
        this,entrevistadoService.borrarentrevistado(id).subscribe(data =>{
          console.log(data)
        })

        this.entrevitados = entrevistadoService.obtenerEntrevistados()
      }
    }

  }

}
