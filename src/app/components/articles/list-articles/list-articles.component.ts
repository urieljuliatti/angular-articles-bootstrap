import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {
  articlesList: Article[] = [];

  constructor(private service: ArticleService) {

  }

  ngOnInit(): void {
    this.service.list();
  }
}
