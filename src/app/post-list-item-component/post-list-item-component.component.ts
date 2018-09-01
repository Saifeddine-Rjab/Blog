import {Component, Input, OnInit} from '@angular/core';
import {BlogsService} from '../services/blogs.service';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent {

  @Input() id: string;
  @Input() title: string ;
  @Input() content: string ;
  @Input() loveIts: number ;
  @Input() created_at: Date ;

  constructor(private blogsService: BlogsService) { }

  loveIt() {
    this.blogsService.loveIt(this.id);
  }

  dontLoveIt() {
    this.blogsService.dontLoveIt(this.id);
  }

  deletePost() {
  this.blogsService.deletePost(this.id);
  }

}
