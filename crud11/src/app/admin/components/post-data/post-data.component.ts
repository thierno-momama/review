import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/post';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit, OnChanges{

  @Input() posts!: Post[];
  @Output() onDelete: EventEmitter<Post> = new EventEmitter();
  @Output() onEditPost: EventEmitter<Post> = new EventEmitter();

  postData: Post[] = [];

  constructor(){}

  ngOnInit(): void {
    
  }

  onEdit(post: Post){
    this.onEditPost.emit(post);
  }
  
  ngOnChanges(): void {
    this.postData = this.posts;
  }

}
