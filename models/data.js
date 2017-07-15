var Cloudant = require('cloudant');

var service_url = 'URL';
var service_username = 'username';
var service_password = 'svc.password';
var service_host = 'svc.host';
var service_port = 'svc.port';
var db_name = 'dbname';

console.log('Parsing VCAP_SERVICES');
var services = JSON.parse(process.env.VCAP_SERVICES);
var service_name = 'cloudantNoSQLDB';

if (services[service_name]) {
	var svc = services[service_name][0].credentials;
	service_url = svc.url;
	service_username = svc.username;
	service_password = svc.password;
	service_host = svc.host;
	service_port = svc.port;
} else {
	console.log('The service ' + service_name
                + ' is not in the VCAP_SERVICES, did you forget to bind it?');
}

console.log('service_username = ' + service_username);
console.log('service_password = ' + new Array(service_password.length).join("X"));
console.log('service_host = ' + service_host);
console.log('service_port = ' + service_port);

var cloudant = Cloudant(service_url);
var dbi = cloudant.db.use(db_name);
cloudant.db.list(function(err, body) {
  // body is an array
  body.forEach(function(db) {
    console.log(db);
  });
});

module.exports.objError = {
  shortTitle: 'Error 404',
  longTitle: 'Not Found',
  abstract: '謹んで404エラーをお知らせします',
  description: '',
  keywords: '',
  content: ''
};

module.exports.readDocument = function(docName, callbackfunc) {
  dbi.get(docName, function(errArg, docArg){
    callbackfunc(errArg, docArg);
  });
};

module.exports.createDocument = function(doc, callbackfunc) {
  dbi.insert(doc, function(errArg, docArg){
    callbackfunc(errArg, docArg);
  });
};

module.exports.updateDocument = function(doc, docname, callbackfunc) {
	dbi.insert(doc, docname, function(errArg, docArg){
    callbackfunc(errArg, docArg);
  });
};
