function myStyle(id,border,color) {
    let card = document.getElementById(id);
    let r = true;
    let c = card.getElementsByClassName('card-title-twitter');
    if(!border) {
      r = false;
      border = 'rgba(0,0,0,.125)';
      c = card.getElementsByTagName("h6");
    }
    card.style.borderColor = border ;
    changeColor(c,color,r);
  }
  function changeColor(c,color,remove) {
    for (const cn of c) {
      remove ? cn.classList.remove("card-title-twitter") : cn.classList.add("card-title-twitter");
      cn.style.color = color;
    }
  }

