import { Language, TranslationSchema } from './types';
import { ko } from './translations/ko';
import { en } from './translations/en';
import { ja } from './translations/ja';

export * from './types';

export const dictionary: Record<Language, TranslationSchema> = {
  ko,
  en,
  ja,
};

export function getTranslation(lang: Language): TranslationSchema {
  return dictionary[lang] || dictionary.ko;
}
