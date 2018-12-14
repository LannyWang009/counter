$(document).ready(function () {
  console.log('ready')
  // load value
  $.get('http://localhost:3000/GET/value')
    .then(function (data) {
      console.log(data)
      $('#counter').text(data)
    })
})

// This function uses AJAX to run the increment function when
// the 'Increase' button is clicked and
// console.logs it to show the results of the function
$('#increase').click(function () {
  console.log('running increase api')
  $.post('/POST/increment')
    .then(function (data) {
      console.log(data)
      $('#counter').text(data)
    })
})
// This function uses AJAX to run the decrement function when
// the 'Decrease' button is clicked and
// console.logs it to show the results of the function
$('#decrease').click(function () {
  console.log('clicked decrease')
  $.post('/POST/decrement')
    .then(function (data) {
      console.log(data)
      $('#counter').text(data)
    })
})

// $(document).click(function () {
//   console.log('updating')
//   // load value
//   $.get('http://localhost:3000/GET/value')
//     .then(function (data) {
//       console.log(data)
//       $('#counter').text(data)
//     })
// })
