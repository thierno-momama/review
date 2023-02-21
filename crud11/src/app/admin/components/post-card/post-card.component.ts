import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Post } from 'src/app/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit, OnChanges{

  @Output() onAddPost: EventEmitter<Post> = new EventEmitter();
  @Output() onUpdatePost: EventEmitter<Post> = new EventEmitter();
  @Input() postEdit!: Post;
  @Input() showAdd!: boolean;
  showUpdate: boolean = false;

  currentId: number | undefined;

  formAddPost: any;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.showAdd = true;
    this.formAddPost = this.formBuilder.group({
      title: ['', [Validators.required]],
      body: ['', [Validators.required]]
    });
  }
  
  ngOnChanges(): void {
    if(this.postEdit){
      this.showAdd = false;
      this.showUpdate = true;
      this.currentId = this.postEdit.id;
      this.formAddPost.controls['title'].setValue(this.postEdit.title);
      this.formAddPost.controls['body'].setValue(this.postEdit.body);
    }
  }

  get Title(){
    return this.formAddPost.get('title');
  }
  get Body(){
    return this.formAddPost.get('body');
  }
  onSubmit(){
    if(this.formAddPost.valid){
      this.onAddPost.emit(this.formAddPost.value);
      this.formAddPost.reset();
      alert("Post adding in success");
      const ref = document.getElementById('cancel');
      ref?.click();
    }
  }

  onUpdate(){
    if(this.formAddPost.valid){
      this.formAddPost.value.id = this.currentId;
      this.onUpdatePost.emit(this.formAddPost.value);
      this.formAddPost.reset();
      alert("Post update in success");
      const ref = document.getElementById('cancel');
      ref?.click();
    }
  }

}

