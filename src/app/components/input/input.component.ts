import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private service: ServiceService
  ) { }

  myForm!: FormGroup
  ngOnInit(): void {
    this.myForm = this.fb.group({
      taskName: this.fb.control('', Validators.required)
    })
  }

  taskName!: string

  submitTask(){
    let task = this.myForm.get('taskName')?.value
    this.service.postTask(task)

    this.myForm.reset()
  }
}
