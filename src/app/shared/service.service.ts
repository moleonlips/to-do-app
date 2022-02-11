import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  listTask: any[] = JSON.parse(localStorage.getItem('mytask')!) || []

  _listTask = new Subject<any[]>()

  postTask(task: string) {
    this.listTask.push(task)
    this._listTask.next(this.listTask)
    localStorage.setItem('mytask', JSON.stringify(this.listTask))
  }

  clearAll() {
    this.listTask = []
    this._listTask.next(this.listTask)
    localStorage.removeItem('mytask')
  }

  editTask(id: number, task: string) {
    this.listTask.splice(id, 1, task);
    this._listTask.next(this.listTask);
    localStorage.setItem('mytask', JSON.stringify(this.listTask));
  }
}
