import { Observable, Observer, Subject } from 'rxjs';

// Se simplifica y se crea un observer para facilitar la lectura.
const observer: Observer<any> = {
  next: valor => console.log('Next: ', valor),
  error: error => console.warn('Error: ', error),
  complete: () => console.log('Completado')
};

const intervalo$ = new Observable<number>(subs => {
  const interval = setInterval(() => subs.next(Math.random()), 3000);
  return () =>{
    clearInterval(interval)
    console.log('Interval destruido.')
  };
});

// Emiten valores diferentes.

// const subscription1 = intervalo$.subscribe(value1 =>
//   console.log('Subs1', value1)
// );
// const subscription2 = intervalo$.subscribe(value2 =>
//   console.log('Subs2', value2)
// );


// Subject
const subject$ = new Subject();
const subsInterval = intervalo$.subscribe(subject$);

const subscription1 = subject$.subscribe(value1 =>
  console.log('Subs1', value1)
);
const subscription2 = subject$.subscribe(value2 =>
  console.log('Subs2', value2)
);

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  subsInterval.unsubscribe();
}, 3500);
