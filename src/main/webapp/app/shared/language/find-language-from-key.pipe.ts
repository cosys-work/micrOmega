import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'findLanguageFromKey',
})
export default class FindLanguageFromKeyPipe implements PipeTransform {
  private languages: { [key: string]: { name: string; rtl?: boolean } } = {
    en: { name: 'English' },
    al: { name: 'Shqip' },
    'ar-ly': { name: 'العربية', rtl: true },
    hy: { name: 'Հայերեն' },
    'az-Latn-az': { name: 'Azərbaycan dili' },
    by: { name: 'Беларускі' },
    bn: { name: 'বাংলা' },
    bg: { name: 'Български' },
    ca: { name: 'Català' },
    hr: { name: 'Hrvatski' },
    cs: { name: 'Český' },
    da: { name: 'Dansk' },
    nl: { name: 'Nederlands' },
    et: { name: 'Eesti' },
    fa: { name: 'فارسی', rtl: true },
    fi: { name: 'Suomi' },
    fr: { name: 'Français' },
    gl: { name: 'Galego' },
    de: { name: 'Deutsch' },
    el: { name: 'Ελληνικά' },
    hi: { name: 'हिंदी' },
    hu: { name: 'Magyar' },
    id: { name: 'Bahasa Indonesia' },
    it: { name: 'Italiano' },
    ja: { name: '日本語' },
    ko: { name: '한국어' },
    mr: { name: 'मराठी' },
    my: { name: 'မြန်မာ' },
    pl: { name: 'Polski' },
    'pt-br': { name: 'Português (Brasil)' },
    'pt-pt': { name: 'Português' },
    pa: { name: 'ਪੰਜਾਬੀ' },
    ro: { name: 'Română' },
    ru: { name: 'Русский' },
    sk: { name: 'Slovenský' },
    sr: { name: 'Srpski' },
    si: { name: 'සිංහල' },
    es: { name: 'Español' },
    sv: { name: 'Svenska' },
    tr: { name: 'Türkçe' },
    ta: { name: 'தமிழ்' },
    te: { name: 'తెలుగు' },
    th: { name: 'ไทย' },
    ua: { name: 'Українська' },
    'uz-Cyrl-uz': { name: 'Ўзбекча' },
    'uz-Latn-uz': { name: 'O`zbekcha' },
    vi: { name: 'Tiếng Việt' },
    'kr-Latn-kr': { name: 'Qaraqalpaqsha' },
    // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
  };

  transform(lang: string): string {
    return this.languages[lang].name;
  }

  isRTL(lang: string): boolean {
    return Boolean(this.languages[lang].rtl);
  }
}
