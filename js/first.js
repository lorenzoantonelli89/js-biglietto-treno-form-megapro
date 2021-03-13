
var generatesBtn = document.getElementById('genera');
var cancelBtn = document.getElementById('annulla');
var price = 0.21;

// click su genera

generatesBtn.addEventListener('click', function(){
  var name = document.getElementById('name').value;
  var distance = parseInt(document.getElementById('distance').value);
  var age = document.getElementById('age').value;
  var public = document.getElementById('public').value;
  var totalPrice = price * distance;

  if (name != '' && distance > 0 && age != '' && public == '') {
    var carriage = Math.floor(Math.random() * 20) + 1;
    var code = Math.floor(Math.random() * 100000 - 90000) + 90000;
    document.getElementById('namepass').innerHTML = name;
    document.getElementById('offerta').innerHTML = age;
    document.getElementById('carrozza').innerHTML = carriage;
    document.getElementById('codiceCP').innerHTML = code;

    if (age == 1) {
      totalPrice = (totalPrice / 100 * 80);
      document.getElementById('offerta').innerHTML = 'Sconto 20%';
    }else if (age == 3) {
      totalPrice = (totalPrice / 100 * 60);
      document.getElementById('offerta').innerHTML = 'Sconto 40%';
    }else {
      document.getElementById('offerta').innerHTML = 'Prezzo Pieno';
    }

    document.getElementById('costobigl').innerHTML = totalPrice.toFixed(2) + ' €';



  }else if (name != '' && distance > 0 && age != '' && public != '') {

    var carriage = Math.floor(Math.random() * 20) + 1;
    var code = Math.floor(Math.random() * 100000 - 90000) + 90000;
    document.getElementById('namepass').innerHTML = name;
    document.getElementById('offerta').innerHTML = age;
    document.getElementById('carrozza').innerHTML = carriage;
    document.getElementById('codiceCP').innerHTML = code;

    totalPrice = (totalPrice / 100 * 40);
    document.getElementById('offerta').innerHTML = 'Sconto Militari 60%';

    document.getElementById('costobigl').innerHTML = totalPrice.toFixed(2) + ' €';
  }else {
    alert('Non hai inserito correttamente tutti i dati riprova!')
  }

});

// click su annulla

cancelBtn.addEventListener('click', function(){
  document.getElementById('namepass').innerHTML = '';
  document.getElementById('offerta').innerHTML = '';
  document.getElementById('carrozza').innerHTML = '';
  document.getElementById('codiceCP').innerHTML = '';
  document.getElementById('costobigl').innerHTML = '';
})
