const BRAND_PRESETS = [
  {
    id: "necom",
    name: "NECom",
    websiteLabel: "www.necom.lv",
    websiteUrl: "https://www.necom.lv",
    accentColor: "#B59A71",
    textColor: "#111111",
    logoUrl: "https://rimirigamarathon.com/wp-content/uploads/2026/02/necom-1.png",
    description: {
      en: "Event production, marketing and sponsorship agency creating experiences that are moving Riga and Latvia since 2006.",
      lv: "Pasākumu producēšanas, mārketinga un sponsorēšanas aģentūra, kas kopš 2006. gada rada pieredzes, kas kustina Rīgu un Latviju.",
    },
  },
  {
    id: "rrm",
    name: "Rimi Riga Marathon",
    websiteLabel: "rimirigamarathon.com",
    websiteUrl: "https://rimirigamarathon.com/",
    accentColor: "#cc2128",
    textColor: "#111111",
    logoUrl: "https://rimirigamarathon.com/wp-content/uploads/2025/02/RRM-logo-black.png",
    description: {
      en: "Riga’s biggest running celebration, bringing together runners, supporters and city energy.",
      lv: "Rīgas lielākie skriešanas svētki, kas apvieno skrējējus, līdzjutējus un pilsētas enerģiju.",
    },
  },
  {
    id: "pink-noise",
    name: "Pink Noise Riga",
    websiteLabel: "pinknoiseriga.com",
    websiteUrl: "https://pinknoiseriga.com/",
    accentColor: "#fa4100",
    textColor: "#111111",
    logoUrl: "https://rimirigamarathon.com/wp-content/uploads/2025/02/Pink-Noise-Riga-black.svg",
    description: {
      en: "A bright culture and music experience for people who prefer their inbox with a little more volume.",
      lv: "Koša kultūras un mūzikas pieredze tiem, kuriem patīk, ja iesūtnē ir mazliet vairāk skaņas.",
    },
  },
  {
    id: "rwch",
    name: "Riga Wine & Champagne",
    websiteLabel: "rigawinechampagne.lv",
    websiteUrl: "https://rigawinechampagne.lv/",
    accentColor: "#e40521",
    textColor: "#111111",
    logoUrl: "https://rimirigamarathon.com/wp-content/uploads/2025/02/RWCH-Logo-Text-black.png",
    description: {
      en: "A wine and champagne gathering for thoughtful glasses, good taste and better conversations.",
      lv: "Vīna un šampanieša notikums pārdomātām glāzēm, labai gaumei un vēl labākām sarunām.",
    },
  },
  {
    id: "rwf",
    name: "Riga Whisky & Friends",
    websiteLabel: "rigawhiskyfriends.com",
    websiteUrl: "https://rigawhiskyfriends.com/",
    accentColor: "#023047",
    textColor: "#111111",
    logoUrl: "https://rimirigamarathon.com/wp-content/uploads/2025/02/rwf-logo.svg",
    description: {
      en: "A whisky-forward meeting place for friends, makers and everyone who enjoys a proper dram.",
      lv: "Viskija satikšanās vieta draugiem, meistariem un visiem, kuri novērtē kārtīgu malku.",
    },
  },
  {
    id: "bwda",
    name: "Baltic Wine & Drinks Awards",
    websiteLabel: "balticwinelists.com",
    websiteUrl: "https://balticwinelists.com/",
    accentColor: "#fad0c5",
    textColor: "#111111",
    logoUrl: "https://rimirigamarathon.com/wp-content/uploads/2025/02/BWDA-logo.svg",
    description: {
      en: "Celebrating the people, lists and drinks culture shaping the Baltic hospitality scene.",
      lv: "Godinām cilvēkus, kartes un dzērienu kultūru, kas veido Baltijas viesmīlības vidi.",
    },
  },
  {
    id: "custom",
    name: "Custom",
    websiteLabel: "your-site.com",
    websiteUrl: "https://example.com",
    accentColor: "#B59A71",
    textColor: "#111111",
    logoUrl: "https://rimirigamarathon.com/wp-content/uploads/2025/02/s-necom-logo.svg",
    description: {
      en: "Custom signature text.",
      lv: "Pielāgots paraksta teksts.",
    },
  },
];

