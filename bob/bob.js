//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const trimmedMsg = message.trim();
  if (trimmedMsg.length === 0) {
    return 'Fine. Be that way!';
  }

  const isYelling = (() => {
    const re = /^(?=[A-Z])[^a-z]*$/g;
    return trimmedMsg.length > 1 && re.test(trimmedMsg);
  })();
  console.log(isYelling);
  const isQuestion = trimmedMsg[trimmedMsg.length - 1] === '?';
  if (isQuestion) {
    if (isYelling) {
      return "Calm down, I know what I'm doing!";
    } else {
      return 'Sure.';
    }
  } else {
    if (isYelling) {
      return 'Whoa, chill out!';
    } else {
      return 'Whatever.';
    }
  }
};

console.log(hey('ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!'));
console.log(hey('4?'));
console.log(hey('1, 2, 3 GO!'));
// console.log(hey('Okay if like my  spacebar  quite a bit?   '));

// export const hey = (message) => {
//   const trimmedMsg = message.trim();
//   if (trimmedMsg.length === 0) {
//     return 'Fine. Be that way!';
//   }

//   const isYelling = (() => {
//     const re = /^(?=[A-Z])[^a-z]*$/g;
//     return trimmedMsg.length > 1 && re.test(trimmedMsg);
//   })();
//   console.log(isYelling);
//   const isQuestion = trimmedMsg[trimmedMsg.length - 1] === '?';
//   if (isQuestion) {
//     if (isYelling) {
//       return "Calm down, I know what I'm doing!";
//     } else {
//       return 'Sure.';
//     }
//   } else {
//     if (isYelling) {
//       return 'Whoa, chill out!';
//     } else {
//       return 'Whatever.';
//     }
//   }
// };
