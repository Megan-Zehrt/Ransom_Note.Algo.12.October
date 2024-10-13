// 383. Ransom Note



// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.







/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
    let map = new Map()

    for(let word of magazine){
        if(map.has(word)){
            let count = map.get(word)
            map.set(word, count+1)
        }else{
            map.set(word, 1)
        }
    }

    for(let ransom of ransomNote){

        if(!map.has(ransom)){
            return false
        }
        else if(map.has(ransom)){

            let count = map.get(ransom)

            if(count >= 1){
                map.set(ransom, count-1)
            }else{
                return false
            }
        }
    }

    return true
};