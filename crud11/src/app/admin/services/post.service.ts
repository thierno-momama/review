import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url: string = "http://localhost:5000/posts";

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.url);
  }

  addPost(post: Post): Observable<Post>{
    return this.http.post<Post>(this.url, post, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }

  deletePost(post: Post): Observable<Post>{
    const urlDelete = `${this.url}/${post.id}`;
    return this.http.delete<Post>(urlDelete);
  }

  updatePost(post: Post): Observable<Post>{
    const urlUpdate = `${this.url}/${post.id}`;
    return this.http.put<Post>(urlUpdate, post, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }

}
