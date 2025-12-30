import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ClassesListComponent} from "./pages/classes-list/classes-list.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClassesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HelloAngular';
}
