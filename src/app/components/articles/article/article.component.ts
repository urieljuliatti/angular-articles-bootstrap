import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{

  @Input() article: Article = {
    id: 0,
    title: '',
    body: ''
  }

  ngOnInit(): void {

    console.log(this.article)
  }

}
