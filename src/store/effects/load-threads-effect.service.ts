import { SELECT_USER_ACTION, LoadUserThreadsAction, SelectUserAction } from './../actions/actions';
import { Injectable } from '@angular/core';
import { ThreadsService } from 'app/services/threads.service';
import { Actions, Effect } from "@ngrx/effects";
import { LOAD_USER_THREADS_ACTION, UserThreadsLoadedAction } from '../actions/actions';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

@Injectable()
export class LoadThreadsEffectService {

  constructor(private actions$:Actions,private threadsService : ThreadsService) { }

  @Effect () userThreads$:Observable<Action> = this.actions$
            .ofType<LoadUserThreadsAction>(LOAD_USER_THREADS_ACTION)
            .switchMap(action => this.threadsService.loadUserThreads(action.payload))
            .map(allUserData => new UserThreadsLoadedAction(allUserData));

  @Effect () newUserSelected$ : Observable<Action> = this.actions$
             .ofType<SelectUserAction>(SELECT_USER_ACTION)
             .debug("new User selected")
             .map(action=> new LoadUserThreadsAction(action.payload));

}
