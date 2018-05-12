import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../services/threads.service';

@Component({
  selector: 'thread-list',
  templateUrl: './thread-list.component.html',
  styleUrls: ['./thread-list.component.css'],
  providers : [ThreadsService]
})
export class ThreadListComponent implements OnInit {

  constructor(private threadsService : ThreadsService) { }

  ngOnInit() {

 

  }

}
