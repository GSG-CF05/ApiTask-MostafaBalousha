let app = document.querySelector("#root");
let container = document.createElement("div");
container.setAttribute('class','container') ; 
app.appendChild(container);
fetch("https://api-mobilespecs.azharimm.site/v2/latest")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
      console.log(data);
      let array = data.data.phones ; 
      console.log(array);
      array.forEach((d) => {
     // console.log(d);
      let card = document.createElement("div");
      card.setAttribute('class','card'); 
      container.appendChild(card);
      let h1 = document.createElement("h1");
      h1.textContent = d.phone_name;
      card.appendChild(h1);
      let img = document.createElement("img");
      img.src =d.image;
      card.appendChild(img);
      let desc = document.createElement("p");
      desc.setAttribute('class','desc') ; 
      desc.textContent = d.slug;
      card.appendChild(desc);
    });
  });