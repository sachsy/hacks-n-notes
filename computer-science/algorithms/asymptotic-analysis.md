# Asymptotic Analysis

**Asymptotic Analyisis** is a technique evaluates an algorithm efficiency independently of the computer hardware, programming language, and input.

We use asymptotic notation to express the rate of growth of an algorithm's running time in terms of the input size **n**.

For sake of simplicity, we drop the insignificant terms and the constant coefficients.

- eg. <code>n<sup>2</sup></code> instead of <code>n<sup>2</sup> + n + 100</code>
- Drop factors too eg. <code>n<sup>2</suo></code> instead of <code>6n<sup>2</sup></code>
- **No** need to express the speed of the algorithm in units of time (milliseconds, microseconds, etc).

Several forms of it: 
- big-Θ notation,
- big-O notation,
- and big-Ω notation.

So <code>Θ(n) == Θ(f(n))</code>

> When we use big-Θ notation, we're saying that we have an asymptotically tight bound on the running time. "Asymptotically" because it matters for only large values of n. "Tight bound" because we've nailed the running time to within a constant factor above and below. 

> — [Khan academy](https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/big-big-theta-notation)

<code>Θ(n<sup>0</sup>) == Θ(1)</code> which means that the algorithm will take the same amount of time, regardless the input size. For example, if you were given an array that is already sorted into increasing order and you had to find the minimum element, it would take constant time, since the minimum element must be at index 0.

<code>lgn == log<sub>2</sub>n</code> is the same thing. It's just a shorter way to write it.

## Big-Oh notations order from most eficient to least.

- <code>Θ(1)</code>
- <code>Θ(lgn)</code>
- <code>Θ(n)</code>
- <code>Θ(nlgn)</code>
- <code>Θ(n<sup>2</sup>)</code>
- <code>Θ(n<sup>2</sup>lgn)</code>
- <code>Θ(n<sup>3</sup>)</code>
- <code>Θ(2<sup>n</sup>)</code>
