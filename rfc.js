var http = require('http');
const RFC4122 = require('rfc4122');

var server = http.createServer(function (request, response) {
    response.writeHead(200, { "content-type": "text/plain" });


    let rfc4122 = new RFC4122();

    rfc4122.v1();
    // ebc386d0-4c07-11a5-0ea7-f1d320998c65 

    rfc4122.v3('6ba7b810-9dad-11d1-80b4-00c04fd430c8', 'string');
    // 01ab89a5-ffc7-35b0-89b4-440e5d0949ca 

    rfc4122.v4();
    // b58029b3-4f28-400a-968d-82d6f8def2ab 

    /* Faster version of V4 */
    rfc4122.v4f();
    // aad2c1d7-66f1-4b7e-946a-d56ac9da5f48 

    rfc4122.v5('6ba7b810-9dad-11d1-80b4-00c04fd430c8', 'string');
    // fbb6b6b4-f910-5516-b5d9-8967c4835c76 

    //variable declaration
    var string = "Rajesh here";

});

server.listen(3000);