import { Component } from '@angular/core';
import { Article } from 'src/shared/Article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[] = [];

  addArticle(title:HTMLInputElement, link:HTMLInputElement): boolean{
    this.articles.push(new Article(title.value, link.value));
    // console.log(`${this.articles[0].title}, ${this.articles[0].link}`)
    return true;
  }
  
}
