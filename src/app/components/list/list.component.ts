import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private service: ServiceService
  ) { }

  listTask: any[] = JSON.parse(localStorage.getItem('mytask')!) || []

  ngOnInit(): void {
    this.service._listTask.subscribe(data => {
      this.listTask = data
    })
  }

  clearAll() {
    this.service.clearAll();
  }

  editTask(id:number, event: any) {
    this.service.editTask(id, event.target.innerText)
  }
}
