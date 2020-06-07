import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly POST_URL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.POST_URL);
  }

  getPostsByUsers(): Observable<IUser> {
    return this.getPosts()
      .pipe(
        switchMap((posts: IPost[]) => {
          const data = arrangePostToUser(posts);
          return of(data);
        })
      );
  }


}


export function arrangePostToUser(posts: IPost[]): IUser {
  return posts.reduce((users, currentPost) => {

    if (users[currentPost.userId] === undefined) {
      users[currentPost.userId] = {
        userId: currentPost.userId,
        posts: []
      };
    }

    users[currentPost.userId].posts.push(currentPost);

    return users;
  }, {});

}

export interface IUser {
  [userID: string]: IUserPost;
}
export interface IUserPost {
  userId: number;
  posts: IPost[];
}

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
