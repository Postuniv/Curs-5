import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider/slider';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent implements OnInit {

  size = 3;
  data: string[][] = [];
  private currentValue = 'X';
  winner = '';
  stats: {[key: string]: number} = {X: 0, O: 0, Draw: 0};
  constructor() { 

  }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.currentValue = 'X';
    this.winner = '';
    this.data = Array(this.size).fill([]).map(() => Array(this.size).fill(''));
  }

  getWinner(): string {

    var count = 0;
    for (let row = 0; row < this.size; row++) {
      for (let col = 0; col < this.size; col++) {
        if (this.data[row][col] !== '') {
          count++;
          // dreapta
          if (col+2 < this.size && this.data[row][col] === this.data[row][col+1] && this.data[row][col] === this.data[row][col+2]) {
            return this.data[row][col];
          }
          // jos
          if (row+2 < this.size && this.data[row][col] === this.data[row+1][col] && this.data[row][col] === this.data[row+2][col]) {
            return this.data[row][col];
          }

          // diagonala dreapta jos
          if (row+2 < this.size && col+2 < this.size && this.data[row][col] === this.data[row+1][col+1] && this.data[row][col] === this.data[row+2][col+2]) {
            return this.data[row][col];
          }

          // diagonala stanga jos
          if (row+2 < this.size && col-2 >= 0 && this.data[row][col] === this.data[row+1][col-1] && this.data[row][col] === this.data[row+2][col-2]) {
            return this.data[row][col];
          }
        }
      }
    }

    return count < this.size*this.size ? '' : 'Draw';
  }

  cellClick(row: number, col: number) {
    if (this.data[row][col] === '' && this.winner === '') {
      this.data[row][col] = this.currentValue;
      this.currentValue = this.currentValue === 'X' ? 'O' : 'X';

      this.winner = this.getWinner();
      if (this.winner) {
        this.stats[this.winner]++;
      }
    }
  }

  onSliderChange(event: MatSliderChange) {
    this.newGame();
  }
}
