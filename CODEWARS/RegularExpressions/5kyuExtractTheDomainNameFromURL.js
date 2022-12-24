function domainName(url){
    return url.replace(/(https?:\/+)?(www\.)?/g, '').replace(/\.(.)+/g, '')
}

console.log(domainName("http://google.com")) //, "google");
console.log(domainName("http://google.co.jp")) //, "google");
console.log(domainName("www.xakep.ru")) //, "xakep"));
console.log(domainName("https://youtube.com")) //, "youtube");

// https://www.codewars.com/kata/514a024011ea4fb54200004b/solutions/javascript