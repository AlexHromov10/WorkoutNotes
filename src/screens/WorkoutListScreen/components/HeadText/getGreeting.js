import * as phrases from "../../../../constants/phrases";

export function getGreeting(locale, hours) {
  return { topText: getTimeGreeting(locale, hours), botText: getPhrase(locale) };
}

const getTimeGreeting = (locale, hours) => {
  const index = getTimeIndex(hours);

  if (locale === "en_US") {
    return phrases.timeGreeting_en_US[index];
  } else {
    return phrases.timeGreeting_ru_RU[index];
  }
};

const getPhrase = (locale) => {
  const index = Math.floor(Math.random() * phrases.motivation_en_US.length);

  if (locale === "en_US") {
    return phrases.motivation_en_US[index];
  } else {
    return phrases.motivation_ru_RU[index];
  }
};

const getTimeIndex = (hours) => {
  if (hours >= 6 && hours < 12) {
    return 0;
  } else if (hours >= 12 && hours < 18) {
    return 1;
  } else if (hours >= 18 && hours <= 23) {
    return 2;
  } else {
    return 3;
  }
};
