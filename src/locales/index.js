import {createI18n} from "vue-i18n";
import trTr from "./langs/tr-TR.js";
import enUs from "./langs/en-US.js";

const i18n = createI18n({
    legacy: false,
    allowComposition: true,
    globalInjection: true,
    locale: window.navigator.language,
    messages: {
        "en-US": enUs,
        en: enUs,
        "tr-TR": trTr,
        tr: trTr,
    }
});

export default i18n;