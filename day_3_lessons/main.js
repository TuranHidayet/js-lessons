// Seviyye 1

// 1. firstName, lastName, country, city, age, isMarried, year değişkenlerini oluşturun ve bunlara değer atayın. Farklı veri türlerini kontrol etmek için typeof operatörünü kullanın.

// let firstName = "John";
// let lastName = "Doe";
// let country = "USA";
// let city = "New York";
// let age = 30;
// let isMarried = false;
// let year = 2024;

// console.log(typeof firstName);
// console.log(typeof lastName);
// console.log(typeof country);
// console.log(typeof city);
// console.log(typeof age);
// console.log(typeof isMarried);
// console.log(typeof year);

// 2. '10' türünün 10'a eşit olup olmadığını kontrol edin
// console.log("10" === 10);

// 3. Python ve jargonun uzunluğunu bulun ve yanlış bir karşılaştırma ifadesi yapın.
// let python = "Python";
// let jargon = "Jargon";
// console.log("Python".length > "jargon".length);

// 4. Hem dragon hem de python'da 'on' yoktur.
// console.log(!"Python".includes("on") && !"Jargon".includes("on"));

/*
 5. Aşağıdaki etkinlikleri yapmak için Date nesnesini kullanın.

Bugün yıl nedir?
Bugünün ayı rakam olarak nedir?
Bugünün tarihi nedir?
Bugün sayı olarak gün nedir?
Şimdi saat kaç?
Dakika kaç şimdi?
1 Ocak 1970'den bugüne kadar geçen saniye sayısını bulun.
*/

// let now = new Date();
// console.log(now.getFullYear());
// console.log(now.getMonth() + 1);
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(Math.floor(now.getTime() / 1000));

// Seviyye 2

/*


İki değişken myAge ve yourAge bildirin ve bunlara başlangıç değerleri ile myAge ve yourAge atayın.

let myAge = 250
let yourAge = 25
I am 225 years older than you.
İstemi kullanarak, kullanıcının doğduğu yılı alır ve kullanıcı 18 veya daha büyükse, kullanıcıya belirli bir süre beklemesini söylemediği takdirde, kullanıcının araba kullanmasına izin verir.

Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.
Kullanıcıdan yıl sayısını girmesini isteyen bir komut dosyası yazın. Bir kişinin yaşayabileceği saniye sayısını hesaplayın. Birinin sadece yüz yıl yaşadığını varsayalım

Enter number of years you live: 100
You lived 3153600000 seconds.
Tarih saat nesnesini kullanarak insan tarafından okunabilir bir saat biçimi oluşturun

YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm
*/

/*

1. Kullanıcıdan üçgenin tabanını ve yüksekliğini girmesini ve bir üçgenin alanını hesaplamasını isteyen bir komut dosyası yazın (alan = 0,5 x b x h).

Enter base: 20
Enter height: 10
The area of the triangle is 100
*/
// let base = parseFloat(prompt("Enter Base:", "Enter base number here"));
// let height = parseFloat(prompt("Enter Height:", "Enter height here"));
// let area = 0.5 * base * height;
// console.log("The area of the triangle is:", area);

/*
2. Kullanıcıdan üçgenin a kenarını, b kenarını ve c kenarını girmesini ve üçgenin çevresini hesaplamasını isteyen bir komut dosyası yazın (çevre = a + b + c)

Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12
*/

// let sideA = parseFloat(prompt('Enter side A:', 'enter number'));
// let sideB = parseFloat(prompt('Enter side B:', 'enter number'));
// let sideC = parseFloat(prompt('Enter side C:', 'enter number'));

// let perimeter = sideA + sideB + sideC;
// console.log('The perimeter of the triangle is', perimeter);

// 3. Komut istemini kullanarak uzunluk ve genişliği alın ve bir dikdörtgenin alanını hesaplayın (alan = uzunluk x genişlik ve dikdörtgenin çevresi (çevre = 2 x (uzunluk + genişlik))
// let uzunluk = parseFloat(prompt('Uzunluq deyerini yazin:', 'uzunluq (cm)'));
// let genislik = parseFloat(prompt('Genislik deyeri buraya yazin:', 'genislik (cm)'));
// let alan = uzunluk * genislik;
// let cevre = 2 * (uzunluk + genislik);
// console.log('kvadratin sahesi:', alan, 'cm2', ',', 'kvadratin cevresi:', cevre, 'cm');


// 4. Komut istemini kullanarak yarıçapı alın ve bir dairenin alanını (alan = pi x r x r) ve bir dairenin çevresini (c = 2 x pi x r) hesaplayın, burada pi = 3.14.
// let pi = 3.14
// let r = parseFloat(prompt('Cevrenin radiusu:', 'reqem yazin'));
// let cevre = 2 * pi * r;
// let alan = pi * r * r;
// console.log('Cevrenin sahesi:', alan);
// console.log('Cevrenin uzunlugu:', cevre.toFixed(2));


/*
5. Kullanıcıdan saat ve saat başına oran girmesini isteyen bir komut dosyası yazın. Kişinin ücretini hesapla?
Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120
*/
// let hour = parseFloat(prompt('Saat daxil edin:', 'Enter hours'));
// let ratePerHour = parseFloat(prompt('Saat basina qiymet:', 'Enter rate per hour'));
// let weeklyEaring = hour * ratePerHour;
// console.log(weeklyEaring);

// 6. Adınızın uzunluğu 7'den büyükse, adınız uzun, yoksa adınızın kısa olduğunu söyleyin.
// let name = prompt('adinizi daxil edin:', 'name');
// name.length > 7
//     ?console.log('adiniz uzun')
//     : console.log('adiniz qisa')

// 7. Adınızın uzunluğunu ve soyadınızın uzunluğunu karşılaştırın ve bu çıktıyı almalısınız. 
// Your first name, Asabeneh is longer than your family name, Yetayeh
// let yourName = prompt('adiniz:', 'name');
// let yourSurname = prompt('soyadiniz:', 'surname');
// yourName.length > yourSurname.length
//     ? console.log('adiniz ', yourName, ', soyadiniz ', yourSurname, 'den uzundur')
//     : console.log('soyadiniz ', yourSurname, ', adiniz ', yourName, 'den uzundur')








































































