const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}

exports.allmenu = (sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount) => {
	return `*── 「 ${setting.botName} 」 ──*
	
  _*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}*_

 Library : *Baileys-MD*.
 Prefix : ( ${prefix} )
 Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
 Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}

 Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
 Limit Harian : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
 Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
 Balance : $${toCommas(getBalance(sender, balance))}

 *MAIN MENU😅☝️*
 *≻* ${prefix}menu
 *≻* ${prefix}owner
 *≻* ${prefix}donasi
 *≻* ${prefix}speed
 *≻* ${prefix}runtime
 *≻* ${prefix}cekprem
 *≻* ${prefix}listprem
 *≻* ${prefix}dashboard

 *STORE MENU😅☝️*
 *≻* ${prefix}list
 *≻* ${prefix}addlist
 *≻* ${prefix}dellist
 *≻* ${prefix}update
 *≻* ${prefix}proses
 *≻* ${prefix}done
 *≻* ${prefix}tambah
 *≻* ${prefix}kurang
 *≻* ${prefix}kali
 *≻* ${prefix}bagi

 *CONVERTER/TOOLS😅☝️*
 *≻* ${prefix}sticker
 *≻* ${prefix}toimg
 *≻* ${prefix}tovid
 *≻* ${prefix}tourl
 *≻* ${prefix}tinyurl
 *≻* ${prefix}cuttly
 *≻* ${prefix}bitly
 *≻* ${prefix}ssweb-desktop
 *≻* ${prefix}ssweb-tablet
 *≻* ${prefix}ssweb-phone

 *DOWNLOADER😅☝️*
 *≻* ${prefix}play
 *≻* ${prefix}tiktok
 *≻* ${prefix}ytmp4
 *≻* ${prefix}ytmp3
 *≻* ${prefix}getvideo
 *≻* ${prefix}getmusic
 *≻* ${prefix}instagram
 *≻* ${prefix}facebook
  
 *RANDOM MENU😅☝️*
 *≻* ${prefix}quote
 *≻* ${prefix}cecan
 *≻* ${prefix}cogan
 *≻* ${prefix}ppcouple

 *ASUPAN MENU😅☝️*
 *≻* ${prefix}bocil
 *≻* ${prefix}geayubi
 *≻* ${prefix}hijaber
 *≻* ${prefix}rikagusriani
 *≻* ${prefix}santuy
 *≻* ${prefix}ukhty
  
 *SEARCH MENU😅☝️*
 *≻* ${prefix}lirik
 *≻* ${prefix}grupwa
 *≻* ${prefix}ytsearch

 *SOUND MENU😅☝️*
 *≻* ${prefix}sound1
 *≻* ${prefix}sound2
 *≻* ${prefix}sound3
 *≻* ${prefix}sound4
 *≻* ${prefix}sound5
 *≻* ${prefix}sound6
 *≻* ${prefix}sound7
 *≻* ${prefix}sound8
 *≻* ${prefix}sound9
 *≻* ${prefix}sound10
 *≻* ${prefix}sound11
 *≻* ${prefix}sound12
 *≻* ${prefix}sound13
 *≻* ${prefix}sound14
 *≻* ${prefix}sound15
 *≻* ${prefix}sound16
 *≻* ${prefix}sound17
 *≻* ${prefix}sound18
 *≻* ${prefix}sound19
 *≻* ${prefix}sound20
 *≻* ${prefix}sound21
 *≻* ${prefix}sound22
 *≻* ${prefix}sound23
 *≻* ${prefix}sound24
 *≻* ${prefix}sound25
 *≻* ${prefix}sound26
 *≻* ${prefix}sound27
 *≻* ${prefix}sound28
 *≻* ${prefix}sound29
 *≻* ${prefix}sound30
 *≻* ${prefix}sound31
 *≻* ${prefix}sound32
 *≻* ${prefix}sound33
 *≻* ${prefix}sound34
 *≻* ${prefix}sound35
 *≻* ${prefix}sound36
 *≻* ${prefix}sound37
 *≻* ${prefix}sound38
 *≻* ${prefix}sound39
 *≻* ${prefix}sound40
 *≻* ${prefix}sound41
 *≻* ${prefix}sound42
 *≻* ${prefix}sound43
 *≻* ${prefix}sound44
 *≻* ${prefix}sound45
 *≻* ${prefix}sound46
 *≻* ${prefix}sound47
 *≻* ${prefix}sound48
 *≻* ${prefix}sound49
 *≻* ${prefix}sound50
 *≻* ${prefix}sound51
 *≻* ${prefix}sound52
 *≻* ${prefix}sound53
 *≻* ${prefix}sound54
 *≻* ${prefix}sound55
 *≻* ${prefix}sound56
 *≻* ${prefix}sound57
 *≻* ${prefix}sound58
 *≻* ${prefix}sound59
 *≻* ${prefix}sound60
 *≻* ${prefix}sound61
 *≻* ${prefix}sound62
 *≻* ${prefix}sound63
 *≻* ${prefix}sound64
 *≻* ${prefix}sound65
 *≻* ${prefix}sound66
 *≻* ${prefix}sound67
 *≻* ${prefix}sound68
 *≻* ${prefix}sound69
 *≻* ${prefix}sound70
 *≻* ${prefix}sound71
 *≻* ${prefix}sound72
 *≻* ${prefix}sound73
 *≻* ${prefix}sound74
 
 *IMAGE EDIT MENU😅☝️*
 *≻* ${prefix}circle
 *≻* ${prefix}beautiful
 *≻* ${prefix}blur
 *≻* ${prefix}darkness
 *≻* ${prefix}facepalm
 *≻* ${prefix}invert
 *≻* ${prefix}pixelate
 *≻* ${prefix}rainbow
 *≻* ${prefix}wanted
 *≻* ${prefix}spongebob
 *≻* ${prefix}patrick
 *≻* ${prefix}instagram-profile
 *≻* ${prefix}xnxx-profile
 *≻* ${prefix}custom-gfx-1
 *≻* ${prefix}custom-gfx-2
 *≻* ${prefix}gura
 *≻* ${prefix}gfx1
 *≻* ${prefix}gfx2
 *≻* ${prefix}gfx3
 *≻* ${prefix}gfx4
 *≻* ${prefix}gfx5

 *TEXTPRO MENU😅☝️*
 *≻* ${prefix}pencil
 *≻* ${prefix}glitch
 *≻* ${prefix}glitch2
 *≻* ${prefix}neon
 *≻* ${prefix}3d-neon-light
 *≻* ${prefix}3d-christmas
 *≻* ${prefix}3d-box-text
 *≻* ${prefix}3d-orange-juice
 *≻* ${prefix}logobear
 *≻* ${prefix}tiktok-logo
 *≻* ${prefix}video-game-classic
 *≻* ${prefix}ninja-logo
 *≻* ${prefix}thunder
 *≻* ${prefix}black-pink
 *≻* ${prefix}marvel-studios
 *≻* ${prefix}green-horror
 *≻* ${prefix}magma
 *≻* ${prefix}chocolate-cake
 *≻* ${prefix}strawberry

 *PHOTOOXY MENU😅☝️*
 *≻* ${prefix}flaming
 *≻* ${prefix}shadow-sky
 *≻* ${prefix}naruto
 *≻* ${prefix}pubg
 *≻* ${prefix}under-grass
 *≻* ${prefix}harry-potter
 *≻* ${prefix}flower-typography
 *≻* ${prefix}picture-of-love
 *≻* ${prefix}coffee-cup
 *≻* ${prefix}night-sky
 *≻* ${prefix}carved-wood
 *≻* ${prefix}illuminated-metallic
 *≻* ${prefix}sweet-candy
 
 *GAME MENU😅☝️*
 *≻* ${prefix}tictactoe
 *≻* ${prefix}delttc
 *≻* ${prefix}tebakgambar
  
 *PAYMENT & BANK😅☝️*
 *≻* ${prefix}buylimit
 *≻* ${prefix}buyglimit
 *≻* ${prefix}transfer
 *≻* ${prefix}limit
 *≻* ${prefix}balance
  
 *GROUP MENU😅☝️*
 *≻* ${prefix}linkgrup
 *≻* ${prefix}setppgrup
 *≻* ${prefix}setnamegc
 *≻* ${prefix}setdesc
 *≻* ${prefix}group
 *≻* ${prefix}revoke
 *≻* ${prefix}tagall
 *≻* ${prefix}hidetag
 *≻* ${prefix}fakehidetag
  
 *OWNER MENU😅☝️*
 > evalcode
 x evalcode-2
 $ executor
 *≻* ${prefix}join
 *≻* ${prefix}broadcast
 *≻* ${prefix}setppbot
 *≻* ${prefix}exif
 *≻* ${prefix}leave
 *≻* ${prefix}addprem
 *≻* ${prefix}delprem

 *THANKS TO😅☝️*
 *≻* Irfan H.
 *≻* Fatih Arridho
 *≻* Yog Azz
 *≻* Faiz Frdnd
 *≻* Riy 04
 *>* Arthur'
}
