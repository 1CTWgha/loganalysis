fs = require('fs');

fs.readFile('./BrowserHistory.json', function(error, data){
  if (error){
  return console.log(error);
}
  console.log('Processing');
  var log = JSON.parse(data)['Browser History'];
  console.log(log.length);
  log = log.filter(function(item) {
    // return item.title == "";
    return item.title !== "";

  }).map((item) => {
    item.class = 'unkown';
    item.time_usec = new Date(item.time_usec);
    return item;
  });
  console.log(log);
});
