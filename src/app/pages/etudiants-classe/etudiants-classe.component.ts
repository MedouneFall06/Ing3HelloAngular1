import { Component } from '@angular/core';
import {EnteteComponent} from "../../fragments/entete/entete.component";

@Component({
  selector: 'app-etudiants-classe',
  standalone: true,
  imports: [
    EnteteComponent
  ],
  templateUrl: './etudiants-classe.component.html',
  styleUrl: './etudiants-classe.component.scss'
})
export class EtudiantsClasseComponent {

}
