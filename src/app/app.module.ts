import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateArticleComponent } from './components/articles/create-article/create-article.component';
import { FormsModule } from '@angular/forms';
import { ListArticlesComponent } from './components/articles/list-articles/list-articles.component';
import { ArticleComponent } from './components/articles/article/article.component';
import { HttpClientModule  } from '@angular/common/http';
import { DeleteArticleComponent } from './components/articles/delete-article/delete-article.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateArticleComponent,
    ListArticlesComponent,
    ArticleComponent,
    DeleteArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
