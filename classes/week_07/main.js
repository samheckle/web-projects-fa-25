window.onload = () => {

    // adding 3 paragraph elements that will contain the sizes of the screen
  let p = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");

  // adding these elements to the web page
  document.getElementById("content").appendChild(p);
  document.getElementById("content").appendChild(p2);
  document.getElementById("content").appendChild(p3);
  // adding an event listener based on the window when the size changes
  window.addEventListener("resize", () => {
    console.log("terst");

    p.innerHTML = "window inner width " + window.innerWidth;

    p2.innerHTML = "body inner width " + document.getElementById('body').clientWidth

    p3.innerHTML = "screen width " + screen.width;
  });
};
