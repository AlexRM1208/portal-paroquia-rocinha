const menuToggle = document.querySelector("#menuToggle");
const menuPrincipal = document.querySelector("#menuPrincipal");

const decreaseFontButton = document.querySelector("#decreaseFont");
const resetFontButton = document.querySelector("#resetFont");
const increaseFontButton = document.querySelector("#increaseFont");
const darkModeToggle = document.querySelector("#darkModeToggle");
const contrastToggle = document.querySelector("#contrastToggle");

const eventsGrid = document.querySelector("#eventsGrid");
const eventsInfo = document.querySelector("#eventsInfo");
const filterButtons = document.querySelectorAll(".filter-button");

const volunteerForm = document.querySelector("#volunteerForm");
const volunteerStatus = document.querySelector("#volunteerStatus");
const phoneInput = document.querySelector("#telefone");

const savedTheme = localStorage.getItem("portal-theme");

const accessibilityState = {
  fontScale: Number(localStorage.getItem("portal-font-scale")) || 1,
  theme: ["normal", "dark", "high-contrast"].includes(savedTheme) ? savedTheme : "normal"
};

const events = [
  {
    title: "Missa semanal",
    category: "Missas",
    type: "fixed",
    dateText: "Segunda a sexta, às 19h",
    description: "Celebração semanal para moradores e frequentadores da comunidade."
  },
  {
    title: "Missa de sábado",
    category: "Missas",
    type: "fixed",
    dateText: "Sábados, às 17h",
    description: "Celebração do fim de semana com participação da comunidade."
  },
  {
    title: "Missas de domingo",
    category: "Missas",
    type: "fixed",
    dateText: "Domingos, às 9h e 19h",
    description: "Horários principais de celebração dominical."
  },
  {
    title: "Grupo de Oração",
    category: "Oração",
    type: "fixed",
    dateText: "Segundas-feiras e sextas-feiras, às 20h",
    description: "Encontro de oração, acolhimento e espiritualidade."
  },
  {
    title: "Terço dos Homens",
    category: "Oração",
    type: "fixed",
    dateText: "Quintas-feiras, às 20h",
    description: "Momento de oração comunitária aberto aos interessados."
  },
  {
    title: "Apostolado da Oração",
    category: "Oração",
    type: "fixed",
    dateText: "Primeira sexta-feira do mês, às 18h",
    description: "Encontro mensal de espiritualidade e devoção."
  },
  {
    title: "Encontro da Crisma",
    category: "Formação",
    type: "fixed",
    dateText: "Sábados, às 20h",
    description: "Formação cristã para jovens e adultos."
  },
  {
    title: "Catequese Infantil",
    category: "Formação",
    type: "fixed",
    dateText: "Horário informado pela coordenação",
    description: "Atividade de formação voltada para crianças da comunidade."
  },
  {
    title: "Secretaria Paroquial",
    category: "Secretaria",
    type: "fixed",
    dateText: "Segunda, quarta, quinta e sexta: 13h às 21h. Sábado: 08h às 17h.",
    description: "Atendimento para informações, documentos, batizados, casamentos e orientações."
  },
  {
    title: "Bazar e lojinha comunitária",
    category: "Social",
    type: "fixed",
    dateText: "Funcionamento conforme agenda paroquial",
    description: "Venda solidária de roupas, objetos religiosos, comidas e itens doados."
  },
  {
    title: "Rifas e campanhas paroquiais",
    category: "Social",
    type: "fixed",
    dateText: "Divulgação conforme calendário da comunidade",
    description: "Ações para arrecadar recursos e apoiar atividades paroquiais e comunitárias."
  },
  {
    title: "Dia de São Sebastião",
    category: "Litúrgico",
    type: "date",
    isoDate: "2026-01-20",
    dateText: "20 de janeiro de 2026",
    description: "Data dedicada a São Sebastião, padroeiro da cidade do Rio de Janeiro."
  },
  {
    title: "Quarta-feira de Cinzas",
    category: "Litúrgico",
    type: "date",
    isoDate: "2026-02-18",
    dateText: "18 de fevereiro de 2026",
    description: "Início do tempo da Quaresma."
  },
  {
    title: "Solenidade de São José",
    category: "Litúrgico",
    type: "date",
    isoDate: "2026-03-19",
    dateText: "19 de março de 2026",
    description: "Celebração de São José."
  },
  {
    title: "Anunciação do Senhor",
    category: "Litúrgico",
    type: "date",
    isoDate: "2026-03-25",
    dateText: "25 de março de 2026",
    description: "Celebração da Anunciação do Senhor."
  },
  {
    title: "Domingo de Ramos",
    category: "Litúrgico",
    type: "date",
    isoDate: "2026-03-29",
    dateText: "29 de março de 2026",
    description: "Abertura da Semana Santa."
  },
  {
    title: "Quinta-feira Santa",
    category: "Litúrgico",
    type: "date",
    isoDate: "2026-04-02",
    dateText: "2 de abril de 2026",
    description: "Celebração da Ceia do Senhor."
  },
  {
    title: "Sexta-feira da Paixão",
    category: "Litúrgico",
    type: "date",
    isoDate: "2026-04-03",
    dateText: "3 de abril de 2026",
    description: "Celebração da Paixão do Senhor."
  },
  {
    title: "Sábado Santo",
    category: "Litúrgico",
    type: "date",
    isoDate: "2026-04-04",
    dateText: "4 de abril de 2026",
    description: "Dia de preparação para a Vigília Pascal."
  },
  {
    title: "Páscoa do Senhor",
    category: "Litúrgico",
    type: "date",
    isoDate: "2026-04-05",
    dateText: "5 de abril de 2026",
    description: "Celebração da Ressurreição de Cristo."
  },
  {
    title: "Domingo da Divina Misericórdia",
    category: "Litúrgico",
    type: "date",
    isoDate: "2026-04-12",
    dateText: "12 de abril de 2026",
    description: "Celebração no segundo domingo da Páscoa."
  },
  {
    title: "Ascensão do Senhor",
    category: "Litúrgico",
    type: "date",
    isoDate: "2026-05-17",
    dateText: "17 de maio de 2026",
    description: "Celebração da Ascensão do Senhor."
  },
  {
    title: "Pentecostes",
    category: "Litúrgico",
    type: "date",
    isoDate: "2026-05-24",
    dateText: "24 de maio de 2026",
    description: "Celebração da vinda do Espírito Santo."
  },
  {
    title: "Santíssima Trindade",
    category: "Litúrgico",
    type: "date",
    isoDate: "2026-05-31",
    dateText: "31 de maio de 2026",
    description: "Solenidade da Santíssima Trindade."
  },
  {
    title: "Corpus Christi",
    category: "Litúrgico",
    type: "date",
    isoDate: "2026-06-04",
    dateText: "4 de junho de 2026",
    description: "Celebração litúrgica com participação da comunidade."
  },
  {
    title: "Campanha de arrecadação de alimentos",
    category: "Social",
    type: "date",
    isoDate: "2026-06-22",
    dateText: "22 de junho de 2026",
    description: "Ação comunitária para apoiar famílias em situação de vulnerabilidade."
  },
  {
    title: "Sagrado Coração de Jesus",
    category: "Litúrgico",
    type: "date",
    isoDate: "2026-06-12",
    dateText: "12 de junho de 2026",
    description: "Solenidade do Sagrado Coração de Jesus."
  },
  {
    title: "São Pedro e São Paulo",
    category: "Litúrgico",
    type: "date",
    isoDate: "2026-06-28",
    dateText: "28 de junho de 2026",
    description: "Celebração dos apóstolos São Pedro e São Paulo."
  },
  {
    title: "Assunção de Nossa Senhora",
    category: "Litúrgico",
    type: "date",
    isoDate: "2026-08-16",
    dateText: "16 de agosto de 2026",
    description: "Celebração da Assunção de Nossa Senhora."
  },
  {
    title: "Festa da Padroeira",
    category: "Litúrgico",
    type: "date",
    isoDate: "2026-10-12",
    dateText: "12 de outubro de 2026",
    description: "Celebração de Nossa Senhora Aparecida, padroeira da paróquia."
  },
  {
    title: "Dia de Todos os Santos",
    category: "Litúrgico",
    type: "date",
    isoDate: "2026-11-01",
    dateText: "1 de novembro de 2026",
    description: "Celebração de Todos os Santos."
  },
  {
    title: "Finados",
    category: "Litúrgico",
    type: "date",
    isoDate: "2026-11-02",
    dateText: "2 de novembro de 2026",
    description: "Dia de oração pelos fiéis falecidos."
  },
  {
    title: "Cristo Rei",
    category: "Litúrgico",
    type: "date",
    isoDate: "2026-11-22",
    dateText: "22 de novembro de 2026",
    description: "Solenidade de Nosso Senhor Jesus Cristo, Rei do Universo."
  },
  {
    title: "Primeiro Domingo do Advento",
    category: "Litúrgico",
    type: "date",
    isoDate: "2026-11-29",
    dateText: "29 de novembro de 2026",
    description: "Início do tempo do Advento."
  },
  {
    title: "Imaculada Conceição",
    category: "Litúrgico",
    type: "date",
    isoDate: "2026-12-08",
    dateText: "8 de dezembro de 2026",
    description: "Celebração da Imaculada Conceição de Nossa Senhora."
  },
  {
    title: "Natal do Senhor",
    category: "Litúrgico",
    type: "date",
    isoDate: "2026-12-25",
    dateText: "25 de dezembro de 2026",
    description: "Celebração do nascimento de Jesus Cristo."
  },
  {
    title: "Sagrada Família",
    category: "Litúrgico",
    type: "date",
    isoDate: "2026-12-27",
    dateText: "27 de dezembro de 2026",
    description: "Celebração da Sagrada Família."
  }
];

