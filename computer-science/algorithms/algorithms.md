# Algorithms

## Types of algorithms

type | example use case
---- | ----------------
Compression algorithm | (video/audo streaming)
Route finding algorithm | Google maps directions
Rendering algorithm | Determine how to display the lightning in a 3D rendered object
Optimization & Scheduling algorithm | To arrange the solar panels in satellites
Minimax algorithms | Checkers

## Asymptotic Analysis

**Asymptotic Analyisis** is a technique evaluates an algorithm efficiency independently of the computer hardware, programming language, and input.

Measures how long does it take to compute *n* elements and how much does that time increases when the *n* input increases.

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

## Important authors

- Thomas Cormen
- Devin Balkom

### Search Algorithms

#### Binary Search Algorithm

Finds items from an ordered list.

##### Steps

- Divide half portion of the list that could contain the searched item.
- Repeat until narrow to one item.
