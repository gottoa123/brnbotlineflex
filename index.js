const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

const LINE_ACCESS_TOKEN = process.env.LINE_ACCESS_TOKEN;

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
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "text",
                              text: "BONUSTIME",
                              weight: "bold",
                              size: "lg",
                            },
                            {
                              type: "text",
                              text: "คุณกำลังอยู่ในช่วงเวลาโบนัส!",
                              wrap: true,
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            };
          }

          try {
            console.log("Sending message:", messageData); // ตรวจสอบข้อมูลที่กำลังจะส่ง
            await axios.post(
              "https://api.line.me/v2/bot/message/push",
              messageData,
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${LINE_ACCESS_TOKEN}`,
                },
              }
            );
          } catch (error) {
            console.error(
              "Error sending message:",
              error.response ? error.response.data : error.message
            );
          }
        }
      }
    }
  }

  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
