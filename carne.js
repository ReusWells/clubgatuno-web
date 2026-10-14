// Dibuja el carné del club en un <canvas id="carne"> y prepara el botón <a id="descargar">.
const MESES_CARNE = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

function cargar(src) {
  return new Promise((ok, mal) => { const i = new Image(); i.onload = () => ok(i); i.onerror = mal; i.src = src; });
}

function rectRedondo(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
}

function ajustarTexto(ctx, texto, maxAncho, tamano, peso) {
  let t = tamano;
  do { ctx.font = `${peso} ${t}px ui-rounded, "Nunito", "Segoe UI", sans-serif`; t -= 2; }
  while (ctx.measureText(texto).width > maxAncho && t > 20);
}

async function dibujarCarne(nombre, gato, dia, mes) {
  const c = document.getElementById("carne");
  const ctx = c.getContext("2d");
  const [nata, logo] = await Promise.all([cargar("img/nata-sentada.png"), cargar("img/logo.png")]);
  const W = c.width, H = c.height;

  // Fondo y borde
  ctx.clearRect(0, 0, W, H);
  rectRedondo(ctx, 8, 8, W - 16, H - 16, 44);
  ctx.fillStyle = "#F4F1DE"; ctx.fill();
  ctx.lineWidth = 10; ctx.strokeStyle = "#3D2C2A"; ctx.stroke();

  // Banda superior
  ctx.save(); rectRedondo(ctx, 8, 8, W - 16, H - 16, 44); ctx.clip();
  ctx.fillStyle = "#E07A5F"; ctx.fillRect(0, 0, W, 130);
  ctx.fillStyle = "#3D2C2A"; ctx.fillRect(0, 130, W, 8);
  ctx.restore();

  ctx.save(); ctx.beginPath(); ctx.arc(95, 69, 46, 0, Math.PI * 2); ctx.clip();
  ctx.drawImage(logo, 49, 23, 92, 92); ctx.restore();
  ctx.beginPath(); ctx.arc(95, 69, 46, 0, Math.PI * 2); ctx.lineWidth = 5; ctx.strokeStyle = "#3D2C2A"; ctx.stroke();

  ctx.fillStyle = "#FFFFFF";
  ctx.font = '900 52px ui-rounded, "Nunito", "Segoe UI", sans-serif';
  ctx.fillText("ClubGatuno", 165, 88);
  ctx.font = '800 26px ui-rounded, "Nunito", "Segoe UI", sans-serif';
  ctx.textAlign = "right"; ctx.fillText("CARNÉ DEL CLUB", W - 50, 84); ctx.textAlign = "left";

  // Nata
  const alto = 400, ancho = nata.width * (alto / nata.height);
  ctx.drawImage(nata, W - ancho - 60, H - alto - 50, ancho, alto);

  // Datos
  const x = 70; let y = 220;
  const etiqueta = t => { ctx.fillStyle = "#81B29A"; ctx.font = '800 24px ui-rounded, "Nunito", "Segoe UI", sans-serif'; ctx.fillText(t, x, y); y += 58; };
  const valor = (t, tam) => { ctx.fillStyle = "#3D2C2A"; ajustarTexto(ctx, t, 600, tam, 900); ctx.fillText(t, x, y); y += 62; };

  etiqueta("MIEMBRO DEL CLUB"); valor(nombre, 56);
  etiqueta("GATO"); valor(gato + " 🐾", 56);
  const hoy = new Date();
  etiqueta("MIEMBRO DESDE");
  valor(MESES_CARNE[hoy.getMonth()][0].toUpperCase() + MESES_CARNE[hoy.getMonth()].slice(1) + " de " + hoy.getFullYear(), 40);

  if (dia && mes) {
    ctx.fillStyle = "#6B5A57"; ctx.font = '700 26px ui-rounded, "Nunito", "Segoe UI", sans-serif';
    ctx.fillText("🎂 Cumpleaños de " + gato + ": " + parseInt(dia, 10) + " de " + MESES_CARNE[parseInt(mes, 10) - 1], x, H - 60);
  } else {
    ctx.fillStyle = "#6B5A57"; ctx.font = '700 26px ui-rounded, "Nunito", "Segoe UI", sans-serif';
    ctx.fillText("clubgatuno.es", x, H - 60);
  }

  document.getElementById("descargar").href = c.toDataURL("image/png");
}

