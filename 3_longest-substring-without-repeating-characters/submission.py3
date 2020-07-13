class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        r = 0
        d = {}
        for i in s:
            if i in d:
                r = max(r, len(d))
                while i in d:
                    del d[list(d.keys())[0]]

            d[i] = 0

        return max(r, len(d))
