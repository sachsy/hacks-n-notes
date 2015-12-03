# Asymptotic Analysis

**Asymptotic Analyisis** is a technique evaluates an algorithm efficiency independently of the computer hardware, programming language, and input.

We use asymptotic notation to express the rate of growth of an algorithm's running time in terms of the input size **n**.

For sake of simplicity, we drop the insignificant terms and the constant coefficients.

- eg. `n^2` instead of `n^2 + n + 100`
- Drop factors too eg. `n^2` instead of `6n^2`
- **No** need to express the speed of the algorithm in units of time (milliseconds, microseconds, etc).

Several forms of it: 
- big-Θ notation,
- big-O notation,
- and big-Ω notation.

So `Θ(n) == Θ(f(n))`

> When we use big-Θ notation, we're saying that we have an asymptotically tight bound on the running time. "Asymptotically" because it matters for only large values of n. "Tight bound" because we've nailed the running time to within a constant factor above and below.
[Khan academy](https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/big-big-theta-notation)

`Θ(n^0)` == `Θ(1)` which means that the algorithm will take the same amount of time, regardless the input size. For example, if you were given an array that is already sorted into increasing order and you had to find the minimum element, it would take constant time, since the minimum element must be at index 0.
