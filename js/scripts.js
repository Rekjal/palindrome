$(document).ready(function(){
  $('#formOne').submit(function(){
    let arr = $('#userString').val().split(""); // do not remove
    const originalArr = $('#userString').val().split(""); // do not remove
    arr = arr.reverse(); 
    if(arr.toString() === originalArr.toString()){
      console.log(arr.toString())
      console.log(originalArr.toString())
      console.log('worked!');
    } else {
      console.log('not a palinidrome');
    }

    event.preventDefault();
  })
});