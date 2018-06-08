import { uiState } from 'store/reducers/uiStateReducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'store/application-state';
import { Observable } from 'rxjs/Observable';
import { ThreadSummaryVM } from './thread-summary.vm';
import { userNameSelector } from './userNameSelector';
import { mapStateToUnreadMessagesCounter } from './mapStateToUnreadMessagesCounter';
import { stateToThreadSummariesSelector } from './StateToThreadSummariesSelector';
import { LoadUserThreadsAction } from '../../store/actions';
import { ThreadSelectedAction } from '../../store/actions/actions';


@Component({
  selector: 'thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.css'],
})
export class ThreadSectionComponent {

  userName$ : Observable<string>;
  unreadMessagesCounter$ : Observable<number>;
  threadSummaries$ :Observable<ThreadSummaryVM[]>;
  currentSelectedThreadId$: Observable<number>;
  
  constructor(private store : Store<ApplicationState>) {

    this.userName$ = store.select(userNameSelector);

    this.unreadMessagesCounter$ = store.map(mapStateToUnreadMessagesCounter);

    this.threadSummaries$ = store.select(stateToThreadSummariesSelector);

    this.currentSelectedThreadId$ = store.select(state=>state.uiState.currentThreadId);

  }




  onThreadSelected(SelectedThreadId:number){

    this.store.dispatch(new ThreadSelectedAction(SelectedThreadId));

  }

}
