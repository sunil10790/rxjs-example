import { Observable, Observer } from 'rxjs';

let numberArray = [1, 6, 10, 37];
let source = Observable.from(numberArray);

source.subscribe(
    (value) => console.log(`Value: ${value}`),
    (e) => console.log(`Error: ${e}`),
    () => console.log(`Complete`)
);
