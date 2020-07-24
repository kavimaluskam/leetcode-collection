class Solution:
    def plusOne(self, digits):
        carry = 1
        i = len(digits) - 1

        while carry and i > -1:
            temp = digits[i] + carry
            digits[i] = temp % 10
            carry = temp // 10
            i -= 1

        if carry == 1:
            digits = [1] + digits

        return digits
