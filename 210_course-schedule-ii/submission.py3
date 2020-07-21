class Solution:
    def findOrder(self, numCourses, prerequisites):
        self.V = [False] * numCourses
        ordering = [-1] * numCourses
        self.visited_nodes = []

        i = numCourses - 1

        for ptr in range(numCourses):
            if self.V[ptr] == False:

                cycle = self.dfs(ptr, prerequisites)
                if cycle:
                    return []

                while self.visited_nodes:
                    node = self.visited_nodes.pop()

                    ordering[i] = node
                    i -= 1

        return ordering

    def dfs(self, ptr, prerequisites):
        self.V[ptr] = True
        self.visited_nodes.append(ptr)

        for edge in prerequisites:
            if edge[1] == ptr:
                print(self.visited_nodes)
                if edge[0] in self.visited_nodes:
                    return True

                if self.V[edge[0]] == False:
                    if self.dfs(edge[0], prerequisites):
                        return True

# print(f"result: {Solution().findOrder(2, [[1, 0], [0, 1]])}")
print(Solution().findOrder(4, [[1,0],[2,0],[3,1],[3,2]]))