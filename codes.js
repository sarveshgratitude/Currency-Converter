const countryList = {
  AED: "AE",
  AFN: "AF",
  XCD: "AG",
  ALL: "AL",
  AMD: "AM",
  ANG: "AN",
  AOA: "AO",
  AQD: "AQ",
  ARS: "AR",
  AUD: "AU",
  AZN: "AZ",
  BAM: "BA",
  BBD: "BB",
  BDT: "BD",
  XOF: "BE",
  BGN: "BG",
  BHD: "BH",
  BIF: "BI",
  BMD: "BM",
  BND: "BN",
  BOB: "BO",
  BRL: "BR",
  BSD: "BS",
  NOK: "BV",
  BWP: "BW",
  BYR: "BY",
  BZD: "BZ",
  CAD: "CA",
  CDF: "CD",
  XAF: "CF",
  CHF: "CH",
  CLP: "CL",
  CNY: "CN",
  COP: "CO",
  CRC: "CR",
  CUP: "CU",
  CVE: "CV",
  CYP: "CY",
  CZK: "CZ",
  DJF: "DJ",
  DKK: "DK",
  DOP: "DO",
  DZD: "DZ",
  ECS: "EC",
  EEK: "EE",
  EGP: "EG",
  ETB: "ET",
  EUR: "FR",
  FJD: "FJ",
  FKP: "FK",
  GBP: "GB",
  GEL: "GE",
  GGP: "GG",
  GHS: "GH",
  GIP: "GI",
  GMD: "GM",
  GNF: "GN",
  GTQ: "GT",
  GYD: "GY",
  HKD: "HK",
  HNL: "HN",
  HRK: "HR",
  HTG: "HT",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  INR: "IN",
  IQD: "IQ",
  IRR: "IR",
  ISK: "IS",
  JMD: "JM",
  JOD: "JO",
  JPY: "JP",
  KES: "KE",
  KGS: "KG",
  KHR: "KH",
  KMF: "KM",
  KPW: "KP",
  KRW: "KR",
  KWD: "KW",
  KYD: "KY",
  KZT: "KZ",
  LAK: "LA",
  LBP: "LB",
  LKR: "LK",
  LRD: "LR",
  LSL: "LS",
  LTL: "LT",
  LVL: "LV",
  LYD: "LY",
  MAD: "MA",
  MDL: "MD",
  MGA: "MG",
  MKD: "MK",
  MMK: "MM",
  MNT: "MN",
  MOP: "MO",
  MRO: "MR",
  MTL: "MT",
  MUR: "MU",
  MVR: "MV",
  MWK: "MW",
  MXN: "MX",
  MYR: "MY",
  MZN: "MZ",
  NAD: "NA",
  XPF: "NC",
  NGN: "NG",
  NIO: "NI",
  NPR: "NP",
  NZD: "NZ",
  OMR: "OM",
  PAB: "PA",
  PEN: "PE",
  PGK: "PG",
  PHP: "PH",
  PKR: "PK",
  PLN: "PL",
  PYG: "PY",
  QAR: "QA",
  RON: "RO",
  RSD: "RS",
  RUB: "RU",
  RWF: "RW",
  SAR: "SA",
  SBD: "SB",
  SCR: "SC",
  SDG: "SD",
  SEK: "SE",
  SGD: "SG",
  SKK: "SK",
  SLL: "SL",
  SOS: "SO",
  SRD: "SR",
  STD: "ST",
  SVC: "SV",
  SYP: "SY",
  SZL: "SZ",
  THB: "TH",
  TJS: "TJ",
  TMT: "TM",
  TND: "TN",
  TOP: "TO",
  TRY: "TR",
  TTD: "TT",
  TWD: "TW",
  TZS: "TZ",
  UAH: "UA",
  UGX: "UG",
  USD: "US",
  UYU: "UY",
  UZS: "UZ",
  VEF: "VE",
  VND: "VN",
  VUV: "VU",
  YER: "YE",
  ZAR: "ZA",
  ZMK: "ZM",
  ZWD: "ZW",
};
const rates = { "USD": 1, "AED": 3.6725, "AFN": 73.81283, "ALL": 96.866759, "AMD": 405.158468, "ANG": 1.79, "AOA": 836.058551, "ARS": 831.25, "AUD": 1.534171, "AWG": 1.79, "AZN": 1.700407, "BAM": 1.814932, "BBD": 2, "BDT": 109.747699, "BGN": 1.814956, "BHD": 0.376, "BIF": 2843.827604, "BMD": 1, "BND": 1.346518, "BOB": 6.93636, "BRL": 4.976097, "BSD": 1, "BTN": 83.045232, "BWP": 13.727885, "BYN": 3.248028, "BZD": 2, "CAD": 1.345726, "CDF": 2693.70444, "CHF": 0.874966, "CLP": 964.083592, "CNY": 7.208609, "COP": 3957.771862, "CRC": 517.825352, "CUP": 24, "CVE": 102.321535, "CZK": 23.386362, "DJF": 177.721, "DKK": 6.923265, "DOP": 58.611502, "DZD": 134.789214, "EGP": 30.907093, "ERN": 15, "ETB": 56.76788, "EUR": 0.927961, "FJD": 2.248721, "FKP": 0.792487, "FOK": 6.923265, "GBP": 0.792488, "GEL": 2.65598, "GGP": 0.792487, "GHS": 12.50789, "GIP": 0.792487, "GMD": 65.524558, "GNF": 8595.447577, "GTQ": 7.819821, "GYD": 209.538754, "HKD": 7.820326, "HNL": 24.698352, "HRK": 6.991716, "HTG": 131.726373, "HUF": 359.7057, "IDR": 15626.882855, "ILS": 3.684523, "IMP": 0.792487, "INR": 83.036176, "IQD": 1310.856517, "IRR": 42074.75613, "ISK": 137.522272, "JEP": 0.792487, "JMD": 156.379266, "JOD": 0.709, "JPY": 149.306458, "KES": 160.144774, "KGS": 89.342472, "KHR": 4091.155112, "KID": 1.533994, "KMF": 456.526507, "KRW": 1330.908638, "KWD": 0.308057, "KYD": 0.833333, "KZT": 451.474489, "LAK": 20763.42244, "LBP": 15000, "LKR": 312.707464, "LRD": 192.206506, "LSL": 19.021311, "LYD": 4.844149, "MAD": 10.037707, "MDL": 17.822467, "MGA": 4536.658065, "MKD": 57.270543, "MMK": 2100.300259, "MNT": 3418.949932, "MOP": 8.054936, "MRU": 39.585224, "MUR": 45.281941, "MVR": 15.462988, "MWK": 1695.359186, "MXN": 17.094472, "MYR": 4.766014, "MZN": 63.911355, "NAD": 19.021311, "NGN": 1427.979098, "NIO": 36.690103, "NOK": 10.565318, "NPR": 132.872371, "NZD": 1.627514, "OMR": 0.384497, "PAB": 1, "PEN": 3.86629, "PGK": 3.755072, "PHP": 55.941454, "PKR": 279.482796, "PLN": 4.012847, "PYG": 7306.409066, "QAR": 3.64, "RON": 4.620309, "RSD": 108.853702, "RUB": 91.701592, "RWF": 1292.221359, "SAR": 3.75, "SBD": 8.495199, "SCR": 13.225565, "SDG": 546.138516, "SEK": 10.465299, "SGD": 1.346519, "SHP": 0.792487, "SLE": 22.587694, "SLL": 22587.694431, "SOS": 571.795578, "SRD": 36.611548, "SSP": 1110.759585, "STN": 22.735026, "SYP": 12963.844495, "SZL": 19.021311, "THB": 35.9091, "TJS": 10.937592, "TMT": 3.500174, "TND": 3.13032, "TOP": 2.351935, "TRY": 30.684357, "TTD": 6.752803, "TVD": 1.533994, "TWD": 31.352176, "TZS": 2529.852256, "UAH": 37.645031, "UGX": 3841.984775, "UYU": 39.211055, "UZS": 12423.917406, "VES": 36.3185, "VND": 24388.150887, "VUV": 120.921645, "WST": 2.747066, "XAF": 608.702009, "XCD": 2.7, "XDR": 0.75442, "XOF": 608.702009, "XPF": 110.73535, "YER": 250.528634, "ZAR": 19.021344, "ZMW": 26.962109, "ZWL": 11230.796191 }