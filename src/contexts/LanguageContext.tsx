import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { translations, Language } from "../i18n/translations";

type TranslationKey = keyof typeof translations.pt;

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    // Inicializar com o idioma salvo no localStorage, ou o idioma do navegador, senão 'pt'
    const [language, setLanguageState] = useState<Language>(() => {
        const saved = localStorage.getItem("language") as Language;
        if (saved && (saved === "pt" || saved === "en")) return saved;

        const browserLang = navigator.language.startsWith("pt") ? "pt" : "en";
        return browserLang;
    });

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("language", lang);
        document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    };

    useEffect(() => {
        document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    }, [language]);

    const t = (key: TranslationKey): string => {
        return translations[language][key] || translations.pt[key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
