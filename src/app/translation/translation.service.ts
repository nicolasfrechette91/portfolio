import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';

type TranslationDictionary = {
  [key: string]: string | TranslationDictionary | TranslationValue[];
};

type TranslationValue = string | TranslationDictionary;

export type SupportedLocale = 'en-ca' | 'fr-ca';

const DEFAULT_LOCALE: SupportedLocale = 'en-ca';
const LOCALE_STORAGE_KEY = 'portfolio-locale';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private translations: TranslationDictionary = {};
  private readonly activeLocale = signal<SupportedLocale>('en-ca');

  readonly locale = this.activeLocale.asReadonly();

  constructor(private http: HttpClient) {}

  load(): Promise<void> {
    const locale = this.resolveInitialLocale();

    return this.loadTranslations(locale).then(() => {
      this.activeLocale.set(locale);
      this.updateDocumentLanguage(locale);
    });
  }

  setLocale(locale: SupportedLocale): Promise<void> {
    if (locale === this.activeLocale()) {
      return Promise.resolve();
    }

    return this.loadTranslations(locale).then(() => {
      this.activeLocale.set(locale);
      localStorage.setItem(LOCALE_STORAGE_KEY, locale);
      this.updateDocumentLanguage(locale);
    });
  }

  translate(key: string, params?: Record<string, unknown>): any {
    const value = key.split('.').reduce<any>((translation, segment) => {
      return translation?.[segment];
    }, this.translations);

    if (typeof value !== 'string') {
      return value ?? key;
    }

    if (!params) {
      return value;
    }

    return Object.entries(params).reduce((translation, [name, replacement]) => {
      return translation.replaceAll(`{{${name}}}`, String(replacement));
    }, value);
  }

  private loadTranslations(locale: SupportedLocale): Promise<void> {
    return firstValueFrom(
      this.http.get<TranslationDictionary>(`assets/i18n/${locale}.json`)
    ).then(translations => {
      this.translations = translations;
    });
  }

  private resolveInitialLocale(): SupportedLocale {
    const storedLocale = localStorage.getItem(LOCALE_STORAGE_KEY);

    return this.isSupportedLocale(storedLocale) ? storedLocale : DEFAULT_LOCALE;
  }

  private isSupportedLocale(value: unknown): value is SupportedLocale {
    return value === 'en-ca' || value === 'fr-ca';
  }

  private updateDocumentLanguage(locale: SupportedLocale): void {
    document.documentElement.lang = locale === 'fr-ca' ? 'fr-CA' : 'en-CA';
  }
}
