/**
 * 
 * Data types
 * 
 * 여섯게의 primtive type과
 * 힌개의 오브젝트 타입이 있다
 * 
 * 1)Number(숫자)
 * 2)string(문자열)
 * 3)Bolean(블러인)
 * 4)Undefinde (언디파인드)
 * 5)null(널) 언디파인와 약간 다름
 * 6)symbol (심불)
 * 
 * 
 * 7) Object (객체) 
 *      Function
 *      Array
 *      object
 */


//넘버ㅓ 타입
// const age = 32;
// const tempature = -10;
// const pi = 3.141592;

// console.log(typeof age);
// console.log(typeof tempature);
// console.log(typeof pi);
// console.log('_________________');

// const infinity = Infinity;
// const nInfinity = -infinity;
// console.log(typeof infinity);
// console.log(typeof -infinity);

// /**
//  * 2) 스트링 타입
//  */
// console.log("_________________");
// const condeFactory = '코트펙토리'
// console.log(typeof condeFactory);

// const ive = "아이브";
// console.log(ive);

/**
 * Template Literal
 * 
 * Escaping character
 * 1) newline ->\n
 * 2)tab -> \t
 * 3)백슬래시를 스트링으로 표현하고싶다면 두번 입력하면 된다
 */

console.log('______');

const dictionary = {
    red:'빨간색',
    blue:'파란색',
    bluesky:'하늘색',
};

console.log(dictionary['red']);

console.log(typeof dictionary)


/**
 * arry타입
 * 
 * 값을 리스트로 나열 할 수 있다
 */


const iveMeberArray =  [
    '안유진',
    '가을',
    '레오',
    '장원영',
]

console.log(iveMeberArray[0]);

iveMeberArray[0] = '앙기모찌';
console.log(iveMeberArray);

/**
 * static typeping ->변수를 선언할 떄 어떤 타입의 타입을 선언할지 명시함
 *      -->C
 * 
 * dynamic typing ->변수의 타입을 명시적으로 선언하지 않고 갑에 의해 타입을 "추론"한다
 * 
 * JS = dynamic typing
 */