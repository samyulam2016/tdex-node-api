'use strict'
const Tdex = require('./util/apis')



// var tdex = new Tdex({
// 	apiKey: '7AGFdayY1ePgJbCDsa1gVivym9UhUSG3oazY3fwAy1dpX5UxsmHa7EzuQVy1XzoJ',
// 	apiSecret: '7AGFdbCfPWCB2wh4W2Ln5roMRhnhQVvMvWCsNFpEnc4MLyE28TZX38v92uZ48NXf',
// })

//var config = {
//	cid: 1,
//	side: 0,
//	scale: 10,
//	volume: 1,
//	visible: -1,
//}



var config = {"currency":1,"direction":2,"amount":1}


// tdex.walletSwitch(config ,res => {
// 	console.log(JSON.stringify(res))
// })



module.exports = Tdex
