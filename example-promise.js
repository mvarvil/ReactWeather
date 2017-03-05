// function getTempCallback(location, callback) {
//     callback(undefined, 78);
//     callback('City not found');
// }

// getTempCallback('Dallas', function(err, temp) {
//     if (err) {
//         console.log('error', err);
//     } else {
//         console.log('success', temp);
//     }
// })

// function getTempPromise(location) {
//     return new Promise(function (resolve, reject){
//         setTimeout(function() {
//             resolve(79);
//             reject('City not found');   
//         }, 1000)
//     });
// }

// getTempPromise('Dallas').then(function(temp) {
//     console.log('promise success', temp);
// }, function() {
//     console.log('promise err', err);
// })

function getAddPromise(a, b) {
    return new Promise(function (resolve, reject) {
        if ((typeof a === 'number') && (typeof b === 'number')) {
            var sum = a + b;
            resolve(sum);
        }
        reject('paramater a or b is not a number');
    });
}

getAddPromise('x', 2).then(function(sum) {
    console.log('promise success.  Sum:  ', sum);
}, function(err) {
    console.log('promise err', err);
})