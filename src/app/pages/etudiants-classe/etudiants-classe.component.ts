import {Component, OnInit} from '@angular/core';
import {EnteteComponent} from "../../fragments/entete/entete.component";
import {ActivatedRoute, Router} from "@angular/router";
import {Classe, Etudiant} from "../../models";
import {ETUDIANTS, ing3info} from "../../data";


@Component({
  selector: 'app-etudiants-classe',
  standalone: true,
  imports: [
    EnteteComponent,
  ],
  templateUrl: './etudiants-classe.component.html',
  styleUrl: './etudiants-classe.component.scss'
})
export class EtudiantsClasseComponent implements OnInit{
  classe?:Classe;
  etudiants:Etudiant[]=[];
  constructor(private router:Router,private activated:ActivatedRoute) {
  }
  ngOnInit() {
    // Recuperaration de l'id de la classe
    const idClasse = this.activated.snapshot.params["idClasse"];
    // Ici, une fois que l'id est recuperer, on devrait faire appel a un service web
    //pour qu'il nous affiches les etudiants de la classe.
    //meme comme  on a pas encore un backend dispo, On essai juste de tester avec les moyens a bord
    //ce qui suivent devrait etre recuperer via une api
    this.classe = ing3info;
    this.etudiants = ETUDIANTS;
  }
}
