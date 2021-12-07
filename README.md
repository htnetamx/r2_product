[![Deploy to Amazon ECS](https://github.com/htnetamx/r2_product/actions/workflows/product.yml/badge.svg)](https://github.com/htnetamx/r2_product/actions/workflows/product.yml)

Microservicio de Producto
==========================
Microservicio web que permite descargar de las diferentes categorias de Neta.

El flujo es:
 - La aplicacion frontend realiza una peticion al endpoint ../product/ para obtener todas las productos existentes.
 - La aplicacion frontend realiza una peticion al endpoint ../product/:id para obtener la informacion de un producto en especifico.



Instalando ambiente para desarrollo
--------------------------

Instalar los requerimientos



    npm install

Crear un archivo '.env' con las credenciales necesarias.


    DATABASE_MYSQL_USER=
    DATABASE_MYSQL_PASSWORD=
    DATABASE_MYSQL_HOST=
    DATABASE_MYSQL_NAME=

Instalar los requerimientos

    npm run dev

Verificar en la consola que la aplicacion se ejecuto correctamente, abrir un navegador y verificar en el http://localhost:3000

Compilacion de imagen Docker

    docker build -t r2_product:latest .

Ejecuccion de imagen Docker pasandole el archivo .env 

     docker run --env-file .env -p 3001:3001 r2_product

Deploy
------

El deploy se registra un nuevo cambio en las ramas dev y main ya se mediante el merge de un pull request o un cambio directo en estas ramas.
