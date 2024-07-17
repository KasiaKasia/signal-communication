import { Component, inject } from '@angular/core';
import { SignalsService } from '../../signals.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {
  private signalsService = inject(SignalsService)
  private fb = inject(FormBuilder)
  
  formGroup: FormGroup = this.fb.group({
    name: new FormControl(''),
    description: new FormControl(''),
  });

  set() {
    this.signalsService.setMessage(Math.random().toString())
  }
  update() {
    this.signalsService.updateObject(this.formGroup.value)
  }
}
