import { keyBy } from "lodash";

declare type CountryInfo = {
  name: string;
  flag: string;
};
export const countries: CountryInfo[] = [
  {
    name: "Russia",
    flag: "🇷🇺",
  },
  {
    name: "China",
    flag: "🇨🇳",
  },
  {
    name: "India",
    flag: "🇮🇳",
  },
  {
    name: "Kazakhstan",
    flag: "🇰🇿",
  },
  {
    name: "Saudi Arabia",
    flag: "🇸🇦",
  },
  {
    name: "Iran",
    flag: "🇮🇷",
  },
  {
    name: "Mongolia",
    flag: "🇲🇳",
  },
  {
    name: "Indonesia",
    flag: "🇮🇩",
  },
  {
    name: "Pakistan",
    flag: "🇵🇰",
  },
  {
    name: "Turkey",
    flag: "🇹🇷",
  },
  {
    name: "Myanmar",
    flag: "🇲🇲",
  },
  {
    name: "Afghanistan",
    flag: "🇦🇫",
  },
  {
    name: "Yemen",
    flag: "🇾🇪",
  },
  {
    name: "Thailand",
    flag: "🇹🇭",
  },
  {
    name: "Turkmenistan",
    flag: "🇹🇲",
  },
  {
    name: "Uzbekistan",
    flag: "🇺🇿",
  },
  {
    name: "Iraq",
    flag: "🇮🇶",
  },
  {
    name: "Japan",
    flag: "🇯🇵",
  },
  {
    name: "Vietnam",
    flag: "🇻🇳",
  },
  {
    name: "Malaysia",
    flag: "🇲🇾",
  },
  {
    name: "Oman",
    flag: "🇴🇲",
  },
  {
    name: "Philippines",
    flag: "🇵🇭",
  },
  {
    name: "Laos",
    flag: "🇱🇦",
  },
  {
    name: "Kyrgyzstan",
    flag: "🇰🇬",
  },
  {
    name: "Syria",
    flag: "🇸🇾",
  },
  {
    name: "Cambodia",
    flag: "🇰🇭",
  },
  {
    name: "Bangladesh",
    flag: "🇧🇩",
  },
  {
    name: "Nepal",
    flag: "🇳🇵",
  },
  {
    name: "Tajikistan",
    flag: "🇹🇯",
  },
  {
    name: "North Korea",
    flag: "🇰🇵",
  },
  {
    name: "South Korea",
    flag: "🇰🇷",
  },
  {
    name: "Jordan",
    flag: "🇯🇴",
  },
  {
    name: "United Arab Emirates",
    flag: "🇦🇪",
  },
  {
    name: "Azerbaijan",
    flag: "🇦🇿",
  },
  {
    name: "Georgia",
    flag: "🇬🇪",
  },
  {
    name: "Sri Lanka",
    flag: "🇱🇰",
  },
  {
    name: "Egypt",
    flag: "🇪🇬",
  },
  {
    name: "Bhutan",
    flag: "🇧🇹",
  },
  {
    name: "Taiwan",
    flag: "🇹🇼",
  },
  {
    name: "Armenia",
    flag: "🇦🇲",
  },
  {
    name: "Israel",
    flag: "🇮🇱",
  },
  {
    name: "Kuwait",
    flag: "🇰🇼",
  },
  {
    name: "Timor-Leste",
    flag: "🇹🇱",
  },
  {
    name: "Qatar",
    flag: "🇶🇦",
  },
  {
    name: "Lebanon",
    flag: "🇱🇧",
  },
  {
    name: "Cyprus",
    flag: "🇨🇾",
  },
  {
    name: "Palestine",
    flag: "🇵🇸",
  },
  {
    name: "Brunei",
    flag: "🇧🇳",
  },
  {
    name: "Bahrain",
    flag: "🇧🇭",
  },
  {
    name: "Singapore",
    flag: "🇸🇬",
  },
  {
    name: "Maldives",
    flag: "🇲🇻",
  },
];

export const countrieDetails = keyBy(countries, "name");
