import { Component } from "@angular/core";
import { NewsService } from "./service/news.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "medoc";
  constructor(private newsService: NewsService) {}
}
