# Top.gg Otomatik Poster
üzerinden Kolay Otomatik Gönderme [top.gg sdk](https://npmjs.com/package/@top-gg/sdk)

# Nasıl
Gerçekten çok basit! Tek yapman gereken:
```js
const { AutoPoster } = require('topgg-autoposter')

const poster = AutoPoster('topggtoken', client) // discord.js veya eris istemciniz

// optional
poster.on('posted', (stats) => { // başarıyla yayınlandığında koştu
  console.log(`İstatistikler Top.gg'de yayınlandı | ${stats.serverCount} sunucular`)
})
```
*Ayrıca poster.on('error', (err) => { ... }) yapabilirsiniz ve bu, hataların günlüğe kaydedilmesini ve işlemeniz için bırakılmasını engeller.*

Ve bu kadar!

Her 30 dakikada bir sunucu sayınızı ve parça sayınızı göndermeye başlayacaktır.

Bu, işlemden ayrılmış ayrı Discord.JS parçaları üzerinde bile çalışır.

Belirli istemciler yapmak isterseniz, `DJSPoster` & `ErisPoster` & `DJSSharderPoster` & `RosePoster` tüm dışa aktarılan sınıflardır!

## Geleneksel Discord.JS Paylaşımı:

Discord.JS'nin geleneksel 'ShardingManager' parçalayıcısını kullanıyorsanız, AutoPoster'ı parçalama yöneticisine şu şekilde de ekleyebilirsiniz:

```js
const sharder = new Discord.ShardingManager(...)

const poster = AutoPoster('topggtoken', sharder)

sharder.spawn() // eşyalarının geri kalanı!
```
Bu, yayınEval'leri çalıştıracak ve istatistiklerinizi otomatik olarak getirecektir!

## [Discord-Rose](https://npmjs.com/discord-rose) gönder

```js
const master = new Master(...)

const poster = AutoPoster('topggtoken', master)
```
Ve her şeyi comms.getStats() işlevi aracılığıyla çalıştıracaktır.