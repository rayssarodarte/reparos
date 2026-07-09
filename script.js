/* ============ Reparos - Interacoes ============ */

// --- DADOS ---
const SERVICES = [
  { icon: "zap", name: "Eletricista", desc: "Instalações e reparos elétricos" },
  { icon: "droplet", name: "Encanador", desc: "Serviços hidráulicos completos" },
  { icon: "sparkles", name: "Manicure", desc: "Cuidados e beleza para as unhas" },
  { icon: "scissors", name: "Cabeleireiro", desc: "Cortes, coloração e tratamentos" },
  { icon: "leaf", name: "Jardinagem", desc: "Poda, plantio e paisagismo" },
  { icon: "hammer", name: "Pedreiro", desc: "Reformas e construções" },
  { icon: "ruler", name: "Arquiteto", desc: "Projetos e planejamento" },
];

const DIFFERENTIALS = [
  { icon: "award", title: "Profissionais qualificados", desc: "Rede de profissionais qualificados e experientes em suas respectivas áreas." },
  { icon: "calendar", title: "Facilidade de agendamento", desc: "Agende serviços de acordo com sua conveniência, escolhendo data e horários." },
  { icon: "clock", title: "Atendimento 24 horas", desc: "Prestadores de serviços disponíveis a qualquer hora do dia ou da noite." },
  { icon: "map-pin", title: "Geolocalização", desc: "Encontramos profissionais mais próximos de você em tempo real." },
  { icon: "message-circle", title: "Mensagens instantâneas", desc: "Converse diretamente com o profissional pelo chat integrado." },
  { icon: "shield", title: "Segurança", desc: "Senha de segurança gerada pelo app a cada novo serviço." },
  { icon: "star", title: "Avaliações", desc: "Cliente e profissional se avaliam após cada serviço completado." },
];

const BENEFITS = [
  { icon: "award", title: "Sucesso profissional", desc: "Suporte para alcançar o sucesso financeiro através da plataforma." },
  { icon: "shield", title: "Segurança", desc: "Avaliação após cada serviço para proteger todos os envolvidos." },
  { icon: "map-pin", title: "Geolocalização", desc: "Seja encontrado pelos clientes mais próximos do seu local." },
  { icon: "message-circle", title: "Mensagens instantâneas", desc: "Comunicação direta com o cliente em tempo real." },
  { icon: "calendar", title: "Agendamento", desc: "Organize sua agenda com facilidade dentro do app." },
  { icon: "wallet", title: "Aplicativo gratuito", desc: "Cadastre-se e comece a atender sem custos iniciais." },
];

const STEPS = [
  { n: "1", title: "Cliente solicita", desc: "Você abre o app e descreve o serviço que precisa." },
  { n: "2", title: "Encontramos profissionais próximos", desc: "O app localiza prestadores em tempo real por geolocalização." },
  { n: "3", title: "Conversa pelo chat", desc: "Fale direto com o profissional pelas mensagens instantâneas." },
  { n: "4", title: "Serviço realizado", desc: "O profissional chega com senha de segurança gerada pelo app." },
  { n: "5", title: "Avaliação", desc: "Cliente e prestador se avaliam ao final do serviço." },
];

// ICONES
const SVG = {
  zap: '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>',
  droplet: '<path d="M12 2s6 7.5 6 12a6 6 0 1 1-12 0c0-4.5 6-12 6-12z"/>',
  sparkles: '<path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3zM19 14l.9 2.6L22 17.5l-2.1.9L19 21l-.9-2.6L16 17.5l2.1-.9L19 14z"/>',
  scissors: '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 4 13c0-6 8-11 17-11 0 9-5 17-10 17z"/><path d="M2 22c4-4 6-8 9-10"/>',
  hammer: '<path d="M15 12l-8.5 8.5a2.12 2.12 0 0 1-3-3L12 9"/><path d="M17.64 15L22 10.64L18.36 7L14 11.36"/><path d="M9 11l4-4"/>',
  ruler: '<path d="M21 3H3v6h18V3z"/><path d="M6 6v3M9 6v3M12 6v3M15 6v3M18 6v3"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M8.21 13.89L7 22l5-3 5 3-1.21-8.12"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  "map-pin": '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  "message-circle": '<path d="M21 12a9 9 0 1 1-3.5-7.1L21 3l-1.1 3.6A9 9 0 0 1 21 12z"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  star: '<polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9"/>',
  wallet: '<path d="M20 12V8H6a2 2 0 0 1 0-4h12v4"/><path d="M4 6v12a2 2 0 0 0 2 2h14v-4"/><path d="M18 12a2 2 0 0 0 0 4h4v-4z"/>',
};

