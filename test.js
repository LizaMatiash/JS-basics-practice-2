 document.getElementById('convert').addEventListener('submit', function(event) {

  event.preventDefault();
  let distance = parseFloat(document.getElementById('distance').value);
  // alert(distance);
  let answer = document.getElementById('answer');
  if(distance){
    // alert(distance);
    let converted = (distance * 1.609344).toFixed(3);
    alert(converted);
    answer.innerHTML = `<h2>Inverted distance is ${converted} km</h2>`;

  }
  else{
    answer.innerHTML = `<h2>You entered wrong number</h2>`;
  }







  })