const EMAIL_EXAMPLES = {
  en: [
    {
      email: "aigars@necom.lv",
      subject: "Breakfast with Bordeaux?",
      text: `Friends,
this morning the coffee tasted like Monday, and Monday tasted like badly chilled prosecco.

So I suggest we start the day culturally. Not necessarily with Bordeaux, although dismissing the idea this early would be premature. We could also begin with a noble commitment not to send emails with attachments named “final_final_v12”.

A small step for mankind. A giant leap for inbox civilization.

Cheers,
Aigars`,
    },
    {
      email: "aigars@necom.lv",
      subject: "A meeting with potential",
      text: `Colleagues,
today’s meeting was like a young Chablis — promising at first, a little sharp in the middle, but by the end you realize there is potential.

Next time, let’s bring fewer slides, more thoughts and, in an ideal world, something edible. Strategy does not happen on an empty stomach. Irritation does.

Life is beautiful,
Aigars`,
    },
    {
      email: "aigars@necom.lv",
      subject: "On lunch and civilization",
      text: `Friends,
a reminder that lunch is not a sign of weakness. It is a form of civilization.

A person who has not eaten between 12:00 and 15:00 cannot make strategic decisions. They can only move calendar invites around and look at colleagues with a sadness worthy of Burgundy.

Go eat. The world can wait.

Aigars`,
    },
    {
      email: "aigars@necom.lv",
      subject: "It is not a crisis if there is cheese",
      text: `Good afternoon,
the situation is, of course, complicated. As always.

But before we call it a crisis, please check three things: is there cheese, is there bread, and is there something that can be opened. If the answer is “yes” to at least two of these, we are still in Europe.

Let’s continue with dignity, calm and a small dose of theatrical confidence.

Cheers,
Aigars`,
    },
    {
      email: "maveriks@necom.lv",
      subject: "vau?",
      text: "vau. I honestly didn’t know what to write here. He never told me anything memorable enough to stay in my head.",
    },
    {
      email: "tako@necom.lv",
      subject: "vau?",
      text: "VAU. I honestly didn’t know what to write here either. He also never told me anything memorable enough to stay in my head. But he had an uppercase bark, because he is a more powerful barker than maveriks@necom.lv.",
    },
    {
      email: "valda@necom.lv",
      subject: "che palle!",
      text: "va fanculo [insert pissed off italian gibberish] si si si si (haha sisi mentioned)",
    },
  ],
  lv: [
    {
      email: "aigars@necom.lv",
      subject: "Brokastis ar bordo?",
      text: `Draugi,
šorīt kafija garšoja pēc pirmdienas, bet pirmdiena — pēc slikti atdzesēta proseko.

Tāpēc ierosinu dienu sākt kulturāli. Ne obligāti ar bordo, lai gan ideju noraidīt būtu pāragri. Var arī ar apņemšanos šodien nesūtīt e-pastus, kuru pielikumi saucas “final_final_v12”.

Mazs solis cilvēcei. Liels solis inbox civilizācijai.

Priekā,
Aigars`,
    },
    {
      email: "aigars@necom.lv",
      subject: "Sapulce, kurai bija potenciāls",
      text: `Kolēģi,
šodienas sapulce bija kā jauns šablī — sākumā cerīga, vidū mazliet skāba, beigās tomēr saproti, ka potenciāls ir.

Nākamreiz paņemam mazāk slaidu, vairāk domu un, ideālā pasaulē, arī kaut ko ēdamu. Tukšā dūšā stratēģija nerodas. Rodas tikai aizkaitinājums.

Dzīve ir skaista,
Aigars`,
    },
    {
      email: "aigars@necom.lv",
      subject: "Par pusdienām un civilizāciju",
      text: `Draugi,
atgādinu, ka pusdienas nav vājuma pazīme. Tā ir civilizācijas forma.

Cilvēks, kurš starp 12:00 un 15:00 nav ēdis, nevar pieņemt stratēģiskus lēmumus. Viņš var tikai pārvietot kalendāra ielūgumus un skatīties uz kolēģiem ar burgundieša cienīgu skumju pilnu skatienu.

Ejiet ēst. Pasaule pagaidīs.

Aigars`,
    },
    {
      email: "aigars@necom.lv",
      subject: "Krīze nav krīze, ja ir siers",
      text: `Labdien,
situācija, protams, ir sarežģīta. Kā vienmēr.

Bet pirms saucam to par krīzi, lūdzu, pārbaudām trīs lietas: vai ir siers, vai ir maize, vai ir kaut kas atkorķējams. Ja atbilde ir “jā” vismaz uz diviem jautājumiem, mēs vēl esam Eiropā.

Turpinām ar cieņu, mieru un nelielu devu teatrālas pašpārliecības.

Priekā,
Aigars`,
    },
    {
      email: "maveriks@necom.lv",
      subject: "vau?",
      text: "vau. īsti nezināju, ko te rakstīt. Viņš man nekad nav neko tādu stāstījis, lai būtu palicis atmiņā.",
    },
    {
      email: "tako@necom.lv",
      subject: "vau?",
      text: "VAU. īsti nezināju, ko te rakstīt. Viņš arī man nekad nav neko tādu stāstījis, lai būtu palicis atmiņā. Bet viņam bija uppercase rējiens, jo jaudīgāks rējējs nekā maveriks@necom.lv.",
    },
    {
      email: "valda@necom.lv",
      subject: "che palle!",
      text: "va fanculo [insert pissed off italian gibberish] si si si si (haha sisi mentioned)",
    },
  ],
};

