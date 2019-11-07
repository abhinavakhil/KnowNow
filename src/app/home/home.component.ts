import { Component, OnInit } from "@angular/core";
import { NewsService } from "../service/news.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  mydata: any;
  mydataobj: any[] = [];
  mydataArray: any[] = [];
  loader = false;
  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.getNews();
  }
  getNews() {
    this.newsService.getEveryNews().subscribe(result => {
      console.log(result);
      console.log((this.mydata = result));
      this.mydataobj = Array.of(this.mydata);
      this.mydataArray = this.mydataobj[0].articles;
      console.log(this.mydataArray);
      this.loader = true;
    });
  }
}
