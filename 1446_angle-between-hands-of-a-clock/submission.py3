class Solution:
    def angleClock(self, hour: int, minutes: int) -> float:
        deg_m = minutes * 6
        deg_h = (hour % 12)* 30 + minutes * 0.5

        result = abs(deg_h - deg_m)

        return min(result, 360 - result)
