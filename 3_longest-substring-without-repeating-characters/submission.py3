class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        start_ptr = 0
        cache = {}

        i = 0
        result = 0

        while i < len(s):
            char = s[i]

            if char in cache:
                if cache[char] >= start_ptr:
                    start_ptr = cache[char] + 1

            result = max(result, i - start_ptr + 1)
            cache[char] = i
            i += 1

        return result
