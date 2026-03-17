// Seviyye 1

// 1. prompt(“Enter your age:”) ile kullanıcı girdisi alın. Kullanıcı 18 veya daha büyükse, geri bildirimde bulunun:'Sürecek kadar yaşlısınız',
//  ancak 18 değilse, 18 yaşına girmesi gereken yıl sayısını beklemeye başlayarak başka bir geri bildirim verin.

// let age = parseFloat(prompt('yazisinizi daxil edin:', 'yashiniz...'));
// if (age > 18) {
//     console.log('masin surmek ucun yasiniz uygundur');
// } else {
//     console.log(18 - age + ' il gozlemelisiniz');
// }

// 2. if… else kullanarak myAge ve yourAge değerlerini karşılaştırın.
//  Karşılaştırmaya dayanarak ve sonucu kimin daha yaşlı olduğunu (ben veya siz) belirterek konsola kaydedin.
//  Yaşı girdi olarak almak için komut prompt(“Enter your age:”) kullanın.

// let myAge = parseFloat(prompt('menim yasim:'));
// let yourAge = parseFloat(prompt('senin yasin:'));

// if (myAge > yourAge) {
//     console.log('men senden boyuyem');
// } else if (myAge == yourAge) {
//     console.log('yazlarimiz beraberdir');
// } else {
//     console.log('senin yasin daha boyukdur');
// }

// 3. a, b'den büyükse, 'a b'den büyüktür', aksi takdirde 'a, b'den küçüktür' döndürür. şekilde uygulamaya çalışın
// let a = prompt('a deyeri:', 'a');
// let b = prompt('b deyeri:', 'b');
// a > b
//     ? console.log('a b den boyukdur')
//     : console.log('b a dan boyukdur')

/*
4. Öğrencilere puanlarına göre not verebilecek bir kod yazın:

80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/

// let rate = parseFloat(prompt("Qiymet daxil edin:", "not"));
// switch (true) {
//   case rate > 90 && rate < 100:
//     console.log("A");
//     break;
//   case rate > 70 && rate < 89:
//     console.log("B");
//     break;
//   case rate > 60 && rate < 69:
//     console.log("C");
//     break;
//   case rate > 50 && rate < 59:
//     console.log("D");
//     break;
//   case rate > 0 && rate < 49:
//     console.log("F");
//     break;
//   default:
//     console.log("bele bir deyer yoxdur");
// }
