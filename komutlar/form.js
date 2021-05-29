const Discord = require('discord.js');//Asperius Code
const db = require('quick.db');//Asperius Code
const Spectrum = new Set();//Asperius Code
//Asperius Code
exports.run = async(client, message, args) => {   
     if(message.author.id !== message.guild.owner.user.id) return message.reply(':bit: Bu komutu kullanabilmek için **Sunucu Sahibi** olmalısın!')
client.channels.cache.get("840206636991381556")
const embed = new Discord.MessageEmbed()
.setAuthor("YÜKSΞL GΛRΛGΞ® Ekip Alım Formu")
.setDescription(`
▬▬▬▬▬▬ **_YÜKSΞL GΛRΛGΞ_** ▬▬▬▬▬▬▬

**Merhaba, Başvuruyu Yapacak Arkadaşların Aşağıdaki Formu Doldurmaları Gerekmektedir**
  
▬▬▬▬▬▬ **_YÜKSΞL GΛRΛGΞ_** ▬▬▬▬▬▬▬

**• Ekibimize Başvurmak İçin Herhangi Bir Ekibe Üye Olmamanız Gerekmektedir.**
**• Soruları Ekibimize Katılmak İsteyen Kişi Kendisine Göre Ayarlamalı.**
**• Başvurunuz Onaylandıktan Sonra __YÜKSΞL WORK'S©__ Tag'ını Kullanmak Zorundasınız.**
**• En Önemlisi Sizin Sürüşünüzdür. Dikkat Dağıtan, Kuralları Bozan Ekibe Alınmaz.**
**• Birbirinizi Küçük Düşürecek Sözler Ve Saygısızlık Yapmak Yasaktır.**
**• Ekip İçerisinde Bir Sorun Varsa, Eğer Bir Ekip Üyesi Size Sataşıyorsa Yöneticiye Bildiriniz, Kendi Aranızda Tartışma Çıkartmayınız. Aksi Takdirde Uyarı Verilcektir!**

▬▬▬▬▬▬ **_YÜKSΞL GΛRΛGΞ_** ▬▬▬▬▬▬▬

**NOT: Başvurunuz En Kısada Değerlendirilecektir, Başvuru Gönderenler Yukarıda Yazmış Olduğumuz Maddeleri Kabul Etmiş Sayılır!**

▬▬▬▬▬▬ **_YÜKSΞL GΛRΛGΞ_** ▬▬▬▬▬▬▬

<a:sag_tik:798851371340136458> [**YÜKSΞL WORK'S©| EKİP ALIM FORMU**](https://forms.gle/mFQrxWuV5tMFpo4t8) <a:soltik:838762680117886996>

▬▬▬▬▬▬ **_YÜKSΞL GΛRΛGΞ_** ▬▬▬▬▬▬▬ 
`)
.setThumbnail("https://r.resimlink.com/lNv4.png")
.setImage("https://cdn.discordapp.com/attachments/817305994283057172/842451052472696872/ets2_20210506_144216_00.png")
.setColor("#E9C79A")
.setFooter("YÜKSΞL GΛRΛGΞ®")
.setTimestamp()
client.channels.cache.get("840206636991381556").send(embed)
}//Asperius Code
exports.conf = {
  enabled: true, //Asperius Code
  guildOnly: true, //Asperius Code
  aliases: ["forms"], //Asperius Code
  permLevel: 0 //Asperius Code
};

exports.help = {
  name: "form" //Asperius Code
};