import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ROOT_REDUCER } from './store/app.state';
import { FormsModule } from '@angular/forms';
import { PageoneComponent } from './components/pageone/pageone.component';
import { PagetwoComponent } from './components/pagetwo/pagetwo.component';
import { PagethreeComponent } from './components/pagethree/pagethree.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageoneComponent,
    PagetwoComponent,
    PagethreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(ROOT_REDUCER),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
