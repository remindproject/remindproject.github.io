# Web del proyecto

Web estática (HTML + CSS + JS, sin instalar nada) pensada para GitHub Pages.

## Archivos

| Archivo | Pestaña / función |
|---|---|
| `index.html` | About the project (portada) |
| `team.html` | Team members |
| `news.html` | News |
| `publications.html` | Publications |
| `404.html` | Página de error |
| `site.css` | Estilos (colores y fuentes en `:root`, al principio) |
| `site.js` | Menú en móvil, pestaña activa, botones BibTeX |
| `favicon.svg` | Icono de la pestaña del navegador |
| `images/` | Fotos del equipo, figuras e imagen para redes (`og.png`, 1200x630) |
| `papers/` | PDFs de las publicaciones (opcional) |

## Cómo editar

1. Busca `Project Name` en todos los archivos y cámbialo por el nombre del proyecto.
2. Cambia el correo `contact@example.com` del pie de página.
3. Rellena cada página: los comentarios `<!-- ... -->` indican qué copiar para añadir personas, noticias o publicaciones.
4. Para cambiar el color principal, edita `--accent` y `--accent-soft` en `site.css`.

La cabecera y el pie están repetidos en las cuatro páginas: si añades o renombras una pestaña, cámbialo en todas.

## Ver la web en local

```bash
python3 -m http.server 8000
# abre http://localhost:8000
```

## Publicar con GitHub Pages

Settings → Pages → Source: **Deploy from a branch** → rama `main`, carpeta `/ (root)` → Save.
