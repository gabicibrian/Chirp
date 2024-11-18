CHIRP - Red Social centrada en videojuegos y mujeres
Gabriela Cibrián, Eunice Brevé

![alt text](https://github.com/gabicibrian/Chirp/blob/master/chirp/src/assets/muestra-splashscreen.png)

Links disponibles para visualizar:

https://chirp-ddp-virid.vercel.app/

En caso de que no funcione el anterior: https://chirp-i1ip4ptkq-gabicibrians-projects.vercel.app/

Para este proyecto se utilizó React.js por su habilidad de crear componentes reutilizables y las librerías disponibles.

Bibliotecas utilizadas:
1. Framer Motion/Motion: Biblioteca de animaciones/transiciones. https://motion.dev/
2. Material Design: Biblioteca de componentes nativos de MD3. https://github.com/material-components/material-web/blob/main/docs/quick-start.md
3. Lottie-React: Biblioteca que permite reproducir animaciones vectoriales (JSON Lottie). https://lottiefiles.com/

+ otras librerías de funcionalidad de React

Estructura del proyecto:

'chirp': folder principal:
a. node_modules: Contiene información de librerías/datos de React
b. public: Contiene el index.html donde se transfiere toda la información y los datos e imágenes para la web app e.g: Nombre, ícono que tendrá en el celular y los colores principales para su personalización.
c. src: Contiene todo lo modificable, está dividida de la siguiente manera:
+ assets: Imágenes, json(lottie) y SVGs.
+ components: Componentes únicos y propios de Chirp que hemos recreado a los que realizamos en Figma.
+ css: Todos los archivos .css de estilo.
+ screens: Pantallas ya listas para ser vistas.
+ Otros archivos: App.js, index.js y MainContent.js manejan los links y cómo se transmite la información al public/index.html.

