class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        result = 0
        cache = {}

        for i in s:
            if i in cache:
                result = max(result, len(cache))
                while i in cache:
                    del cache[list(cache.keys())[0]]

            cache[i] = 0

        return max(result, len(cache))
