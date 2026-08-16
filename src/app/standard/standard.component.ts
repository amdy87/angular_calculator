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
  firstValue: string | null = null;
  secondValue: string | null = null;
  operators: string[] = ['-','+','*','/'];
  displayClear: boolean = true;
  answer: number = 0;


  clearDisplay(){
    this.displayValue = '0';
    this.displayClear = true;
  }

  clearHistory(){
    this.displayValue = '0';
    this.displayClear = true;
    this.answer = 0;
    this.firstValue = null;
    this.secondValue = null;
    this.operator = null;
  }

  appendNumber(val: string){
    if(this.operator == null && this.operators.includes(this.displayValue)){
      this.operator = this.displayValue;
      this.displayClear = true;
    }

    if(this.displayClear){
      this.displayValue = val;
      this.displayClear = false;
    } else{
    this.displayValue += val;
    }
  }

  appendDecimal(){
  }

  setOperator(operator: string){
    if(this.operator != null){
      return;
    }
    if(this.firstValue == null){
      this.firstValue = this.displayValue;
      this.displayClear = true;
    }
    if(this.displayClear){
      this.displayValue = operator
    }
  }

  evaluate(){
    if(this.firstValue == null || this.operator == null){
      return;
    }
    this.secondValue = this.displayValue;
    if(this.operator == '+'){
      this.answer = parseFloat(this.firstValue) + parseFloat(this.secondValue);
      this.displayValue = this.answer.toString();
      this.displayClear = true;
      this.operator = null;
      this.firstValue = null;
    }else if(this.operator == '-'){
      this.answer = parseFloat(this.firstValue) - parseFloat(this.secondValue);
      this.displayValue = this.answer.toString();
      this.displayClear = true;
      this.operator = null;
      this.firstValue = null;
    }else if(this.operator == '/'){
      let div = parseFloat(this.secondValue);
      if(div == 0){
        this.answer = NaN;
      }else{
      this.answer = parseFloat(this.firstValue) / div;
      }
      this.displayValue = this.answer.toString();
      this.displayClear = true;
      this.operator = null;
      this.firstValue = null;
    }else if(this.operator == '*'){
      this.answer = parseFloat(this.firstValue) * parseFloat(this.secondValue);
      this.displayValue = this.answer.toString();
      this.displayClear = true;
      this.operator = null;
      this.firstValue = null;
    }
  }
}
