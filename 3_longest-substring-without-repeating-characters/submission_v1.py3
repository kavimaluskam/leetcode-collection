class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        i = 0
        j = 0
        d = {}
        r = 0

        while j < len(s):
            if s[j] in d:
                del d[s[i]]
                i += 1

            else:
                d[s[j]] = 0
                j += 1
                r = max(r, j - i)

        return r
