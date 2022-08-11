export const translite = (str) => {
  const splitStr = str.toLowerCase().split("");
  const format = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    є: "e",
    ж: "zh",
    з: "z",
    и: "y",
    і: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "h",
    ц: "c",
    ч: "ch",
    ш: "sh",
    щ: "shch",
    ю: "yu",
    я: "ya",
    ї: "yi",
    " ": "_",
  };

  const newStr = splitStr.map((item) => {
    return format[item];
  });

  return newStr.join("");
};
