# El camino

Página para Ro. Portada con el atardecer, y al deslizar se abre el camino:
18 fotos alternando lados, con tus frases entre medio, hasta el "Te quiero mucho".

Música: *Alaguita* — Seiscuerdas. Arranca cuando ella aprieta la flecha, y
sigue sonando mientras baja. Abajo a la derecha queda un botón chico para pausar.

## Archivos

```
index.html
styles.css
script.js
fotos/
  portada.jpg       ← el atardecer
  foto-01.jpg … foto-18.jpg
```

Las fotos ya vienen achicadas (3 MB en total en vez de 50 MB), así que carga
rápido en el celular. Los originales siguen intactos en `2_El_Camino/FOTOS`.

## Cambiar algo

- **El orden de las fotos**: están numeradas. Para mover una, renombra los
  archivos; el `index.html` no se toca.
- **Las frases**: están en el `index.html`, busca `class="frase"`.
- **Sacar una foto**: borra su `<figure>` y el `<div class="hito">` que va justo
  debajo, en el `index.html`.

## Subirla a GitHub

1. Sube el contenido de esta carpeta a la raíz del repo (los tres archivos más
   la carpeta `fotos`).
2. Settings → Pages → Source: **Deploy from a branch**.
3. Branch: `main`, carpeta `/ (root)` → Save.
4. En un par de minutos queda en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

Si cambias el `styles.css` o el `script.js` y no ves el cambio, súbele el número
a `?v=1` en el `index.html` — eso obliga al navegador a bajar la versión nueva.
