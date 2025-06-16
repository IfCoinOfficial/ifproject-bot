const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const app = express();

const token = '7550867772:AAHQO4hU58maUFTFScBApXKiGJ0wjQfuPWE';  // IF 봇 토큰
const bot = new TelegramBot(token);
app.use(express.json());

app.post(`/bot${token}`, (req, res) => {
    bot.processUpdate(req.body);
    res.sendStatus(200);
});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === '/start') {
        bot.sendMessage(chatId, '🎉 IF 프로젝트에 오신 것을 환영합니다. 곧 감정 기반 예측기가 작동합니다.');
    } else {
        bot.sendMessage(chatId, `✨ 평행우주에서는 '${text}'이(가) 당신의 선택을 뒤바꿨을지도 몰라요. 곧 IF 코인을 통해 그 결과를 확인할 수 있어요.`);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`IF 봇이 포트 ${PORT}에서 실행 중입니다.`);
});
