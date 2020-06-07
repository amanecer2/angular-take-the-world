import {Component, OnInit} from '@angular/core';
import { interval, merge, Observable} from 'rxjs';
import {IPost, IUser, PostService} from '../service/post.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.scss']
})
export class Part1Component implements OnInit {

  posts$: Observable<IUser>;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.posts$ = interval(60000)
      .pipe(
        switchMap( _ => this.postService.getPostsByUsers())
      );
     /* merge(
        this.postService.getPostsByUsers(),

      );*/
  }

}
