// grab express
var express = require('express');
var $;
// https plugin for requests
var https = require('https');
var config = require('config');
// create an express app
var app = express();
var hbs = require('hbs');
// create an express route for the home page

// require("jsdom").env("", function(err, window) {
//     if (err) {
//         console.error(err);
//         return;
//     }
//
//     $ = require("jquery")(window);
// });
// DONE:0 something cool
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));
// tell node where to look for app resources

// set the view engine to handlebars

//Object for one product

var dress = { "id": 3466719,
              "summary": {
              "name": "Adrianna Papell Long Bridesmaids Dresses Collection",
              "producttype": "DRESS",
              "brand": "Adrianna Papell",
              "onsale": false,
              "producturl": "http://www1.macys.com/shop/product/adrianna-papell-long-bridesmaids-dresses-collection?ID=3466719",
              "iscollection": true,
              "available": true,
              "customerrating": 4.2324,
              "productstartdays": 137,
              "totalreviews": 241
            },
            "image": [
              {
                "imagetype": "PRIMARY_IMAGE",
                "imageurl": "https://slimages.macys.com/is/image/MCY/products/7/optimized/3633157_fpx.tif?bgc=255,255,255&wid=164&qlt=90&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
                "imagename": "7/optimized/3633157_fpx",
                "colorized": true,
                "sequenceNumber": 0,
                "hasMoreColors": true,
                "numberColors": 12
              },
              {
                "imagetype": "ADDITIONAL_IMAGE",
                "imageurl": "https://slimages.macys.com/is/image/MCY/products/2/optimized/3633162_fpx.tif?bgc=255,255,255&wid=164&qlt=90&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
                "imagename": "2/optimized/3633162_fpx",
                "sequenceNumber": 0
              },
              {
                "type": "colorwayImage",
                "imagetype": "COLORWAY",
                "id": 2234819,
                "colornormal": "Tan/Beige",
                "color": "Almond",
                "upcadditionalimage": [
                  {
                    "imagetype": "UPC_ADDITIONAL_IMAGE",
                    "imageurl": "https://slimages.macys.com/is/image/MCY/products/3/optimized/3841183_fpx.tif?bgc=255,255,255&wid=164&qlt=90&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
                    "imagename": "3/optimized/3841183_fpx",
                    "sequenceNumber": 1
                  }
                ],
                "upcprimaryimage": {
                  "imagetype": "UPC_PRIMARY_IMAGE",
                  "imageurl": "https://slimages.macys.com/is/image/MCY/products/9/optimized/3841179_fpx.tif?bgc=255,255,255&wid=164&qlt=90&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
                  "imagename": "9/optimized/3841179_fpx",
                  "sequenceNumber": 0
                },
                "swatchsequencenumber": 0,
                "swapoutsequencenumber": 8,
                "swatchimage": {
                  "imagetype": "SWATCH",
                  "imageurl": "https://slimages.macys.com/is/image/MCY/swatches/2/optimized/1220532_fpx.tif?wid=57&amp;fmt=jpeg",
                  "imagename": "2/optimized/1220532_fpx",
                  "sequenceNumber": 0
                }
              },
              {
                "type": "colorwayImage",
                "imagetype": "COLORWAY",
                "id": 2405836,
                "colornormal": "Blue",
                "color": "Royal",
                "upcadditionalimage": [
                  {
                    "imagetype": "UPC_ADDITIONAL_IMAGE",
                    "imageurl": "https://slimages.macys.com/is/image/MCY/products/2/optimized/3633162_fpx.tif?bgc=255,255,255&wid=164&qlt=90&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
                    "imagename": "2/optimized/3633162_fpx",
                    "sequenceNumber": 1
                  }
                ],
                "upcprimaryimage": {
                  "imagetype": "UPC_PRIMARY_IMAGE",
                  "imageurl": "https://slimages.macys.com/is/image/MCY/products/7/optimized/3633167_fpx.tif?bgc=255,255,255&wid=164&qlt=90&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
                  "imagename": "7/optimized/3633167_fpx",
                  "sequenceNumber": 1
                },
                "swatchsequencenumber": 0,
                "swapoutsequencenumber": 6,
                "swatchimage": {
                  "imagetype": "SWATCH",
                  "imageurl": "https://slimages.macys.com/is/image/MCY/swatches/0/optimized/344170_fpx.tif?wid=57&amp;fmt=jpeg",
                  "imagename": "0/optimized/344170_fpx",
                  "sequenceNumber": 0
                }
              },
              {
                "type": "colorwayImage",
                "imagetype": "COLORWAY",
                "id": 2407775,
                "colornormal": "Black",
                "color": "Black",
                "upcprimaryimage": {
                  "imagetype": "UPC_PRIMARY_IMAGE",
                  "imageurl": "https://slimages.macys.com/is/image/MCY/products/8/optimized/3636888_fpx.tif?bgc=255,255,255&wid=164&qlt=90&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
                  "imagename": "8/optimized/3636888_fpx",
                  "sequenceNumber": 1
                },
                "swatchsequencenumber": 0,
                "swapoutsequencenumber": 13,
                "swatchimage": {
                  "imagetype": "SWATCH",
                  "imageurl": "https://slimages.macys.com/is/image/MCY/swatches/1/optimized/1224031_fpx.tif?wid=57&amp;fmt=jpeg",
                  "imagename": "1/optimized/1224031_fpx",
                  "sequenceNumber": 0
                }
              },
              {
                "type": "colorwayImage",
                "imagetype": "COLORWAY",
                "id": 2302561,
                "colornormal": "Silver",
                "color": "Silver",
                "upcadditionalimage": [
                  {
                    "imagetype": "UPC_ADDITIONAL_IMAGE",
                    "imageurl": "https://slimages.macys.com/is/image/MCY/products/4/optimized/3006484_fpx.tif?bgc=255,255,255&wid=164&qlt=90&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
                    "imagename": "4/optimized/3006484_fpx",
                    "sequenceNumber": 1
                  }
                ],
                "upcprimaryimage": {
                  "imagetype": "UPC_PRIMARY_IMAGE",
                  "imageurl": "https://slimages.macys.com/is/image/MCY/products/2/optimized/3439762_fpx.tif?bgc=255,255,255&wid=164&qlt=90&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
                  "imagename": "2/optimized/3439762_fpx",
                  "sequenceNumber": 1
                },
                "swatchsequencenumber": 0,
                "swapoutsequencenumber": 9,
                "swatchimage": {
                  "imagetype": "SWATCH",
                  "imageurl": "https://slimages.macys.com/is/image/MCY/swatches/1/optimized/1218251_fpx.tif?wid=57&amp;fmt=jpeg",
                  "imagename": "1/optimized/1218251_fpx",
                  "sequenceNumber": 0
                }
              },
              {
                "type": "colorwayImage",
                "imagetype": "COLORWAY",
                "id": 1185367,
                "colornormal": "Pink",
                "color": "Blush",
                "upcadditionalimage": [
                  {
                    "imagetype": "UPC_ADDITIONAL_IMAGE",
                    "imageurl": "https://slimages.macys.com/is/image/MCY/products/8/optimized/3841168_fpx.tif?bgc=255,255,255&wid=164&qlt=90&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
                    "imagename": "8/optimized/3841168_fpx",
                    "sequenceNumber": 1
                  }
                ],
                "upcprimaryimage": {
                  "imagetype": "UPC_PRIMARY_IMAGE",
                  "imageurl": "https://slimages.macys.com/is/image/MCY/products/5/optimized/3841165_fpx.tif?bgc=255,255,255&wid=164&qlt=90&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
                  "imagename": "5/optimized/3841165_fpx",
                  "sequenceNumber": 0
                },
                "swatchsequencenumber": 0,
                "swapoutsequencenumber": 0,
                "swatchimage": {
                  "imagetype": "SWATCH",
                  "imageurl": "https://slimages.macys.com/is/image/MCY/swatches/7/optimized/1221077_fpx.tif?wid=57&amp;fmt=jpeg",
                  "imagename": "7/optimized/1221077_fpx",
                  "sequenceNumber": 0
                }
              },
              {
                "type": "colorwayImage",
                "imagetype": "COLORWAY",
                "id": 2405840,
                "colornormal": "Red",
                "color": "Cherry",
                "upcadditionalimage": [
                  {
                    "imagetype": "UPC_ADDITIONAL_IMAGE",
                    "imageurl": "https://slimages.macys.com/is/image/MCY/products/2/optimized/3633162_fpx.tif?bgc=255,255,255&wid=164&qlt=90&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
                    "imagename": "2/optimized/3633162_fpx",
                    "sequenceNumber": 1
                  }
                ],
                "upcprimaryimage": {
                  "imagetype": "UPC_PRIMARY_IMAGE",
                  "imageurl": "https://slimages.macys.com/is/image/MCY/products/7/optimized/3633157_fpx.tif?bgc=255,255,255&wid=164&qlt=90&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
                  "imagename": "7/optimized/3633157_fpx",
                  "sequenceNumber": 1
                },
                "swatchsequencenumber": 0,
                "swapoutsequencenumber": 9,
                "swatchimage": {
                  "imagetype": "SWATCH",
                  "imageurl": "https://slimages.macys.com/is/image/MCY/swatches/3/optimized/1214953_fpx.tif?wid=57&amp;fmt=jpeg",
                  "imagename": "3/optimized/1214953_fpx",
                  "sequenceNumber": 0
                }
              },
              {
                "type": "colorwayImage",
                "imagetype": "COLORWAY",
                "id": 1848676,
                "colornormal": "Blue",
                "color": "Midnight Blue",
                "upcadditionalimage": [
                  {
                    "imagetype": "UPC_ADDITIONAL_IMAGE",
                    "imageurl": "https://slimages.macys.com/is/image/MCY/products/3/optimized/2816953_fpx.tif?bgc=255,255,255&wid=164&qlt=90&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
                    "imagename": "3/optimized/2816953_fpx",
                    "sequenceNumber": 1
                  }
                ],
                "upcprimaryimage": {
                  "imagetype": "UPC_PRIMARY_IMAGE",
                  "imageurl": "https://slimages.macys.com/is/image/MCY/products/2/optimized/2816952_fpx.tif?bgc=255,255,255&wid=164&qlt=90&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
                  "imagename": "2/optimized/2816952_fpx",
                  "sequenceNumber": 0
                },
                "swatchsequencenumber": 0,
                "swapoutsequencenumber": 3,
                "swatchimage": {
                  "imagetype": "SWATCH",
                  "imageurl": "https://slimages.macys.com/is/image/MCY/swatches/8/optimized/1211768_fpx.tif?wid=57&amp;fmt=jpeg",
                  "imagename": "8/optimized/1211768_fpx",
                  "sequenceNumber": 0
                }
              },
              {
                "type": "colorwayImage",
                "imagetype": "COLORWAY",
                "id": 2407773,
                "colornormal": "Pink",
                "color": "French Coral",
                "upcprimaryimage": {
                  "imagetype": "UPC_PRIMARY_IMAGE",
                  "imageurl": "https://slimages.macys.com/is/image/MCY/products/4/optimized/3637564_fpx.tif?bgc=255,255,255&wid=164&qlt=90&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
                  "imagename": "4/optimized/3637564_fpx",
                  "sequenceNumber": 1
                },
                "swatchsequencenumber": 0,
                "swapoutsequencenumber": 11,
                "swatchimage": {
                  "imagetype": "SWATCH",
                  "imageurl": "https://slimages.macys.com/is/image/MCY/swatches/6/optimized/361616_fpx.tif?wid=57&amp;fmt=jpeg",
                  "imagename": "6/optimized/361616_fpx",
                  "sequenceNumber": 0
                }
              },
              {
                "type": "colorwayImage",
                "imagetype": "COLORWAY",
                "id": 1715812,
                "colornormal": "Blue",
                "color": "Midnight",
                "upcadditionalimage": [
                  {
                    "imagetype": "UPC_ADDITIONAL_IMAGE",
                    "imageurl": "https://slimages.macys.com/is/image/MCY/products/1/optimized/2262471_fpx.tif?bgc=255,255,255&wid=164&qlt=90&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
                    "imagename": "1/optimized/2262471_fpx",
                    "sequenceNumber": 1
                  }
                ],
                "upcprimaryimage": {
                  "imagetype": "UPC_PRIMARY_IMAGE",
                  "imageurl": "https://slimages.macys.com/is/image/MCY/products/0/optimized/2262470_fpx.tif?bgc=255,255,255&wid=164&qlt=90&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
                  "imagename": "0/optimized/2262470_fpx",
                  "sequenceNumber": 0
                },
                "swatchsequencenumber": 0,
                "swapoutsequencenumber": 2,
                "swatchimage": {
                  "imagetype": "SWATCH",
                  "imageurl": "https://slimages.macys.com/is/image/MCY/swatches/5/optimized/347435_fpx.tif?wid=57&amp;fmt=jpeg",
                  "imagename": "5/optimized/347435_fpx",
                  "sequenceNumber": 0
                }
              },
              {
                "type": "colorwayImage",
                "imagetype": "COLORWAY",
                "id": 2029616,
                "colornormal": "Black",
                "color": "Black/Gunmetal",
                "upcadditionalimage": [
                  {
                    "imagetype": "UPC_ADDITIONAL_IMAGE",
                    "imageurl": "https://slimages.macys.com/is/image/MCY/products/8/optimized/3006488_fpx.tif?bgc=255,255,255&wid=164&qlt=90&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
                    "imagename": "8/optimized/3006488_fpx",
                    "sequenceNumber": 1
                  }
                ],
                "upcprimaryimage": {
                  "imagetype": "UPC_PRIMARY_IMAGE",
                  "imageurl": "https://slimages.macys.com/is/image/MCY/products/7/optimized/3006487_fpx.tif?bgc=255,255,255&wid=164&qlt=90&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
                  "imagename": "7/optimized/3006487_fpx",
                  "sequenceNumber": 1
                },
                "swatchsequencenumber": 0,
                "swapoutsequencenumber": 7,
                "swatchimage": {
                  "imagetype": "SWATCH",
                  "imageurl": "https://slimages.macys.com/is/image/MCY/swatches/9/optimized/346259_fpx.tif?wid=57&amp;fmt=jpeg",
                  "imagename": "9/optimized/346259_fpx",
                  "sequenceNumber": 0
                }
              },
              {
                "type": "colorwayImage",
                "imagetype": "COLORWAY",
                "id": 1846116,
                "colornormal": "Green",
                "color": "Mint",
                "upcadditionalimage": [
                  {
                    "imagetype": "UPC_ADDITIONAL_IMAGE",
                    "imageurl": "https://slimages.macys.com/is/image/MCY/products/6/optimized/2790366_fpx.tif?bgc=255,255,255&wid=164&qlt=90&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
                    "imagename": "6/optimized/2790366_fpx",
                    "sequenceNumber": 1
                  }
                ],
                "upcprimaryimage": {
                  "imagetype": "UPC_PRIMARY_IMAGE",
                  "imageurl": "https://slimages.macys.com/is/image/MCY/products/5/optimized/2790365_fpx.tif?bgc=255,255,255&wid=164&qlt=90&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
                  "imagename": "5/optimized/2790365_fpx",
                  "sequenceNumber": 0
                },
                "swatchsequencenumber": 0,
                "swapoutsequencenumber": 3,
                "swatchimage": {
                  "imagetype": "SWATCH",
                  "imageurl": "https://slimages.macys.com/is/image/MCY/swatches/6/optimized/1219416_fpx.tif?wid=57&amp;fmt=jpeg",
                  "imagename": "6/optimized/1219416_fpx",
                  "sequenceNumber": 0
                }
              },
              {
                "type": "colorwayImage",
                "imagetype": "COLORWAY",
                "id": 2408314,
                "colornormal": "Purple",
                "color": "Currant",
                "upcadditionalimage": [
                  {
                    "imagetype": "UPC_ADDITIONAL_IMAGE",
                    "imageurl": "https://slimages.macys.com/is/image/MCY/products/4/optimized/3006484_fpx.tif?bgc=255,255,255&wid=164&qlt=90&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
                    "imagename": "4/optimized/3006484_fpx",
                    "sequenceNumber": 1
                  }
                ],
                "upcprimaryimage": {
                  "imagetype": "UPC_PRIMARY_IMAGE",
                  "imageurl": "https://slimages.macys.com/is/image/MCY/products/5/optimized/3637275_fpx.tif?bgc=255,255,255&wid=164&qlt=90&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg",
                  "imagename": "5/optimized/3637275_fpx",
                  "sequenceNumber": 1
                },
                "swatchsequencenumber": 0,
                "swapoutsequencenumber": 11,
                "swatchimage": {
                  "imagetype": "SWATCH",
                  "imageurl": "https://slimages.macys.com/is/image/MCY/swatches/0/optimized/1219060_fpx.tif?wid=57&amp;fmt=jpeg",
                  "imagename": "0/optimized/1219060_fpx",
                  "sequenceNumber": 0
                }
              }
            ],
            "price": {
              "regular": {
                "high": 299,
                "low": 179
              },
              "pricetype": "Ticket",
              "pricetypeid": 0,
              "onsale": false,
              "onEdv": false,
              "percentageOff": 0,
              "percentageOffHigh": 0
            },
            "category": [
              {
                "id": 9572,
                "type": "homecategory"
              }
            ],
            "badges": {
              "new": false,
              "Rebate": false,
              "onsale": false
            }
          };

