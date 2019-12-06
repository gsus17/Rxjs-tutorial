import { interval, timer, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: next => console.log('next ', next),
  error: () => {},
  complete: () => console.log('complete')
};

const hoyen5 = new Date();
hoyen5.setSeconds(hoyen5.getSeconds() + 5);

// El interval y el timer son asincronos.
const interval$ = interval(1000);
const timer$ = timer(2000);

// Especie de set interval pero que inicia con un tiempo.
// const timer$ = timer(2000, 1000);

// Programado por fecha.
// const timer$ = timer(hoyen5);

console.log('inicio');
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('fin');
