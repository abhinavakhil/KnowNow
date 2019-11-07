import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  apikey: string = "ce4606c06f344265a5565d28c02443b8";
  url;
  constructor(private http: HttpClient) {}
  // apiKey=ce4606c06f344265a5565d28c02443b8
  getNews() {
    this.url =
      "https://newsapi.org/v2/top-headlines?country=us&" +
      "apiKey=" +
      this.apikey;
    return this.http.get(this.url);
  }
  // getNews() {
  //   return this.http.post("https://abhishek4813.azurewebsites.net/signup", {
  //     name: {
  //       first_name: "abhinav",
  //       last_name: "akhil"
  //     },
  //     email: "abhinavakhil55@gmail.com",
  //     password: "abcd"
  //   });
  // }
  getEveryNews() {
    return this.http.get(
      "https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com?pageSize=10&apiKey=ce4606c06f344265a5565d28c02443b8"
    );
  }
}