const I18N = {
  en: {
    appTitle: "NECom Email Signature Lab",
    appSubtitle: "Build, preview and copy Gmail-ready signatures.",
    builderEyebrow: "Builder",
    builderTitle: "Create the signature",
    reset: "Reset",
    presetTitle: "Brand preset",
    presetHelp: "One click changes the logo, website and accent color.",
    personTitle: "Person details",
    nameLabel: "Name",
    titleLabel: "Job title",
    phoneLabel: "Phone",
    emailLabel: "Email",
    showEmailLabel: "Show email address in signature",
    companyTitle: "Company and links",
    address1Label: "Address line 1",
    address2Label: "Address line 2",
    websiteLabelLabel: "Website label",
    websiteUrlLabel: "Website URL",
    descriptionLabel: "Company / event text",
    styleTitle: "Style and size",
    versionLegend: "Signature version",
    fullVersion: "Full",
    shortVersion: "Short",
    accentColorLabel: "Accent color",
    textColorLabel: "Text color",
    logoUrlLabel: "Logo URL",
    logoSizeLabel: "Logo size",
    signatureWidthLabel: "Signature width",
    copyForGmail: "Copy for Gmail",
    copyHtml: "Copy HTML",
    htmlDetailsSummary: "Generated HTML",
    previewEyebrow: "Preview",
    previewTitle: "Gmail-style email",
    gmailComposeTitle: "New message",
    fromLabel: "From",
    toLabel: "To",
    subjectLabel: "Subject",
    guidelinesTitle: "Quick guidelines",
    guidelineOne: "Use the full version for first contact emails.",
    guidelineTwo: "Use the short version for replies and long threads.",
    guidelineThree: "Keep logo size between 40–140 px to avoid broken layouts.",
    guidelineFour: "Paste into Gmail settings using “Copy for Gmail”.",
    customLabel: "Custom",
    copiedGmail: "Signature copied for Gmail.",
    copiedHtml: "Signature HTML copied.",
    resetDone: "Defaults restored.",
    copyFailed: "Copy failed. Select the generated HTML and copy manually.",
  },
  lv: {
    appTitle: "NECom e-pasta parakstu laboratorija",
    appSubtitle: "Izveido, pārskati un nokopē Gmail gatavus parakstus.",
    builderEyebrow: "Veidotājs",
    builderTitle: "Izveido parakstu",
    reset: "Atiestatīt",
    presetTitle: "Zīmola sagatave",
    presetHelp: "Ar vienu klikšķi maini logo, mājaslapu un akcenta krāsu.",
    personTitle: "Personas informācija",
    nameLabel: "Vārds",
    titleLabel: "Amats",
    phoneLabel: "Tālrunis",
    emailLabel: "E-pasts",
    showEmailLabel: "Rādīt e-pasta adresi parakstā",
    companyTitle: "Uzņēmums un saites",
    address1Label: "Adrese, 1. rinda",
    address2Label: "Adrese, 2. rinda",
    websiteLabelLabel: "Mājaslapas teksts",
    websiteUrlLabel: "Mājaslapas URL",
    descriptionLabel: "Uzņēmuma / pasākuma teksts",
    styleTitle: "Stils un izmērs",
    versionLegend: "Paraksta versija",
    fullVersion: "Pilnā",
    shortVersion: "Īsā",
    accentColorLabel: "Akcenta krāsa",
    textColorLabel: "Teksta krāsa",
    logoUrlLabel: "Logo URL",
    logoSizeLabel: "Logo izmērs",
    signatureWidthLabel: "Paraksta platums",
    copyForGmail: "Kopēt Gmail",
    copyHtml: "Kopēt HTML",
    htmlDetailsSummary: "Ģenerētais HTML",
    previewEyebrow: "Priekšskatījums",
    previewTitle: "Gmail tipa e-pasts",
    gmailComposeTitle: "Jauns ziņojums",
    fromLabel: "No",
    toLabel: "Kam",
    subjectLabel: "Temats",
    guidelinesTitle: "Īsās vadlīnijas",
    guidelineOne: "Pilno versiju izmanto pirmajiem kontaktiem.",
    guidelineTwo: "Īso versiju izmanto atbildēm un garām sarakstēm.",
    guidelineThree: "Logo turi 40–140 px robežās, lai nesabojātu izkārtojumu.",
    guidelineFour: "Gmail iestatījumos ielīmē ar “Kopēt Gmail”.",
    customLabel: "Pielāgots",
    copiedGmail: "Paraksts nokopēts Gmail lietošanai.",
    copiedHtml: "Paraksta HTML nokopēts.",
    resetDone: "Noklusējuma vērtības atjaunotas.",
    copyFailed: "Kopēšana neizdevās. Iezīmē ģenerēto HTML un nokopē manuāli.",
  },
};

