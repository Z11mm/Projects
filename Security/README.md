Security
----------

**Caesar cipher** - Implement a Caesar cipher, both encoding and decoding. The key is an integer from 1 to 25. This cipher rotates the letters of the alphabet (A to Z). The encoding replaces each letter with the 1st to 25th next letter in the alphabet (wrapping Z to A). So key 2 encrypts "HI" to "JK", but key 20 encrypts "HI" to "BC". This simple "monoalphabetic substitution cipher" provides almost no security, because an attacker who has the encoded message can either use frequency analysis to guess the key, or just try all 25 keys.

Explanation
------------

The modulus operator \(%\) is an essential part of cryptography. It provides a system for integers, where
values reset to zero and begin to increase again after reaching a certain predefined value called the *modulus* \(go figure! :stuck_out_tongue_winking_eye:\). The operator divides a number by a given divisor and returns the remainder of the division.

* For example:
    * 0 % 5 = 0 because 0 / 5 = 0 and the remainder is 0
    * 1 % 5 = 0 because 1 / 5 = 0 and the remainder is 1
    * 2 % 5 = 0 because 2 / 5 = 0 and the remainder is 2
    * 5 % 5 = 0 because 5 / 5 = 1 and the remainder is 0
    * 7 % 5 = 2 because 7 / 5 = 1 and the remainder is 2
    * 10 % 5 = 0 because 10 / 5 = 2 and the remainder is 0

Notice the pattern here?... Values at the LHS reset to 0 at multiples of the RHS value, and then begin to
increase again. The corresponding outline of this pattern is -

Dividend | Remainder
-------- | ---------
0        |      0  
1        |      1  
2        |      2  
3        |      3  
4        |      4  
5        |      0  
6        |      1  
7        |      2  
8        |      3  
9        |      4  
10        |     0

This table maps out a range of values from 0 to 4 \[0 to Divisor \- 1\].

This concept is applied to the 26 characters of the English alphabets : the range 65 \- 90 for uppercase, and 97 \- 122 for lowercase; which are then mapped to a range of numbers from 0 to 25. That is,

Alphabet | Modulo operation | Range value
-------- | ---------------- | ------------
  \[a\]     |     97 % 26          |   19
   \[b\]    |     98 % 26          |   20
   \[c\]    |     99 % 26          |   21
   \[d\]    |    100 % 26          |   22
   \[e\]    |     101 % 26          |   23
   \[f\]    |     102 % 26          |   24
   \[g\]    |     103 % 26          |   25
   \[h\]    |     104 % 26          |   0
   \[i\]    |     105 % 26          |   1
   \[j\]    |     106 % 26          |   2
   \[k\]    |     107 % 26          |   3
   \[l\]    |     108 % 26          |   4
   \[m\]    |     109 % 26          |   5
   \[n\]    |     110 % 26          |   6
   \[o\]    |     111 % 26          |   7
   \[p\]    |     112 % 26          |   8
   \[q\]    |     113 % 26          |   9
   \[r\]    |     114 % 26          |   10
   \[s\]    |     115 % 26          |   11
   \[t\]    |     116 % 26          |   12
   \[u\]    |     117 % 26          |   13
   \[v\]    |     118 % 26          |   14
   \[w\]    |     119 % 26          |   15
   \[x\]    |     120 % 26          |   16
   \[y\]    |     121 % 26          |   17
   \[z\]    |     122 % 26          |   18

These range values can then be used as shift/key/offset values in encrypt/decrypt cipher operations.
