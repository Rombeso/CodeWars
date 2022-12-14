function generateHashtag (str) {
    const forCheckString = str.replace(/\s+/g, '')
    console.log(forCheckString)
    if (!!forCheckString === false || forCheckString.length > 139) {
        return false
    } else {
       let  result = ['#']

        console.log(str.split(' '))
        str.split(' ').forEach(item => item ? result.push(item[0].toUpperCase() + item.substring(1)) : '' )
        console.log(result.join(''))

        return result.join('')
    }
}

console.log(generateHashtag("")) //, false, "Expected an empty string to return false")
console.log(generateHashtag(" ".repeat(200))) //, false, "Still an empty string")
console.log(generateHashtag("Do We have A Hashtag")) //, "#DsoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
console.log(generateHashtag("Codewars")) //, "#Codewars", "Sshould handle a single word.")
console.log(generateHashtag("Codewars Is Nice")) //, "#CodewarsIsNice", "Should remove spaces.")
console.log(generateHashtag("Codewars is nice")) //, "#CodewarsIsNice", "Should capitalize first letters of words.")
console.log(generateHashtag("code" + " ".repeat(140) + "wars")) //, "#CodeWars")
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"))
    //, false, "Should return false if the final word is longer than 140 chars.")
console.log(generateHashtag("a".repeat(139))) //, "#A" + "a".repeat(138), "Should work")
console.log(generateHashtag("a".repeat(140))) //, false, "Too long")

// https://www.codewars.com/kata/52449b062fb80683ec000024/solutions/javascript