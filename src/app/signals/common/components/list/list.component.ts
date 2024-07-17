import { Component, effect, inject, OnChanges, signal, Signal, SimpleChanges, WritableSignal } from '@angular/core';
import { SignalsService } from '../../signals.service';
import { IExampleObject } from '../../models/models';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  public signalsService = inject(SignalsService)
  currentMessage!: string;
  currentArrayObjects!: IExampleObject[];

  constructor() {
    effect(() => {
      this.currentMessage = this.signalsService.getMessage();
      this.currentArrayObjects = this.signalsService.getObject();
    })
  }
}
