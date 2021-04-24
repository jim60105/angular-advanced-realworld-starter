import { PostService } from './../../post.service';
import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/article';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public posts$: Observable<Article[]>;
  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.posts$ = this.postService.getArticles().pipe(
      map(x => x.articles)
    );
  }

}