const STORAGE_KEY = "necom-email-signature-lab:v1";

const DEFAULT_STATE = {
  language: "en",
  brandId: "necom",
  signatureMode: "full",
  name: "Dāvis Rūķītis",
  title: "Digital Operations Manager",
  phone: "+371 260 78809",
  email: "davis@necom.lv",
  showEmail: false,
  address1: "Brīvības iela 40-34, Rīga",
  address2: "LV-1050, Latvia",
  websiteLabel: "www.necom.lv",
  websiteUrl: "https://www.necom.lv",
  logoUrl: "https://rimirigamarathon.com/wp-content/uploads/2026/02/necom-1.png",
  accentColor: "#B59A71",
  textColor: "#111111",
  logoSize: 72,
  signatureWidth: 560,
  description:
    "Event production, marketing and sponsorship agency creating experiences that are moving Riga and Latvia since 2006.",
  currentEmailIndex: 0,
};

const state = loadState();

const elements = {
  presetGrid: document.querySelector("#presetGrid"),
  languageButtons: document.querySelectorAll("[data-language]"),
  i18nNodes: document.querySelectorAll("[data-i18n]"),
  resetButton: document.querySelector("#resetButton"),
  nameInput: document.querySelector("#nameInput"),
  titleInput: document.querySelector("#titleInput"),
  phoneInput: document.querySelector("#phoneInput"),
  emailInput: document.querySelector("#emailInput"),
  showEmailInput: document.querySelector("#showEmailInput"),
  address1Input: document.querySelector("#address1Input"),
  address2Input: document.querySelector("#address2Input"),
  websiteLabelInput: document.querySelector("#websiteLabelInput"),
  websiteUrlInput: document.querySelector("#websiteUrlInput"),
  descriptionInput: document.querySelector("#descriptionInput"),
  signatureModeInputs: document.querySelectorAll('[name="signatureMode"]'),
  accentColorInput: document.querySelector("#accentColorInput"),
  textColorInput: document.querySelector("#textColorInput"),
  logoUrlInput: document.querySelector("#logoUrlInput"),
  logoSizeInput: document.querySelector("#logoSizeInput"),
  signatureWidthInput: document.querySelector("#signatureWidthInput"),
  logoSizeValue: document.querySelector("#logoSizeValue"),
  signatureWidthValue: document.querySelector("#signatureWidthValue"),
  copyRichButton: document.querySelector("#copyRichButton"),
  copyHtmlButton: document.querySelector("#copyHtmlButton"),
  htmlOutput: document.querySelector("#htmlOutput"),
  shuffleEmailButton: document.querySelector("#shuffleEmailButton"),
  previewFrom: document.querySelector("#previewFrom"),
  previewSubject: document.querySelector("#previewSubject"),
  previewEmailText: document.querySelector("#previewEmailText"),
  signaturePreview: document.querySelector("#signaturePreview"),
  toast: document.querySelector("#toast"),
};

init();

function init() {
  renderPresets();
  bindEvents();
  applyLanguage();
  syncControls();
  renderEverything();
}

