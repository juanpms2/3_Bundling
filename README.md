# 3_Bundling
Ejercicios del modulo 3 bundling con webpack y parcel
El ejercicio consta de dos partes, en el directorio principal se encuentra la configuración del proyecto con webpack y en este se encuentra un directorio nombrado como **"parcel"** donde se encuentra configurado el ejercicio de bundling con parcel.
Ejecución del ejercicio de Webpack:
- **npm start** levanta el servidor con el proyecto sin más.
- **npm run build:dev** levanta el servidor con el proyecto y nos genera el directorio **dist** con los archivos en la fase de desarrollo.
- **npm run build:prod** genera el directorio **dist** con el proyecto ya listo para subir a producción.
- **npm run build:perf** levanta el servidor con el proyecto y nos muestra un análisis del peso de nuestro bundle utilizando para ello el plugin **bundle-analyzer**.

En el ejercicio con **Parcel** se ha utilizado la librería **dotenv** para las variables de entorno y tanto **Sass** como **TypeScript** se han tenido que instalar de manera manual ya que Parcel no lo hacía de manera automática, aun así el proyecto compilaba y funcionaba sin problemas sin estar instaladas estas dependencias.
Ejecución del ejercicio de Parcel:
- **npm run build** levanta el servidor y genera el directorio **dist** en la fase de desarrollo.
- **npm run build:prod** genera el directorio **dist** con los archivos optimizados para producción y nos muestra por consola información del peso de estos archivos.
