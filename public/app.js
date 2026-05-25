const STORAGE_KEY = "necom-email-signature-lab-v2";
const MINIMAL_COLOR = "#d8dada";

const BRAND_PRESETS = [
  {
    id: "necom",
    name: "NECom",
    shortName: "NECom",
    websiteLabel: "www.necom.lv",
    websiteUrl: "https://www.necom.lv",
    accentColor: "#B59A71",
    textColor: "#111111",
    minimalColor: MINIMAL_COLOR,
    cardBg: "#0f0f0f",
    cardLogoVariant: "minimal",
    logoVariants: {
      black: "https://rimirigamarathon.com/wp-content/uploads/2026/02/necom.png",
      minimal: "https://rimirigamarathon.com/wp-content/uploads/2026/02/necom-1.png",
    },
    infoText: {
      en: "Nords Event Communications (NECom) crafts experiences that move, inspire and elevate Riga and Latvia.",
      lv: "Nords Event Communications (NECom) rada pieredzes, kas kustina, iedvesmo un ceļ Rīgu un Latviju.",
    },
  },
  {
    id: "rrm",
    name: "Rimi Riga Marathon",
    shortName: "RRM",
    websiteLabel: "rimirigamarathon.com",
    websiteUrl: "https://rimirigamarathon.com/",
    accentColor: "#cc2128",
    textColor: "#111111",
    minimalColor: MINIMAL_COLOR,
    cardBg: "#cc2128",
    cardLogoVariant: "white",
    logoVariants: {
      black: "https://rimirigamarathon.com/wp-content/uploads/2025/02/RRM-logo-black.png",
      minimal: "https://rimirigamarathon.com/wp-content/uploads/2026/05/rrm-logo-2.png",
      white: "https://rimirigamarathon.com/wp-content/uploads/2026/05/RRM-logo.png",
    },
    infoText: {
      en: "The biggest and most international running event in the Baltics.",
      lv: "Lielākais un starptautiskākais skriešanas notikums Baltijā.",
    },
  },
  {
    id: "pink-noise",
    name: "Pink Noise Riga",
    shortName: "PNR",
    websiteLabel: "pinknoiseriga.com",
    websiteUrl: "https://pinknoiseriga.com/",
    accentColor: "#fa4100",
    textColor: "#111111",
    minimalColor: MINIMAL_COLOR,
    cardBg: "#fa4100",
    cardLogoVariant: "black",
    logoVariants: {
      black: "https://rimirigamarathon.com/wp-content/uploads/2026/05/pnr-black.png",
      minimal: "https://rimirigamarathon.com/wp-content/uploads/2026/05/pnr-light.png",
      orange: "https://rimirigamarathon.com/wp-content/uploads/2026/05/pnr-orange.png",
    },
    infoText: {
      en: "Riga's music festival: world-class jazz, pop-rock, fusion and contemporary improvised music.",
      lv: "Rīgas mūzikas festivāls: pasaules līmeņa džezs, poproks, fusion un laikmetīgā improvizētā mūzika.",
    },
  },
  {
    id: "rwch",
    name: "Riga Wine & Champagne",
    shortName: "RWCH",
    websiteLabel: "rigawinechampagne.lv",
    websiteUrl: "https://rigawinechampagne.lv/",
    accentColor: "#e40521",
    textColor: "#111111",
    minimalColor: MINIMAL_COLOR,
    cardBg: "#e40521",
    cardLogoVariant: "minimal",
    logoVariants: {
      black: "https://rimirigamarathon.com/wp-content/uploads/2026/05/rwch-logo.png",
      minimal: "https://rimirigamarathon.com/wp-content/uploads/2026/05/rwch-logo-1.png",
    },
    infoText: {
      en: "The Baltics' most exciting Champagne and wine festival.",
      lv: "Baltijas aizraujošākais šampanieša un vīna festivāls.",
    },
  },
  {
    id: "rwf",
    name: "Riga Whisky & Friends",
    shortName: "RWF",
    websiteLabel: "rigawhiskyfriends.com",
    websiteUrl: "https://rigawhiskyfriends.com/",
    accentColor: "#023047",
    textColor: "#111111",
    minimalColor: MINIMAL_COLOR,
    cardBg: "#023047",
    cardLogoVariant: "minimal",
    logoVariants: {
      black: "https://rimirigamarathon.com/wp-content/uploads/2026/05/rwf-logo.png",
      minimal: "https://rimirigamarathon.com/wp-content/uploads/2026/05/rwf-logo-1.png",
    },
    infoText: {
      en: "Premier whisky festival in the Baltics, bringing together whiskies, cocktails, experts, chefs and friends.",
      lv: "Vadošais viskija festivāls Baltijā, kas apvieno viskijus, kokteiļus, ekspertus, šefpavārus un draugus.",
    },
  },
  {
    id: "bwda",
    name: "Baltic Wine & Drinks Awards",
    shortName: "BWDA",
    websiteLabel: "balticwinelists.com",
    websiteUrl: "https://www.balticwinelists.com/baltic-wine-drinks-awards/winners",
    accentColor: "#fad0c5",
    textColor: "#111111",
    minimalColor: MINIMAL_COLOR,
    cardBg: "#fad0c5",
    cardLogoVariant: "black",
    logoVariants: {
      black: "https://rimirigamarathon.com/wp-content/uploads/2025/02/BWDA-logo.svg",
    },
    infoText: {
      en: "Spotlighting good, great and extraordinary restaurants and wine bars in Latvia, Estonia and Lithuania.",
      lv: "Izceļ labus, lieliskus un izcilus restorānus un vīna bārus Latvijā, Igaunijā un Lietuvā.",
    },
  },
  {
    id: "custom",
    name: "Custom",
    shortName: "Custom",
    websiteLabel: "your-site.com",
    websiteUrl: "https://example.com",
    accentColor: "#B59A71",
    textColor: "#111111",
    minimalColor: MINIMAL_COLOR,
    cardBg: "#f1f1f1",
    cardLogoVariant: "custom",
    logoVariants: {
      custom: "https://rimirigamarathon.com/wp-content/uploads/2026/02/necom.png",
    },
    infoText: {
      en: "Custom signature info text.",
      lv: "Pielāgots paraksta informatīvais teksts.",
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
    reset: "Reset",
    rowsTitle: "Rows",
    presetFull: "Full",
    presetCompact: "Compact",
    presetMinimal: "Minimal",
    rowLogo: "Logo",
    rowContact: "Contact",
    rowAddress: "Address",
    rowWebsite: "Website",
    rowInfo: "Info text",
    rowBanner: "Banner",
    personTitle: "Person",
    nameLabel: "Name",
    titleLabel: "Job title",
    phoneLabel: "Phone",
    emailLabel: "Email",
    showEmailLabel: "Show email address",
    detailsTitle: "Details",
    address1Label: "Address line 1",
    address2Label: "Address line 2",
    websiteLabelLabel: "Website label",
    websiteUrlLabel: "Website URL",
    infoTextLabel: "Info text",
    logoTitle: "Logo",
    logoVariantLabel: "Logo version",
    logoUrlLabel: "Logo URL",
    logoSizeLabel: "Logo size",
    minimalColorLabel: "Minimal color",
    styleTitle: "Style",
    signatureStyleLabel: "Signature design",
    styleClassic: "Classic",
    styleModern: "Modern",
    accentColorLabel: "Accent color",
    textColorLabel: "Text color",
    signatureWidthLabel: "Signature width",
    bannerTitle: "Banner",
    bannerUrlLabel: "Banner image URL",
    bannerLinkLabel: "Banner link URL",
    bannerPositionLabel: "Banner position",
    bannerTop: "Top",
    bannerAfterHeader: "After name/logo",
    bannerBeforeInfo: "Before info text",
    bannerBottom: "Bottom",
    bannerSpacerLabel: "Banner spacer",
    copyRendered: "Copy for Gmail",
    copyHtml: "Copy HTML",
    copiedRendered: "Copied signature.",
    copiedHtml: "Copied HTML.",
    copyFailed: "Copy failed. Select the preview and copy manually.",
    fromLabel: "From",
    logoVariantBlack: "Black",
    logoVariantMinimal: "Minimal",
    logoVariantWhite: "White",
    logoVariantOrange: "Orange",
    logoVariantCustom: "Custom",
  },
  lv: {
    reset: "Atiestatīt",
    rowsTitle: "Rindas",
    presetFull: "Pilns",
    presetCompact: "Kompakts",
    presetMinimal: "Minimāls",
    rowLogo: "Logo",
    rowContact: "Kontakti",
    rowAddress: "Adrese",
    rowWebsite: "Mājaslapa",
    rowInfo: "Info teksts",
    rowBanner: "Baneris",
    personTitle: "Persona",
    nameLabel: "Vārds",
    titleLabel: "Amats",
    phoneLabel: "Telefons",
    emailLabel: "E-pasts",
    showEmailLabel: "Rādīt e-pasta adresi",
    detailsTitle: "Detaļas",
    address1Label: "Adrese 1. rinda",
    address2Label: "Adrese 2. rinda",
    websiteLabelLabel: "Mājaslapas teksts",
    websiteUrlLabel: "Mājaslapas URL",
    infoTextLabel: "Info teksts",
    logoTitle: "Logo",
    logoVariantLabel: "Logo versija",
    logoUrlLabel: "Logo URL",
    logoSizeLabel: "Logo izmērs",
    minimalColorLabel: "Minimālā krāsa",
    styleTitle: "Stils",
    signatureStyleLabel: "Paraksta dizains",
    styleClassic: "Klasisks",
    styleModern: "Moderns",
    accentColorLabel: "Akcenta krāsa",
    textColorLabel: "Teksta krāsa",
    signatureWidthLabel: "Paraksta platums",
    bannerTitle: "Baneris",
    bannerUrlLabel: "Banera attēla URL",
    bannerLinkLabel: "Banera saites URL",
    bannerPositionLabel: "Banera pozīcija",
    bannerTop: "Augšā",
    bannerAfterHeader: "Pēc vārda/logo",
    bannerBeforeInfo: "Pirms info teksta",
    bannerBottom: "Apakšā",
    bannerSpacerLabel: "Banera atstarpe",
    copyRendered: "Kopēt Gmail",
    copyHtml: "Kopēt HTML",
    copiedRendered: "Paraksts nokopēts.",
    copiedHtml: "HTML nokopēts.",
    copyFailed: "Kopēšana neizdevās. Iezīmē priekšskatījumu un kopē manuāli.",
    fromLabel: "No",
    logoVariantBlack: "Melns",
    logoVariantMinimal: "Minimāls",
    logoVariantWhite: "Balts",
    logoVariantOrange: "Oranžs",
    logoVariantCustom: "Pielāgots",
  },
};

const ROW_PRESETS = {
  full: {
    showLogo: true,
    showContact: true,
    showAddress: true,
    showWebsite: true,
    showInfo: true,
    showBanner: false,
  },
  compact: {
    showLogo: true,
    showContact: true,
    showAddress: false,
    showWebsite: true,
    showInfo: false,
    showBanner: false,
  },
  minimal: {
    showLogo: true,
    showContact: false,
    showAddress: false,
    showWebsite: true,
    showInfo: false,
    showBanner: false,
  },
};

const DEFAULT_STATE = {
  language: "en",
  activeBrandId: "necom",
  currentEmailIndex: 0,
  name: "Dāvis Rūķītis",
  jobTitle: "Digital Operations Manager",
  phone: "+371 260 78809",
  email: "davis@necom.lv",
  showEmail: false,
  address1: "Brīvības iela 40-34, Rīga",
  address2: "LV-1050, Latvia",
  websiteLabel: "www.necom.lv",
  websiteUrl: "https://www.necom.lv",
  infoText: BRAND_PRESETS[0].infoText.en,
  logoVariant: "black",
  logoUrl: BRAND_PRESETS[0].logoVariants.black,
  logoSize: 72,
  signatureWidth: 520,
  signatureStyle: "classic",
  accentColor: BRAND_PRESETS[0].accentColor,
  minimalColor: MINIMAL_COLOR,
  textColor: "#111111",
  bannerUrl: "",
  bannerLink: "",
  bannerPosition: "bottom",
  bannerSpacer: 12,
  showLogo: true,
  showContact: true,
  showAddress: true,
  showWebsite: true,
  showInfo: true,
  showBanner: false,
};

let state = loadState();
let copyStatusTimer = null;

const els = {
  presetGrid: document.getElementById("presetGrid"),
  resetButton: document.getElementById("resetButton"),
  languageButtons: document.querySelectorAll("[data-language]"),
  rowLogoInput: document.getElementById("rowLogoInput"),
  rowContactInput: document.getElementById("rowContactInput"),
  rowAddressInput: document.getElementById("rowAddressInput"),
  rowWebsiteInput: document.getElementById("rowWebsiteInput"),
  rowInfoInput: document.getElementById("rowInfoInput"),
  rowBannerInput: document.getElementById("rowBannerInput"),
  rowPresetButtons: document.querySelectorAll("[data-row-preset]"),
  nameInput: document.getElementById("nameInput"),
  titleInput: document.getElementById("titleInput"),
  phoneInput: document.getElementById("phoneInput"),
  emailInput: document.getElementById("emailInput"),
  showEmailInput: document.getElementById("showEmailInput"),
  address1Input: document.getElementById("address1Input"),
  address2Input: document.getElementById("address2Input"),
  websiteLabelInput: document.getElementById("websiteLabelInput"),
  websiteUrlInput: document.getElementById("websiteUrlInput"),
  infoTextInput: document.getElementById("infoTextInput"),
  logoVariantInput: document.getElementById("logoVariantInput"),
  logoUrlInput: document.getElementById("logoUrlInput"),
  logoSizeInput: document.getElementById("logoSizeInput"),
  logoSizeValue: document.getElementById("logoSizeValue"),
  minimalColorInput: document.getElementById("minimalColorInput"),
  signatureStyleInput: document.getElementById("signatureStyleInput"),
  accentColorInput: document.getElementById("accentColorInput"),
  textColorInput: document.getElementById("textColorInput"),
  signatureWidthInput: document.getElementById("signatureWidthInput"),
  signatureWidthValue: document.getElementById("signatureWidthValue"),
  bannerUrlInput: document.getElementById("bannerUrlInput"),
  bannerLinkInput: document.getElementById("bannerLinkInput"),
  bannerPositionInput: document.getElementById("bannerPositionInput"),
  bannerSpacerInput: document.getElementById("bannerSpacerInput"),
  bannerSpacerValue: document.getElementById("bannerSpacerValue"),
  copyRenderedButton: document.getElementById("copyRenderedButton"),
  copyHtmlButton: document.getElementById("copyHtmlButton"),
  copyStatus: document.getElementById("copyStatus"),
  shuffleEmailButton: document.getElementById("shuffleEmailButton"),
  emailSubject: document.getElementById("emailSubject"),
  previewFrom: document.getElementById("previewFrom"),
  previewEmailBody: document.getElementById("previewEmailBody"),
  signaturePreview: document.getElementById("signaturePreview"),
};

init();

function init() {
  renderPresetButtons();
  bindEvents();
  syncUiFromState();
  renderAll();
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    return saved ? { ...DEFAULT_STATE, ...saved } : { ...DEFAULT_STATE };
  } catch {
    return { ...DEFAULT_STATE };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getActiveBrand() {
  return BRAND_PRESETS.find((brand) => brand.id === state.activeBrandId) || BRAND_PRESETS[0];
}

function translate(key) {
  return I18N[state.language][key] || I18N.en[key] || key;
}

function renderPresetButtons() {
  els.presetGrid.innerHTML = "";

  BRAND_PRESETS.forEach((brand) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `preset-card${brand.id === "custom" ? " preset-card--custom" : ""}`;
    button.dataset.brandId = brand.id;
    button.title = brand.name;
    button.style.setProperty("--preset-bg", brand.cardBg);
    button.style.setProperty("--preset-accent", brand.accentColor);

    if (brand.id === "custom") {
      button.textContent = "+";
      button.setAttribute("aria-label", "Custom");
    } else {
      const image = document.createElement("img");
      const variant = brand.logoVariants[brand.cardLogoVariant] ? brand.cardLogoVariant : Object.keys(brand.logoVariants)[0];
      image.src = brand.logoVariants[variant];
      image.alt = brand.name;
      button.appendChild(image);
    }

    els.presetGrid.appendChild(button);
  });
}

function bindEvents() {
  els.languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextLanguage = button.dataset.language;
      if (state.language === nextLanguage) return;

      const previousBrand = getActiveBrand();
      const previousInfo = previousBrand.infoText[state.language];

      state.language = nextLanguage;
      if (state.infoText === previousInfo) {
        state.infoText = previousBrand.infoText[nextLanguage];
      }

      state.currentEmailIndex = randomEmailIndex(nextLanguage);
      syncUiFromState();
      renderAll();
    });
  });

  els.presetGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-brand-id]");
    if (!button) return;
    applyBrand(button.dataset.brandId);
  });

  els.rowPresetButtons.forEach((button) => {
    button.addEventListener("click", () => {
      Object.assign(state, ROW_PRESETS[button.dataset.rowPreset]);
      syncUiFromState();
      renderAll();
    });
  });

  bindTextInput(els.nameInput, "name");
  bindTextInput(els.titleInput, "jobTitle");
  bindTextInput(els.phoneInput, "phone");
  bindTextInput(els.emailInput, "email");
  bindTextInput(els.address1Input, "address1");
  bindTextInput(els.address2Input, "address2");
  bindTextInput(els.websiteLabelInput, "websiteLabel");
  bindTextInput(els.websiteUrlInput, "websiteUrl");
  bindTextInput(els.infoTextInput, "infoText");
  bindTextInput(els.logoUrlInput, "logoUrl");
  bindTextInput(els.bannerUrlInput, "bannerUrl");
  bindTextInput(els.bannerLinkInput, "bannerLink");

  bindCheckbox(els.showEmailInput, "showEmail");
  bindCheckbox(els.rowLogoInput, "showLogo");
  bindCheckbox(els.rowContactInput, "showContact");
  bindCheckbox(els.rowAddressInput, "showAddress");
  bindCheckbox(els.rowWebsiteInput, "showWebsite");
  bindCheckbox(els.rowInfoInput, "showInfo");
  bindCheckbox(els.rowBannerInput, "showBanner");

  bindRange(els.logoSizeInput, "logoSize");
  bindRange(els.signatureWidthInput, "signatureWidth");
  bindRange(els.bannerSpacerInput, "bannerSpacer");

  els.logoVariantInput.addEventListener("change", () => {
    state.logoVariant = els.logoVariantInput.value;
    const brand = getActiveBrand();
    const nextLogo = brand.logoVariants[state.logoVariant];

    if (nextLogo) {
      state.logoUrl = nextLogo;
    }

    if (state.logoVariant === "minimal") {
      state.accentColor = state.minimalColor;
    }

    syncUiFromState();
    renderAll();
  });

  els.minimalColorInput.addEventListener("input", () => {
    state.minimalColor = els.minimalColorInput.value;
    if (state.logoVariant === "minimal") {
      state.accentColor = state.minimalColor;
    }
    syncUiFromState();
    renderAll();
  });

  els.accentColorInput.addEventListener("input", () => {
    state.accentColor = els.accentColorInput.value;
    renderAll();
  });

  els.textColorInput.addEventListener("input", () => {
    state.textColor = els.textColorInput.value;
    renderAll();
  });

  els.signatureStyleInput.addEventListener("change", () => {
    state.signatureStyle = els.signatureStyleInput.value;
    renderAll();
  });

  els.bannerPositionInput.addEventListener("change", () => {
    state.bannerPosition = els.bannerPositionInput.value;
    renderAll();
  });

  els.shuffleEmailButton.addEventListener("click", () => {
    state.currentEmailIndex = randomEmailIndex(state.language, state.currentEmailIndex);
    renderAll();
  });

  els.resetButton.addEventListener("click", () => {
    state = { ...DEFAULT_STATE };
    localStorage.removeItem(STORAGE_KEY);
    syncUiFromState();
    renderAll();
  });

  els.copyRenderedButton.addEventListener("click", async () => {
    const html = renderSignatureHtml({ editable: false });
    const plain = buildPlainTextSignature();

    try {
      await copyRichHtml(html, plain);
      showCopyStatus(translate("copiedRendered"));
    } catch {
      showCopyStatus(translate("copyFailed"));
    }
  });

  els.copyHtmlButton.addEventListener("click", async () => {
    const html = renderSignatureHtml({ editable: false });

    try {
      await navigator.clipboard.writeText(html);
      showCopyStatus(translate("copiedHtml"));
    } catch {
      showCopyStatus(translate("copyFailed"));
    }
  });
}

