var images=[
    "https://cdn5.vectorstock.com/i/1000x1000/40/79/character-woman-female-adult-parent-family-member-vector-15024079.jpg",
    "https://cdn1.vectorstock.com/i/1000x1000/27/85/cute-boy-cartoon-vector-16632785.jpg",
  ];
  var i=0;
  function nextslide(){
    document.getElementById("name").innerHTML=reasons[i];
    document.getElementById("album").src=images[i];
    i++;

  }