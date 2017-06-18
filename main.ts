import { Observable, Observer } from 'rxjs';

let numberArray = [1, 6, 10, 37];
let source = Observable.create(
    observer => {
        for (let number of numberArray) {
            observer.next(number);
        }
        observer.complete();
    }
);

source.subscribe(
    (value) => console.log(`Value: ${value}`),
    (e) => console.log(`Error: ${e}`),
    () => console.log(`Complete`)
);