function applyAccessibilitySettings() {
  document.documentElement.style.setProperty("--font-scale", accessibilityState.fontScale);

  document.body.classList.toggle("dark-mode", accessibilityState.theme === "dark");
  document.body.classList.toggle("high-contrast", accessibilityState.theme === "high-contrast");

  darkModeToggle.classList.toggle("active", accessibilityState.theme === "dark");
  contrastToggle.classList.toggle("active", accessibilityState.theme === "high-contrast");

  darkModeToggle.setAttribute("aria-pressed", String(accessibilityState.theme === "dark"));
  contrastToggle.setAttribute("aria-pressed", String(accessibilityState.theme === "high-contrast"));

  localStorage.setItem("portal-font-scale", String(accessibilityState.fontScale));
  localStorage.setItem("portal-theme", accessibilityState.theme);
}

function changeFontScale(amount) {
  const nextScale = accessibilityState.fontScale + amount;
  accessibilityState.fontScale = Math.min(1.35, Math.max(0.9, Number(nextScale.toFixed(2))));
  applyAccessibilitySettings();
}

function resetFontScale() {
  accessibilityState.fontScale = 1;
  applyAccessibilitySettings();
}

function toggleDarkMode() {
  accessibilityState.theme = accessibilityState.theme === "dark" ? "normal" : "dark";
  applyAccessibilitySettings();
}

