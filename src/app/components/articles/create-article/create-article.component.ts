import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit{
  article: Article = {
    title: '',
    body: ''
  }

  constructor (
    private service: ArticleService,
    private router: Router
    ) { }

  onSubmit()
  {
    this.service.create(this.article).subscribe(() => {
      this.router.navigate(['listArticles'])
    })
  }

  ngOnInit(): void {


  }
}
