# [1446] Angle Between Hands of a Clock

<https://leetcode.com/problems/angle-between-hands-of-a-clock/description/>

- Tags: `Math`

- Difficulty: Medium

- Source Code: [./submission.py3](./submission.py3)

- Acceptance: 62.0%

- Total Accepted: 23881

- Total Submissions: 38518

- Testcase Example: 12\n30

## Description

<p>Given two numbers, <code>hour</code> and <code>minutes</code>. Return the smaller angle (in degrees) formed between the <code>hour</code> and the <code>minute</code> hand.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2019/12/26/sample_1_1673.png" style="width: 230px; height: 225px;" /></p>

<pre>
<strong>Input:</strong> hour = 12, minutes = 30
<strong>Output:</strong> 165
</pre>

<p><strong>Example 2:</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2019/12/26/sample_2_1673.png" style="width: 230px; height: 225px;" /></p>

<pre>
<strong>Input:</strong> hour = 3, minutes = 30
<strong>Output:</strong> 75
</pre>

<p><strong>Example 3:</strong></p>

<p><strong><img alt="" src="https://assets.leetcode.com/uploads/2019/12/26/sample_3_1673.png" style="width: 230px; height: 225px;" /></strong></p>

<pre>
<strong>Input:</strong> hour = 3, minutes = 15
<strong>Output:</strong> 7.5
</pre>

<p><strong>Example 4:</strong></p>

<pre>
<strong>Input:</strong> hour = 4, minutes = 50
<strong>Output:</strong> 155
</pre>

<p><strong>Example 5:</strong></p>

<pre>
<strong>Input:</strong> hour = 12, minutes = 0
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= hour &lt;= 12</code></li>
	<li><code>0 &lt;= minutes &lt;= 59</code></li>
	<li>Answers within&nbsp;<code>10^-5</code>&nbsp;of the actual value will be accepted as correct.</li>
</ul>

## Discussion

Solving this, we first have the fact that there is 12 hours and 60 minutes on a
clock. Thus, degree (from 00:00) of minute would be `minutes * (360/60)`, and
degree of hour would be `hours * (360/12) + minutes * (360/60/12)`. Finally we
take the absolute value of the degrees' difference.

There are two more tricky points:

1. Consider hours >= 12

1. Consider degree between the two hands always small than 180. Thus we choose
the opposite angle when the value > 180.