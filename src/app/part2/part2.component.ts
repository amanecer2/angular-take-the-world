import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {IPost, PostService} from '../service/post.service';
import {PostStateService} from '../service/post-state.service';

@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.scss']
})
export class Part2Component implements OnInit {

  post$: Observable<IPost>;

  constructor(public postStateService: PostStateService) { }

  ngOnInit(): void {

    this.post$ = this.postStateService.getState();
  }

}
