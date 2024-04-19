import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'findLanguageFromKey',
})
export default class FindLanguageFromKeyPipe implements PipeTransform {
  private languages: { [key: string]: { name: string; rtl?: boolean } } = {
    en: { name: 'English' },
    al: { name: 'Shqip' },
    bn: { name: 'বাংলা' },
    bg: { name: 'Български' },
    da: { name: 'Dansk' },
    nl: { name: 'Nederlands' },
    fi: { name: 'Suomi' },
    fr: { name: 'Français' },
    de: { name: 'Deutsch' },
    el: { name: 'Ελληνικά' },
    hi: { name: 'हिंदी' },
    pa: { name: 'ਪੰਜਾਬੀ' },
    si: { name: 'සිංහල' },
    ta: { name: 'தமிழ்' },
    te: { name: 'తెలుగు' },
    th: { name: 'ไทย' },
    vi: { name: 'Tiếng Việt' },
    // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
  };

  transform(lang: string): string {
    return this.languages[lang].name;
  }
}
