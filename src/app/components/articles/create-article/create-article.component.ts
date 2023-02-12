import { Component } from '@angular/core';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent {
  article = {
    id: '1',
    title: 'My Article',
    body: 'My body'
  }

  onSubmit()
  {
    alert( 'Create Article')
  }

}
