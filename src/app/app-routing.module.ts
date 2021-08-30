import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { SportsComponent } from './sports/sports.component';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';

const routes: Routes = [

  {path:'',component:TopheadingComponent},
  {path:'Tech',component:TechnewsComponent},
  {path:'Business',component:BusinessComponent},
  {path:'Sports',component:SportsComponent},
  {path:'Entertainment',component:EntertainmentComponent},
  {path:'**',component:TopheadingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
