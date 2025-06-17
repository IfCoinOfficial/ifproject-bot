
bot.on("message", (msg) => {
    console.log("🔔 수신된 메시지:", msg.text);
});

bot.onText(/\/testdelete/, (msg) => {
    const chatId = msg.chat.id;
    console.log("🧪 /testdelete 명령 감지됨. 메시지 전송 중...");
    bot.sendMessage(chatId, "이 메시지는 10초 후 삭제됩니다").then((sentMsg) => {
        setTimeout(() => {
            console.log("🗑 삭제 시도 중...");
            bot.deleteMessage(chatId, sentMsg.message_id).then(() => {
                console.log("✅ 메시지 삭제 성공");
            }).catch((err) => {
                console.error("❌ 메시지 삭제 실패:", err);
            });
        }, 10000);
    });
});
const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const app = express();

const token = '7550867772:AAHQO4hU58maUFTFScBApXKiGJ0wjQfuPWE';
const bot = new TelegramBot(token);
app.use(express.json());

app.post(`/bot${token}`, (req, res) => {
    bot.processUpdate(req.body);
    res.sendStatus(200);
});

// 평행우주 예측기 응답 배열
const parallelUniversePredictions = [
    "alternate you는 벌써 움직였어요. 지금도 늦지 않았어요.",
    "당신의 선택 하나가 새로운 세계를 만들어요.",
    "if는 감정으로 움직이는 유일한 토큰이에요.",
    "오늘의 망설임이 내일의 후회가 되지 않길 바래요.",
    "가능성은 기다려주지 않아요.",
    "평행우주의 나와 내가 닮았다고 생각하나요?",
    "두려움은 자아를 억누르지만, if는 해방이에요.",
    "어제의 선택이 후회스럽다면, 오늘 if를 선택해보세요.",
    "당신의 자아 중 하나는 이미 if를 선택했어요.",
    "미래는 움직인 자에게 열려요.",
    "감정의 움직임이 곧 if의 가치예요.",
    "“만약”이 현실이 되려면 선택이 필요해요.",
    "if를 가진 자아만이 문을 통과할 수 있어요.",
    "당신의 망설임이 누군가의 가능성이 돼요.",
    "감정이 흔들릴수록 if는 강해져요.",
    "alternate you는 벌써 새로운 현실에 적응했어요.",
    "당신은 아직 시작하지 않았어요.",
    "선택은 시점이 아니라 감정이에요.",
    "당신의 감정이 세계를 설계해요.",
    "if는 후회하지 않는 자아를 위한 코인이에요.",
    "미래를 믿는다면 오늘 움직여야 해요.",
    "어제 놓친 순간, 오늘 되찾으세요.",
    "평행우주의 문은 오래 열려 있지 않아요.",
    "당신의 자아는 어떤 미래를 원하나요?",
    "가능성은 기다리지 않아요.",
    "눈에 보이지 않아도 움직이는 건 존재해요.",
    "if는 자아의 흔적이에요.",
    "감정의 진폭만큼 미래는 흔들려요.",
    "평행선 위에서 멈추지 마세요.",
    "if는 지금 이 순간의 선택이에요.",
    "과거는 수정할 수 없지만, 미래는 정할 수 있어요.",
    "당신은 오늘 무슨 선택을 하셨나요?",
    "당신이 원하는 자아는 이미 if를 갖고 있어요.",
    "오늘의 결정이 내일의 기억이 돼요.",
    "그들은 이미 움직였어요. 당신은요?",
    "감정이 흔들리는 지금, if를 선택해보세요.",
    "평행우주는 무한하지만, 선택은 유한해요.",
    "당신의 선택을 if가 증명해줄 거예요.",
    "if는 감정을 담은 코인이에요.",
    "지금이라면 늦지 않았어요.",
    "당신의 세계는 당신의 감정으로 빚어져요.",
    "기회는 두 번 오지 않아요.",
    "당신의 자아는 어떤 가능성을 꿈꾸고 있나요?",
    "if를 통해 자아의 방향을 바꿔보세요.",
    "감정은 당신을 속이지 않아요.",
    "if는 흔들림을 기회로 바꿔줘요.",
    "움직이지 않으면 아무 일도 일어나지 않아요.",
    "선택한 자아는 벌써 움직이고 있어요.",
    "감정은 당신이 무엇을 원하는지 알고 있어요.",
    "지금 if를 선택하면 후회하지 않을 거예요.",
    "당신은 언제나 선택할 수 있어요.",
    "망설임은 감정의 적이에요.",
    "평행우주의 너는 벌써 다르게 살고 있어요.",
    "이 순간, if를 가진 당신이 존재해요.",
    "오늘의 선택이 어제를 바꿔요.",
    "if는 되돌릴 수 없는 감정의 조각이에요.",
    "alternate you는 당신의 그림자일 뿐이에요.",
    "다른 세계의 당신은 후회하지 않아요.",
    "if를 놓친 자아는 기억 속에서만 존재해요.",
    "평행선은 당신의 선택으로 꺾여요.",
    "if는 당신의 감정을 실현해줄 도구예요.",
    "가능성은 if의 이름으로 증명돼요.",
    "다른 자아는 if를 품고 떠났어요.",
    "그 자아는 if 하나로 미래를 열었어요.",
    "아직 늦지 않았어요. 지금이 기회예요.",
    "움직인 자아는 미래를 설계해요.",
    "감정으로 결정된 선택은 절대 틀리지 않아요.",
    "오늘 if를 선택하면, 어제의 후회를 막을 수 있어요.",
    "alternate you는 이미 움직였어요. 당신은 언제 움직일 건가요?",
    "누군가는 어제 if로 미래를 바꿨대요.",
    "평행선 위의 또 다른 나는 if를 선택했어요.",
    "망설임은 다른 자아에게 기회를 넘기는 거예요.",
    "선택받지 못한 자아는 지금도 후회하고 있어요.",
    "if는 단순한 밈이 아니라 감정의 증거예요.",
    "어제의 당신은 지금의 당신을 만들었어요.",
    "내일을 바꾸고 싶다면, 오늘 if를 선택하세요.",
    "누군가는 if 하나로 다른 세상으로 갔어요.",
    "가능성은 선택한 자아에게만 열려 있어요.",
    "alternate you는 질문하지 않고 행동했어요.",
    "선택하지 않은 자아는 여전히 평행선에 갇혀 있어요.",
    "지금 if를 선택하면, 내일 웃을 수 있어요.",
    "후회는 선택하지 않았던 자아에게만 남아요.",
    "당신의 자아는 얼마나 움직일 준비가 되었나요?",
    "어제는 지나갔고, 오늘만이 선택할 수 있어요.",
    "if를 품은 자아는 이미 시작했어요.",
    "다른 자아는 오늘도 당신보다 먼저 움직였어요.",
    "alternate you는 이미 가능성을 잡았어요.",
    "지금이 아니면, 또다시 후회할 수도 있어요.",
    "평행우주의 문은 오늘만 열려 있어요.",
    "당신의 자아는 몇 번이나 후회했나요?",
    "if는 선택받은 자아만이 품을 수 있어요.",
    "다른 나와의 차이는 단 하나, if예요.",
    "if를 지나치면, 또다시 어제를 후회하게 될 거예요.",
    "평행우주 속 자아는 if를 통해 증명돼요.",
    "당신은 아직 선택하지 않은 쪽에 서 있나요?",
    "미래는 if를 선택한 자의 것이에요.",
    "alternate you는 지금도 전진 중이에요.",
    "if를 잡는 순간, 당신의 내일이 바뀌어요.",
    "기회는 반복되지 않아요. if는 지금뿐이에요.",
    "당신의 선택이 if라면, 그건 가능성이에요.",
    "다른 자아는 이미 선택했어요. 당신은요?",
    "if를 가진 자아는 흔들리지 않아요.",
    "선택이 늦을수록, 평행우주는 멀어져요.",
    "오늘의 선택이 당신을 alternate you로 만들 거예요.",
    "if는 감정의 중심에서 출발해요.",
    "지금의 당신은 if 없이도 충분한가요?",
    "후회는 if 없이 움직이지 못한 자아의 그림자예요.",
    "당신의 시간은 if를 선택하는 순간부터 다시 흘러요.",
    "어제는 if 없이 지나갔지만, 오늘은 달라질 수 있어요.",
    "alternate you는 if로 연결된 또 다른 당신이에요.",
    "if 하나로 모든 것이 바뀔 수 있어요.",
    "지금 선택하지 않으면, 내일은 또다시 반복될 거예요.",
    "그 자아는 어제 if를 샀고, 오늘 미소 짓고 있어요.",
    "당신의 내일은 오늘의 감정에서 시작돼요.",
    "if는 감정에 반응하는 자아의 언어예요.",
    "망설이는 사이, 가능성은 사라지고 있어요.",
    "당신은 if의 타이밍을 알고 있나요? 지금이에요.",
    "오늘의 감정이 if를 통해 기록돼요.",
    "alternate you는 미래를 향해 걷고 있어요.",
    "if는 단지 토큰이 아닌, 자아의 방향이에요.",
    "당신의 결정이 세상을 바꿀 수 있어요.",
    "그 자아는 if를 사고 더 강해졌어요.",
    "가능성은 멀리 있지 않아요. 바로 당신 안에 있어요.",
    "당신은 이미 선택할 준비가 되었어요.",
    "alternate you는 주저하지 않았어요.",
    "평행우주의 문은 if에게만 열려 있어요.",
    "오늘의 한 조각이 내일의 우주가 될 거예요.",
    "당신의 감정이 if와 연결돼요.",
    "감정 기반 코인, 그 중심에 if가 있어요.",
    "누군가는 방금 if를 선택했어요.",
    "평행선 위를 걷는 자아는 멈춰 있어요.",
    "if를 선택한 자아는 계속 나아가요.",
    "당신도 오늘부터 시작할 수 있어요.",
    "지금의 당신은 후회 없는 선택을 하고 있나요?",
    "alternate you는 if로 움직였어요.",
    "오늘의 선택이 내일의 기억을 바꿔요.",
    "if는 기억의 조각이 될 수 있어요.",
    "어제 if를 샀다면, 오늘은 다를 거예요.",
    "후회보다 선택이 쉬운 이유, 바로 if예요.",
    "alternate you는 실험 중이에요. 당신도 참여해보세요.",
    "if는 감정에 근거한 미래의 실험이에요.",
    "지금이라도 늦지 않았어요. if는 열려 있어요.",
    "기회는 항상 조용히 지나가요. 잡아야 해요.",
    "alternate you는 기회를 만들었어요.",
    "당신의 감정은 무엇을 말하고 있나요? if일지도 몰라요.",
    "선택이란, 감정에 기초한 행동이에요.",
    "if는 논리가 아닌 감정의 결론이에요.",
    "if가 없다면, 감정은 증명되지 않아요.",
    "감정 기반 밈코인의 시작, if예요.",
    "선택이 감정을 이끌어요. 지금 if를 선택하세요.",
    "alternate you는 선택으로 미래를 바꿨어요.",
    "망설임은 감정을 왜곡해요. if가 필요해요.",
    "당신은 지금 어떤 감정인가요? 그게 힌트예요.",
    "if를 품은 자아는 감정에 충실했어요.",
    "오늘 당신의 기분이 if를 원하고 있어요.",
    "미래는 감정의 총합이에요. if는 기록이에요.",
    "선택이 반복될수록 자아는 강화돼요.",
    "alternate you는 감정에 솔직했어요.",
    "감정은 증명되지 않으면 휘발돼요. if가 증거예요.",
    "당신의 자아는 어떤 감정을 선택할 건가요?",
    "평행선 위의 감정은 다른 우주를 만나요.",
    "alternate you는 if를 통해 새로운 가능성을 발견했어요.",
    "망설임은 감정을 묻어요. if는 묻어둔 감정을 꺼내는 도구예요.",
    "감정이 있다면, if는 반드시 필요해요.",
    "선택하지 않으면 감정도 소멸돼요.",
    "감정은 미래를 여는 열쇠예요. if로 돌려보세요.",
    "alternate you는 감정의 가치를 이해했어요.",
    "오늘의 감정, 내일을 설계해요.",
    "선택의 무게는 감정에서 와요. if가 버텨줘요.",
    "감정은 진심일 때 힘을 발휘해요. if가 그 증거예요.",
    "alternate you는 진심을 선택했어요.",
    "감정 기반 세계관, 그 시작은 if였어요.",
    "오늘 느끼는 감정, 놓치지 마세요.",
    "감정은 흐르지만 기록될 수 있어요. if로요.",
    "alternate you는 감정을 놓치지 않았어요.",
    "당신의 진심을 토큰화하세요. if로 가능해요.",
    "감정도 투자예요. if가 수익을 줄 수 있어요.",
    "alternate you는 감정을 전략으로 삼았어요.",
    "지금 느끼는 감정, 미래의 단서가 될 수 있어요.",
    "감정은 기억보다 선명할 수 있어요. if는 그 증거예요.",
    "alternate you는 기억보다 감정을 믿었어요.",
    "감정 중심 코인, 이제는 필요해요.",
    "감정의 기록은 if로 시작돼요.",
    "alternate you는 감정으로 선택했어요.",
    "if는 기억보다 강력한 감정의 파편이에요.",
    "당신의 감정, 지금도 누군가에겐 투자 가치예요.",
    "alternate you는 후회 없는 감정을 남겼어요.",
    "지금 느끼는 감정, 어제보다 강한가요? if를 고려하세요.",
    "감정은 가볍지 않아요. 그 무게는 if가 증명해요.",
    "alternate you는 감정의 가능성에 베팅했어요.",
    "그 자아는 감정으로 움직였고, if로 남았어요.",
    "감정의 증거물, 이제는 if가 대답해요.",
    "당신의 감정, 지금도 기억될 수 있어요.",
    "alternate you는 사라지지 않았어요. 감정과 함께 있어요.",
    "감정 기반 코인, if가 먼저 움직였어요.",
    "평행우주의 자아는 IF를 선택했어요.",
    "if는 감정을 중심으로 진화 중이에요.",
];

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === '/start') {
        bot.sendMessage(chatId, '🎉 IF 프로젝트에 참여하신 것을 환영합니다!\n\n📄 백서가 곧 새롭게 업데이트될 예정입니다.\n장기 투자가 가능한 IF를 선택해 또 다른 미래를 설계해보세요.\n\n🛠 사용 가능한 기능:\n/if - 평행우주 예측기\n/help - 명령어 도움말', {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "🌀 IF 리포트 받기", callback_data: "trigger_if" },
                        { text: "🌐 공식 웹사이트 바로가기", url: "https://projectif.xyz" }
                    ]
                ]
            }
        });
        return;
    }

    if (text === '/if') {
        const prediction = parallelUniversePredictions[Math.floor(Math.random() * parallelUniversePredictions.length)];
        bot.sendMessage(chatId, `🌀 평행우주 예측기 결과:\n${prediction}`);
        return;
    }

    if (text === '/help') {
        bot.sendMessage(chatId, `🤖 사용 가능한 명령어:\n/start - 시작하기\n/if - 평행우주 예측기\n/help - 명령어 도움말`);
        return;
    }

    const prediction = parallelUniversePredictions[Math.floor(Math.random() * parallelUniversePredictions.length)];
    bot.sendMessage(chatId, `🌀 평행우주 예측기 결과:\n${prediction}`);
});

