import { Component, OnInit } from '@angular/core';
import { News } from './news.model';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  //api url
  url = "https://rss.nytimes.com/services/xml/rss/nyt/World.xml";
  news: News[] = [];


  //function that gets called every time someone pressed the refresh news button, empties the array and starts fetching the newest data from the api
  onRefreshNews() {
    this.news = [];
    let xmlContent = '';

    fetch(this.url).then((response) => {
      response.text().then((xml) => {
        xmlContent = xml;

        let parser = new DOMParser();
        let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
        let news = xmlDOM.querySelectorAll('item');

        news.forEach(newsXmlNode => {
          let test = {
            title: '',
            author: '',
            content: '',
            date: ''
          };
          test.title = newsXmlNode.querySelectorAll('title')[0].innerHTML;
          test.date = newsXmlNode.querySelectorAll('pubDate')[0].innerHTML;
          test.author = newsXmlNode.children[5].innerHTML;
          test.content = newsXmlNode.querySelectorAll('description')[0].innerHTML;
          this.news.push(test);
        });
      });
    });
  }

  //onInit populates the news array upon reaching the page
  ngOnInit(): void {

    let xmlContent = '';

    fetch(this.url).then((response) => {
      response.text().then((xml) => {
        xmlContent = xml;

        let parser = new DOMParser();
        let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
        let news = xmlDOM.querySelectorAll('item');
        //we transform the xml into a DOM-like object from which we extract our desired information
        news.forEach(newsXmlNode => {
          let test = {
            title: '',
            author: '',
            content: '',
            date: ''
          };
          test.title = newsXmlNode.querySelectorAll('title')[0].innerHTML;
          test.date = newsXmlNode.querySelectorAll('pubDate')[0].innerHTML;
          test.author = newsXmlNode.children[5].innerHTML;
          test.content = newsXmlNode.querySelectorAll('description')[0].innerHTML;
          this.news.push(test);
        });
      });
    });
  }
}
