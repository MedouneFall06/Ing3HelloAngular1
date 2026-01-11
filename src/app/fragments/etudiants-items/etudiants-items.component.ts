import {Component, Input} from '@angular/core';
import {Etudiant} from "../../models";

@Component({
  selector: 'etudiants-items',
  standalone: true,
  imports: [],
  templateUrl: './etudiants-items.component.html',
  styleUrl: './etudiants-items.component.scss'
})
export class EtudiantsItemsComponent {
  @Input()
  etudiant?:Etudiant;

  @Input()
  showDetails=true

}
