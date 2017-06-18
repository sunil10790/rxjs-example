import { Observable, Observer } from 'rxjs';

let numberArray = [1, 6, 10, 37];
let source = Observable.create(
    observer => {
        let index = 0;
        let produceValue = () => {
            observer.next(numberArray[index++]);
            if(index < numberArray.length){
                setTimeout(produceValue, 2000);
            } else {
                observer.complete();
            }
        };
        produceValue();
    }
);

source.subscribe(
    (value) => console.log(`Value: ${value}`),
    (e) => console.log(`Error: ${e}`),
    () => console.log(`Complete`)
);
