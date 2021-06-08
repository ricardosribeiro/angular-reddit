import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../shared/Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  @Input() article: Article;

  constructor() { }

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
