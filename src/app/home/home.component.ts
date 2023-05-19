import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tagNames = [
    "Your One-Stop Destination for Top Car Brands - Explore Limitless Possibilities",
    "Driving Your Dreams, Brand by Brand - Your Ultimate Destination for All Car Brands!",
    "Bringing Together Automotive Excellence - Your Gateway to Multiple Car Brands!",
    "Embrace Variety, Embody Style - Discover a World of Car Brands Under One Roof!"
  ]

  randomIndex = Math.floor(Math.random() * this.tagNames.length);

  idName = ["crsl_1","crsl_2","crsl_3"]
  constructor() {
  }
  ngOnInit(): void {

  }
}