function bindEvents() {
  elements.languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.language);
    });
  });

  const bindings = [
    ["nameInput", "name"],
    ["titleInput", "title"],
    ["phoneInput", "phone"],
    ["emailInput", "email"],
    ["address1Input", "address1"],
    ["address2Input", "address2"],
    ["websiteLabelInput", "websiteLabel"],
    ["websiteUrlInput", "websiteUrl"],
    ["descriptionInput", "description"],
    ["logoUrlInput", "logoUrl"],
    ["accentColorInput", "accentColor"],
    ["textColorInput", "textColor"],
  ];

  bindings.forEach(([elementKey, stateKey]) => {
    elements[elementKey].addEventListener("input", (event) => {
      state[stateKey] = event.target.value;
      saveAndRender();
    });
  });

  elements.showEmailInput.addEventListener("change", (event) => {
    state.showEmail = event.target.checked;
    saveAndRender();
  });

  elements.signatureModeInputs.forEach((input) => {
    input.addEventListener("change", () => {
      state.signatureMode = input.value;
      saveAndRender();
    });
  });

  elements.logoSizeInput.addEventListener("input", (event) => {
    state.logoSize = clampNumber(event.target.value, 40, 140);
    saveAndRender();
  });

  elements.signatureWidthInput.addEventListener("input", (event) => {
    state.signatureWidth = clampNumber(event.target.value, 280, 640);
    saveAndRender();
  });

  elements.shuffleEmailButton.addEventListener("click", () => {
    shuffleEmail();
    saveAndRender();
  });

  elements.copyRichButton.addEventListener("click", copyRichSignature);
  elements.copyHtmlButton.addEventListener("click", copyHtmlSignature);

  elements.resetButton.addEventListener("click", () => {
    Object.assign(state, createDefaultStateForLanguage(state.language));
    localStorage.removeItem(STORAGE_KEY);
    applyLanguage();
    syncControls();
    renderEverything();
    showToast(t("resetDone"));
  });
}

function renderPresets() {
  elements.presetGrid.innerHTML = BRAND_PRESETS.map((preset) => {
    const logoMarkup =
      preset.id === "custom"
        ? `<span class="preset-card__swatch" style="background:${escapeAttribute(
            preset.accentColor,
          )}"></span>`
        : `<img src="${escapeAttribute(preset.logoUrl)}" alt="" loading="lazy" />`;

    return `<button class="preset-card" type="button" data-preset-id="${escapeAttribute(
      preset.id,
    )}">
      <span class="preset-card__logo">${logoMarkup}</span>
      <span>
        <span class="preset-card__name">${escapeHtml(getPresetName(preset))}</span>
        <span class="preset-card__url">${escapeHtml(preset.websiteLabel)}</span>
      </span>
    </button>`;
  }).join("");

  elements.presetGrid.querySelectorAll("[data-preset-id]").forEach((button) => {
    button.addEventListener("click", () => applyPreset(button.dataset.presetId));
  });
}

function applyPreset(presetId) {
  const preset = getPresetById(presetId);
  state.brandId = preset.id;
  state.websiteLabel = preset.websiteLabel;
  state.websiteUrl = preset.websiteUrl;
  state.logoUrl = preset.logoUrl;
  state.accentColor = preset.accentColor;
  state.textColor = preset.textColor;
  state.description = preset.description[state.language];
  syncControls();
  saveAndRender();
}

function setLanguage(language) {
  const oldPreset = getPresetById(state.brandId);
  const oldPresetDescriptions = Object.values(oldPreset.description);
  const canTranslateDescription = oldPresetDescriptions.includes(state.description);

  state.language = language;

  if (canTranslateDescription) {
    state.description = oldPreset.description[language];
  }

  const emailList = EMAIL_EXAMPLES[state.language];
  state.currentEmailIndex = Math.min(state.currentEmailIndex, emailList.length - 1);

  applyLanguage();
  syncControls();
  saveAndRender();
}

function applyLanguage() {
  document.documentElement.lang = state.language;
  document.title = t("appTitle");

  elements.languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.language === state.language);
  });

  elements.i18nNodes.forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = t(key);
  });

  elements.shuffleEmailButton.title = t("previewTitle");
  elements.shuffleEmailButton.setAttribute("aria-label", t("previewTitle"));
  renderPresets();
}

