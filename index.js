
const TelegramBot = require("node-telegram-bot-api");

// 👉 여기에 실제 토큰 넣기
const token = "7550867772:AAHQO4hU58maUFTFScBApXKiGJ0wjQfuPWE";

const bot = new TelegramBot(token, { polling: true });

// ✅ 전역 사용 추적 객체
const usageTracker = {};

// ✅ 유틸: 하루 기준 키 생성
const getTodayKey = () => {
    const now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`;
};

// ✅ 자동 삭제 기능
function sendAutoDelete(chatId, text, options = {}, delay = 60000) {
    bot.sendMessage(chatId, text, options).then((msg) => {
        setTimeout(() => {
            bot.deleteMessage(chatId, msg.message_id).catch(() => {});
        }, delay);
    });
}

// ✅ 평행우주 응답 예시 (간략히)
const ifResponses = [
    "🌀 만약 그때 IF를 구매했다면, 지금쯤 당신은 평행우주에서 스타트업 CEO가 되었을지도 몰라요.",
    "🧠 IF를 선택했다면 지금쯤 인공지능이 당신의 일기를 써주고 있을 거예요.",
    "💼 IF를 구매했다면, 지금쯤 잠실 빌딩에 옥외광고를 내건 기업인일지도 몰라요.",
    "💸 IF를 구매했다면... 당신의 코인지갑은 두둑했을 겁니다.",
    "😂 IF를 안 샀다면? 지금처럼 궁금해하면서 이 버튼을 또 누르고 있었겠죠.",
];

// ✅ 버튼 템플릿
const mainKeyboard = {
    reply_markup: {
        inline_keyboard: [[
            { text: "🔮 평행우주 열기", callback_data: "trigger_if" },
            { text: "🌐 공식 홈페이지", url: "https://projectif.xyz" }
        ]]
    }
};

// ✅ /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const welcome = "🎉 IF 프로젝트에 참여하신 것을 환영합니다!

" +
        "📘 곧 백서가 업데이트될 예정입니다. 장기 투자가 가능한 IF를 선택하여 또 다른 미래를 만들어보세요.";
    sendAutoDelete(chatId, welcome, mainKeyboard);
});

// ✅ /help
bot.onText(/\/help/, (msg) => {
    const chatId = msg.chat.id;
    const helpMsg = "📌 사용 가능한 명령어:

" +
        "/start - IF 프로젝트 안내 및 버튼
" +
        "/if - 평행우주 리포트 응답
" +
        "/help - 사용법 안내
" +
        "/testdelete - 테스트 메시지 삭제";
    sendAutoDelete(chatId, helpMsg);
});

// ✅ /if
bot.onText(/\/if/, (msg) => {
    const chatId = msg.chat.id;
    const today = getTodayKey();

    if (!usageTracker[chatId]) usageTracker[chatId] = {};
    if (!usageTracker[chatId][today]) usageTracker[chatId][today] = 0;

    if (usageTracker[chatId][today] >= 5) {
        sendAutoDelete(chatId, "⚠️ 하루 5회까지만 사용할 수 있어요. 내일 다시 시도해 주세요.");
        return;
    }

    usageTracker[chatId][today]++;
    const random = ifResponses[Math.floor(Math.random() * ifResponses.length)];
    sendAutoDelete(chatId, `📡 평행우주 리포트:

${random}`);
});

// ✅ /testdelete
bot.onText(/\/testdelete/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "🧪 이 메시지는 5초 후 삭제됩니다").then((sentMsg) => {
        setTimeout(() => {
            bot.deleteMessage(chatId, sentMsg.message_id).catch((e) => console.error("삭제 실패:", e));
        }, 5000);
    });
});

// ✅ 버튼 응답 (callback_query)
bot.on("callback_query", (query) => {
    const chatId = query.message.chat.id;
    const data = query.data;

    if (data === "trigger_if") {
        const today = getTodayKey();
        if (!usageTracker[chatId]) usageTracker[chatId] = {};
        if (!usageTracker[chatId][today]) usageTracker[chatId][today] = 0;

        if (usageTracker[chatId][today] >= 5) {
            sendAutoDelete(chatId, "⚠️ 하루 5회까지만 사용할 수 있어요. 내일 다시 시도해 주세요.");
            return;
        }

        usageTracker[chatId][today]++;
        const random = ifResponses[Math.floor(Math.random() * ifResponses.length)];
        sendAutoDelete(chatId, `📡 평행우주 리포트:

${random}`);
    }

    bot.answerCallbackQuery(query.id); // 버튼 반응 처리
});
