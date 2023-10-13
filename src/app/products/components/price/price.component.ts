import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price-page',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnChanges, OnInit, OnDestroy {
  
  constructor(){
    
  
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente Hijo: ngOnChanges')
    this.interval$ = interval(1000).subscribe(value => console.log(`Tick: ${value}`))
  }
  ngOnInit(): void {
    console.log('Componente Hijo: ngOnInit')
  }
  ngOnDestroy(): void {
    console.log('Componente Hijo: ngOnDestroy')
    this.interval$?.unsubscribe();
  }


  @Input()
  public price:number = 0;
  public interval$?: Subscription //! EL SIMBOLO DE DOLAR ES PARA HACER REFERENCIA A QUE ES UN OBSERVABLE

  
}