function syncControls() {
  elements.nameInput.value = state.name;
  elements.titleInput.value = state.title;
  elements.phoneInput.value = state.phone;
  elements.emailInput.value = state.email;
  elements.showEmailInput.checked = state.showEmail;
  elements.address1Input.value = state.address1;
  elements.address2Input.value = state.address2;
  elements.websiteLabelInput.value = state.websiteLabel;
  elements.websiteUrlInput.value = state.websiteUrl;
  elements.descriptionInput.value = state.description;
  elements.accentColorInput.value = normalizeHexColor(state.accentColor, "#B59A71");
  elements.textColorInput.value = normalizeHexColor(state.textColor, "#111111");
  elements.logoUrlInput.value = state.logoUrl;
  elements.logoSizeInput.value = String(state.logoSize);
  elements.signatureWidthInput.value = String(state.signatureWidth);
  elements.logoSizeValue.textContent = `${state.logoSize} px`;
  elements.signatureWidthValue.textContent = `${state.signatureWidth} px`;

  elements.signatureModeInputs.forEach((input) => {
    input.checked = input.value === state.signatureMode;
  });

  elements.presetGrid.querySelectorAll("[data-preset-id]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.presetId === state.brandId);
  });

  document.documentElement.style.setProperty("--accent", state.accentColor);
}

function saveAndRender() {
  saveState();
  renderEverything();
}

function renderEverything() {
  syncControls();
  renderEmailPreview();
  renderSignaturePreview();
  elements.htmlOutput.value = renderSignatureHtml({ preview: false });
}

function renderEmailPreview() {
  const email = EMAIL_EXAMPLES[state.language][state.currentEmailIndex];
  elements.previewFrom.textContent = email.email;
  elements.previewSubject.textContent = email.subject;
  elements.previewEmailText.textContent = email.text;
}

function renderSignaturePreview() {
  elements.signaturePreview.innerHTML = renderSignatureHtml({ preview: true });
  elements.signaturePreview.querySelectorAll("[data-edit-field]").forEach((node) => {
    node.addEventListener("blur", () => {
      const key = node.dataset.editField;
      state[key] = node.textContent.trim();
      syncControls();
      saveAndRender();
    });

    node.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        node.blur();
      }
    });
  });
}

