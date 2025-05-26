import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BooksStore } from '../store/books.store';
import { JsonPipe } from '@angular/common';
import { patchState } from '@ngrx/signals';
import { AuthService } from '@auth-lib';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [BooksStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly store = inject(BooksStore);
  readonly authService = inject(AuthService);

  addBook(): void {
    patchState(this.store, ({ books }) => ({
      books: [...books, { id: 3, title: 'new book' }],
    }));
  }

  removeBooks(): void {
    this.store.removeAll();
  }
}
