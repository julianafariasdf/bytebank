
import { Component, EventEmitter, Output } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';


@Component({
  selector: 'app-nova-transferencia',
  templateUrl: 'nova-transferencia.component.html',
  styleUrls: ['nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 12; /* Iniciar com valor quando for numerico ou adicionar o !*/
  destino: number = 123; /* Iniciar com valor quando for numerico ou adicionar o !*/

  constructor(private service: TransferenciaService){}


  transferir() {
    console.log('Solicitada nova transferencia');

    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};

    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
    },
    (error) => console.error(error)
    );

  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
