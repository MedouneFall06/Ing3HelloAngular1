import { Component } from '@angular/core';
import {Classe} from "../../models";
import {ing3info} from "../../data";
import {RouterLink} from "@angular/router";
import {MenuComponent} from "../../fragments/menu/menu.component";
import {EnteteComponent} from "../../fragments/entete/entete.component";

@Component({
  selector: 'app-classes-details',
  standalone: true,
  imports: [
    RouterLink,
    MenuComponent,
    EnteteComponent
  ],
  templateUrl: './classes-details.component.html',
  styleUrl: './classes-details.component.scss'
})
export class ClassesDetailsComponent {
  classe:Classe=ing3info;

}