function bindTextInput(input, key) {
  input.addEventListener("input", () => {
    state[key] = input.value;
    renderAll();
  });
}

function bindCheckbox(input, key) {
  input.addEventListener("change", () => {
    state[key] = input.checked;
    renderAll();
  });
}

function bindRange(input, key) {
  input.addEventListener("input", () => {
    state[key] = Number(input.value);
    renderAll();
  });
}

function applyBrand(brandId) {
  const brand = BRAND_PRESETS.find((item) => item.id === brandId);
  if (!brand) return;

  const variantKeys = Object.keys(brand.logoVariants);
  const nextVariant = variantKeys.includes("black") ? "black" : variantKeys[0];

  state.activeBrandId = brand.id;
  state.logoVariant = nextVariant;
  state.websiteLabel = brand.websiteLabel;
  state.websiteUrl = brand.websiteUrl;
  state.accentColor = nextVariant === "minimal" ? brand.minimalColor : brand.accentColor;
  state.minimalColor = brand.minimalColor;
  state.textColor = brand.textColor;
  state.logoUrl = brand.logoVariants[nextVariant];
  state.infoText = brand.infoText[state.language];

  syncUiFromState();
  renderAll();
}

function syncUiFromState() {
  document.documentElement.lang = state.language;
  document.documentElement.style.setProperty("--accent", state.accentColor || "#B59A71");
  document.documentElement.style.setProperty("--minimal", state.minimalColor || MINIMAL_COLOR);

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    const value = translate(key);
    if (node.tagName === "OPTION") {
      node.textContent = value;
      return;
    }
    node.textContent = value;
  });

  els.languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.language === state.language);
  });

  els.presetGrid.querySelectorAll("[data-brand-id]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.brandId === state.activeBrandId);
  });

  els.nameInput.value = state.name;
  els.titleInput.value = state.jobTitle;
  els.phoneInput.value = state.phone;
  els.emailInput.value = state.email;
  els.showEmailInput.checked = state.showEmail;
  els.address1Input.value = state.address1;
  els.address2Input.value = state.address2;
  els.websiteLabelInput.value = state.websiteLabel;
  els.websiteUrlInput.value = state.websiteUrl;
  els.infoTextInput.value = state.infoText;

  els.rowLogoInput.checked = state.showLogo;
  els.rowContactInput.checked = state.showContact;
  els.rowAddressInput.checked = state.showAddress;
  els.rowWebsiteInput.checked = state.showWebsite;
  els.rowInfoInput.checked = state.showInfo;
  els.rowBannerInput.checked = state.showBanner;

  renderLogoVariantOptions();
  els.logoUrlInput.value = state.logoUrl;
  els.logoSizeInput.value = state.logoSize;
  els.logoSizeValue.textContent = `${state.logoSize}px`;
  els.minimalColorInput.value = state.minimalColor;
  els.signatureStyleInput.value = state.signatureStyle;
  els.accentColorInput.value = state.accentColor;
  els.textColorInput.value = state.textColor;
  els.signatureWidthInput.value = state.signatureWidth;
  els.signatureWidthValue.textContent = `${state.signatureWidth}px`;

  els.bannerUrlInput.value = state.bannerUrl;
  els.bannerLinkInput.value = state.bannerLink;
  els.bannerPositionInput.value = state.bannerPosition;
  els.bannerSpacerInput.value = state.bannerSpacer;
  els.bannerSpacerValue.textContent = `${state.bannerSpacer}px`;
}

