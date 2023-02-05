const quotes = [
  {
    quote:
      "행복한 인생을 살고 싶다면, 사람이나 사물에 행복을 연결 짓지 말고 목표에 묶어 두세요.",
    author: "알베르트 아인슈타인",
  },
  {
    quote:
      "행복은 태도입니다. 우리는 스스로 비참하게 만들게도, 행복하고 강하게 만들기도 합니다. 해야하는 일은 똑같아요.",
    author: "프란체스카 라이글런",
  },
  {
    quote:
      "자신의 약점이 아닌 강점에 집중하세요. 자신의 평판이 아니라 성격에 집중하세요. 자신의 불행이 아니라 축복에 집중하세요.",
    author: "로이 T. 베넷",
  },
  {
    quote:
      "당신이 얼마나 많이 넘어졌는지는 중요하지 않아요. 얼마나 많이 앞으로 다시 일어섰는지가 오랜 세월을 견디게 해줍니다. 그러니 다시 일어나세요. 불가능에 도전하세요.",
    author: "토페 에반스",
  },
  {
    quote:
      "이 또한 지나간다는 사실과 좋은 습관을 통해 의미 있는 진전을 이룰 수 있다는 사실을 알았을 때 마음의 평화가 찾아옵니다.",
    author: "브렌든 버차드",
  },
  {
    quote:
      "농담을 건네세요. 스트레스 받지 말구요. 사랑하세요. 인생을 살아가세요. 계속 나아가세요. 목표를 이루어 나가세요.",
    author: "릴 웨인",
  },
  {
    quote: "꿈꿀 수 있는 일이라면, 해낼 수 있습니다.",
    author: "월트 디즈니",
  },
  {
    quote:
      "불안한 감정을 느낄 때, 당신이 여전히 당신 자신임을 기억하세요. 당신이 느끼는 불안감은 당신이 아닙니다.",
    author: "딘 레피치",
  },
  {
    quote: "돈이 아니라 비전을 추구하세요. 성공하면 돈은 따라오게 되어 있어요.",
    author: "토니 셰이",
  },
  {
    quote:
      "하고 싶은 것이 무엇이든, 지금 바로 하세요. 내일 해야지 하면 내일이 또 내일이 됩니다.",
    author: "마이클 랜던",
  },
];

const quote = document.querySelector("#quotes .quote");
const author = document.querySelector("#quotes .author");

// Math.floor = 0부터 (n-1)까지 (소수점 버림)
// Math.ceil = 1부터 n까지 (소수점 올림)
// Math.round = 0부터 n까지 (소수점 반올림)
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
