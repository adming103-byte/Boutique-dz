"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { dictionaries } from "../dictionaries";
import type { Locale } from "../types";

interface LanguageContextValue {
  locale: Locale;
  dict: (typeof dictionaries)[keyof typeof dictionaries];
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({
  children,
}: LanguageProviderProps) {
  const [locale, setLocaleState] = useState<Locale>("ar");

  useEffect(() => {
    const saved = window.localStorage.getItem("dz-locale");

    if (
      saved === "ar" ||
      saved === "fr" ||
      saved === "en"
    ) {
      setLocaleState(saved as Locale);
    }
  }, []);

  function setLocale(newLocale: Locale) {
    setLocaleState(newLocale);
    window.localStorage.setItem("dz-locale", newLocale);
  }

  const value: LanguageContextValue = {
    locale,
    dict: dictionaries[locale],
    setLocale,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);

  if (!ctx) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return ctx;
}
