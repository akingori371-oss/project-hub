const html = document.getElementById('html').value;
const CSS = document.getElementById('CSS').value;
const Javascript = document.getElementById('Javascript').value;
const button = document.getElementById('Submit');
const result = document.getElementById('Result');

let totalScore = 0;

function checkHTML(html) {
  let hasHeading = /<h[1-6]>/.test(html);

  if (html.includes('<html>') && hasHeading && html.includes('<p>') &&
     (html.includes('<div>') && html.includes('id') || html.includes('class'))) {
    totalScore += 3;
  }
  if (html.includes("href") || (html.includes("target") && html.includes("<button>")) || html.includes('<input')) {
    totalScore += 2;
  }
  if ((html.includes('<img') && html.includes('<ul>') || html.includes('<ul>')) &&
     (html.includes('<span>') || html.includes('<form>') || html.includes('<textarea>') || html.includes('<label>'))) {
    totalScore += 3;
  }
  if (html.includes('<header>') || html.includes('<nav>') || html.includes('<main>') && html.includes('section') ||
      html.includes('article') || html.includes('<aside>') || html.includes('<footer>')) {
    totalScore += 2;
  }
}

function checkCSS(CSS) {
  if (CSS.includes('color') && CSS.includes('width') && CSS.includes('margin') && CSS.includes('padding') && CSS.includes('border')) {
    totalScore += 3;
  }
  if (CSS.includes('display') || CSS.includes('position') && CSS.includes('overflow')) {
    totalScore += 2;
  }
  if (CSS.includes('flex-direction') && CSS.includes('justify-content') && CSS.includes('align-items') ||
      CSS.includes('gap') && CSS.includes('flex') || CSS.includes('grid')) {
    totalScore += 3;
  }
  if (CSS.includes('font-size') || CSS.includes('font-weight') || CSS.includes('font-family') || CSS.includes('line-height') || CSS.includes('text-align')) {
    totalScore += 2;
  }
  if (CSS.includes('background-color') && CSS.includes('border-radius') && CSS.includes('box-shadow') && CSS.includes('opacity')) {
    totalScore += 3;
  }
  if (CSS.includes('max-width') && CSS.includes('min-width') && CSS.includes('margin')) {
    totalScore += 3;
  }
}

function checkJavascript(Javascript) {
  if (Javascript.includes("let ") || Javascript.includes("const ") || Javascript.includes("var ") &&
      Javascript.includes("document.getElementById") || Javascript.includes("document.querySelector") || Javascript.includes("addEventListener")) {
    totalScore += 3;
  }
  if (Javascript.includes("function") || Javascript.includes("=>") ||
      Javascript.includes("if(") || Javascript.includes("if (") ||
      Javascript.includes("document.")) {
    totalScore += 3;
  }
}

button.addEventListener('click', () => {
  totalScore = 0; 
  
  const html = document.getElementById('html').value;
const CSS = document.getElementById('CSS').value;
const Javascript = document.getElementById('Javascript').value;

  checkHTML(html);
  checkCSS(CSS);
  checkJavascript(Javascript);

  result.textContent = `Your total score is ${totalScore} out of 19`;
});