// SET THE ROUTES
// home page route
app.get('/', function(req, res) {
    res.locals = {
        data: [
          dress,
          dress
        ]
    };
    res.render('index');
});


//facebook chatbot code

var VALIDATION_TOKEN = (process.env.MESSENGER_VALIDATION_TOKEN) ?
  (process.env.MESSENGER_VALIDATION_TOKEN) :
  config.get('validationToken');

  app.get('/webhook', function(req, res) {
    if (req.query['hub.mode'] === 'subscribe' &&
        req.query['hub.verify_token'] === VALIDATION_TOKEN) {
      console.log("Validating webhook");
      res.status(200).send(req.query['hub.challenge']);
    } else {
      console.error("Failed validation. Make sure the validation tokens match.");
      res.sendStatus(403);
    }
  });
//
// app.post('/webhook', function (req, res) {
  var data = req.body;

  // Make sure this is a page subscription
  if (data.object === 'page') {

    // Iterate over each entry - there may be multiple if batched
    data.entry.forEach(function(entry) {
      var pageID = entry.id;
      var timeOfEvent = entry.time;

      // Iterate over each messaging event
      entry.messaging.forEach(function(event) {
        if (event.message) {
          receivedMessage(event);
        } else {
          console.log("Webhook received unknown event: ", event);
        }
      });
    });

    // Assume all went well.
    //
    // You must send back a 200, within 20 seconds, to let us know
    // you've successfully received the callback. Otherwise, the request
    // will time out and we will keep trying to resend.
    res.sendStatus(200);
   }
