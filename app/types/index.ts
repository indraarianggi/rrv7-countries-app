export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: {
      ara: {
        official: string;
        common: string;
      };
      eng: {
        official: string;
        common: string;
      };
      tir: {
        official: string;
        common: string;
      };
    };
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: {
    ERN: {
      symbol: string;
      name: string;
    };
  };
  idd: {
    root: string;
    suffixes: string[];
  };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: {
    ara: string;
    eng: string;
    tir: string;
  };
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  coatOfArms: {
    png: string;
    svg: string;
  };
  startOfWeek: string;
  capitalInfo: {
    latlng: number[];
  };
}
