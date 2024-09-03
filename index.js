const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

const LINE_ACCESS_TOKEN = process.env.LINE_ACCESS_TOKEN; // เปลี่ยนเป็น ACCESS TOKEN ของคุณ

const accessToken = 'fxqjbLVyPgnEeTWoxXQLHFGybTm44Kf3WZvJgVsYg45xVIzV03JnXSAlVdmhaRTae6t1NT1EyFFMHU+fmrFSJf3ydgzkxXQ2nl1zxe0xp8ZGAxJz/k+79M9fu6Qa7nq3tEQwMKVo1pMWsWJzQEC/QQdB04t89/1O/w1cDnyilFU=';
const headers = {
  'Authorization': `Bearer ${accessToken}`,
  'Content-Type': 'application/json'
};

app.post("/webhook", async (req, res) => {
  const events = req.body.events;

  if (events && events.length > 0) {
    for (const event of events) {
      if (event.type === "message" && event.message.type === "text") {
        const userMessage = event.message.text.trim().toLowerCase(); // แปลงข้อความเป็นพิมพ์เล็กและตัดช่องว่าง
        const currentHour = new Date().getUTCHours() + 7; // แปลงเป็นเวลาในประเทศไทย

        console.log("Current Hour:", currentHour); // ตรวจสอบค่าเวลาปัจจุบัน

        if (userMessage === "bonustime") {
          let messageData;

          if (currentHour >= 8 && currentHour < 16) {
            // 8 AM - 4 PM
            messageData = {
              to: event.source.userId,
              messages: [
                {
                  type: "flex",
                  altText: "BONUSTIME ที่กำลังแตกในช่วงนี้",
                  contents: {
                    type: "carousel",
                    contents: [
                      // ใส่ bubble ที่คุณต้องการ
                      // ... (ข้อมูล bubble ทั้งหมดที่คุณใส่ไว้)
                    ],
                  },
                },
              ],
            };
          } else if (currentHour >= 20 && currentHour < 24) {
            // 8 PM - 11:59 PM
            messageData = {
              to: event.source.userId,
              messages: [
                {
                  type: "flex",
                  altText: "BONUSTIME ที่กำลังแตกในช่วงนี้",
                  contents: {
                    type: "carousel",
                    contents: [
                      // ใส่ bubble ที่คุณต้องการ
                      // ... (ข้อมูล bubble ทั้งหมดที่คุณใส่ไว้)
                    ],
                  },
                },
              ],
            };
          } else if (currentHour >= 0 && currentHour < 7) {
            // 12 AM - 7 AM
            messageData = {
              to: event.source.userId,
              messages: [
                {
                  type: "flex",
                  altText: "BONUSTIME ที่กำลังแตกในช่วงนี้",
                  contents: {
                    type: "carousel",
                    contents: [
                      // ใส่ bubble ที่คุณต้องการ
                      // ... (ข้อมูล bubble ทั้งหมดที่คุณใส่ไว้)
                    ],
                  },
                },
              ],
            };
          }

          try {
            console.log("Sending message:", messageData); // ตรวจสอบข้อมูลที่กำลังจะส่ง
            await axios.post('https://api.line.me/v2/bot/message/reply', messageData, { headers: headers })
              .then(response => {
                console.log('Message sent successfully');
              })
              .catch(error => {
                console.error('Error sending message:', error);
              });
          } catch (error) {
            console.error(
              "Error sending message:",
              error.response ? error.response.data : error.message,
            );
          }
        }
      }
    }
  }

  res.sendStatus(200);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
