import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-likebuttons',
  templateUrl: './likebuttons.component.html',
  styleUrls: ['./likebuttons.component.css']
})
export class LikebuttonsComponent implements OnInit {
  numberOfUpvotes:number=0
  upVotesClick(){
    this.numberOfUpvotes ++;
  }
  numberOfDownvotes:number=0

  downVotesClick(){
    this.numberOfDownvotes ++;
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
