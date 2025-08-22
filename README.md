# Presentación: Seguridad Informática

Sitio estático de diapositivas listo para publicar en GitHub Pages.

Estructura principal:

- `index.html` — HTML principal con el contenido de las diapositivas.
- `css/styles.css` — Estilos separados y variables de tema.
- `js/script.js` — Lógica de navegación, autoplay y soporte táctil.

Probar localmente (PowerShell):

```powershell
# Servir en http://localhost:8000
python -m http.server 8000
# abrir en el navegador (Windows)
start http://localhost:8000
```

Publicar en GitHub Pages:

1. Crear un repositorio en GitHub y subir todos los archivos (por ejemplo, `main` branch).
2. En Settings > Pages, seleccionar la rama `main` y la carpeta `/ (root)` y guardar.
3. Esperar unos minutos y acceder al enlace de GitHub Pages.

Si prefieres publicar desde la rama `gh-pages`, puedo crear un workflow o ayudarte a empujar esa rama.
