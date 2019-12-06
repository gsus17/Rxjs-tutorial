import { Observable, Observer } from 'rxjs';

// Se simplifica y se crea un observer para facilitar la lectura.
const observer: Observer<any> = {
  next: valor => console.log('Next: ', valor),
  error: error => console.warn('Error: ', error),
  complete: () => console.log('Completado')
};

const intervalo$ = new Observable<number>(subscriber => {
  let contador = 0;
  const interval = setInterval(() => {
    contador = contador + 1;
    subscriber.next(contador);
    console.log('Interval');
  }, 1000);

  // Se ejecuta el return al invocarse el unsubscribe, de esta manera se evita la fuga de memoria.
  return () => {
    clearInterval(interval);
    console.log('clearInterval');
  };
});

const subscription1 = intervalo$.subscribe(observer);
const subscription2 = intervalo$.subscribe(observer);
const subscription3 = intervalo$.subscribe(observer);

// Se concatenan las subscripciones.
subscription1.add(subscription2).add(subscription3);

setInterval(() => {
    // Al hacer el unsubscribe se limpian los 2 encadenados.
  subscription1.unsubscribe();
}, 3000);
