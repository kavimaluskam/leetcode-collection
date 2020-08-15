from typing import List

class Solution:
    def hIndex(self, citations: List[int]) -> int:
        size = len(citations)
        cache = [0] * (size)

        for citation in citations:
            if citation == 0:
                continue
            if citation > size:
                citation = size

            cache[citation - 1] += 1

        result = 0
        for i in reversed(range(size)):
            result += cache[i]

            if result >= i + 1:
                return i + 1

        return result
