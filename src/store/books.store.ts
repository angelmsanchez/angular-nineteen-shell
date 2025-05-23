import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Book } from './book.model';

type BooksState = {
  books: Book[];
  isLoading: boolean;
  filter: { query: string; order: 'asc' | 'desc' };
};

const initialState: BooksState = {
  books: [
    { id: 1, title: 'book1' },
    { id: 2, title: 'book2' },
  ],
  isLoading: false,
  filter: { query: '', order: 'asc' },
};

const methods = (store: any) => ({
  removeAll(): void {
    patchState(store, (state) => ({ books: [] }));
  },
});

export const BooksStore = signalStore(
  { protectedState: false },
  withState(initialState),
  withMethods(methods)
);
