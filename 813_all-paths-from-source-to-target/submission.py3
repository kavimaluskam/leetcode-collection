from typing import List

class Solution:
    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:
        self.graph = graph
        self.result = []
        start = [0]
        path = []

        self.dfs(start, path)

        return self.result

    def dfs(self, next_nodes, path):
        if next_nodes:
            for node in next_nodes:
                if node == len(self.graph) - 1:
                    self.result.append(path + [node])
                else:
                    self.dfs(self.graph[node], path + [node])
