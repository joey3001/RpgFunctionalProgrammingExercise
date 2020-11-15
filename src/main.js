import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Age from './js/age.js';

$('#calculator').submit(function(event) {
  event.preventDefault();
  let newAge = new Age(parseInt($('#number').val()));
  newAge.mercuryYears();
  newAge.venusYears();
  newAge.marsYears();
  newAge.jupiterYears();
  newAge.remainingYears();
  newAge.remainingMercuryYears();
  newAge.remainingVenusYears();
  newAge.remainingMarsYears();
  newAge.remainingJupiterYears(); 
  $('#mercury').text('Mercury Age: ' + newAge.mercuryAge.toFixed());
  $('#mercuryTimeLeft').text('Years Left : ' + newAge.remainingMercuryTime.toFixed());
  $('#mars').text('Mars Age: ' + newAge.marsAge.toFixed());
  $('#marsTimeLeft').text('Years Left: ' + newAge.remainingMarsTime.toFixed());
  $('#venus').text('Venus Age: ' + newAge.venusAge.toFixed());
  $('#venusTimeLeft').text('Years Left: ' + newAge.remainingVenusTime.toFixed());
  $('#jupiter').text('Jupiter Age: ' + newAge.jupiterAge.toFixed());
  $('#jupiterTimeLeft').text('Years Left: ' + newAge.remainingJupiterTime.toFixed());
  $('.columnbox1').fadeIn("slow");
  $('.columnbox2').fadeIn("slow");
});