function renderLogoVariantOptions() {
  const brand = getActiveBrand();
  const variants = Object.keys(brand.logoVariants);

  els.logoVariantInput.innerHTML = "";
  variants.forEach((variant) => {
    const option = document.createElement("option");
    option.value = variant;
    option.textContent = translate(`logoVariant${capitalize(variant)}`);
    els.logoVariantInput.appendChild(option);
  });

  if (!variants.includes(state.logoVariant)) {
    state.logoVariant = variants[0];
    state.logoUrl = brand.logoVariants[state.logoVariant];
  }

  els.logoVariantInput.value = state.logoVariant;
}

function renderAll() {
  renderEmailPreview();
  els.signaturePreview.innerHTML = renderSignatureHtml({ editable: true });
  bindEditablePreviewFields();
  syncRangeLabels();
  saveState();
}

function syncRangeLabels() {
  document.documentElement.style.setProperty("--accent", state.accentColor || "#B59A71");
  document.documentElement.style.setProperty("--minimal", state.minimalColor || MINIMAL_COLOR);
  els.logoSizeValue.textContent = `${state.logoSize}px`;
  els.signatureWidthValue.textContent = `${state.signatureWidth}px`;
  els.bannerSpacerValue.textContent = `${state.bannerSpacer}px`;
}

