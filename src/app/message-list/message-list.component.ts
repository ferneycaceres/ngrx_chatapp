import { MessageVM } from './../message-section/message.vm';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  @Input()
  messages:MessageVM[];

  constructor() { }

  ngOnInit() {
  }

}
