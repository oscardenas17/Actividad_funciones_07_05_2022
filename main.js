let producto1 ={
    titulo: 'VueJS',
    parrafo: 'Vue.js es un framework de JavaScript de código abierto para la construcción de interfaces de usuario y aplicaciones de una sola página',
    logo: 'img/vue-lg.png',
    img: 'img/vue-logo.png',
    id: document.querySelector('#producto1')
};
let producto2 ={
    titulo: 'React',
    parrafo: 'React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.',
    logo: 'img/react-lg.png',
    img: 'img/react.logo.png',
    id: document.querySelector('#producto2')
};
let producto3 ={
    titulo: 'VueJS',
    parrafo: 'React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.',
    logo: 'img/react-lg.png',
    img: 'img/react.logo.png',
    id: document.querySelector('#producto3')
};
let producto4 ={
    titulo: 'Laravel',
    parrafo: 'Laravel es un framework de código abierto para desarrollar aplicaciones y servicios web con PHP 5, PHP 7 y PHP 8. Su filosofía es desarrollar código PHP de forma elegante y simple, evitando el "código espagueti".',
    logo: 'img/laravel-lg.png',
    img: 'img/laravel-logo.png',
    id: document.querySelector('#producto4')
};
let producto5 ={
    titulo: 'NetCore',
    parrafo: 'NET 6, el framework de Windows, para que seas el primero en disfrutarlas. Tras más de un año de desarrollo la nueva versión de . NET 6 acaba de ser lanzada por Microsoft.',
    logo: 'img/notecore-lg.png',
    img: 'img/netcore-logo.png',
    id: document.querySelector('#producto5')
};
let producto6 ={
    titulo: 'Svelte',
    parrafo: 'Svelte es un compilador Front End gratuito y de código abierto ​ creado por Rich Harris y mantenido por los miembros del equipo central de Svelte. ​ Las aplicaciones Svelte no incluyen referencias al framework',
    logo: 'img/svelte-lg.png',
    img: 'img/svelte-logo.png',
    id: document.querySelector('#producto6')
};
let producto7 ={
    titulo: 'Django',
    parrafo: 'Django es un framework de desarrollo web de código abierto, escrito en Python, que respeta el patrón de diseño conocido como modelo–vista–controlador.',
    logo: 'img/django-lg.png',
    img: 'img/django-logo.png',
    id: document.querySelector('#producto7')
};
let producto8 ={
    titulo: 'NextJS',
    parrafo: 'Next.js es un marco de desarrollo web de código abierto creado sobre Node.js que permite funcionalidades de aplicaciones web basadas en React, como la representación del lado del servidor y la generación de sitios web estáticos',
    logo: 'img/next-lg.png',
    img: 'img/next-logo.png',
    id: document.querySelector('#producto8')
};
let producto9 ={
    titulo: 'NodeJS',
    parrafo: 'Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript, asíncrono, ',
    logo: 'img/node-lg.png',
    img: 'img/node-logo.png',
    id: document.querySelector('#producto9')
};
let producto10 ={
    titulo: 'tailwindCSS',
    parrafo: 'Tailwind CSS es un framework de CSS de código abierto​ para el diseño de páginas web. La principal característica de esta biblioteca es que, a diferencia de otras como Bootstrap, no genera una serie de clases predefinidas para elementos como botones o tablas',
    logo: 'img/tailwind-lg.png',
    img: 'img/tailwind-logo.png',
    id: document.querySelector('#producto10')
};

let mostrar = (
    titulo="Titulo", 
    parrafo="Descripcion", 
    logo="img/defaul_logo.png", 
    img="img/defaul.png", id)=>{

    let caja = id;
    let html = `<div class="circle">
                    <img src="${logo}" class="logo">
                </div>
                <div class="content">
                    <h2>${titulo}</h2>
                    <p>${parrafo}</p>
                    <a href="#">Ver Más</a>
                </div>
                <img src="${img}" class="product_img">`;
    caja.insertAdjacentHTML("beforeend", html);
}
let defaul = {
    titulo: undefined,
    parrafo: undefined,
    logo: undefined,
    img: undefined
};
mostrar(...Object.values(producto1));
mostrar(...Object.values(producto2));
mostrar(...Object.values(producto3));
mostrar(...Object.values(producto4));
mostrar(...Object.values(producto5));
mostrar(...Object.values(producto6));
mostrar(...Object.values(producto7));
mostrar(...Object.values(producto8));
mostrar(...Object.values(producto9));
mostrar(...Object.values(producto10));
