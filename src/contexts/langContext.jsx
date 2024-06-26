import React, { useState, useContext } from "react";
import { IntlProvider } from "react-intl";
import English from "../languages/english.json";
import Arabic from "../languages/arabic.json";

const local = navigator.language;
let lang;
if (local === "ar") {
  lang = Arabic;
} else {
  lang = English;
}

const languageContext = React.createContext();

export function useLang() {
  return useContext(languageContext);
}

// export const useLang = () => useContext(langContext);

export const LangProvider = ({ children }) => {
  const [locale, setLocale] = useState("ar-EG");
  const [messages, setMessage] = useState(lang);

  function selectLang(messages) {
    const newLocale = messages;
    // console.log(" new locale", newLocale);
    setLocale(newLocale);
    
    if (newLocale === "ar-EG") {
      localStorage.setItem("locale", "ar-EG");
      setMessage(Arabic);
    } else if (newLocale === "en-US") {
      localStorage.setItem("locale", "en-US");
      setMessage(English);
    }
    else{
      localStorage.setItem("locale", "ar-EG");
      setMessage(Arabic);
    }
  }

  return (
    <languageContext.Provider value={{ locale, selectLang }}>
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </languageContext.Provider>
  );
};