function renderEmailPreview() {
  const email = getCurrentEmail();
  els.emailSubject.textContent = email.subject;
  els.previewFrom.textContent = `${translate("fromLabel")}: ${email.email}`;
  els.previewEmailBody.textContent = email.text;
}

function getCurrentEmail() {
  const emails = EMAIL_EXAMPLES[state.language] || EMAIL_EXAMPLES.en;
  const index = clamp(state.currentEmailIndex, 0, emails.length - 1);
  return emails[index] || emails[0];
}

function randomEmailIndex(language, currentIndex = -1) {
  const emails = EMAIL_EXAMPLES[language] || EMAIL_EXAMPLES.en;
  if (emails.length < 2) return 0;

  let nextIndex = currentIndex;
  while (nextIndex === currentIndex) {
    nextIndex = Math.floor(Math.random() * emails.length);
  }

  return nextIndex;
}

function renderSignatureHtml({ editable }) {
  const accent = safeColor(state.accentColor, "#B59A71");
  const textColor = safeColor(state.textColor, "#111111");
  const width = clamp(Number(state.signatureWidth), 300, 620);
  const logoSize = clamp(Number(state.logoSize), 40, 160);
  const borderStyle =
    state.signatureStyle === "modern"
      ? `border:1px solid #e6e6e6; border-top:5px solid ${accent};`
      : `border:1px solid #e6e6e6; border-left:6px solid ${accent};`;
  const innerPadding = state.signatureStyle === "modern" ? "13px 15px 13px 15px" : "14px 14px 12px 14px";

  const rows = [];

  if (shouldRenderBanner("top")) {
    rows.push(renderBannerRow(width));
  }

  rows.push(`
    <tr>
      <td style="padding:${innerPadding}; font-family:Arial, Helvetica, sans-serif; color:${textColor};">
        ${renderHeaderBlock({ logoSize, textColor, editable })}
      </td>
    </tr>
  `);

  if (shouldRenderBanner("afterHeader")) {
    rows.push(renderBannerSpacerRow());
    rows.push(renderBannerRow(width));
  }

  const detailHtml = renderDetailBlock({ accent, textColor, editable });

  if (detailHtml.trim()) {
    rows.push(`
      <tr>
        <td style="padding:0 ${state.signatureStyle === "modern" ? "15px 15px 15px" : "14px 12px 14px"}; font-family:Arial, Helvetica, sans-serif; color:${textColor};">
          ${detailHtml}
        </td>
      </tr>
    `);
  }

  if (shouldRenderBanner("beforeInfo")) {
    rows.push(renderBannerSpacerRow());
    rows.push(renderBannerRow(width));
  }

  if (state.showInfo && state.infoText.trim()) {
    rows.push(`
      <tr>
        <td style="padding:${state.signatureStyle === "modern" ? "0 15px 14px 15px" : "0 14px 13px 14px"}; font-family:Arial, Helvetica, sans-serif;">
          ${renderDivider()}
          <div style="font-size:12px; line-height:16px; color:#444444;">
            ${editableText("infoText", state.infoText, editable, true)}
          </div>
        </td>
      </tr>
    `);
  }

  if (shouldRenderBanner("bottom")) {
    rows.push(renderBannerSpacerRow());
    rows.push(renderBannerRow(width));
  }

  return `<div dir="ltr" class="gmail_signature" data-smartmail="gmail_signature">
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="${width}" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:${width}px; max-width:100%;">
  <tbody>
    <tr>
      <td style="padding:0;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="${width}" style="border-collapse:collapse; width:${width}px; max-width:100%; ${borderStyle}">
          <tbody>
            ${rows.join("")}
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
</div>`;
}

