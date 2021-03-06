import { Component, OnInit } from '@angular/core';
import { MatSlider, MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  counterValue: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.counterValue++;
  }

  decrement() {
    this.counterValue--;
  }

  onSliderChange(event: MatSliderChange) {
    if (event.value === null) {
      this.counterValue = 0;
    } else {
      this.counterValue = event.value;
    }
  }
}
