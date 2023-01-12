import {
    isPalindromeReverse,
    isPalindromeViaHalfLoop,
    isPalindromeViaLoop,
    isPalindromeViaRecursion,
} from './isPalindrome';

import {
    getLongestPalindromicSubstrBruteForce,
    getLongestPalindromicSubstrOddEven
} from './index';

export const dataToTestPalindromeFunc = [
    [["kayak"], true],
    [["a"], true],
    [["ab"], false],
    [["abb"], false],
    [["noon"], true],
    [["a".repeat(10000)], true]

]


export const dataToTest = [
    [["cbbd"], "bb"],
    [["baddad"], "adda"],
    [["bazdadx"], "dad"],
    [["cbbibzd"], "bib"],
    [["babad"], "bab"],
    [["a"], "a"],
    [["civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth\"civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth\""], "ranynar"]
];

describe('Is palindrome', ()=> {

    test.each(dataToTestPalindromeFunc)(
        '%#.reverse',
        (params, result) => {
            expect(isPalindromeReverse(...params)).toBe(result);
        }
    );

    test.each(dataToTestPalindromeFunc)(
        '%#.viaLoop',
        (params, result) => {
            expect(isPalindromeViaLoop(...params)).toBe(result);
        }
    );

    test.each(dataToTestPalindromeFunc)(
        '%#.via half loop',
        (params, result) => {
            expect(isPalindromeViaHalfLoop(...params)).toBe(result);
        }
    );

    test.each(dataToTestPalindromeFunc)(
        '%#.via recursion',
        (params, result) => {
            expect(isPalindromeViaRecursion(...params)).toBe(result);
        }
    );
});


describe('Find longest palindromic substring', ()=> {
    test.each(dataToTest)(
        '%#.Brute force',
        (params, result) => {
            expect(getLongestPalindromicSubstrBruteForce(...params)).toBe(result);
        }
    );

    test.each(dataToTest)(
        '%#.getLongestPalindromicSubstrOddEven',
        (params, result) => {
            expect(getLongestPalindromicSubstrOddEven(...params)).toBe(result);
        }
    );
});
