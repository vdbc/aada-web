import { keyBy } from "lodash";

declare type CountryInfo = {
  name: string;
  flag: string;
  value: string;
};
export const countries: CountryInfo[] = [
  { name: "Russia", flag: "🇷🇺", value: "+7" },
  { name: "China", flag: "🇨🇳", value: "+86" },
  { name: "India", flag: "🇮🇳", value: "+91" },
  { name: "Kazakhstan", flag: "🇰🇿", value: "+7" },
  { name: "Saudi Arabia", flag: "🇸🇦", value: "+966" },
  { name: "Iran", flag: "🇮🇷", value: "+98" },
  { name: "Mongolia", flag: "🇲🇳", value: "+976" },
  { name: "Indonesia", flag: "🇮🇩", value: "+62" },
  { name: "Pakistan", flag: "🇵🇰", value: "+92" },
  { name: "Turkey", flag: "🇹🇷", value: "+90" },
  { name: "Myanmar", flag: "🇲🇲", value: "+95" },
  { name: "Afghanistan", flag: "🇦🇫", value: "+93" },
  { name: "Yemen", flag: "🇾🇪", value: "+967" },
  { name: "Thailand", flag: "🇹🇭", value: "+66" },
  { name: "Turkmenistan", flag: "🇹🇲", value: "+993" },
  { name: "Uzbekistan", flag: "🇺🇿", value: "+998" },
  { name: "Iraq", flag: "🇮🇶", value: "+964" },
  { name: "Japan", flag: "🇯🇵", value: "+81" },
  { name: "Vietnam", flag: "🇻🇳", value: "+84" },
  { name: "Malaysia", flag: "🇲🇾", value: "+60" },
  { name: "Oman", flag: "🇴🇲", value: "+968" },
  { name: "Philippines", flag: "🇵🇭", value: "+63" },
  { name: "Laos", flag: "🇱🇦", value: "+856" },
  { name: "Kyrgyzstan", flag: "🇰🇬", value: "+996" },
  { name: "Syria", flag: "🇸🇾", value: "+963" },
  { name: "Cambodia", flag: "🇰🇭", value: "+855" },
  { name: "Bangladesh", flag: "🇧🇩", value: "+880" },
  { name: "Nepal", flag: "🇳🇵", value: "+977" },
  { name: "Tajikistan", flag: "🇹🇯", value: "+992" },
  { name: "North Korea", flag: "🇰🇵", value: "+850" },
  { name: "South Korea", flag: "🇰🇷", value: "+82" },
  { name: "Jordan", flag: "🇯🇴", value: "+962" },
  { name: "United Arab Emirates", flag: "🇦🇪", value: "+971" },
  { name: "Azerbaijan", flag: "🇦🇿", value: "+994" },
  { name: "Georgia", flag: "🇬🇪", value: "+995" },
  { name: "Sri Lanka", flag: "🇱🇰", value: "+94" },
  { name: "Egypt", flag: "🇪🇬", value: "+20" },
  { name: "Bhutan", flag: "🇧🇹", value: "+975" },
  { name: "Taiwan", flag: "🇹🇼", value: "+886" },
  { name: "Armenia", flag: "🇦🇲", value: "+374" },
  { name: "Israel", flag: "🇮🇱", value: "+972" },
  { name: "Kuwait", flag: "🇰🇼", value: "+965" },
  { name: "Timor-Leste", flag: "🇹🇱", value: "+670" },
  { name: "Qatar", flag: "🇶🇦", value: "+974" },
  { name: "Lebanon", flag: "🇱🇧", value: "+961" },
  { name: "Cyprus", flag: "🇨🇾", value: "+357" },
  { name: "Palestine", flag: "🇵🇸", value: "+970" },
  { name: "Brunei", flag: "🇧🇳", value: "+673" },
  {
    name: "Bahrain",
    flag: "🇧🇭",
    value: "+973",
  },
  {
    name: "Singapore",
    flag: "🇸🇬",
    value: "+65",
  },
  {
    name: "Maldives",
    flag: "🇲🇻",
    value: "+960",
  },
];

export const countrieDetails = keyBy(countries, "name");
