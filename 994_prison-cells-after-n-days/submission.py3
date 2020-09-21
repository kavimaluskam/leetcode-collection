from typing import List

class Solution:
    def prisonAfterNDays(self, cells: List[int], N: int) -> List[int]:
        cache = [cells]
        i = 0

        while i < N:
            pre = cache[i]
            i += 1

            new = [0,0,0,0,0,0,0,0]

            for j in range(1,7):
                if pre[j - 1] == pre[j + 1]:
                    new[j] = 1

            for j in range(len(cache)):
                if cache[j] == new:
                    period = i - j
                    return cache[j + (N - i) % period]

            cache.append(new)

        return cache.pop()