function renderSignatureHtml({ preview }) {
  const width = clampNumber(state.signatureWidth, 280, 640);
  const logoWidth = clampNumber(state.logoSize, 40, 140);
  const accent = normalizeHexColor(state.accentColor, "#B59A71");
  const textColor = normalizeHexColor(state.textColor, "#111111");
  const logoUrl = safeImageUrl(state.logoUrl);
  const websiteUrl = normalizeWebsiteUrl(state.websiteUrl);
  const telHref = makePhoneHref(state.phone);
  const emailHref = `mailto:${encodeURIComponent(state.email.trim())}`;
  const preset = getPresetById(state.brandId);
  const mode = state.signatureMode === "short" ? "short" : "full";
  const brandName = preset.id === "custom" ? t("customLabel") : preset.name;

  const edit = (field) =>
    preview ? ` contenteditable="true" data-edit-field="${escapeAttribute(field)}" spellcheck="false"` : "";

  const emailPart =
    state.showEmail && state.email.trim()
      ? `${mode === "full" ? "<br>" : ""}<span style="color:#5f6368;">E</span>&nbsp;
        <a href="${escapeAttribute(emailHref)}" style="color:${textColor}; text-decoration:none;">${escapeHtml(
          state.email,
        )}</a>${mode === "short" ? `<span style="color:#c0c0c0;">&nbsp;&nbsp;|&nbsp;&nbsp;</span>` : ""}`
      : "";

  const fullAddress = [state.address1, state.address2]
    .filter((line) => line.trim())
    .map((line, index) =>
      `<span${index === 0 ? edit("address1") : edit("address2")}>${escapeHtml(line)}</span>`,
    )
    .join("<br>");

  const contactHtml =
    mode === "full"
      ? `${fullAddress ? `${fullAddress}<br>` : ""}
        <span style="color:#5f6368;">T</span>&nbsp;
        <a href="${escapeAttribute(telHref)}" style="color:${textColor}; text-decoration:none;"${edit(
          "phone",
        )}>${escapeHtml(state.phone)}</a>
        <span style="color:#c0c0c0;">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <a href="${escapeAttribute(websiteUrl)}" style="color:${accent}; text-decoration:underline;">${escapeHtml(
          state.websiteLabel,
        )}</a>
        ${emailPart}`
      : `<span style="color:#5f6368;">T</span>&nbsp;
        <a href="${escapeAttribute(telHref)}" style="color:${textColor}; text-decoration:none;"${edit(
          "phone",
        )}>${escapeHtml(state.phone)}</a>
        <span style="color:#c0c0c0;">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        ${emailPart}
        <a href="${escapeAttribute(websiteUrl)}" style="color:${accent}; text-decoration:underline;">${escapeHtml(
          state.websiteLabel,
        )}</a>`;

  const descriptionHtml =
    mode === "full" && state.description.trim()
      ? `
            <div style="height:12px; line-height:12px; font-size:12px;">&nbsp;</div>
            <div style="border-top:1px solid #efefef;"></div>
            <div style="height:10px; line-height:10px; font-size:10px;">&nbsp;</div>

            <div style="font-size:12px; line-height:16px; color:#444444;">
              <div style="font-weight:700; color:#222222;">
                ${escapeHtml(brandName)}
              </div>
              <div style="margin-top:2px;"${edit("description")}>
                ${formatMultiline(state.description)}
              </div>
            </div>`
      : "";

  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="${width}" style="border-collapse:collapse; width:${width}px; max-width:${width}px; mso-table-lspace:0pt; mso-table-rspace:0pt;">
  <tr>
    <td style="padding:0;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="${width}" style="border-collapse:collapse; width:${width}px; max-width:${width}px; border:1px solid #e6e6e6; border-left:6px solid ${accent};">
        <tr>
          <td style="padding:14px 14px 12px 14px; font-family:Arial, Helvetica, sans-serif; color:${textColor};">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
              <tr>
                <td valign="top" style="padding:0; font-size:16px; line-height:20px;">
                  <div style="font-weight:700;"${edit("name")}>${escapeHtml(state.name)}</div>
                  <div style="margin-top:2px; font-size:12px; line-height:16px; color:#222222;"${edit(
                    "title",
                  )}>${escapeHtml(state.title)}</div>
                </td>
                <td valign="middle" align="right" style="padding:0 0 0 12px; width:${logoWidth}px; white-space:nowrap;">
                  <img src="${escapeAttribute(logoUrl)}" alt="${escapeAttribute(
                    brandName,
                  )}" width="${logoWidth}" style="display:block; width:${logoWidth}px; max-width:${logoWidth}px; height:auto; border:0; outline:none; text-decoration:none;" />
                </td>
              </tr>
            </table>

            <div style="height:10px; line-height:10px; font-size:10px;">&nbsp;</div>
            <div style="border-top:1px solid #efefef;"></div>
            <div style="height:10px; line-height:10px; font-size:10px;">&nbsp;</div>

            <div style="font-size:13px; line-height:18px; color:${textColor};">
              ${contactHtml}
            </div>
            ${descriptionHtml}
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;
}

async function copyRichSignature() {
  const html = renderSignatureHtml({ preview: false });
  const text = createPlainTextSignature();

  try {
    if (navigator.clipboard?.write && window.ClipboardItem) {
      const clipboardItem = new ClipboardItem({
        "text/html": new Blob([html], { type: "text/html" }),
        "text/plain": new Blob([text], { type: "text/plain" }),
      });
      await navigator.clipboard.write([clipboardItem]);
    } else {
      fallbackCopyRenderedHtml(html);
    }

    showToast(t("copiedGmail"));
  } catch {
    try {
      fallbackCopyRenderedHtml(html);
      showToast(t("copiedGmail"));
    } catch {
      showToast(t("copyFailed"));
    }
  }
}

async function copyHtmlSignature() {
  const html = renderSignatureHtml({ preview: false });

  try {
    await navigator.clipboard.writeText(html);
    showToast(t("copiedHtml"));
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = html;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.append(textarea);
    textarea.select();

    try {
      document.execCommand("copy");
      showToast(t("copiedHtml"));
    } catch {
      showToast(t("copyFailed"));
    } finally {
      textarea.remove();
    }
  }
}

function fallbackCopyRenderedHtml(html) {
  const container = document.createElement("div");
  container.innerHTML = html;
  container.contentEditable = "true";
  container.style.position = "fixed";
  container.style.left = "-9999px";
  container.style.top = "0";
  document.body.append(container);

  const range = document.createRange();
  range.selectNodeContents(container);

  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);

  const ok = document.execCommand("copy");
  selection.removeAllRanges();
  container.remove();

  if (!ok) {
    throw new Error("Copy command failed.");
  }
}

