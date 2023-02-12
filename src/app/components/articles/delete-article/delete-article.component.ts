import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-article',
  templateUrl: './delete-article.component.html',
  styleUrls: ['./delete-article.component.css']
})
export class DeleteArticleComponent implements OnInit{

  article: Article = {
    id: 0,
    title: '',
    body: ''
  }
  constructor(
    private service: ArticleService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    // obtendo o id pela rot
    const id = this.route.snapshot.paramMap.get('id')
    // obtendo o article
    this.service.getArticleById(parseInt(id!)).subscribe((article) => {
        this.article = article
    })
    console.log(id)
  }

  deleteArticle() {
    if(this.article.id){
      this.service.delete(this.article.id).subscribe(() => {
        this.router.navigate(['listArticles'])
      })
    }
  }
  cancel(){
    this.router.navigate(['listArticles'])
  }
}
