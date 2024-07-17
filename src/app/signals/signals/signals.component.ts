import { Component } from '@angular/core';
import { ListComponent } from "../common/components/list/list.component";
import { AddComponent } from "../common/components/add/add.component";

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [ListComponent, AddComponent],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {}
