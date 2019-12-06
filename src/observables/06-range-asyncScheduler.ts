import {range, asyncScheduler } from 'rxjs';

// const src$ = of(1, 2, 3, 4, 5);

// Sincrono
// const src$ = range(1, 5);

// Asincrono.
const src$ = range(1, 5, asyncScheduler);

console.log('Inicio');
src$.subscribe(console.log);
console.log('Fin');
