import { Component, OnInit } from "@angular/core";
import { NewsService } from "../service/news.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-newspage",
  templateUrl: "./newspage.component.html",
  styleUrls: ["./newspage.component.css"]
})
export class NewspageComponent implements OnInit {
  mydata: any;
  mydataobj: any[] = [];
  mydataArray: any[] = [];
  loader = false;
  constructor(
    private newsService: NewsService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.getNewsData();
  }

  openLg(content) {
    this.modalService.open(content, { size: "lg" });
  }

  getNewsData() {
    this.newsService.getNews().subscribe(result => {
      console.log(result);
      console.log((this.mydata = result));
      this.mydataobj = Array.of(this.mydata);
      this.mydataArray = this.mydataobj[0].articles;
      console.log(this.mydataArray);
      this.loader = true;
    });
  }
}
