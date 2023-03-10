import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Article } from './article';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private readonly API = 'http://localhost:3000/articles'

  constructor(private http: HttpClient) { }

  list():Observable<Article[]> {
    return this.http.get<Article[]>(this.API)
  }

  create(article: Article): Observable<Article>{
    return this.http.post<Article>(this.API, article)
  }

  delete(id: number): Observable<Article> {
    const url = `${this.API}/${id}`
    return this.http.delete<Article>(url)
  }

  getArticleById(id: number): Observable<Article>{
    const url = `${this.API}/${id}`
    return this.http.get<Article>(url)
  }

}
