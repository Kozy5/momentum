const quotes = [
  {
    quote: "젊음은 알지 못한 것을 탄식하고 나이는 하지 못한 것을 탄식한다.",
    author: "앙리 에스티엔(프랑스의 인문주의자)",
  },
  {
    quote: "남에게 이기는 방법의 하나는 예의범절로 이기는 것이다.",
    author: "조쉬 빌링스",
  },
  {
    quote: "무력은 모든 것을 정복하지만, 그 승리는 오래가지 못한다.",
    author: "에이브러햄 링컨(미국 16대 대통령)",
  },
  {
    quote:
      "창의성이란… 아직 존재하지 않는 것을 보는 것이다. 그것을 존재하도록 하는 방법을 찾아내고 그렇게 신의 친구가 되는 것이다.",
    author: "미쉘 쉬어",
  },
  {
    quote:
      "소신껏 이룬 성공이 아니라면, 남 보기에 좋아도 스스로가 좋다고 느끼지 못한다면 그것은 전혀 성공이 아니다.",
    author: "안나 퀸드랜(퓰리쳐상을 수상한 베스트셀러 소설가)",
  },
  {
    quote: "우연이 아닌 선택이 운명을 결정한다.",
    author: "진 니데치",
  },
  {
    quote:
      "'위기'란 첫 자는 위험의 의미이고 둘째는 기회의 의미입니다. 위기속에서는 위험을 경계하되 기회가 있음을 명심하십시요.",
    author: "존 F.케네디(미국의 35대 대통령)",
  },
  {
    quote:
      "명확히 설정된 목표가 없으면, 우리는 사소한 일상을 충실히 살다 결국 그 일상의 노예가 되고 만다.",
    author: "로버트 하인라인",
  },
  {
    quote:
      "성공은 중요한 생일이 다가왔는데 당신은 전과 똑같다는 사실을 발견하는 것이다.",
    author: "오드리 햅번(할리우드의 전설적인 여배우)",
  },
  {
    quote:
      "인생에 있는 큰 비밀은 큰 비밀 따위는 없다는 것이다. 당신의 목표가 무엇이든 열심히 할 의지가 있다면 달성할 수 있다",
    author: "오프라 윈프리(미국의 전설적인 여성흑인방송인)",
  },
];

const quote = document.querySelector("#quote-span");
const author = document.querySelector("#author-span");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
