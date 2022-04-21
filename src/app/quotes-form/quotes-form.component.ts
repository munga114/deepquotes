import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class GoalFormComponent implements OnInit {
  addNewQuote = new Quote(0,'','','',0,0,new Date);
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(){
this.addQuote.emit(this.addNewQuote);
        
  }
  constructor() { }

  ngOnInit(): void {
  }

}
