import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostService } from '../../../../services/post-services';
import { map, catchError, switchMap } from 'rxjs/operators';
import {loadPosts } from '../action/post-action';
import { IPostAction } from '../action/post-action';
@Injectable()
export class PostEffects {

  constructor(private actions: Actions, private postservices: PostService) { }

  loadPosts$ = createEffect(() =>
    this.actions.pipe(
      ofType(IPostAction.loadingPosts),
      switchMap(() => this.postservices.listar().pipe(
        map(posts => new loadPosts(posts)),
        catchError(() => [])
      ))
    ))
}
