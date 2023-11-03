const https = require('https');

function httpsRequest(params, postData) {
    return new Promise(function(resolve, reject) {

        var req = https.request(params, function(res) {
            // reject on bad status
            if (res.statusCode < 200 || res.statusCode >= 300) {
                //reject(new Error('statusCode=' + res.statusCode));
                reject('Error: statusCode=' + res.statusCode);
            }
            // cumulate data
            var body = [];
            res.on('data', function(chunk) {
                body.push(chunk);
            });
            // resolve on end
            res.on('end', function() {
                try {
                    body = JSON.parse(Buffer.concat(body).toString());
                } catch(e) {
                    reject(e);
                }
                resolve(body);
            });
        });


        // reject on request error
        req.on('error', function(err) {
            // This is not a "Second reject", just a different sort of failure
            reject(err);
        });

        if (postData) {
            req.write(postData);
        }
        // IMPORTANT
        req.end();
    });
}

var word = 'wave';

var params = {
    host: 'api.dictionaryapi.dev',
    port: 443,
    method: 'GET',
    path: 'api/v2/entries/en/' + word
    //    ^
    //    |
    //   error falta barra inicial
};
// this is a get, so there's no post data

var otherWord = "mountain";

var otherParams = {
    host: 'api.dictionaryapi.dev',
    port: 443,
    method: 'GET',
    path: '/api/v2/entries/en/' + otherWord
};
// httpsRequest(params).then(function(body) {
//     console.log(body);
// });

//Railtruck pattern:
//then way
//   |-----------------------
//   v                       v
//===X==================X>>>>X====== resolve
//   |                 ^     |
//   V        resolve->|     V
//   t --> P --> t --> P --> t --> X
// reject->|     ^
//         V     |
//=========X>>>>>X================== reject
//               ^
//catch way ------

//                                   t
//                                   |
//                                   V
httpsRequest(params).then(function(body) {
    console.log(body);
        // P
        // |
        // V
    return httpsRequest(otherParams);
    //     t
    //     |
    //     V
}).catch( err => {
    console.log(err);
        // P
        // |
        // V
    return httpsRequest(otherParams);
            //     t
            //     |
            //     V
}).then(function(body) {
    console.log(body);
});
