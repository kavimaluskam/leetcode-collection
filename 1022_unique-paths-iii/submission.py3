from typing import List

class Solution:
    def uniquePathsIII(self, grid: List[List[int]]) -> int:
        self.grid = grid
        self.result = 0
        self.number_of_zero = 0

        for i in range(len(grid)):
            for j in range(len(grid[i])):
                if grid[i][j] == 0:
                    self.number_of_zero += 1

        for i in range(len(grid)):
            for j in range(len(grid[i])):
                if grid[i][j] == 1:
                    self.dfs(i, j, 0)
        return self.result


    def dfs(self, i, j, step):
        if self.grid[i][j] == 2:
            if step == self.number_of_zero + 1:
                self.result += 1
            return


        if self.grid[i][j] in (0, 1):
            temp, self.grid[i][j] = self.grid[i][j], 999

            if i > 0:
                self.dfs(i - 1, j, step + 1)

            if j > 0:
                self.dfs(i, j - 1, step + 1)

            if i < len(self.grid) - 1:
                self.dfs(i + 1, j, step + 1)

            if j < len(self.grid[0]) - 1:
                self.dfs(i, j + 1, step + 1)

            self.grid[i][j] = temp

        return
