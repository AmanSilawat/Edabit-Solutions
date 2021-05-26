// solution 1
function strValidation(match, num, str) {
    let numStr = String(num);

    // pick only last number
    if (numStr.length != 1) {
        num = Number(numStr.slice(-1));
    }

    if (str == undefined) {
        return '';
    }
    else if (str.length == 1) {
        return str.repeat(num);
    }
    else {
        let res = '';
        for (const letter of str) {
            res += letter.repeat(num);
        }
        return res;
    }
}
function stringExpansion1(txt) {
    return txt.replace(/(\d+)([a-zA-Z]+)?/gi, strValidation)
}

// Solution 2 Edabit solution
function stringExpansion(txt) {
    return txt.replace(/(\d)+([a-z]*)/gi, (_, d, c) => {
        return c.replace(/./g, c => c.repeat(d))
    })
}

const Test = require('assert/strict');
Test.deepStrictEqual(stringExpansion("3M2u5b2a1s1h2i1r"), "MMMuubbbbbaashiir")
Test.deepStrictEqual(stringExpansion("3Mat"), "MMMaaattt")
Test.deepStrictEqual(stringExpansion("3M123u42b12a"), "MMMuuubbaa")
Test.deepStrictEqual(stringExpansion("3n6s7f3n"), "nnnssssssfffffffnnn")
Test.deepStrictEqual(stringExpansion("0d4n8d2b"), "nnnnddddddddbb")
Test.deepStrictEqual(stringExpansion("0c3b1n7m"), "bbbnmmmmmmm")
Test.deepStrictEqual(stringExpansion("7m3j4ik2a"), "mmmmmmmjjjiiiikkkkaa")
Test.deepStrictEqual(stringExpansion("3A5m3B3Y"), "AAAmmmmmBBBYYY")
Test.deepStrictEqual(stringExpansion("5M0L8P1"), "MMMMMPPPPPPPP")
Test.deepStrictEqual(stringExpansion("2B"), "BB")
Test.deepStrictEqual(stringExpansion("7M1n3K"), "MMMMMMMnKKK")
Test.deepStrictEqual(stringExpansion("A4g1b4d"), "Aggggbdddd")
Test.deepStrictEqual(stringExpansion("111111"), "")
Test.deepStrictEqual(stringExpansion("4d324n2"), "ddddnnnn")
Test.deepStrictEqual(stringExpansion("5919nf3u"), "nnnnnnnnnfffffffffuuu")
Test.deepStrictEqual(stringExpansion("2n1k523n4i"), "nnknnniiii")
Test.deepStrictEqual(stringExpansion("6o23M32d"), "ooooooMMMdd")
Test.deepStrictEqual(stringExpansion("1B44n3r"), "Bnnnnrrr")
Test.deepStrictEqual(stringExpansion("M21d1r32"), "Mdr")
Test.deepStrictEqual(stringExpansion("23M31r2r2"), "MMMrrr")
Test.deepStrictEqual(stringExpansion("8494mM25K2A"), "mmmmMMMMKKKKKAA")
Test.deepStrictEqual(stringExpansion("4A46D6B3C"), "AAAADDDDDDBBBBBBCCC")
Test.deepStrictEqual(stringExpansion("23D42B3A"), "DDDBBAAA")
Test.deepStrictEqual(stringExpansion("143D36C1A"), "DDDCCCCCCA")
Test.deepStrictEqual(stringExpansion("asdf"), "asdf")
Test.deepStrictEqual(stringExpansion("23jbjl1eb"), "jjjbbbjjjllleb")
Test.deepStrictEqual(stringExpansion("43ibadsr3"), "iiibbbaaadddsssrrr")
Test.deepStrictEqual(stringExpansion("123p9cdbjs"), "pppcccccccccdddddddddbbbbbbbbbjjjjjjjjjsssssssss")
Test.deepStrictEqual(stringExpansion("2309ew7eh"), "eeeeeeeeewwwwwwwwweeeeeeehhhhhhh")
Test.deepStrictEqual(stringExpansion("312987rfebd"), "rrrrrrrfffffffeeeeeeebbbbbbbddddddd")
Test.deepStrictEqual(stringExpansion("126cgec"), "ccccccggggggeeeeeecccccc")
Test.deepStrictEqual(stringExpansion("1chwq3rfb"), "chwqrrrfffbbb")
Test.deepStrictEqual(stringExpansion("389fg21c"), "fffffffffgggggggggc")
Test.deepStrictEqual(stringExpansion("239vbsac"), "vvvvvvvvvbbbbbbbbbsssssssssaaaaaaaaaccccccccc")
Test.deepStrictEqual(stringExpansion("davhb327vuc"), "davhbvvvvvvvuuuuuuuccccccc")
Test.deepStrictEqual(stringExpansion("cvyb239bved2dv"), "cvybbbbbbbbbbvvvvvvvvveeeeeeeeedddddddddddvv")
Test.deepStrictEqual(stringExpansion(""), "")
// Mubashir