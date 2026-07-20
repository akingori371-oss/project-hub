const html = document.getElementById('html').value;
const CSS = document.getElementById('CSS').value;
const Javascript = document.getElementById('Javascript').value;
const React = document.getElementById('React').value;
const Vue = document.getElementById('Vue').value;
const Angular = document.getElementById('Angular').value;
const Svelte = document.getElementById('Svelte').value;
const Node = document.getElementById('Node').value;
const Python = document.getElementById('Python').value;
const Java = document.getElementById('Java').value;
const PHP = document.getElementById('PHP').value;
const Ruby = document.getElementById('Ruby').value;
const Framework = document.getElementById('Framework').value;
const MERN = document.getElementById('MERN').value;
const MEAN = document.getElementById('MEAN').value;
const Django = document.getElementById('Django').value;
const Nextjs = document.getElementById('Next.js').value;
const button = document.getElementById(`Submit`);
const result = document.getElementById(`Result`)

let hasHTML = checkHTML(html);
let hasCSS = checkCSS(CSS);
let hasJavascript = checkJavascript(Javascript);
let hasReact = checkReact(React);
let hasVue = checkVue(Vue);
let hasAngular = checkAngular(Angular);
let hasSvelte = checkSvelte(Svelte);
let hasNode = checkNode(Node);
let hasPython = checkPython(Python);
let hasJava = checkJava(Java);
let hasPHP = checkPHP(PHP);
let hasRuby = checkRuby(Ruby);
let hasFramework = checkFramework(Framework);
let hasMERN = checkMERN(MERN);
let hasMEAN = checkMEAN(MEAN);
let hasDjango = checkDjango(Django);
let hasNextjs = checkNextjs(Nextjs);

let finalscore = [];
let totalScore = 0;

button.addEventListener(`click`, () => {
  
  let hasHeading = /<h[1-6]>/.test(html);
  checkHTML(html)
  function checkHTML(html) {
    if(html.includes('<html>')  && hasHeading && html.includes('<p>') && (html.includes(`<div>`) && html.includes(`id`) || html.includes(`class`))) {
         totalScore += 3
      
   }
      if (html.includes("href") || (html.includes("target") && html.includes("<button>")) || html.includes(`<input`)){
         totalScore += 2;
       
      }
     if((html.includes(`<img`) && html.includes(`<ul>`) || html.includes(`<ul>`)) && (html.includes(`<span>`) || html.includes(`<form>`) || html.includes(`<textarea>`) || html.includes(`<label>`))){
        totalScore += 3
        
    }  
     if(html.includes(`<header>`) || html.includes(`<nav>`) || html.includes(`<main>`) && html.includes(`section`) || html.includes(`article`) || html.includes(`<aside>`) || html.includes(`<footer>`)) {
        totalScore += 2;
    
    };
    
   
    
}

function checkCSS(CSS){
   if(CSS.includes('color') && CSS.includes('width') && CSS.includes('margin') && CSS.includes('padding') && CSS.includes('border'))
   {totalScore += 3}
   if(CSS.includes('display') || CSS.includes('position') && CSS.includes('overflow')){
   totalScore += 2
}   if(CSS.includes('flex-direction') && CSS.includes('justify-content') && CSS.includes('align-items') || CSS.includes('gap') && CSS.includes('flex') || CSS.includes('grid')){
   totalScore += 3
}   if(CSS.includes('font-size') || CSS.includes('font-weight') || CSS.includes('font-family') || CSS.includes('line-height') || CSS.includes('text-align') ){
   totalScore += 2
}   if(CSS.includes('background-color') && CSS.includes('border-radius') && CSS.includes('box-shadow') && CSS.includes('opacity'));
   {totalScore += 3}
    if(CSS.includes('max-width') && CSS.includes('min-width') && CSS.includes('margin'));
   {totalScore += 3}
}


}
)

