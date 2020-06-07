import {Injectable} from '@angular/core';
import {BehaviorSubject, combineLatest, merge, Observable, of, Subject} from 'rxjs';
import {IPost, PostService} from './post.service';
import {filter, map, scan, startWith, switchMap, switchMapTo, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostStateService {
  private _index = 0;

  private _state$: Observable<{
    index: number,
    posts: IPost[]
  }>;

  private index$ = new BehaviorSubject(0);
  private posts$ = new BehaviorSubject([]);

  constructor(private postService: PostService) {

   /* this._state$ = merge(
      this.index$.pipe(map(index => ({index}))),
      this.posts$.pipe(map(posts => ({posts})))
    )
      .pipe(
        startWith({
          index: 0,
          posts: []
        }),
        tap(console.log),

        scan(({state, data}) => {
          console.log('state', state, 'data', data);
          return {
            ...state,
            ...data
          };
        }),
      );
*/
    this.init();
  }

  private init() {
    this.postService.getPosts().pipe(
      filter( post => post && post.length > 0),
      tap(posts => {
        this.posts$.next(posts);
      })
    ).subscribe();
  }

  getState(): Observable<IPost> {
    /*return this._state$.pipe(
      filter(({posts, index}) => index !== undefined && posts && posts.length > 0),
      switchMap(({posts, index}) => {
        debugger;
        return of(posts[index]);
      })
    );*/

    return this.posts$.pipe(
      switchMap(posts => {
        return this.index$.pipe(
          map(index => posts[index])
        );
      })
    );
  }

  increment() {
    return this.index$.next(this._index++);
  }
}
