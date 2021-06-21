import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: 'nova-transferencia.component.html',
  styleUrls: ['nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {


  valor: number = 12; /* Iniciar com valor quando for numerico ou adicionar o !*/
  destino: number = 123; /* Iniciar com valor quando for numerico ou adicionar o !*/

  transferir() {
    console.log('Solicitada nova transferencia');
    console.log('Valor: ' + this.valor );
    console.log('Destino: ' + this.destino);
  }
}
