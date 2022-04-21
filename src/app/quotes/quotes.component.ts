import { Component, EventEmitter, OnInit, Output,Pipe } from '@angular/core';
import { Quote } from '../quote';
import { LikebuttonsComponent } from '../likebuttons/likebuttons.component';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {


  quotes:Quote[]=[
    new Quote(1,'Caleb M Kabaya','Whatever you do – give it 100%','Martin L. King',0,0,new Date()),
    new Quote(2,'Caleb M Kabaya','Facetime before you meet up','James K.',9,0,new Date()),
    new Quote(3,'Caleb M Kabaya','Take a break from dating when exhausted','Elizabeth Olsen',0,0,new Date())
  ]
  addNewQuote(quotes:any){
    let quoteLength = this.quotes.length;
    quotes.id = quoteLength+1;
    // quotes.completeDate = new Date(quotes.completeDate)
    this.quotes.push(quotes)
    
  }
  
  deleteQuote(i:any) {
    this.quotes.splice(i, 1)
  }

  preNum:number=0
  lastNum:number=0
  counter:number=0


    highestUpvote(){
      this.preNum = 0;
      this.lastNum = 0;
  
      for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
        this.lastNum = this.quotes[this.counter].numberOfUpvotes;
        if(this.lastNum > this.preNum){this.preNum = this.lastNum}
      }
      return  this.preNum
    }
   


  // arr: number[]=this.quotes.map(quote=>quote.numberOfUpvotes)
  // highestUpvote=Math.max(...this.arr)
  constructor() { }

  ngOnInit(): void {
  }

}

