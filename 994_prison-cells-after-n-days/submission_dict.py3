class Solution:
    def prisonAfterNDays(self, cells: List[int], N: int) -> List[int]:
        i = 0
        cache = {
            ','.join(str(x) for x in cells): i
        }
        pre = cells

        while i < N:
            i += 1
            new = [0,0,0,0,0,0,0,0]

            for j in range(1,7):
                if pre[j - 1] == pre[j + 1]:
                    new[j] = 1

            if ','.join(str(x) for x in new) in cache:
                j = cache.get(','.join(str(x) for x in new))
                period = i - j
                for snap, day in cache.items():
                    if day == j + (N - i) % period:
                        return [int(x) for x in snap.split(',')]

            cache[','.join(str(x) for x in new)] = i
            pre = new

        return new
