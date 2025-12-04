/* ============================================================
   MENU MOBILE
============================================================ */
const mobileToggle = document.getElementById("mobileToggle");
const mainNav = document.getElementById("mainNav");

mobileToggle.addEventListener("click", () => {
  if (mainNav.style.display === "flex") {
    mainNav.style.display = "none";
  } else {
    mainNav.style.display = "flex";
    mainNav.style.flexDirection = "column";
    mainNav.style.background = "#fff";
    mainNav.style.padding = "20px";
    mainNav.style.position = "absolute";
    mainNav.style.top = "75px";
    mainNav.style.right = "10px";
    mainNav.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
    mainNav.style.borderRadius = "10px";
  }
});


/* ============================================================
   MODAL DE LOGIN (ENTRAR / CRIAR CONTA)
============================================================ */
const openAccount = document.getElementById("openAccount");
const accountModal = document.getElementById("accountModal");
const closeAccount = document.getElementById("closeAccount");

if (openAccount) {
  openAccount.addEventListener("click", () => {
    accountModal.style.display = "flex";
  });
}

if (closeAccount) {
  closeAccount.addEventListener("click", () => {
    accountModal.style.display = "none";
  });
}

/* Fechar ao clicar fora do conteúdo */
window.addEventListener("click", (event) => {
  if (event.target === accountModal) {
    accountModal.style.display = "none";
  }
});


/* ============================================================
   (OPCIONAL) – FUTURO CARROSSEL AUTOMÁTICO DO HERO
============================================================ */
/* habilitaremos depois – está preparado */