// });

/*
 * Message Event
 *
 * This event is called when a message is sent to your page. The 'message'
 * object format can vary depending on the kind of message that was received.
 * Read more at https://developers.facebook.com/docs/messenger-platform/webhook-reference/message-received
 *
 * For this example, we're going to echo any text that we get. If we get some
 * special keywords ('button', 'generic', 'receipt'), then we'll send back
 * examples of those bubbles to illustrate the special message bubbles we've
 * created. If we receive a message with an attachment (image, video, audio),
 * then we'll simply confirm that we've received the attachment.
 *
 */
function receivedMessage(event) {
  var senderID = event.sender.id;
  var recipientID = event.recipient.id;
  var timeOfMessage = event.timestamp;
  var message = event.message;

  console.log("Received message for user %d and page %d at %d with message:",
    senderID, recipientID, timeOfMessage);
  console.log(JSON.stringify(message));

  var isEcho = message.is_echo;
  var messageId = message.mid;
  var appId = message.app_id;
  var metadata = message.metadata;

  // You may get a text or attachment but not both
  var messageText = message.text;
  var messageAttachments = message.attachments;
  var quickReply = message.quick_reply;

  if (isEcho) {
    // Just logging message echoes to console
    console.log("Received echo for message %s and app %d with metadata %s",
      messageId, appId, metadata);
    return;
  } else if (quickReply) {
    var quickReplyPayload = quickReply.payload;
    console.log("Quick reply for message %s with payload %s",
      messageId, quickReplyPayload);

    sendTextMessage(senderID, "Quick reply tapped");
    return;
  }

  if (messageText) {

    // If we receive a text message, check to see if it matches any special
    // keywords and send back the corresponding example. Otherwise, just echo
    // the text we received.
    switch (messageText) {
      case 'image':
        sendImageMessage(senderID);
        break;

      case 'gif':
        sendGifMessage(senderID);
        break;

      case 'audio':
        sendAudioMessage(senderID);
        break;

      case 'video':
        sendVideoMessage(senderID);
        break;

      case 'file':
        sendFileMessage(senderID);
        break;

      case 'button':
        sendButtonMessage(senderID);
        break;

      case 'generic':
        sendGenericMessage(senderID);
        break;

      case 'receipt':
        sendReceiptMessage(senderID);
        break;

      case 'quick reply':
        sendQuickReply(senderID);
        break;

      case 'read receipt':
        sendReadReceipt(senderID);
        break;

      case 'typing on':
        sendTypingOn(senderID);
        break;

      case 'typing off':
        sendTypingOff(senderID);
        break;

      case 'account linking':
        sendAccountLinking(senderID);
        break;

      default:
        sendTextMessage(senderID, messageText);
    }
  } else if (messageAttachments) {
    sendTextMessage(senderID, "Message with attachment received");
  }
}

