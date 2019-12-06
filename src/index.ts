import {Observable, Observer} from 'rxjs';

// Existen 2 formas de crear un observable.

// const obs$= Observable.create();
const obs$= new Observable<string>(subscriber=>{
    subscriber.next('Hola');
    subscriber.complete();
});


// Se pasan 3 callbacks next, error y complete.
// obs$.subscribe(
//     (valor)=>console.log('Next: ',valor),
//     (error)=>console.warn(error),
//     ()=>console.log('Completado')
// );

// Se simplifica y se crea un observer para facilitar la lectura.
const observer:Observer<any>={
    next:(valor)=>console.log('Next: ',valor),
    error:(error)=>console.warn(error),
    complete:()=>console.log('Completado')
}

obs$.subscribe(observer);