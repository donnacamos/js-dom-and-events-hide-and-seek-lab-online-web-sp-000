function getFirstSelector(selector){
  return document.querySelector(selector)
}

function classFromId(idName, className){
  return function(){
    return document.querySelector(`#${idName} .${className}`);
  }
}
