
const TelegramBot = require("node-telegram-bot-api");

// 실제 봇 토큰을 아래에 넣어야 함
const token = "7550867772:AAHQO4hU58maUFTFScBApXKiGJ0wjQfuPWE"; // 이 줄은 사용자가 수동으로 수정해야 함

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/testdelete/, (msg) => {
    const chatId = msg.chat.id;
    console.log("✅ /testdelete 명령어 수신됨");
    bot.sendMessage(chatId, "🧪 이 메시지는 5초 후 삭제됩니다").then((sentMsg) => {
        setTimeout(() => {
            bot.deleteMessage(chatId, sentMsg.message_id).then(() => {
                console.log("🗑 메시지 삭제 성공");
            }).catch((err) => {
                console.error("❌ 삭제 실패:", err);
            });
        }, 5000);
    });
});