function renderHeaderBlock({ logoSize, textColor, editable }) {
  const showLogo = state.showLogo && state.logoUrl.trim();
  const logoCell = showLogo
    ? `<td valign="middle" align="right" style="padding:0 0 0 12px; width:${logoSize + 12}px; white-space:nowrap;">
        <img src="${escapeAttr(state.logoUrl)}" alt="${escapeAttr(getActiveBrand().name)}" width="${logoSize}" style="display:block; width:${logoSize}px; max-width:${logoSize}px; height:auto; border:0; outline:none; text-decoration:none;" />
      </td>`
    : "";

  return `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse; width:100%;">
      <tbody>
        <tr>
          <td valign="top" style="padding:0; font-size:16px; line-height:20px; color:${textColor};">
            <div style="font-weight:700;">${editableText("name", state.name, editable)}</div>
            <div style="margin-top:2px; font-size:12px; line-height:16px; color:#222222;">${editableText("jobTitle", state.jobTitle, editable)}</div>
          </td>
          ${logoCell}
        </tr>
      </tbody>
    </table>
  `;
}

function renderDetailBlock({ accent, textColor, editable }) {
  const lines = [];

  if (state.showAddress && (state.address1.trim() || state.address2.trim())) {
    lines.push(`${editableText("address1", state.address1, editable)}${state.address1.trim() ? "<br>" : ""}${editableText("address2", state.address2, editable)}`);
  }

  const contactParts = [];

  if (state.showContact && state.phone.trim()) {
    contactParts.push(`<span style="color:#5f6368;">T</span>&nbsp;<a href="tel:${escapeAttr(state.phone.replace(/\s/g, ""))}" style="color:${textColor}; text-decoration:none;">${editableText("phone", state.phone, editable)}</a>`);
  }

  if (state.showEmail && state.email.trim()) {
    contactParts.push(`<span style="color:#5f6368;">E</span>&nbsp;<a href="mailto:${escapeAttr(state.email)}" style="color:${textColor}; text-decoration:none;">${editableText("email", state.email, editable)}</a>`);
  }

  if (state.showWebsite && state.websiteLabel.trim()) {
    contactParts.push(`<a href="${escapeAttr(normalizeUrl(state.websiteUrl))}" style="color:${accent}; text-decoration:underline;" target="_blank">${editableText("websiteLabel", state.websiteLabel, editable)}</a>`);
  }

  if (contactParts.length) {
    lines.push(contactParts.join(`<span style="color:#c0c0c0;">&nbsp;&nbsp;|&nbsp;&nbsp;</span>`));
  }

  if (!lines.length) return "";

  return `
    ${renderDivider()}
    <div style="font-size:13px; line-height:18px; color:${textColor};">
      ${lines.join("<br>")}
    </div>
  `;
}

