import {Component, Input, OnInit} from '@angular/core';
import {IUserPost} from '../../service/post.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: IUserPost;

  constructor() { }

  ngOnInit(): void {
  }

}
