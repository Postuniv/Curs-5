import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TableDataComponent } from './components/table-data/table-data.component';
import { TicTacToeComponent } from './components/tic-tac-toe/tic-tac-toe.component';

const routes: Routes = [
  {
    path: 'counter',
    component: CounterComponent,
  },
  {
    path: 'table-data',
    component: TableDataComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'tictactoe',
    component: TicTacToeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
