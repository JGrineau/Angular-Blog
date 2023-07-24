import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { ARTICLES } from '../mock-articles';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-atricle-list',
  templateUrl: './atricle-list.component.html',
  styleUrls: ['./atricle-list.component.css'],
})

@NgModule({
  imports: [
    // other imported modules...
    RouterModule, // Add this line to include RouterModule
  ],
  // other declarations, providers, etc.
});

export class AtricleListComponent implements OnInit {
  articles: Article[] = [];
  constructor(private articleService: ArticleService) {}
  ngOnInit() {
    this.getArticles();
  }

  getArticles(): void {
    this.articleService
      .getArticles()
      .subscribe((articles) => (this.articles = articles));
  }
}
