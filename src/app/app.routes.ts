import { Routes } from '@angular/router';
import {ClassesAddComponent} from "./pages/classes-add/classes-add.component";
import {AccueilComponent} from "./pages/accueil/accueil.component";
import {ClassesListComponent} from "./pages/classes-list/classes-list.component";
import {Error404Component} from "./pages/error404/error404.component";
import {ClassesDetailsComponent} from "./pages/classes-details/classes-details.component";

export const routes: Routes = [
  {path:"", component:ClassesDetailsComponent},
  {path:"classes", component:ClassesListComponent},
  {path:"classes/ajout", component:ClassesAddComponent},
  {path:"accueil",component:AccueilComponent},
  {path:"**", component:Error404Component}
];
