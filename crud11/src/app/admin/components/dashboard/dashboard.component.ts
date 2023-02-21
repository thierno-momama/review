import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Post } from 'src/app/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  posts: Post[] = [];
  postEdit!: Post;
  showAdd: boolean = false;

  constructor(private postService: PostService){}

  ngOnInit(): void {
    this.getPosts();
  }

  addPost(post: Post){
    this.postService.addPost(post).subscribe(post => {
      this.posts.push(post);
      this.getPosts();
    }, (error) => console.warn("Something went wrong"));
  }

  getPosts(){
    this.postService.getPosts().subscribe(post => {
      this.posts = post; 
    }); 
  }

  deletePost(post: Post){
    if(confirm('Voulez vous vraiment supprimer ?')){
      this.postService.deletePost(post).subscribe(() => {
        this.posts = this.posts.filter(p => p.id !== post.id);
      });
    }
  }

  editPost(post: Post){
    this.postEdit = post;
    this.showAdd = false;
  }

  updatePost(post: Post){
    this.postService.updatePost(post).subscribe();
    this.getPosts();
  }

  toggleAdd(){
    this.showAdd = true;
  }
}
