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


  //clears the display line 
  clearDisplay(){
    this.displayValue = '0';
    this.displayClear = true;
    this.decimal = false;
  }

  //clears the display line, first value, operator and second value
  clearHistory(){
    this.displayValue = '0';
    this.displayClear = true;
    this.answer = 0;
    this.firstValue = null;
    this.secondValue = null;
    this.operator = null;
    this.decimal = false;
  }

  //appends a number to the display line
  appendNumber(val: string){
    //checks if the operator needs to be set from the display line
    if(this.operator == null && this.operators.includes(this.displayValue)){
      this.operator = this.displayValue;
      this.displayClear = true;
    }

    //updates the display line with the number being typed
    if(this.displayClear){
      this.displayValue = val;
      this.displayClear = false;
    } else{
    this.displayValue += val;
    }
  }

  //appends the decimal to the number
  appendDecimal(){
    if(this.operators.includes(this.displayValue)) return;

    if(this.displayClear){
      this.displayClear = false;
    }

    if(!this.decimal){
      this.displayValue += '.';
      this.decimal = true;
    }
  }

  //set the operator into the display line
  setOperator(operator: string){
    if(this.operator != null){
      return;
    }
    if(this.firstValue == null){
      this.firstValue = this.displayValue;
      this.decimal = false;
      this.displayClear = true;
    }
    if(this.displayClear){
      this.displayValue = operator
    }
  }


  //executes when the equals button is pressed
  evaluate(){
    //does nothing if a valid equation can not be built
    if(this.firstValue == null || this.operator == null){
      return;
    }

    //sets the second value with the display if a valid equation can be built
    this.secondValue = this.displayValue;

    //checks what operator was passed and evaluates the right equation on the first value and second value
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
