class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
<<<<<<< HEAD
        r = 0
        d = {}
        for i in s:
            if i in d:
                r = max(r, len(d))
                while i in d:
                    del d[list(d.keys())[0]]

            d[i] = 0

        return max(r, len(d))
=======
        i = 0
        j = 0
        d = {}
        r = 0

        while j < len(s):
            t = s[j]

            if t in d:
                if d[t] >= i:
                    i = d[t] + 1

            r = max(r, j - i + 1)
            d[t] = j
            j += 1

        return r
>>>>>>> f468ac8f423e25024e3cd8733b8b55ac79999943
