import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DataRand } from 'src/app/models/objects/dataRand';
import { DataRandMiddle } from 'src/app/models/objects/dataRandMiddle';
import { loadDigits, loadedDigits, loadedSeed, loadingRandomNumbers, loadingRandomNumbersMiddle, resetAction, resetActionProductos } from 'src/app/store/actions/cuadradosActions.actions';
import { AppState } from 'src/app/store/app.state';
import { digitsSelector, randomNumbers, randomNumbersmiddle, seedSelector } from 'src/app/store/selectors/cuadradosSelector.selector';

@Component({
  selector: 'app-pagethree',
  templateUrl: './pagethree.component.html',
  styleUrls: ['./pagethree.component.scss']
})
export class PagethreeComponent implements OnInit {

  data$:number = 0;
  seed:number;
  seed2:number;
  n:number;
  digits:Array<string> = new Array();
  randomNumber$: Array<DataRandMiddle> = new Array();
  constructor(private store:Store<AppState>) {
   }

  ngOnInit(): void {
    this.store.dispatch(loadDigits());
  }

  calcularNumerosRandom(){
    console.log(this.multiMethod(this.seed,this.seed2,this.n))
    this.store.dispatch(loadingRandomNumbersMiddle({list: this.multiMethod(this.seed,this.seed2,this.n)}))
    this.store.select(randomNumbersmiddle).subscribe((data)=>{
      this.randomNumber$ = data;
    })

    // this.store.dispatch(loadedDigits({digits: this.digitsCalc(this.seed)}))
    // this.store.select(digitsSelector).subscribe((data)=>{
    //   this.data$ = data
    // })
  }
  
  middleNumbers(number:number,digits:number){
      const isEven = digits % 2 == 0;
      let numberText = number.toString();
      let numberDigits = numberText.length;
      if (isEven != (numberDigits % 2 == 0)) {
        numberText = "0" + numberText;
        numberDigits = numberText.length
      }
      const digitdDifference = numberDigits - digits
      const arr = numberText.split("")
      let newArr = Array()
      for (let i = 0; i < digits; i++) {
        newArr.push(arr[digitdDifference/2+i]) 
      }
      const middle = newArr.join("")
      return parseInt(middle)
  }

  digitsCalc(number:number){
    let x =0;
    while (number > 10) {
      number = number / 10
      x++
    }
    x++
    return x
  }

  squareMethod(seed:number,quantity:number){
    let y =0;
    let x =seed;
    let randArray = Array()
    let arrayObject:Array<DataRand> = new Array()
    let digits = this.digitsCalc(seed)
    for (let i = 0; i < quantity; i++) {
      let num:DataRand = {index:i,random:0,seed:0,square:0};
      num.seed = x;
      y = x * x
      x = this.middleNumbers(y,digits)
      let r = x / Math.pow(10,digits)
      num.square = y;
      num.random = r;
      arrayObject.push(num)
      randArray.push(r)
    }
    return arrayObject
  }

  multiMethod(seed1:number, seed2:number, quantity:number){
    let y = 0;
    let x1 = seed1
    let x2 = seed2
    let arrayObject:Array<DataRandMiddle> = new Array()
    let randArray = Array()
    let digits = this.digitsCalc(seed1)
    for (let i = 0; i < quantity; i++) {
      let num:DataRandMiddle = {index:i,random:0,seed:0,seed2:0};
      num.seed = x1;
      num.seed2 = x2;
      y = x1 * x2
      x1=x2
      x2 = this.middleNumbers(y,digits)
      let r =x2 / Math.pow(10,digits)
      num.random = r;
      arrayObject.push(num)
      randArray.push(r)
    }
    return arrayObject;
  }

  reset(){
    this.seed = 0;
    this.data$ = 0;
    this.n = 0;
    this.seed2 = 0;
    this.store.dispatch(resetActionProductos({list: this.randomNumber$, n: this.n}))
  }


}
