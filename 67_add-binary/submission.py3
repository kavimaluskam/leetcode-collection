class Solution:
    def addBinary(self, a: str, b: str) -> str:
        result = ''
        is_carry_exist = False

        size_a, size_b = len(a), len(b)
        n = max(size_a, size_b)

        for i in range(n):
            val_a = a[size_a - i - 1] if size_a > i else '0'
            val_b = b[size_b - i - 1] if size_b > i else '0'

            if val_a == val_b:
                if is_carry_exist:
                    result = '1' + result
                else:
                    result = '0' + result

                is_carry_exist = (val_a == '1' and val_b == '1')

            if val_a != val_b:
                if is_carry_exist:
                    result = '0' + result
                else:
                    result = '1' + result

        if is_carry_exist:
            result = '1' + result

        return result
