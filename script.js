async function data() {
  try {
    const input = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await input.json();
    const div1 = document.createElement("div");
    div1.setAttribute("class", "div1-style");
    div1.innerHTML = "<h1>Users List</h1>";
    const div2 = document.createElement("div");
    div2.setAttribute("class", "div2-style");
    document.body.append(div1);
    document.body.append(div2);
    for (let i = 0; i < result.length; i++) {
      const div = document.createElement("div");
      div.setAttribute("class", "div-style");
      const span = document.createElement("span");
      const span1 = document.createElement("span");
      const span2 = document.createElement("span");
      const span3 = document.createElement("span");
      function cretelinebreak(tagname){
      const linebreak = document.createElement(tagname);
      return linebreak;
      }
      const linebreak=cretelinebreak("br")
      const linebreak1=cretelinebreak("br")
      const linebreak2=cretelinebreak("br")
      const linebreak3=cretelinebreak("br")
      const linebreak4=cretelinebreak("br")
      const linebreak5=cretelinebreak("br")
      const linebreak6=cretelinebreak("br")
      const linebreak7=cretelinebreak("br")
      const linebreak8=cretelinebreak("br")
    
      span.innerHTML = `<b>Name : ${result[i].name}</b>`;
      span1.innerHTML = `Email : ${result[i].email}`;
      span2.innerHTML = `Street : ${result[i].address.street}`;
      span3.innerHTML = `City : ${result[i].address.city}`;
      div.appendChild(span);
      div.appendChild(linebreak);
      div.appendChild(linebreak1);
      div.appendChild(span1);
      div.appendChild(linebreak2);
      div.appendChild(linebreak3);
      div.appendChild(span2);
      div.appendChild(linebreak4);
      div.appendChild(linebreak5);
      div.appendChild(span3);
      div.appendChild(linebreak6);
      div.appendChild(linebreak7);
      div2.append(div,linebreak8);
    }
  } catch (error) {
    console.log(error);
  }
}
data();