/*
 * Delivery Confirmation Event
 *
 * This event is sent to confirm the delivery of a message. Read more about
 * these fields at https://developers.facebook.com/docs/messenger-platform/webhook-reference/message-delivered
 *
 */
function receivedDeliveryConfirmation(event) {
  var senderID = event.sender.id;
  var recipientID = event.recipient.id;
  var delivery = event.delivery;
  var messageIDs = delivery.mids;
  var watermark = delivery.watermark;
  var sequenceNumber = delivery.seq;

  if (messageIDs) {
    messageIDs.forEach(function(messageID) {
      console.log("Received delivery confirmation for message ID: %s",
        messageID);
    });
  }

  console.log("All message before %d were delivered.", watermark);
}


/*
 * Postback Event
 *
 * This event is called when a postback is tapped on a Structured Message.
 * https://developers.facebook.com/docs/messenger-platform/webhook-reference/postback-received
 *
 */
function receivedPostback(event) {
  var senderID = event.sender.id;
  var recipientID = event.recipient.id;
  var timeOfPostback = event.timestamp;

  // The 'payload' param is a developer-defined field which is set in a postback
  // button for Structured Messages.
  var payload = event.postback.payload;

  console.log("Received postback for user %d and page %d with payload '%s' " +
    "at %d", senderID, recipientID, payload, timeOfPostback);

  // When a postback is called, we'll send a message back to the sender to
  // let them know it was successful
  sendTextMessage(senderID, "Postback called");
}

