import { Article } from 'src/app/interfaces/article';
import { PostService } from './../../../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public post: Article = {
    id: "",
    title: "",
    description: "",
    body: "",
    tagList: [],
    createdAt: "",
    updatedAt: "",
    author: ""
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.post.id = this.route.snapshot.params['id'];
    this.postService.getArticle(this.post.id).subscribe(
      x=> this.post = x.article
    )
  }

}
