import { create } from 'zustand';

import { Subscription } from '@/types/Subscription';

export type LanguagesSupported =
  | 'en'
  | 'fr'
  | 'es'
  | 'nl'
  | 'ro'
  | 'zh'
  | 'hi'
  | 'ar'
  | 'fr'
  | 'bn'
  | 'ru'
  | 'pt'
  | 'id';

export const LanguagesSupportedMap: Record<LanguagesSupported, string> = {
  en: 'English',
  ar: 'Arabic',
  bn: 'Bengali',
  es: 'Spanish',
  fr: 'France',
  hi: 'Hindi',
  id: 'Indonesian',
  nl: 'Dutch',
  pt: 'Portuguese',
  ro: 'Romanian',
  ru: 'Russian',
  zh: 'Chinese',
};

interface SubscriptionState {
  subscription: Subscription | null | undefined;
  setSubscription: (subscription: Subscription | null) => void;
}

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  subscription: undefined,
  setSubscription: (subscription: Subscription | null) => set({ subscription }),
}));
