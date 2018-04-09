var Rx = require('rxjs/Rx');

let aDatos = [1, 2, 3, 4, 5, 6];

Rx.Observable
    .from(aDatos)
    .map(x => x*x)
    .filtler(x=> x>15)

const observador = Rx.Observer.create(
    function onNext(x) { console.log('Next: ' + x) },
    function onError(err) { console.log('Error:' + err) },
    function onCompleted() { console.log('Completed!') }
)

// parece que asi no funciona
observable.subscribe(observador);
