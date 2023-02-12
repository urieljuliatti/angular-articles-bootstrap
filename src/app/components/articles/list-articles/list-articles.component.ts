import { Component } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent {
  articlesList: Article[] = [];
}