function createPlainTextSignature() {
  const lines = [state.name, state.title, "", state.phone];

  if (state.showEmail && state.email.trim()) {
    lines.push(state.email);
  }

  lines.push(state.websiteLabel);

  if (state.signatureMode === "full") {
    lines.push(state.address1, state.address2, "", state.description);
  }

  return lines.filter(Boolean).join("\n");
}

function shuffleEmail() {
  const emailList = EMAIL_EXAMPLES[state.language];

  if (emailList.length < 2) {
    state.currentEmailIndex = 0;
    return;
  }

  let nextIndex = state.currentEmailIndex;

  while (nextIndex === state.currentEmailIndex) {
    nextIndex = Math.floor(Math.random() * emailList.length);
  }

  state.currentEmailIndex = nextIndex;
}

function loadState() {
  const base = createDefaultStateForLanguage("en");

  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return sanitizeState({ ...base, ...stored });
  } catch {
    return base;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function createDefaultStateForLanguage(language) {
  const preset = getPresetById("necom");
  return {
    ...DEFAULT_STATE,
    language,
    brandId: "necom",
    websiteLabel: preset.websiteLabel,
    websiteUrl: preset.websiteUrl,
    logoUrl: preset.logoUrl,
    accentColor: preset.accentColor,
    textColor: preset.textColor,
    description: preset.description[language],
    currentEmailIndex: 0,
  };
}

function sanitizeState(nextState) {
  const language = nextState.language === "lv" ? "lv" : "en";
  const brandId = BRAND_PRESETS.some((preset) => preset.id === nextState.brandId)
    ? nextState.brandId
    : "necom";

  return {
    ...createDefaultStateForLanguage(language),
    ...nextState,
    language,
    brandId,
    signatureMode: nextState.signatureMode === "short" ? "short" : "full",
    showEmail: Boolean(nextState.showEmail),
    logoSize: clampNumber(nextState.logoSize, 40, 140),
    signatureWidth: clampNumber(nextState.signatureWidth, 280, 640),
    accentColor: normalizeHexColor(nextState.accentColor, "#B59A71"),
    textColor: normalizeHexColor(nextState.textColor, "#111111"),
    currentEmailIndex: clampNumber(
      nextState.currentEmailIndex,
      0,
      EMAIL_EXAMPLES[language].length - 1,
    ),
  };
}

function getPresetById(id) {
  return BRAND_PRESETS.find((preset) => preset.id === id) || BRAND_PRESETS[0];
}

function getPresetName(preset) {
  return preset.id === "custom" ? t("customLabel") : preset.name;
}

function t(key) {
  return I18N[state.language]?.[key] || I18N.en[key] || key;
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");

  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => {
    elements.toast.classList.remove("is-visible");
  }, 2600);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

function formatMultiline(value) {
  return escapeHtml(value).replaceAll(/\r?\n/g, "<br>");
}

function normalizeHexColor(value, fallback) {
  const color = String(value || "").trim();

  if (/^#[0-9a-f]{6}$/i.test(color)) {
    return color;
  }

  if (/^#[0-9a-f]{3}$/i.test(color)) {
    return `#${color
      .slice(1)
      .split("")
      .map((char) => char + char)
      .join("")}`;
  }

  return fallback;
}

function normalizeWebsiteUrl(value) {
  const url = String(value || "").trim();

  if (!url) {
    return "https://www.necom.lv";
  }

  if (/^https?:\/\//i.test(url)) {
    return url;
  }

  return `https://${url.replace(/^\/+/, "")}`;
}

function safeImageUrl(value) {
  const url = String(value || "").trim();

  if (/^https?:\/\//i.test(url)) {
    return url;
  }

  return "https://rimirigamarathon.com/wp-content/uploads/2025/02/s-necom-logo.svg";
}

function makePhoneHref(value) {
  const normalized = String(value || "")
    .replace(/[^\d+]/g, "")
    .replace(/(?!^)\+/g, "");

  return normalized ? `tel:${normalized}` : "tel:+37126078809";
}

function clampNumber(value, min, max) {
  const number = Number(value);

  if (Number.isNaN(number)) {
    return min;
  }

  return Math.min(Math.max(Math.round(number), min), max);
}
