import { Component } from '@angular/core';
import {MenuComponent} from "../menu/menu.component";

@Component({
  selector: 'app-entete',
  standalone: true,
    imports: [
        MenuComponent
    ],
  templateUrl: './entete.component.html',
  styleUrl: './entete.component.scss'
})
export class EnteteComponent {

}
