# [813] All Paths From Source to Target

<https://leetcode.com/problems/all-paths-from-source-to-target/description/>

- Tags: 

- Difficulty: Medium

- Source Code: [./submission.py3](./submission.py3)

- Acceptance: 75.5%

- Total Accepted: 59636

- Total Submissions: 78982

- Testcase Example: [[1,2],[3],[3],[]]

## Description

<p>Given a directed, acyclic graph of <code>N</code> nodes.&nbsp; Find all possible paths from node <code>0</code> to node <code>N-1</code>, and return them in any order.</p>

<p>The graph is given as follows:&nbsp; the nodes are 0, 1, ..., graph.length - 1.&nbsp; graph[i] is a list of all nodes j for which the edge (i, j) exists.</p>

<pre>
<strong>Example:</strong>
<strong>Input:</strong> [[1,2], [3], [3], []] 
<strong>Output:</strong> [[0,1,3],[0,2,3]] 
<strong>Explanation:</strong> The graph looks like this:
0---&gt;1
|    |
v    v
2---&gt;3
There are two paths: 0 -&gt; 1 -&gt; 3 and 0 -&gt; 2 -&gt; 3.
</pre>

<p><strong>Note:</strong></p>

<ul>
	<li>The number of nodes in the graph will be in the range <code>[2, 15]</code>.</li>
	<li>You can print different paths in any order, but you should keep the order of nodes inside one path.</li>
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

### Complexity Analysis

- Time Complexity: `O(V+E)`, for DFS in a graph, wheres `V` is number of nodes
  and `E` is the number of edges.

- Space Complexity: `O(V * E)`, for the result set in memory, which the number
  is determined by the number of edges, while the size is determined by the
  number of vertex.
