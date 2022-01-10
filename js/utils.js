function myStyle(id,border,color,icon) {
    let card = document.getElementById(id);
    let r = true;
    let c = card.getElementsByClassName('card-title-twitter');
    if(!border) {
      r = false;
      border = 'rgba(0,0,0,.125)';
      c = card.getElementsByTagName("h6");
    }
    if(icon) {
      let icons = card.getElementsByClassName("bi");
      changeColor(icons,color,false,true);
    }
    card.style.borderColor = border ;
    return changeColor(c,color,r,false);
}
// mudar a cor de fontes e tudo mais 
function changeColor(c,color,remove,icon) {
  for (const cn of c) {
    if(!icon) {
      remove ? cn.classList.remove("card-title-twitter") : cn.classList.add("card-title-twitter");
    }
    cn.style.color = color;
  }
}
//remove o elemento da pagina
function remover(id) {
  let e = document.getElementById(id);
  e.style.display = none;
  alert('funcionou');
}
function mySearch(value) {
  //document.getElementsByClassName('card-title')[0].textContent;
  let searchCard = document.getElementsByClassName('card-title');
 alert(document.getElementsByClassName('card-title').value);
}
