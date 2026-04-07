const SITE_CONFIG = {
  profile: {
    name: "Martin Centurion",
    bio: "Aquí podés encontrar mis datos bancarios, el enlace para dejar una reseña en Google sobre mi atención en La Farola Express y también mi sitio web para que pueda ver mis trabajos realizados como diseñador web.",
  },
  restaurant: {
    name: "Nombre del Restaurante",
    googleReviewUrl: "https://share.google/7LdZCFt4v20nS1Gok",
    mapsUrl: "https://mymdevelopers.com.ar/",
  },
  tip: {
    bankName: "Banco Credicoop",
    holder: "Martin Alejandro Centurion",
    alias: "RADIO.CORCEL.BANDO",
    cbu: "19100698-55106901596135",
  },
};

const $ = (selector) => document.querySelector(selector);

const aliasEl = $("#alias-value");
const cbuEl = $("#cbu-value");
const bankEl = $("#bank-name");
const holderEl = $("#holder-name");

$("#profile-name").textContent = SITE_CONFIG.profile.name;
$("#profile-bio").textContent = SITE_CONFIG.profile.bio;
$("#restaurant-line").textContent = "MyM Developers © 2026";

$("#google-review-link").href = SITE_CONFIG.restaurant.googleReviewUrl;
$("#maps-link").href = SITE_CONFIG.restaurant.mapsUrl;
bankEl.textContent = SITE_CONFIG.tip.bankName;
holderEl.textContent = SITE_CONFIG.tip.holder;
aliasEl.textContent = SITE_CONFIG.tip.alias;
cbuEl.textContent = SITE_CONFIG.tip.cbu;

const tipSection = $("#tip-section");
$("#show-tip").addEventListener("click", () => {
  tipSection.classList.remove("hidden");
  tipSection.scrollIntoView({ behavior: "smooth", block: "center" });
});

$("#hide-tip").addEventListener("click", () => {
  tipSection.classList.add("hidden");
});

const toastEl = $("#toast");
let toastTimeout;

function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastEl.classList.remove("show");
  }, 1600);
}

async function copyValue(value, label) {
  try {
    await navigator.clipboard.writeText(value);
    showToast(`${label} copiado`);
  } catch (_error) {
    showToast(`No se pudo copiar ${label.toLowerCase()}`);
  }
}

document.querySelectorAll(".copy-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const dataKey = button.dataset.copy;
    if (dataKey === "alias") {
      copyValue(SITE_CONFIG.tip.alias, "Alias");
    }
    if (dataKey === "cbu") {
      copyValue(SITE_CONFIG.tip.cbu, "CBU/CVU");
    }
  });
});
