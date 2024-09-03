const express = require("express");
const line = require('@line/bot-sdk');
const bodyParser = require("body-parser");
const axios = require("axios"); // ใช้สำหรับส่งข้อความไปยัง LINE

const app = express();
app.use(bodyParser.json());

const config = {
  LINE_ACCESS_TOKEN = process.env.LINE_ACCESS_TOKEN;
};

// สร้าง client สำหรับ LINE Messaging API
const client = new line.Client(config);

// ใช้ middleware ของ LINE SDK
app.use(line.middleware(config));

// Webhook endpoint
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
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1ooaoImg43UyVybNMMSracili7hAawcAM",
                              size: "full",
                              aspectRatio: "1:1.6667",
                              gravity: "top",
                              aspectMode: "fit",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/1re9t83fHfyXgkZZWsDbiBBhHL4Q4OT3i",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "110px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1K6z8Jnzpj3msbmQfTdDYg-qHHSLwxAOV",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/1ihrNsUzGCBtHbH1LrdOXP8CmTOwy7m3y",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/18rV31v9C0f_xQKP6Obc4k4HefWkU7oUH",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/14m4VT8eNGFKt6R8kDSBmlMmSu3fJLJ4g",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1p4qh-xbDrIWlthEiwCmc7z0ndqDP90NL",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/1L9vCXJcmxlvlpCCPAzVO6ZgBUGf_2RJa",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1FBiznCtJcJzs4-2djN5L4L6UD4mFenr8",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/177jyoiiRTJxv85510vdIHoM0vEVX4l0f",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                            // เพิ่ม bubble อื่น ๆ ที่ต้องการ
                          ],
                          paddingAll: "0px",
                        },
                      },
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
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1hUZdVFlhqnDsXskwfUSKeCfSPyBlDO2r",
                              size: "full",
                              aspectRatio: "1:1.6667",
                              gravity: "top",
                              aspectMode: "fit",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/1re9t83fHfyXgkZZWsDbiBBhHL4Q4OT3i",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "110px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1fV30CQkneeK3uO9Xpq-7MA7Y-8smO7c_",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/1ihrNsUzGCBtHbH1LrdOXP8CmTOwy7m3y",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1EKm9bvaMP140_SujKkobrFT45dGAxuJ6",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/14m4VT8eNGFKt6R8kDSBmlMmSu3fJLJ4g",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1-ZIuhxei7j2yGKl5c_XQYNUpXzi1viZ4",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/1L9vCXJcmxlvlpCCPAzVO6ZgBUGf_2RJa",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1lgZdnfbUzgRrQq-_FmGUt6gM3d6dfReA",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/177jyoiiRTJxv85510vdIHoM0vEVX4l0f",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                            // เพิ่ม bubble อื่น ๆ ที่ต้องการ
                          ],
                          paddingAll: "0px",
                        },
                      },
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
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1XqWRNQzfbB62v95WeShoHX2L1E9D9lnf",
                              size: "full",
                              aspectRatio: "1:1.6667",
                              gravity: "top",
                              aspectMode: "fit",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/1re9t83fHfyXgkZZWsDbiBBhHL4Q4OT3i",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "110px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d1p2lj9DYXw_jjTeZoJ2TXXoSH5_A84_w3",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/1ihrNsUzGCBtHbH1LrdOXP8CmTOwy7m3y",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1NXT-2jcCCpsFQ-l4GoLWNDFpYaWQgqIC",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/14m4VT8eNGFKt6R8kDSBmlMmSu3fJLJ4g",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1LtFE3-XWN2yz57ns1ClZreiniDhcutgo",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/1GcanAbOB5S-RH2ssSHq8BPdqCtCGXxdS",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1B6pvTHcyNKAgzzefq38zmzRUrokPrxDD",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/177jyoiiRTJxv85510vdIHoM0vEVX4l0f",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                            // เพิ่ม bubble อื่น ๆ ที่ต้องการ
                          ],
                          paddingAll: "0px",
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
            await client.replyMessage(event.replyToken, messageData);
          } catch (error) {
            console.error("Error sending message:", error.message);
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
