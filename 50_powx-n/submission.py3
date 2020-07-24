class Solution:
    def myPow(self, x: float, n: int) -> float:
        if n == 0:
            return 1

        if n < 0:
            return self.myPow(1/x, -n)

        if n % 2 == 0:
            t = self.myPow(x, n//2)
            return t * t

        if n % 2 == 1:
            t = self.myPow(x, n//2)
            return t * t * x
