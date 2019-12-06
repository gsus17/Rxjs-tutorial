import { asyncScheduler, Subscriber } from 'rxjs';

// setTimeout(() => {}, 3000);
// setInterval(()=>{}, 300)

const saludar = () => console.log('Hola Mundo');
const saludar2 = nombre => console.log(`Hola ${nombre}`);

asyncScheduler.schedule(saludar, 2000);
asyncScheduler.schedule(saludar2, 2000, 'jesus');

const subs = asyncScheduler.schedule(function(state: number) {
  console.log('state', state);
  this.schedule(state + 1, 1000);
});

setTimeout(() => {
  subs.unsubscribe();
}, 6000);
