class Solution:
    def arrangeCoins(self, n: int) -> int:
        head = 0
        tail = n

        while head <= tail:
            ptr = (tail + head) // 2
            temp = ptr * (ptr + 1) / 2

            if temp == n:
                return ptr

            elif temp < n:
                head = ptr + 1

            elif temp > n:
                tail = ptr - 1

        return tail
