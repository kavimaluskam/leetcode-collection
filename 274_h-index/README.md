# [274] H-Index

<https://leetcode.com/problems/h-index/description/>

- Tags: `Hash Table`, `Sort`

- Diffculty: Medium

- Source Code: [./submission.py3](./submission.py3)

- Acceptance: 36.1%

- Total Accepted: 169735

- Total Submissions: 470274

- Testcase Example: [3,0,6,1,5]

## Description

<p>Given an array of citations (each citation is a non-negative integer) of a researcher, write a function to compute the researcher&#39;s h-index.</p>

<p>According to the <a href="https://en.wikipedia.org/wiki/H-index" target="_blank">definition of h-index on Wikipedia</a>: &quot;A scientist has index <i>h</i> if <i>h</i> of his/her <i>N</i> papers have <b>at least</b> <i>h</i> citations each, and the other <i>N &minus; h</i> papers have <b>no more than</b> <i>h</i> citations each.&quot;</p>

<p><b>Example:</b></p>

<pre>
<b>Input:</b> <code>citations = [3,0,6,1,5]</code>
<b>Output:</b> 3 
<strong>Explanation: </strong><code>[3,0,6,1,5] </code>means the researcher has <code>5</code> papers in total and each of them had 
             received <code>3, 0, 6, 1, 5</code> citations respectively. 
&nbsp;            Since the researcher has <code>3</code> papers with <b>at least</b> <code>3</code> citations each and the remaining 
&nbsp;            two with <b>no more than</b> <code>3</code> citations each, her h-index is <code>3</code>.</pre>

<p><strong>Note:&nbsp;</strong>If there are several possible values for <em>h</em>, the maximum one is taken as the h-index.</p>

## Discussion

The question requires us to find `h` smaller than `n` such that, there is
**at least** `h` values in the list larger than `h`.

As suggested from leetcode hints, one easy solution would be sorting the input
list. Then search from the larger integer side and stop when the value is
smaller then the index, we get `h`.

Instead of sorting algorithm which gives time complexity of `O(n log(n))`, we
can make use of the fact `h` is smaller than `n`. We create a hash list with size
`n`, then save a count collection with value later than `n` ceiled at `n`.
Then searching in the hash list would be give the result.

### Trial 1

[Trial 1](./submission_v0.py3) gives a straight forward solution based on
sorting. Then we can iterate from the larger integer side. Check for the
value the begins to be smaller than the iterate index and imply return it.

### Solution

[The final solution](./submission.py3) gives a faster solution without sorting,
and of course with larger space. First we setup a list of size `n` for saving
the counts. Then we iterate through the input list and add the counts to the
list. For values larger than `n` we just add the counts to `n` instead.

Then, we can iterate through the cache list from the larger size, and summing
the counts. We break the iteration as long as the result is larger than the
index and result the result, stating the total counts.

### Complexity Analysis

- Time Complexity: `O(n)`, as only two iteration is involved.

- Space Complexity: `O(n)`, as we only maintain the collection list of size `n`.
