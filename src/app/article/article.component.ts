import { Component, OnInit } from '@angular/core';
import { Article } from '../../shared/Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  article: Article;

  constructor() {
    this.article = new Article(
      'Angular',
      'http://angular.io',
      10
    );


  }

  voteUp(): boolean {
    this.article.votes += 1;
    return true;
  }

  voteDown(): boolean {
    this.article.votes -= 1;
    return true;
  }

  domain(): string {
    try {
      const domainandPath: string = this.article.link.split('//')[1];
      return domainandPath.split('//')[0];
    }
    catch (err) {
      return null;
    }
  }



}
