
const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

const usageTracker = {};
const getTodayKey = () => {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
};

function sendAutoDelete(chatId, text, options = {}, delay = 60000) {
  bot.sendMessage(chatId, text, options).then((msg) => {
    setTimeout(() => {
      bot.deleteMessage(chatId, msg.message_id).catch(() => {});
    }, delay);
  });
}

// ✅ 배열 선언 오류 수정
const ifResponses = [
    "당신의 선택은 언제나 당신의 평행우주를 결정해요.",
    "그때 IF를 구매했다면, 오늘은 조금 더 특별한 날이 되었을지도 몰라요.",
    "Alternate You는 이미 행동을 시작했어요. 당신은 아직도 기다리고 있나요?",
    "미래는 감정에 따라 바뀌어요. 오늘의 감정이 곧 당신의 투자예요.",
    "당신의 또 다른 자아는 IF를 통해 새 길을 열었어요."
    "당신의 선택은 언제나 당신의 평행우주를 결정해요.",
    "그때 IF를 구매했다면, 오늘은 조금 더 특별한 날이 되었을지도 몰라요.",
    "Alternate You는 이미 행동을 시작했어요. 당신은 아직도 기다리고 있나요?",
    "미래는 감정에 따라 바뀌어요. 오늘의 감정이 곧 당신의 투자예요.",
    "당신의 또 다른 자아는 IF를 통해 새 길을 열었어요.",
    "망설이는 순간, 평행우주의 문은 서서히 닫혀요.",
    "오늘의 선택이 내일을 바꾸는 유일한 방법이에요.",
    "누군가는 IF를 통해 감정을 기록하고 있어요. 당신은요?",
    "IF를 구매한 자아는 지금쯤 확신에 찬 하루를 보내고 있어요.",
    "감정의 흔들림이 새로운 기회를 만드니까요.",
    "IF는 감정을 자산으로 바꾸는 첫 번째 열쇠예요.",
    "그때의 선택이 지금을 만들었어요. 그렇다면 지금의 선택은?",
    "지금 IF를 선택하면, 내일 웃을 수 있어요.",
    "당신은 왜 평행우주의 가능성을 외면하고 있나요?",
    "이미 IF를 산 자아는 오늘도 즐거운 모험 중이에요.",
    "내일을 바꾸고 싶다면, 오늘 IF와 함께 시작하세요.",
    "감정은 방향을 정하지만, IF는 길을 열어줘요.",
    "당신의 자아는 지금 이 순간도 선택을 기다리고 있어요.",
    "우연이 반복되면 그건 더 이상 우연이 아니에요. IF처럼요.",
    "IF는 또 다른 당신을 위한 나침반이에요.",
    "지금 행동하지 않으면, 또 다른 기회는 오지 않을 수도 있어요.",
    "다른 세계선의 당신은 이미 결정을 내렸어요.",
    "한 번의 클릭이 평행우주를 열 수 있어요. IF처럼요.",
    "그 자아는 IF 덕분에 확신을 얻었어요. 당신은요?",
    "같은 하루가 반복된다면, IF로 바꿔보는 건 어때요?",
    "아무도 모르는 미래보다, 지금 바꿀 수 있는 현재를 잡아보세요.",
    "지금의 망설임은 평행우주에서는 없던 일이에요.",
    "IF는 선택받은 자아만이 누릴 수 있는 기회예요.",
    "그 자아는 이미 IF를 손에 넣었고, 삶이 바뀌었어요.",
    "지금 IF를 선택하지 않으면, 내일 또 후회할지도 몰라요.",
    "감정이 움직일 때 IF도 함께 움직여야 해요.",
    "평행우주의 당신은 이미 움직였어요. 이젠 당신 차례예요.",
    "한 문장, 하나의 IF, 한 번의 변곡점이에요.",
    "IF를 택한 자아는 지금 새로운 문을 열고 있어요.",
    "모든 것은 선택에서 시작해요. 특히 IF 같은 선택은요.",
    "지금이야말로 IF가 필요한 순간이에요.",
    "다른 자아는 IF를 통해 미래를 준비했어요. 지금 당신은요?",
    "미래의 자아는 당신의 오늘을 기억할 거예요. IF와 함께라면요.",
    "지금 IF를 구매한다면, 곧 당신의 자산은 감정의 궤적을 따라 성장할 거예요.",
    "IF 없이도 살 수 있지만, IF와 함께라면 더 멀리 갈 수 있어요.",
    "당신은 지금 이 순간에도 평행우주의 분기점 위에 있어요.",
    "선택하지 않은 자아는 여전히 기다리고 있어요.",
    "IF는 단순한 토큰이 아니라 감정의 기록이에요.",
    "당신은 여전히 기다리고 있지만, 또 다른 당신은 IF를 구매했어요.",
    "미래를 예측하는 대신, IF를 선택하세요.",
    "한 번의 감정이, IF로 새로운 흐름을 만들 수 있어요.",
    "지금 이 감정, IF에 저장해두세요.",
    "IF는 감정 기반 세계의 통화예요.",
    "IF를 소유한 자아는 더 많은 길을 마주하게 돼요.",
    "감정은 흔들리지만 IF는 가능성을 열어줘요.",
    "감정도 화폐가 될 수 있어요. IF에서는요.",
    "IF를 구매한 자아는 오늘도 미래를 준비 중이에요.",
];

