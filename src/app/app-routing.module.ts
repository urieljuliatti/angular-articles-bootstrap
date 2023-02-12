import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateArticleComponent } from './components/articles/create-article/create-article.component';
import { ListArticlesComponent } from './components/articles/list-articles/list-articles.component';
import { DeleteArticleComponent } from './components/articles/delete-article/delete-article.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listArticles',
    pathMatch: 'full'
  },
  {
    path: 'createArticle',
    component: CreateArticleComponent
  },
  {
    path: 'listArticles',
    component: ListArticlesComponent
  },
  {
    path: 'articles/deleteArticle/:id',
    component: DeleteArticleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
