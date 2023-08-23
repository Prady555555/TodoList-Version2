var btn = document.querySelector("button");
btn.addEventListener('click',btnFunction);

var array =[];


// addAutomatic();
function addAutomatic(){
  var variable = '';
  for(var i = 0 ; i < array.length; i++){
  var todo = array[i];
  var html = `<p>${todo}</p>`
  variable += html;
  console.log(html);
  document.querySelector('#div-class2').innerHTML= variable;
}}

function btnFunction(){
  var input = document.querySelector('input');
  var name = input.value;
   array.push(name);
  // console.log(array);
  input.value= "";
 addAutomatic();
}