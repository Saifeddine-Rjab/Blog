import {Component, OnDestroy, OnInit} from '@angular/core';
import {BlogsService} from '../services/blogs.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit, OnDestroy {

  posts: any[] ;
  blogsSubscription: Subscription;

  constructor( private blogsService: BlogsService) { }


  ngOnInit() {
    this.blogsService.ngOnInit();
    this.blogsSubscription = this.blogsService.blogSubject.subscribe(
      (blogs: any[]) => {
        this.posts = blogs;
      }
    );
    this.blogsService.emitBlogsSubject();
  }

  ngOnDestroy(): void {
    this.blogsSubscription.unsubscribe();
  }
}
