import { Component } from '@angular/core';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent {
  articlesList = [
    {
      title: 'My Title',
      body: "My Body"
    },
    {
      title: 'My Title 2',
      body: "My Body 2"
    },
    {
      title: 'My Title 3',
      body: "My Body 3"
    }
  ]
}
