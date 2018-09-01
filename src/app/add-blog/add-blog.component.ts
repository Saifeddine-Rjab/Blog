import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {BlogsService} from '../services/blogs.service';


@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent {

  constructor(private blogsService: BlogsService,
              private router: Router) { }

  onSubmit(form: NgForm) {
    const title = form.value['title'];
    const content = form.value['content'];
    const loveIts = 0;
    const date = Date.now();
    const id = '_' + Math.random().toString(36).substr(2, 9);

    this.blogsService.addBlog(title, content, loveIts, date, id);
    this.router.navigate(['/blogs']);
  }

}
