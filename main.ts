import { Observable, Observer } from 'rxjs';

let numberArray = [1, 6, 10, 37];
let source = Observable.from(numberArray);

class numberObserver implements Observer<number> {
    next(value) {
        console.log(`Value: ${value}`);
    }
    error(e) {
        console.log(`Error: ${e}`);
    }
    complete() {
        console.log(`Complete`);
    }
}

source.subscribe(new numberObserver());