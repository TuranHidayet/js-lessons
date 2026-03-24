/*
1. Aşşağıdaki alışveriş sepetindeki elemanları ekleyin, silin , düzenleyin.

const  shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

Eğer alışveriş sepetine zaten 'Meat' eklenmemişse en başa ekleyin.

Eğer alışveriş sepetine zaten 'Sugar' eklenmemişse en sona ekleyin.

Eğer bala alerjiniz varsa 'Honey' elemanını diziden silin.

'Tea' elemanını 'Green Tea' olarak güncelleyin.
*/
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// if (shoppingCart.includes('Meat')) {
//     console.log(shoppingCart);
// } else {
//     shoppingCart.unshift('Meat');
//     console.log(shoppingCart);
// }

// if (shoppingCart.includes('Sugar')) {
//     console.log(shoppingCart);
// } else {
//     shoppingCart.push('Sugar');
//     console.log(shoppingCart);
// }

// shoppingCart.pop('Honey');
// console.log(shoppingCart);

// 2. countries dizisinde 'Ethiopia' olup olmadığını kontrol edin. Eğer varsa 'ETHIOPIA' yazdırın. eğer yoksa bunu countries dizisine ekleyin.

// const countries = ['Almaniya', 'Ispaniya', 'Italiya', 'Fransa', 'Hollandiya'];
// if (countries.includes(ethiopia)) {
//     console.log('Ethiopia');
// } else {
//     countries.push('Ethiopia');
//     console.log(countries);
// }

// 3. webTechs dizisinde Sass olup olmadığını kontrol edin eğer varsa 'Sass is a CSS preprocess' yazdırın.
//  Eğer yoksa diziye Sass elemanını ekleyip diziyi yazdırın

// const webTechs = ["HTML", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB",];

// if (webTechs.includes('Sass')) {
//     console.log('Sass is a CSS preprocess')
// }else {
//     console.log(webTechs)
// }

// 4. Aşağıdaki iki değişkeni birleştirin ve bir fullStack değişkeninde atayın.
// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
// const backEnd = ['Node', 'Express', 'MongoDB'];
// let fullStack = frontEnd.concat(backEnd);
// console.log(fullStack);

/*
5. Aşağıdaki dizide 10 öğrencinin yaşı vardır:
const  ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

Diziyi sıralayın ve en küçük ve en büyük yaşı bulun

Ortalama yaşı bulun(tüm elemanlar eleman sayısına bölünür)

Yaş aralığını bulun (maks - min)

abs() metodunu kullanarak (min - ortalama) ve (maks - ortalama) değerlerini karşılaştırın,

countries array dizisinden ilk 10 ülkeyi dilimleyin ( Slice edin )

countries array dizisinden ortadaki ülkeleri bulun.

countries dizisini çift ise iki eşit diziye bölün. countries dizisi çift değilse, ilk yarı için bir ülke fazla olarak bölün
*/

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Diziyi sıralayın ve en küçük ve en büyük yaşı bulun
// let sortAges = ages.sort();
// console.log(ages[0], ages.length);

// const sum = ages.reduce((total, age) => total + age, 0);
// const avarage = sum / ages.length;
// console.log(avarage);

























