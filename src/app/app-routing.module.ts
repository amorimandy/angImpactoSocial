import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MulheresComponent } from './mulheres/mulheres.component';
import { RodapeComponent } from './rodape/rodape.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {path: "home", component: HomeComponent},
  {path: "rodape", component: RodapeComponent},
  {path: "mulheres", component: MulheresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