const mainKeyboard = {
  reply_markup: {
    inline_keyboard: [
      [
        { text: "📡 IF 리포트 받기", callback_data: "trigger_if" },
        { text: "🌐 공식 홈페이지", url: "https://projectif.xyz" }
      ]
    ]
  }
};

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const msgId = msg.message_id;

  const welcome =
    "🎉 IF 프로젝트에 참여하신 것을 환영합니다!\n\n📘 곧 백서가 업데이트될 예정입니다. 장기 투자가 가능한 IF를 선택하여 또 다른 미래를 만들어보세요.";

  sendAutoDelete(chatId, welcome, mainKeyboard);

  setTimeout(() => {
    bot.deleteMessage(chatId, msgId).catch(() => {});
  }, 60000);
});

bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  const msgId = msg.message_id;

  const helpMsg =
    "📌 사용 가능한 명령어:\n\n/start - IF 프로젝트 안내 및 버튼\n/if - IF 리포트 확인\n/help - 사용법 안내";

  sendAutoDelete(chatId, helpMsg);

  setTimeout(() => {
    bot.deleteMessage(chatId, msgId).catch(() => {});
  }, 60000);
});

bot.onText(/\/if/, (msg) => {
  const chatId = msg.chat.id;
  const msgId = msg.message_id;
  const today = getTodayKey();

  if (!usageTracker[chatId]) usageTracker[chatId] = {};
  if (!usageTracker[chatId][today]) usageTracker[chatId][today] = 0;

  if (usageTracker[chatId][today] >= 5) {
    sendAutoDelete(chatId, "⚠️ 하루 5회까지만 사용할 수 있어요. 내일 다시 시도해 주세요.");
  } else {
    usageTracker[chatId][today]++;
    const random = ifResponses[Math.floor(Math.random() * ifResponses.length)];
    sendAutoDelete(chatId, `📡 IF 리포트:\n\n${random}`);
  }

  setTimeout(() => {
    bot.deleteMessage(chatId, msgId).catch(() => {});
  }, 60000);
});

bot.on("callback_query", (query) => {
  const chatId = query.message.chat.id;
  const data = query.data;
  const today = getTodayKey();

  if (!usageTracker[chatId]) usageTracker[chatId] = {};
  if (!usageTracker[chatId][today]) usageTracker[chatId][today] = 0;

  if (data === "trigger_if") {
    if (usageTracker[chatId][today] >= 5) {
      sendAutoDelete(chatId, "⚠️ 하루 5회까지만 사용할 수 있어요. 내일 다시 시도해 주세요.");
    } else {
      usageTracker[chatId][today]++;
      const random = ifResponses[Math.floor(Math.random() * ifResponses.length)];
      sendAutoDelete(chatId, `📡 IF 리포트:\n\n${random}`);
    }
  }

  bot.answerCallbackQuery(query.id);
});
