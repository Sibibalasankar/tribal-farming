// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        logo: "TribalFarm AI",
        cropAI: "Crop AI",
        transport: "Transport",
        market: "Market Intel",
        about: "About",
        transportOptions: [
          {
            title: "Available Transports",
            description: "View available transportation options in your area.",
            buttonText: "View Options"
          },
          {
            title: "Share Your Transport",
            description: "Have extra space? Offer it to other farmers.",
            buttonText: "Offer Space"
          },
          {
            title: "Schedule Pickup",
            description: "Plan your transportation in advance.",
            buttonText: "Schedule Now"
          }
        ]
      }
    },
    ta: {
      translation: {
        logo: "சாதி பண்ணை AI",
        cropAI: "பயிர் AI",
        transport: "போக்குவரத்து",
        market: "சந்தை நுண்ணறிவு",
        about: "பற்றி",
        transportOptions: [
          {
            title: "கிடைக்கும் போக்குவரத்து",
            description: "உங்கள் பகுதியில் கிடைக்கும் போக்குவரத்து விருப்பங்களை பார்க்கவும்.",
            buttonText: "விருப்பங்களை பார்க்கவும்"
          },
          {
            title: "உங்கள் போக்குவரத்தை பகிரவும்",
            description: "மேலும் இடம் உள்ளதா? அதை மற்ற விவசாயிகளுடன் பகிரவும்.",
            buttonText: "இடத்தை வழங்கவும்"
          },
          {
            title: "பிக்கப் திட்டமிடல்",
            description: "முன்கூட்டியே உங்கள் போக்குவரத்தை திட்டமிடுங்கள்.",
            buttonText: "இப்போது திட்டமிடவும்"
          }
        ]
      }
    },
    ml: {
      translation: {
        logo: "TribalFarm AI",
        cropAI: "വിള AI",
        transport: "ഗതാഗതം",
        market: "വിപണി ബുദ്ധി",
        about: "കുറിച്ച്",
        transportOptions: [
          {
            title: "ലഭ്യമായ ഗതാഗതങ്ങൾ",
            description: "നിങ്ങളുടെ പ്രദേശത്തെ ലഭ്യമായ ഗതാഗത ഓപ്ഷനുകൾ കാണുക.",
            buttonText: "ഓപ്ഷനുകൾ കാണുക"
          },
          {
            title: "നിങ്ങളുടെ ഗതാഗതം പങ്കുവെക്കുക",
            description: "കൂടുതൽ സ്ഥലം ഉണ്ടോ? അത് മറ്റ് കര്‍ഷകരുമായി പങ്കുവെക്കൂ.",
            buttonText: "സ്ഥലം നൽകുക"
          },
          {
            title: "പിക്കപ്പ് ഷെഡ്യൂൾ ചെയ്യുക",
            description: "നിങ്ങളുടെ ഗതാഗതം മുൻകൂട്ടി പ്ലാൻ ചെയ്യുക.",
            buttonText: "ഇപ്പോൾ ഷെഡ്യൂൾ ചെയ്യുക"
          }
        ]
      }
    }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
