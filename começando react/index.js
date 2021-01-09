const root = document.getElementById('root');


const elemento = React.createElement('h1',{id:'Título principal'},'Olá Mundo');
const elemento2 = React.createElement('p',{id:'paragrafo'},'subtitulo');

const headline = React.createElement('div',null, elemento,elemento2);


ReactDOM.render(headline, root);