//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const isYelling = (str) => {
  return str.toUpperCase() === str;
};

const isQuestion = (str) => {
  return str.lastIndexOf('?') === str.length - 1;
};

const isLetters = (str) => {
  return /[a-z]/i.test(str);
};

const getMessageInfo = (msg) => {
  return {
    hasLetters: isLetters(msg),
    isMessageQuestion: isQuestion(msg),
    isMessageYelling: isYelling(msg),
  };
};

export const hey = (message) => {
  let answer = null;
  const trimmedMsg = message.trim();
  const { hasLetters, isMessageQuestion, isMessageYelling } =
    getMessageInfo(trimmedMsg);

  if (!trimmedMsg) {
    answer = 'Fine. Be that way!';
  } else if (hasLetters && isMessageQuestion && isMessageYelling) {
    answer = "Calm down, I know what I'm doing!";
  } else if (isMessageQuestion) {
    answer = 'Sure.';
  } else if (hasLetters && isMessageYelling) {
    answer = 'Whoa, chill out!';
  } else {
    answer = 'Whatever.';
  }

  return answer;
};