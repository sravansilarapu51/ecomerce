import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'testangularapp';
  // name: string = "";
  // files: any;
  // images = [{
  //   name: 'sample', url: './assests/image/sample.jpg'
  // }]

  constructor(private http: HttpClient) {}
  ngOnInit() {
    
  }
  
}
