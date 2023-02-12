import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateArticleComponent } from './components/articles/create-article/create-article.component';
import { ListArticlesComponent } from './components/articles/list-articles/list-articles.component';

const routes: Routes = [
  {
    path: 'createArticle',
    component: CreateArticleComponent
  },
  {
    path: 'listArticles',
    component: ListArticlesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