function renderDivider() {
  return `
    <div style="height:10px; line-height:10px; font-size:10px;">&nbsp;</div>
    <div style="border-top:1px solid #efefef;"></div>
    <div style="height:10px; line-height:10px; font-size:10px;">&nbsp;</div>
  `;
}

function shouldRenderBanner(position) {
  return state.showBanner && state.bannerUrl.trim() && state.bannerPosition === position;
}

function renderBannerRow(width) {
  const image = `<img src="${escapeAttr(state.bannerUrl)}" alt="" width="${width}" style="display:block; width:${width}px; max-width:100%; height:auto; border:0; outline:none; text-decoration:none;" />`;
  const content = state.bannerLink.trim()
    ? `<a href="${escapeAttr(normalizeUrl(state.bannerLink))}" target="_blank" style="display:block; text-decoration:none;">${image}</a>`
    : image;

  return `<tr><td style="padding:0; line-height:0; font-size:0;">${content}</td></tr>`;
}

function renderBannerSpacerRow() {
  const spacer = clamp(Number(state.bannerSpacer), 0, 32);
  if (spacer === 0) return "";
  return `<tr><td style="padding:0; height:${spacer}px; line-height:${spacer}px; font-size:${spacer}px;">&nbsp;</td></tr>`;
}

function editableText(field, value, editable, multiline = false) {
  const escaped = multiline ? escapeHtml(value).replace(/\n/g, "<br>") : escapeHtml(value);

  if (!editable) return escaped;

  return `<span contenteditable="true" data-edit-field="${field}" style="display:inline; min-width:1em;">${escaped}</span>`;
}

