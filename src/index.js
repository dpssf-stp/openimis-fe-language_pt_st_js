import messages_pt from "./translations/pt.json";
// import flatten from "flat";

const DEFAULT_CONFIG = {
  "translations": [{ key: 'pt', messages: messages_pt }],
}

export const LanguagePtModule = (cfg) => {
  return { ...DEFAULT_CONFIG, ...cfg };
}
