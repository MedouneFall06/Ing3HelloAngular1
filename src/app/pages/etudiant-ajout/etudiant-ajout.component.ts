import { Component } from '@angular/core';
import {EnteteComponent} from "../../fragments/entete/entete.component";
import {FormControl, FormGroup, isFormControl, isFormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Classe} from "../../models";
import {CLASSE_LIST} from "../../data";

@Component({
  selector: 'app-etudiant-ajout',
  standalone: true,
  imports: [
    EnteteComponent,
    ReactiveFormsModule
  ],
  templateUrl: './etudiant-ajout.component.html',
  styleUrl: './etudiant-ajout.component.scss'
})
export class EtudiantAjoutComponent {
  etudiantForm=new FormGroup({
    prenom:new FormControl('Medoune', Validators.required),
    // Et s'il y'a +sieurs contraintes, on met en crochets les Validators.
    nom:new FormControl('FALL', [Validators.required,Validators.maxLength(8)]),
    tel:new FormControl('78XXXXXXX', [Validators.required,Validators.maxLength(13)]),
    inscrit:new FormControl('true', [Validators.required]),
    classeId:new FormControl('true', [Validators.required])
  })

  etudiantSave(){
    console.log("Saving student!!");
    // Recuperation des donnees
    // 1 er methode: La plus utilise
    const prenom=this.etudiantForm.controls['prenom'].value;
    //2em methode
    const nom=this.etudiantForm.get('nom')?.value;
    // 1 er methode:
    const tel=this.etudiantForm.controls['tel'].value;
    const inscrit=this.etudiantForm.controls['inscrit'].value;
    const classeId=this.etudiantForm.controls['classeId'].value;

    // Maintenant, avant d'envoyer les donnes, il faut s'assurer qu'ils ont
    // ete bien recuperer:
    console.log("prenom",prenom)
    console.log("nom",nom)
    console.log("telephone",tel)
    console.log("inscrit",inscrit)
    console.log("classe",classeId)

  }
  //Methode de recuperation d'une classe dans le formulaire

  classes:Classe[]=CLASSE_LIST;

}
