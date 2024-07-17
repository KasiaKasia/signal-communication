import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SignalsModule } from './signals/signals.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, SignalsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { }
