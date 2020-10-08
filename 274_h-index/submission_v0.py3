from typing import List

class Solution:
    def hIndex(self, citations: List[int]) -> int:
        citations = sorted(citations, reverse=True)
        i = 0
        while i < len(citations):
            if citations[i] >= i + 1:
                i += 1
            else:
                break
        return i
