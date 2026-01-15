import { Component } from '@angular/core';
import {EnteteComponent} from "../../fragments/entete/entete.component";

@Component({
  selector: 'app-etudiant-ajout',
  standalone: true,
  imports: [
    EnteteComponent
  ],
  templateUrl: './etudiant-ajout.component.html',
  styleUrl: './etudiant-ajout.component.scss'
})
export class EtudiantAjoutComponent {

}
