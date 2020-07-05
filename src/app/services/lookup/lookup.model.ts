export interface Lookup {
  id: number;
  name: string;
}

export interface LookupTranslated {
  loopkupId: number;
  name: LookupName;
}

export interface LookupName {
  ar: string;
  en: string;
}
