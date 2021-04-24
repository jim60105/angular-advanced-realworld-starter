import { Article } from 'src/app/interfaces/article';
import { PostService } from './../../../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { map, switchMap } from "rxjs/operators";
import { Observable } from 'rxjs';

@Component({
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public post$: Observable<Article>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.post$ = this.route.paramMap.pipe(
      map(id => id.get('id')),
      switchMap(id => this.postService.getArticle(id)),
      map(sa => sa.article)
    );
  }
}
