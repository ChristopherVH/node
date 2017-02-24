// grab express
var express = require('express');
var $;
// https plugin for requests
var https = require('https');
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

//SET THE ROUTES
//home page route
app.get('/', function(req, res) {
    res.locals = {
        data: [
          dress,
          dress
        ]
    };
    res.render('index');
});

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

// start the server on port 8080
var server = app.listen(process.env.PORT || 8080);
// send a message
console.log('Server has started!');
// close port if nobody is using it
