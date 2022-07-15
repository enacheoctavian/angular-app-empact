import { Component, OnInit } from '@angular/core';
import { News } from './news.model';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: News[] = [];


  test: News = {
    title: 'Atac sangeros',
    author: 'Reporter',
    content: 'Test',
    date: 'today'
  };
  totalNews = 10;
  newsPerPage = 5;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];
  ngOnInit(): void {
    this.news.push(this.test);


  }

}