function toggleHighContrast() {
  accessibilityState.theme = accessibilityState.theme === "high-contrast" ? "normal" : "high-contrast";
  applyAccessibilitySettings();
}

function toggleMenu() {
  const isOpen = menuPrincipal.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
}

function closeMenuAfterClick(event) {
  const clickedLink = event.target.closest("a");

  if (!clickedLink) {
    return;
  }

  menuPrincipal.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}

function closeMenuWithEscape(event) {
  if (event.key !== "Escape") {
    return;
  }

  menuPrincipal.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}

function getTodayWithoutTime() {
  const today = new Date();
  return new Date(today.getFullYear(), today.getMonth(), today.getDate());
}

function getEventStatus(event) {
  if (event.type === "fixed") {
    return {
      label: "Evento fixo",
      className: "fixed"
    };
  }

  const today = getTodayWithoutTime();
  const eventDate = new Date(`${event.isoDate}T00:00:00`);
  const eventDay = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate());

  const differenceInMs = eventDay.getTime() - today.getTime();
  const differenceInDays = Math.round(differenceInMs / 86400000);

  if (differenceInDays === 0) {
    return {
      label: "Hoje",
      className: "today"
    };
  }

  if (differenceInDays > 0) {
    return {
      label: "Próximo",
      className: "upcoming"
    };
  }

  return {
    label: "Já aconteceu",
    className: "past"
  };
}

function sortEventsByRelevance(eventA, eventB) {
  if (eventA.type === "fixed" && eventB.type !== "fixed") {
    return -1;
  }

  if (eventA.type !== "fixed" && eventB.type === "fixed") {
    return 1;
  }

  if (eventA.type === "date" && eventB.type === "date") {
    return new Date(eventA.isoDate) - new Date(eventB.isoDate);
  }

  return eventA.title.localeCompare(eventB.title, "pt-BR");
}

function createEventCard(event) {
  const status = getEventStatus(event);

  const article = document.createElement("article");
  article.className = "event-card";

  article.innerHTML = `
    <h3>${event.title}</h3>

    <div class="event-meta">
      <span class="tag">${event.category}</span>
      <span class="status ${status.className}">${status.label}</span>
    </div>

    <p><strong>Quando:</strong> ${event.dateText}</p>
    <p>${event.description}</p>
  `;

  return article;
}

