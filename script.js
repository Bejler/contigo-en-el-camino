// Alaguita — Seiscuerdas
const CANCION = "5Y9fnynLlIvqtM710MHzfz";

const portada = document.getElementById("portada");
const abrir   = document.getElementById("abrir");
const btnMusica = document.getElementById("musica");

let reproductor = null;
let sonando = false;
let abierto = false;

/* ---------- reproductor ---------- */

window.onSpotifyIframeApiReady = (API) => {
  API.createController(
    document.getElementById("embed"),
    { uri: `spotify:track:${CANCION}`, width: 300, height: 80 },
    (c) => {
      reproductor = c;
      c.addListener("playback_update", (e) => {
        sonando = !e.data.isPaused;
        btnMusica.classList.toggle("pausado", !sonando);
        btnMusica.innerHTML = sonando ? "&#9834;" : "&#9835;";
        btnMusica.setAttribute(
          "aria-label",
          sonando ? "Pausar la música" : "Poner la música"
        );
      });
      if (abierto) c.play();
    }
  );
};

btnMusica.addEventListener("click", () => {
  if (reproductor) reproductor.togglePlay();
});

/* ---------- abrir el camino ---------- */

function abrirCamino() {
  if (abierto) return;
  abierto = true;

  portada.classList.add("fuera");
  document.body.classList.add("abierto");

  if (reproductor) reproductor.play();

  setTimeout(() => {
    portada.style.display = "none";
  }, 1100);
}

abrir.addEventListener("click", abrirCamino);
portada.addEventListener("wheel", abrirCamino, { passive: true });

let yInicio = null;
portada.addEventListener("touchstart", (e) => {
  yInicio = e.touches[0].clientY;
}, { passive: true });

portada.addEventListener("touchmove", (e) => {
  if (yInicio !== null && yInicio - e.touches[0].clientY > 24) abrirCamino();
}, { passive: true });

/* ---------- las fotos van apareciendo ---------- */

const observador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observador.unobserve(e.target);
      }
    });
  },
  { rootMargin: "0px 0px -12% 0px" }
);

document.querySelectorAll(".aparece").forEach((el) => observador.observe(el));
