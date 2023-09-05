import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadDigits, loadedDigits } from 'src/app/store/actions/cuadradosActions.actions';
import { AppState } from 'src/app/store/app.state';
import { digitsSelector } from 'src/app/store/selectors/cuadradosSelector.selector';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
    
  }

  
}
