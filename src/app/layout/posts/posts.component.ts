import { Articles } from './../../interfaces/articles';
import { PostService } from './../../post.service';
import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/article';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public posts: Article[];
  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.postService.getArticles().subscribe(
      x => this.posts = x.articles
    )
  }

}
