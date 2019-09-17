function getFirstSelector(selector){
  return document.querySelector(selector)
}

function classFromId(idName, className){
  return function(){
    return document.querySelector(`#${idName} .${className}`);
  }
}

const nestedTarget = classFromId('nested', 'target');

function increaseRankBy(n){
  const lis = document.querySelectorAll(`ul.ranked-list li`)
  for(let li of lis){
    li.textContent = Number.parseInt(li.textContent) + n;
  }
}

function deepestChild(){
  const body = document.querySelector('body')
  const stack = [];
  const initialNum = -1;
  let deepestNode = {[initialNum]: "inconsequential"}
  const bodyChildren = body.children;
  for(let i = 0; i < bodyChildren.length; i++){
    stack.push({0: bodyChildren[i]})
  }
}