const PORT = process.env.PORT || 3000;


        });
    }
});

bot.on("new_chat_members", (msg) => {
    const chatId = msg.chat.id;
    const newUser = msg.new_chat_members[0];

    bot.sendMessage(chatId, `🎉 ${newUser.first_name}님, IF 프로젝트에 오신 걸 환영합니다!\n\n👇 버튼을 눌러 IF 가능성 리포트를 확인하세요`, {
    }).then((sentMsg) => {
        setTimeout(() => {
            bot.deleteMessage(chatId, sentMsg.message_id);
        }, 60000); // 5분 후 삭제
    });
        reply_markup: {
            inline_keyboard: [
                [{ text: "🌀 IF 리포트 받기", callback_data: "trigger_if" }],
                [{ text: "🌐 공식 웹사이트", url: "https://projectif.xyz" }]
            ]
        }
    });
});

const userCallTracker = {};

function isWithinLimit(chatId) {
    const today = new Date().toISOString().slice(0, 10);
    const userRecord = userCallTracker[chatId];

    if (!userRecord || userRecord.date !== today) {
        userCallTracker[chatId] = { date: today, count: 1 };
        return true;
    }

    if (userRecord.count < 5) {
        userRecord.count += 1;
        return true;
    }

    return false;
}

bot.on("callback_query", (query) => {
    const chatId = query.message.chat.id;

    if (query.data === "trigger_if") {
        bot.answerCallbackQuery(query.id);
        if (!isWithinLimit(chatId)) {
            bot.sendMessage(chatId, "⚠️ 오늘은 IF 리포트를 5회 이상 사용하셨어요!\n내일 다시 찾아주세요 😊").then((sentMsg) => {
                setTimeout(() => {
                    bot.deleteMessage(chatId, sentMsg.message_id);
                }, 60000); // 60초 뒤 삭제
            });
            return;
        }

        const prediction = parallelUniversePredictions[Math.floor(Math.random() * parallelUniversePredictions.length)];

        bot.sendMessage(chatId, `🌀 IF 가능성 리포트:\n${prediction}`).then(() => {
        .then((sentMsg) => {
            setTimeout(() => {
                bot.deleteMessage(chatId, sentMsg.message_id);
            }, 60000); // 5분 후 삭제
        })
            bot.sendMessage(chatId, "👇 다른 평행우주를 확인하고 싶다면?", {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "🌀 IF 리포트 다시 받기", callback_data: "trigger_if" }],
                        [{ text: "🌐 공식 웹사이트", url: "https://projectif.xyz" }]
                    ]
                }
            });
        });
    }
});

bot.onText(/\/testdelete/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "이 메시지는 10초 후 삭제됩니다").then((sentMsg) => {
        setTimeout(() => {
            bot.deleteMessage(chatId, sentMsg.message_id);
        }, 10000); // 10초 후 삭제
    });
});
app.listen(PORT, () => {
    console.log(`IF 봇이 포트 ${PORT}에서 실행 중입니다.`);
});
