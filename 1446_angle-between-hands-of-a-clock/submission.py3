class Solution:
    def angleClock(self, hour: int, minutes: int) -> float:
        deg_m = minutes * 6
        deg_h = (hour % 12)* 30 + minutes * 0.5

        result = min(abs(deg_h - deg_m), abs(deg_m - deg_h))

        return min(result, 360 - result)

print(Solution().angleClock(1, 57))