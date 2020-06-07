import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPost} from '../../service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: IPost;
  @Input() isSingle: boolean;

  @Output() next = new EventEmitter<null>();

  constructor() {
  }

  ngOnInit(): void {
  }
}
