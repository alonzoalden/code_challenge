/*******************************************************************
"Paul Cipher & Kevin Arnold" by jhancock (Borrowed from Codewars)

We need to encode a message.

Only alpha characters will be encoded. Non-alpha characters will be copied. So, the message " 0123. " would be encoded to " 0123. ".


For alpha characters, we will follow these rules:

1.  All alpha characters will be treated as upper case
2.  The first alpha character will not change (except for switching to upper case).
3.  All subsequent alpha characters will be shifted toward 'Z' by the
    alphabetical position of the previous alpha character.
    (wrap back to 'A' if 'Z' is passed)


For example: "He1lo" would be encoded as follows:

H -> H (first alpha character does not change)
e -> M (H is the previous alpha character, and is the 8th letter in the alphabet.  E + 8 = M)
1 -> 1 (non alpha characters do not change)
l -> Q (E is the previous alpha character, and is the 5th letter in the alphabet.  L + 5 = Q)
o -> A (L is the previous alpha character, and is the 12th letter in the alphabet.  O + 12 = A)

So, "He1lo" would be encoded to "HM1QA"

Write two functions. One to encode and one to decode. (Decoding "HM1QA" should yield "HE1LO")

For both functions, empty strings and null strings should return empty strings.
********************************************************************/


const letterObj = {
    A : 1,
    B : 2,
    C : 3,
    D : 4,
    E : 5,
    F : 6,
    G : 7,
    H : 8,
    I : 9,
    J : 10,
    K : 11,
    L : 12,
    M : 13,
    N : 14,
    O : 15,
    P : 16,
    Q : 17,
    R : 18,
    S : 19,
    T : 20,
    U : 21,
    V : 22,
    W : 23,
    X : 24,
    Y : 25,
    Z : 26
  }

const letterArr = [];
  for (let key in letterObj) {
    letterArr.push(key)
  }

function encode(input) {
  if (!input) {return ""}
  let encodedStr = "";
  let lastLetterIdx = 0;

  for (let i = 0; i < input.length; i++) {
    let letter = input[i].toUpperCase();
    if (letterObj[letter]) {
      let newLetterIdx = letterObj[letter] + lastLetterIdx;
      if (newLetterIdx > 26) {
        newLetterIdx = newLetterIdx % 26
      }
      encodedStr += letterArr[newLetterIdx-1];
      lastLetterIdx = letterObj[letter];
    } else {
      encodedStr += letter;
    }
  }
  return encodedStr;
}

function decode(input) {
  if (!input) {return ""}
  let encodedStr = "";
  let lastLetterIdx = 0;

  for (let i = 0; i < input.length; i++) {
    let letter = input[i].toUpperCase();
    if (letterObj[letter]) {

      let newLetterIdx = letterObj[letter] - lastLetterIdx;
      if (newLetterIdx < 1) {
        newLetterIdx = newLetterIdx + 26;
      }
      encodedStr += letterArr[newLetterIdx-1];
      lastLetterIdx = letterObj[letterArr[newLetterIdx-1]];
    } else {
      encodedStr += letter;
    }
  }
  return encodedStr;
}

//EXTRA CREDIT: Can you improve the time complexity?

module.exports = {
  encode: encode,
  decode: decode
}