function renderEvents(category = "Todos") {
  eventsGrid.innerHTML = "";

  const filteredEvents = events
    .filter((event) => category === "Todos" || event.category === category)
    .sort(sortEventsByRelevance);

  filteredEvents.forEach((event) => {
    eventsGrid.appendChild(createEventCard(event));
  });

  const plural = filteredEvents.length === 1 ? "evento encontrado" : "eventos encontrados";
  eventsInfo.textContent = `${filteredEvents.length} ${plural} na categoria "${category}".`;
}

function activateFilter(button) {
  filterButtons.forEach((filterButton) => {
    filterButton.classList.remove("active");
    filterButton.setAttribute("aria-pressed", "false");
  });

  button.classList.add("active");
  button.setAttribute("aria-pressed", "true");

  const selectedCategory = button.dataset.filter;
  renderEvents(selectedCategory);
}

function setError(fieldId, message) {
  const field = document.querySelector(`#${fieldId}`);
  const error = document.querySelector(`#${fieldId}Error`);

  field.classList.add("invalid");
  field.setAttribute("aria-invalid", "true");
  error.textContent = message;
}

function clearError(fieldId) {
  const field = document.querySelector(`#${fieldId}`);
  const error = document.querySelector(`#${fieldId}Error`);

  field.classList.remove("invalid");
  field.removeAttribute("aria-invalid");
  error.textContent = "";
}

function normalizePhone(value) {
  return value.replace(/\D/g, "");
}

function formatBrazilianPhone(value) {
  const digits = normalizePhone(value).slice(0, 11);

  if (digits.length <= 2) {
    return digits;
  }

  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }

  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function handlePhoneInput(event) {
  event.target.value = formatBrazilianPhone(event.target.value);
}

function validateVolunteerForm(formData) {
  let isValid = true;

  const nome = formData.get("nome").trim();
  const telefone = normalizePhone(formData.get("telefone"));
  const interesse = formData.get("interesse").trim();
  const disponibilidade = formData.get("disponibilidade").trim();

  clearError("nome");
  clearError("telefone");
  clearError("interesse");
  clearError("disponibilidade");

  if (nome.length < 3) {
    setError("nome", "Informe seu nome com pelo menos 3 letras.");
    isValid = false;
  }

  if (telefone.length < 10 || telefone.length > 11) {
    setError("telefone", "Informe um telefone ou WhatsApp válido com DDD.");
    isValid = false;
  }

  if (!interesse) {
    setError("interesse", "Escolha como você deseja ajudar.");
    isValid = false;
  }

  if (!disponibilidade) {
    setError("disponibilidade", "Escolha o melhor período.");
    isValid = false;
  }

  return isValid;
}

function createSafeId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function saveVolunteer(formData) {
  const previousVolunteers = JSON.parse(localStorage.getItem("portal-voluntarios") || "[]");

  const newVolunteer = {
    id: createSafeId(),
    nome: formData.get("nome").trim(),
    telefone: formData.get("telefone").trim(),
    interesse: formData.get("interesse").trim(),
    disponibilidade: formData.get("disponibilidade").trim(),
    observacao: formData.get("observacao").trim(),
    dataRegistro: new Date().toLocaleString("pt-BR")
  };

  previousVolunteers.push(newVolunteer);
  localStorage.setItem("portal-voluntarios", JSON.stringify(previousVolunteers));

  return previousVolunteers.length;
}

function handleVolunteerSubmit(event) {
  event.preventDefault();

  const formData = new FormData(volunteerForm);
  const isValid = validateVolunteerForm(formData);

  if (!isValid) {
    volunteerStatus.className = "form-status error";
    volunteerStatus.textContent = "Revise os campos destacados antes de registrar o interesse.";
    return;
  }

  const totalVolunteers = saveVolunteer(formData);

  volunteerForm.reset();

  volunteerStatus.className = "form-status success";
volunteerStatus.textContent =
  "Cadastro registrado com sucesso! A paróquia poderá entrar em contato pelo telefone ou WhatsApp informado.";
}

menuToggle.addEventListener("click", toggleMenu);
menuPrincipal.addEventListener("click", closeMenuAfterClick);
document.addEventListener("keydown", closeMenuWithEscape);

decreaseFontButton.addEventListener("click", () => changeFontScale(-0.05));
resetFontButton.addEventListener("click", resetFontScale);
increaseFontButton.addEventListener("click", () => changeFontScale(0.05));
darkModeToggle.addEventListener("click", toggleDarkMode);
contrastToggle.addEventListener("click", toggleHighContrast);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => activateFilter(button));
});

phoneInput.addEventListener("input", handlePhoneInput);
volunteerForm.addEventListener("submit", handleVolunteerSubmit);

applyAccessibilitySettings();
renderEvents();