/*
 * Message Read Event
 *
 * This event is called when a previously-sent message has been read.
 * https://developers.facebook.com/docs/messenger-platform/webhook-reference/message-read
 *
 */
function receivedMessageRead(event) {
  var senderID = event.sender.id;
  var recipientID = event.recipient.id;

  // All messages before watermark (a timestamp) or sequence have been seen.
  var watermark = event.read.watermark;
  var sequenceNumber = event.read.seq;

  console.log("Received message read event for watermark %d and sequence " +
    "number %d", watermark, sequenceNumber);
}

app.post('/webhook', function (req, res) {
  var data = req.body;

  // Make sure this is a page subscription
  if (data.object == 'page') {
    // Iterate over each entry
    // There may be multiple if batched
    data.entry.forEach(function(pageEntry) {
      var pageID = pageEntry.id;
      var timeOfEvent = pageEntry.time;

      // Iterate over each messaging event
      pageEntry.messaging.forEach(function(messagingEvent) {
        if (messagingEvent.message) {
          receivedMessage(messagingEvent);
        } else if (messagingEvent.delivery) {
          receivedDeliveryConfirmation(messagingEvent);
        } else if (messagingEvent.postback) {
          receivedPostback(messagingEvent);
        } else if (messagingEvent.read) {
          receivedMessageRead(messagingEvent);
        } else {
          console.log("Webhook received unknown messagingEvent: ", messagingEvent);
        }
      });
    });

    // Assume all went well.
    //
    // You must send back a 200, within 20 seconds, to let us know you've
    // successfully received the callback. Otherwise, the request will time out.
    res.sendStatus(200);
  }
});

app.get('/privacy', function(req, res) {
  res.render('privacy');
});

function sendTypingOff(recipientId) {
  console.log("Turning typing indicator off");

  var messageData = {
    recipient: {
      id: recipientId
    },
    sender_action: "typing_off"
  };

  callSendAPI(messageData);
}

/*
 * Call the Send API. The message data goes in the body. If successful, we'll
 * get the message id in a response
 *
 */
function callSendAPI(messageData) {
  request({
    uri: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: PAGE_ACCESS_TOKEN },
    method: 'POST',
    json: messageData

  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var recipientId = body.recipient_id;
      var messageId = body.message_id;

      if (messageId) {
        console.log("Successfully sent message with id %s to recipient %s",
          messageId, recipientId);
      } else {
      console.log("Successfully called Send API for recipient %s",
        recipientId);
      }
    } else {
      console.error("Failed calling Send API", response.statusCode, response.statusMessage, body.error);
    }
  });
}


// start the server on port 8080
var server = app.listen(process.env.PORT || 8080);
// send a message
console.log('Server has started!');
// close port if nobody is using it