function bindEditablePreviewFields() {
  els.signaturePreview.querySelectorAll("[data-edit-field]").forEach((node) => {
    node.addEventListener("blur", () => {
      const field = node.dataset.editField;
      state[field] = node.innerText.trim();
      syncUiFromState();
      renderAll();
    });
  });
}

function buildPlainTextSignature() {
  const lines = [state.name, state.jobTitle];

  if (state.showAddress) {
    if (state.address1) lines.push(state.address1);
    if (state.address2) lines.push(state.address2);
  }

  if (state.showContact && state.phone) lines.push(`T ${state.phone}`);
  if (state.showEmail && state.email) lines.push(`E ${state.email}`);
  if (state.showWebsite && state.websiteLabel) lines.push(state.websiteLabel);
  if (state.showInfo && state.infoText) lines.push("", state.infoText);

  return lines.filter(Boolean).join("\n");
}

async function copyRichHtml(html, plainText) {
  if (navigator.clipboard && window.ClipboardItem) {
    const item = new ClipboardItem({
      "text/html": new Blob([html], { type: "text/html" }),
      "text/plain": new Blob([plainText], { type: "text/plain" }),
    });
    await navigator.clipboard.write([item]);
    return;
  }

  const container = document.createElement("div");
  container.contentEditable = "true";
  container.style.position = "fixed";
  container.style.left = "-9999px";
  container.innerHTML = html;
  document.body.appendChild(container);

  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(container);
  selection.removeAllRanges();
  selection.addRange(range);

  const successful = document.execCommand("copy");
  selection.removeAllRanges();
  container.remove();

  if (!successful) {
    throw new Error("Copy command failed.");
  }
}

function showCopyStatus(message) {
  clearTimeout(copyStatusTimer);
  els.copyStatus.textContent = message;
  copyStatusTimer = setTimeout(() => {
    els.copyStatus.textContent = "";
  }, 2600);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/"/g, "&quot;");
}

function normalizeUrl(value) {
  const trimmed = String(value || "").trim();
  if (!trimmed) return "#";
  if (/^(https?:|mailto:|tel:)/i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

function safeColor(value, fallback) {
  return /^#[0-9a-f]{6}$/i.test(value) ? value : fallback;
}

function clamp(value, min, max) {
  const number = Number.isFinite(value) ? value : min;
  return Math.min(Math.max(number, min), max);
}

function capitalize(value) {
  return value ? value[0].toUpperCase() + value.slice(1) : value;
}
