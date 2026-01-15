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

  @Input()
  labelStyle={
    color:'#11a711',
    fontWeight:600,
    fontSize:16,
    textDecoration:'underline'
  };

  @Input()
  valueStyle={
    color:'#626161',
    fontWeight: 600,
    fontSize:16,
  };

  estMajeur(){
    if(this.etudiant && this.etudiant.age !== undefined){
      return this.etudiant.age >= 18;
    }
    return false;
  }
}
