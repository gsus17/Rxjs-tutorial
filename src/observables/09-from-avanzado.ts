import { of, from, Observer } from 'rxjs';
import { async } from 'rxjs/internal/scheduler/async';

// of Toma argumentos y genera una secuencia.
// From Array, promise, iterable, observable

const observer: Observer<any> = {
  next: val => console.log('Next', val),
  error: () => {},
  complete: () => console.log('complete')
};

// Igualdad
// const source$ = from([1,2,3,4,5,6]);
// const source$ = of(...[1,2,3,4,5,6]);
// source$.subscribe(observer);

// Diferencias
// const source1$ = from('Jesus');
// const source2$ = of('Jesus');
// source1$.subscribe(observer);
// source2$.subscribe(observer);

const source1$ = from(fetch('https://api.github.com/users/klerith'));

// Peticiones fetch
// source1$.subscribe(observer);
// source1$.subscribe(response => console.log(response.ok));

// source1$.subscribe(async(response) => {
//     const dataResp = await response.json();
//     console.log(dataResp);
// });




