import { Observable, Observer } from 'rxjs';

// Se simplifica y se crea un observer para facilitar la lectura.
const observer: Observer<any> = {
  next: valor => console.log('Next: ', valor),
  error: error => console.warn('Error: ', error),
  complete: () => console.log('Completado')
};
