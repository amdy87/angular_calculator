import { Component } from '@angular/core';

@Component({
  selector: 'app-standard',
  imports: [],
  templateUrl: './standard.component.html',
  styleUrl: './standard.component.css'
})
export class StandardComponent {
  displayValue: string = '0';
  decimal:boolean = false;
  operator: string | null = null;


  clearDisplay(){
    this.displayValue = '0';
    this.decimal = false;
  }

  clearHistory(){}

  appendNumber(val: string){
    if(this.displayValue === '0'){ this.displayValue = val;
    }else{
    this.displayValue = this.displayValue + val;
    }
  }

  appendDecimal(){
    if(!this.decimal){
      this.displayValue = this.displayValue + '.';
      this.decimal = true;
    }
  }

  setOperator(operator: string){}

  evaluate(){}
}
