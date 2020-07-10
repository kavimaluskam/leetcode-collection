class Solution:
    def plusOne(self, digits):
        c = 1
        i = len(digits) - 1

        while c and i > -1:
            t = digits[i] + c
            digits[i] = t % 10
            c = t // 10
            i -= 1

        if c == 1:
            digits = [1] + digits

        return digits