function icon(name, cls = "") {
  const body = SVG[name] || "";
  return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}">${body}</svg>`;
}

// CARDS
const servicesGrid = document.getElementById("servicesGrid");
SERVICES.forEach((s) => {
  servicesGrid.insertAdjacentHTML("beforeend", `
    <div class="service-card">
      <div class="card-icon">${icon(s.icon)}</div>
      <h3>${s.name}</h3><p>${s.desc}</p>
    </div>`);
});
servicesGrid.insertAdjacentHTML("beforeend", `
  <div class="service-cta">
    <h3>E muito mais</h3>
    <p>Explore todas as categorias no aplicativo Reparos.</p>
    
  </div>`);

const diffGrid = document.getElementById("differentialsGrid");
DIFFERENTIALS.forEach((d) => {
  diffGrid.insertAdjacentHTML("beforeend", `
    <div class="card">
      <div class="card-icon accent">${icon(d.icon)}</div>
      <h3>${d.title}</h3><p>${d.desc}</p>
    </div>`);
});

const benGrid = document.getElementById("benefitsGrid");
BENEFITS.forEach((b) => {
  benGrid.insertAdjacentHTML("beforeend", `
    <div class="card">
      <div class="card-icon primary">${icon(b.icon)}</div>
      <h3>${b.title}</h3><p>${b.desc}</p>
    </div>`);
});

const stepsList = document.getElementById("stepsList");
STEPS.forEach((s, i) => {
  stepsList.insertAdjacentHTML("beforeend", `
    <li class="step ${i % 2 ? "even" : ""}">
      <div class="step-content">
        <div class="step-kicker">Passo ${s.n}</div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
      </div>
      <div><div class="step-num">${s.n}</div></div>
    </li>`);
});

// cabeçalho
const header = document.getElementById("header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 20);
onScroll();
window.addEventListener("scroll", onScroll);

// menu do celular
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
menuToggle.addEventListener("click", () => mobileMenu.classList.toggle("open"));
mobileMenu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => mobileMenu.classList.remove("open"))
);

// MUSICA
const audio = document.getElementById("audioEl");
const playBtn = document.getElementById("playBtn");
const playIcon = document.getElementById("playIcon");
const progressBar = document.getElementById("progressBar");

playBtn.addEventListener("click", () => {
  if (!audio.src) return; 
  if (audio.paused) { audio.play(); playIcon.className = "icon icon-pause"; }
  else { audio.pause(); playIcon.className = "icon icon-play"; }
});
audio.addEventListener("timeupdate", () => {
  if (!audio.duration) return;
  progressBar.style.width = (audio.currentTime / audio.duration) * 100 + "%";
});
audio.addEventListener("ended", () => { playIcon.className = "icon icon-play"; });

/*=========================
DOWNLOAD POPUP
==========================*/

const downloadBtn = document.getElementById("downloadBtn");
const downloadPopup = document.getElementById("downloadPopup");
const downloadWrapper = document.querySelector(".download-wrapper");

downloadBtn.addEventListener("click",(e)=>{

    e.stopPropagation();

    downloadWrapper.classList.toggle("active");

});

document.addEventListener("click",()=>{

    downloadWrapper.classList.remove("active");

});

downloadPopup.addEventListener("click",(e)=>{

    e.stopPropagation();

});