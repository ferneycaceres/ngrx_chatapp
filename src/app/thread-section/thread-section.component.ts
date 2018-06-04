import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'store/application-state';
import { ThreadsService } from '../services/threads.service';
import { UserThreadsLoadedAction } from 'store/actions/actions';
import { Observable } from 'rxjs/Observable';
import { Thread } from '../../../shared/model/thread';
import { ThreadSummaryVM } from './thread-summary.vm';
import { userNameSelector } from './userNameSelector';
import { mapStateToUnreadMessagesCounter } from './mapStateToUnreadMessagesCounter';
import * as _ from 'lodash';
import { stateToThreadSummariesSelector } from './StateToThreadSummariesSelector';
import { LoadUserThreadsAction } from '../../store/actions';



@Component({
  selector: 'thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.css'],
})
export class ThreadSectionComponent implements OnInit {

  userName$ : Observable<string>;
  unreadMessagesCounter$ : Observable<number>;
  threadSummaries$ :Observable<ThreadSummaryVM[]>;
  
  constructor(private store : Store<ApplicationState>) {

    this.userName$ = store.select(userNameSelector)

    this.unreadMessagesCounter$ = store.map(mapStateToUnreadMessagesCounter)

    this.threadSummaries$ = store
                            .select(stateToThreadSummariesSelector)

  }




  ngOnInit() {

    this.store.dispatch(new LoadUserThreadsAction());

    /*this.threadsService.loadUserThreads()
    .subscribe(
      allUserData => this.store.dispatch(
        new UserThreadsLoadedAction(allUserData)
      )
    );*/
  }

}
