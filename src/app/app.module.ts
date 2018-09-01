import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostListItemComponentComponent } from './post-list-item-component/post-list-item-component.component';
import {BlogsService} from './services/blogs.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { AddBlogComponent } from './add-blog/add-blog.component';
import {FormsModule} from '@angular/forms';

// TODO setting the routes
const appRoutes: Routes = [
  {path: '', component: PostListComponentComponent},
  {path: 'blogs', component: PostListComponentComponent},
  {path: 'addblog', component: AddBlogComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostListItemComponentComponent,
    AddBlogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    BlogsService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
