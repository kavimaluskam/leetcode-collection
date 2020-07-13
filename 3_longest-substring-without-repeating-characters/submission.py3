class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
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
