---
id: "797"
title: "All Paths From Source to Target"
url: "https://leetcode.com/problems/all-paths-from-source-to-target/description/"
tags:
- `Backtracking`
- `Depth-first Search`
- `Graph`
difficulty: Medium
acceptance: 78.1%
total-accepted: "91078"
total-submissions: "116612"
testcase-example: "[[1,2],[3],[3],[]]"
---

## Problem

<p>Given a directed&nbsp;acyclic graph (<strong>DAG</strong>) of <code>n</code> nodes labeled from 0 to n - 1,&nbsp;find all possible paths from node <code>0</code> to node <code>n - 1</code>, and return them in any order.</p>

<p>The graph is given as follows:&nbsp;<code>graph[i]</code> is a list of all nodes you can visit from node <code>i</code>&nbsp;(i.e., there is a directed edge from node <code>i</code> to node <code>graph[i][j]</code>).</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/09/28/all_1.jpg" style="width: 242px; height: 242px;" />
<pre>
<strong>Input:</strong> graph = [[1,2],[3],[3],[]]
<strong>Output:</strong> [[0,1,3],[0,2,3]]
<strong>Explanation:</strong> There are two paths: 0 -&gt; 1 -&gt; 3 and 0 -&gt; 2 -&gt; 3.
</pre>

<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/09/28/all_2.jpg" style="width: 423px; height: 301px;" />
<pre>
<strong>Input:</strong> graph = [[4,3,1],[3,2,4],[3],[4],[]]
<strong>Output:</strong> [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
</pre>

<p><strong>Example 3:</strong></p>

<pre>
<strong>Input:</strong> graph = [[1],[]]
<strong>Output:</strong> [[0,1]]
</pre>

<p><strong>Example 4:</strong></p>

<pre>
<strong>Input:</strong> graph = [[1,2,3],[2],[3],[]]
<strong>Output:</strong> [[0,1,2,3],[0,2,3],[0,3]]
</pre>

<p><strong>Example 5:</strong></p>

<pre>
<strong>Input:</strong> graph = [[1,3],[2],[3],[]]
<strong>Output:</strong> [[0,1,2,3],[0,3]]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == graph.length</code></li>
	<li><code>2 &lt;= n &lt;= 15</code></li>
	<li><code>0 &lt;= graph[i][j] &lt; n</code></li>
	<li><code>graph[i][j] != i</code> (i.e., there will be no self-loops).</li>
	<li>The input graph is <strong>guaranteed</strong> to be a <strong>DAG</strong>.</li>
</ul>

## Discussion

We can interpret this question as searching on graph, finding paths from the
same source node to the same target node. With different format of graphs,
this problem is providing graph based on `Adjacency List`. DFS should
be a good solution for this problem.

### Solution

We perform DFS on the starting node `0`, and search for all on-going edges down
to the end node `graph.length - 1`. And as the graph is given as acyclic, there
is no validation required on the paths. As long as the paths converges at the
end node. We include the path into our result.

```py3
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
```

### Complexity Analysis

- Time Complexity: `O(V + E)`, for DFS in a graph, wheres `V` is number of nodes
  and `E` is the number of edges.

- Space Complexity: `O(V * E)`, for the result set in memory, which the number
  is determined by the number of edges, while the size is determined by the
  number of vertex.
