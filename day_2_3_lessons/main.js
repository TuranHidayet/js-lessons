// DAY 2: Seviyye 1

// 1. Challenge adında bir değişken tanımlayın ve '30 Days Of JavaScript' başlangıç ​​değerine atayın.
let challenge = '30 Days Of JavaScript';

// 2. console.log() kullanarak tarayıcı konsolunda değişkeni yazdırın,
console.log(challenge);

// 3. console.log() kullanarak tarayıcı konsolunda dizenin length değerini yazdırın,
console.log(challenge.length);

// 4. toUpperCase() yöntemini kullanarak tüm dize karakterlerini büyük harflerle değiştirin,
console.log(challenge.toUpperCase());

// 5. toLowerCase() yöntemini kullanarak tüm dize karakterlerini küçük harflerle değiştirin,
console.log(challenge.toLowerCase());

// 6. substr() veya substring() yöntemini kullanarak string'in ilk kelimesini kesin-silin (dilimleyin);
console.log(challenge.substr(0, 2));

// 7. includes() yöntemini kullanarak string'in Script kelimesini içerip içermediğini kontrol edin
console.log(challenge.includes('Script'));

// 8. Days Of JavaScript ifadesini 30 Days Of JavaScript'ten ayırın.
let splitted = challenge.split('30');
console.log(splitted[1]);

// 9. replace() yöntemini kullanarak 30 Days of JavaScript'i 30 Days of Python olarak değiştirin.
let newChallenge = challenge.replace('JavaScript', 'Python');
console.log(newChallenge);

// 10. 'JavaScript'in 30 Günü' dizesinde dizin 15'teki karakter nedir? charAt() yöntemini kullanın.
console.log(challenge.charAt(15));

// 11. charCodeAt() kullanan 'JavaScript'in 30 Günü' dizesindeki J karakter kodu nedir?
console.log(challenge.charCodeAt(0));

// 12. indexOf() kullanarak 'JavaScript'in 30 Günü' dizesinde a'nın ilk oluşumunun konumunu belirleyin
console.log(challenge.indexOf('a'));

// 13. lastIndexOf() kullanarak 'JavaScript'in 30 Günü' dizesinde a'nın son oluşumunun konumunu belirleyin
console.log(challenge.lastIndexOf('a'));

// 14. Aşağıdaki cümlede çünkü kelimesinin ilk geçtiği yeri bulmak için indexOf kullanın: 'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'
let sentence = 'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır';
console.log(sentence.indexOf('çünkü'));

// 15. 30 Days Of JavaScript dizesiyle startsWith() yöntemini kullanın ve sonucu doğru yapın
console.log(challenge.startsWith('30 Days Of')); 

// JavaScript'in 30 Günü'ndeki tüm a'leri bulmak için match() yöntemini kullanın
console.log(challenge.match(/a/g));

// concat() kullanarak '30 Days of' ve 'JavaScript' dizelerini tek bir dize olan '30 Days of JavaScript' ile birleştirin
let string = '30 Days of';
console.log(string.concat(' JavaScript')); 

// Seviyye 2


// 1. console.log() kullanarak aşağıdaki ifadeyi yazdırın:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// 2. console.log() kullanarak aşağıdaki ifadeyi yazdırın:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

// 3. '10' tipinin tam olarak 10'a eşit olup olmadığını kontrol edin. Değilse tam olarak eşit yapın.
let num = '10';
let num2 = 10;
console.log(num === num2); 
console.log(parseInt(num) === num2);

// 4. Hem python hem de jargonda 'on' ifadesinin bulunup bulunmadığını kontrol edin
let python = 'python';
let jargon = 'jargon';
console.log(python.includes('on')); 
console.log(jargon.includes('on'));

// 5. 0 ile 100 arasında rastgele bir sayı üretin.
let randomNum = Math.floor(Math.random() * 101);
console.log(randomNum);

// 6. 50 ile 100 arasında rastgele bir sayı üretin.
let randomNum2 = Math.floor(Math.random() * 51) + 50;
console.log(randomNum2);

// 7. Dahil olmak üzere 0 ile 255 arasında rastgele bir sayı oluşturun.
let randomNum3 = Math.floor(Math.random() * 256);
console.log(randomNum3);

// 8. Rastgele bir sayı kullanarak 'JavaScript' dize karakterlerine erişin.
let js = 'JavaScript';
let randomIndex = Math.floor(Math.random() * js.length);
console.log(js[randomIndex]);

/*
9. Aşağıdaki kalıbı yazdırmak için console.log() ve kaçış karakterlerini kullanın.

1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
*/

console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');

// 10. substr kullanarak çünkü çünkü ifadesini aşağıdaki cümleden ayırın:'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'
let word = 'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır';
console.log(word.substr(word.indexOf('çünkü'), 5));


// Seviyye 3

// 1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let loveSentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(loveSentence.match(/love/gi));

// 2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let becauseSentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(becauseSentence.match(/because/gi));

// 3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentences = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let cleaneedSentence = sentences.replace(/[@#$%^&*();!]/g, '');
console.log(cleaneedSentence);
































































