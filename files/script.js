function changeBorderColor( idVal ){

  return new Promise(function (resolve) {
    setTimeout(function () {
      var element = document.getElementById(idVal)
      console.log('Td is - ', element, idVal);

      if (element) {
        element.style.borderLeft = '4px solid #0d6efd';
      }
      resolve();
    }, 500);
  });
}

async function delaySetColors(){
  IdList = ['one','two','three','four']
  for ( let i=0; i< IdList.length; i++ ){
    await changeBorderColor(IdList[i]);
  }
}


document.addEventListener('DOMContentLoaded', function(){
  console.log('DOM is ready');
  delaySetColors();
});
