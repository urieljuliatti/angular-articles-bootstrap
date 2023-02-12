import { Component } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent {
  article: Article = {
    id: 0,
    title: 'My Article',
    body: 'My body'
  }

  onSubmit()
  {
    alert( 'Create Article')
  }

}
