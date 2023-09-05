import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PageoneComponent } from './components/pageone/pageone.component';
import { PagethreeComponent } from './components/pagethree/pagethree.component';
import { PagetwoComponent } from './components/pagetwo/pagetwo.component';

const routes: Routes = [
  {path: 'productosMedios', component: PagetwoComponent},
  {path: 'algoritmoLineal', component: PagethreeComponent},
  {path: 'cuadradosMedios', component: PageoneComponent},
  {path: '', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
