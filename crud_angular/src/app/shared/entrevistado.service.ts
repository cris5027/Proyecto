import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { entrevistadoModel } from './entrevistado.model';

@Injectable({
  providedIn: 'root'
})
export class EntrevistadoService {
  
  base_url= 'http://localhost:3000'

  constructor (private http: HttpClient) {}

  obtenerEntrevistados(){
    return this.http.get<entrevistadoModel[]>(this.base_url+'/entrevistados');
  }

  obtenerEntrevistado(id: string){
    return this.http.get<entrevistadoModel[]>('${this.base_url}/entrevistado/${id}');

  }
  agregarentrevistado(entrevistado: entrevistadoModel){
    return this.http.post<string>('${this.base_url}/entrevistados/agregar', entrevistado);
  }
  actualizarentrevistado(entrevistado: entrevistadoModel){
    return this.http.post<string>('${this.base_url}/entrevistados/actualizar/${id entrevistado}',entrevistado);
  }

  borrarentrevistado(id: string){
    return this.http.delete<string>('${this.base_url}/entrevistado/borrar/${id2}');
  }
}
