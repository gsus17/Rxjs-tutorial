import { of } from 'rxjs';

const obs$ = of(1, 2, 3, 4, 5, 6, 7);

console.log('Inicio');

// El of funciona de manera sincrona.
obs$.subscribe(
  next => {
    console.log('Next: ', next);
  },
  error => {
    console.log('Error: ', error);
  },
  () => {
    console.log('Finalizado');
  }
);

console.log('Fin');


