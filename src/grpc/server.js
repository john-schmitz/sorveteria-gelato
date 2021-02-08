var PROTO_PATH = __dirname + '/../../flavors.proto';
console.log(PROTO_PATH)
var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
var flavorsProto = grpc.loadPackageDefinition(packageDefinition).helloworld;

const FlavorService = require('../services/FlavorsService');

function FetchAllFlavors(call, callback) {
    FlavorService.findAllFlavors().then((flavors) => {
        callback(null, flavors);
    });
}

function main() {
  var server = new grpc.Server();
  server.addService(flavorsProto.Flavors.service, {fetchAllFlavors: FetchAllFlavors});
  server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
  });
}

main();