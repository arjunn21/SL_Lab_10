import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-space-x',
  templateUrl: './space-x.component.html',
  styleUrls: ['./space-x.component.scss']
})
export class SpaceXComponent implements OnInit {

  constructor(private http: HttpClient) { }
  data:any;
  link = 'https://api.spacexdata.com/v3/missions';
  ngOnInit(): void {
    this.http.get(this.link).subscribe((responseData:any)=> {
      this.data = responseData;
    })
  }
}
