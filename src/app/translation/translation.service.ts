import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

type TranslationDictionary = {
  [key: string]: string | TranslationDictionary | TranslationValue[];
};

type TranslationValue = string | TranslationDictionary;

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private translations: TranslationDictionary = {};

  constructor(private http: HttpClient) {}

  load(): Promise<void> {
    const locale = new URLSearchParams(window.location.search).get('lang') === 'fr'
      ? 'fr-ca'
      : 'en-ca';

    return firstValueFrom(
      this.http.get<TranslationDictionary>(`assets/i18n/${locale}.json`)
    ).then(translations => {
      this.translations = translations;
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
}
