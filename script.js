// Typewriter Effect

const text = "B.Sc CS Student | Aspiring Software Developer | Future Zoho Engineer";

let i = 0;

function typeWriter() {

if (i < text.length) { document.getElementByl d("tagline").innerHTML += text.charAt(i);

i++;

setTimeout(type Writer, 80);

}

}

typeWriter();

2

// Button click alert function sayHello() { alert("Hello! Thanks for visiting my portfolio ");

}