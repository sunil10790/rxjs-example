import { Observable } from 'rxjs';

let circleabc = document.getElementById('mouseCircle');
let source = Observable.fromEvent(document, 'mousemove')
                       .map( (event: MouseEvent) => {
                           return {
                               x: event.clientX,
                               y: event.clientY
                           };
                       })
                       .delay(300);

let onNext = (value) => {
    circleabc.style.left = value.x + 'px';
    circleabc.style.top = value.y + 'px';
}

source.subscribe(
    onNext,
    (e) => console.log(`Error: ${e}`),
    () => console.log(`Complete`)
);
