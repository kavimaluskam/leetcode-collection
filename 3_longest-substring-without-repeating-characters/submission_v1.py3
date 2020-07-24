class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        start_ptr = 0
        cache = {}
        i = 0
        result = 0

        while i < len(s):
            if s[i] in cache:
                del cache[s[start_ptr]]
                start_ptr += 1

            else:
                cache[s[i]] = 0
                i += 1
                result = max(result, i - start_ptr)

        return result
