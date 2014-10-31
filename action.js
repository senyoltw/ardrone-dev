var arDrone = require('ar-drone');
var client  = arDrone.createClient();

client.takeoff();

client
  .after(3000, function() {
    this.up(0.5);
  })
  .after(1000, function() {
  	this.animate('flipRight', 100);
  })
  .after(1000, function() {
    this.up(1);
  })
  .after(1000, function() {
  	this.animate('flipAhead', 100);
  })
  .after(1000, function() {
    this.up(1);
  })
  .after(1000, function() {
  	this.animate('flipLeft', 100);
  })
  .after(500, function() {
    this.stop();
    this.land();
  });
