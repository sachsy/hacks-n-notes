# Asymptotic Analysis

The **Asymptotic Analysis** is a technique to check the efficiency from an algorithm. It doesn't take into account the computer hardware, programming language, or input.

We use asymptotic notation to express the rate of growth of an algorithm's running time for the input size **n**.

For sake of simplicity, we drop the insignificant terms and the constant coefficients.

- eg. $$n^2$$ instead of $$n^2 + n + 100$$
- Drop factors too eg. $$n_2$$ instead of $$6n^2$$
- **No** need to express the speed of the algorithm in units of time (milliseconds, microseconds, etc).

Several forms of it: 
- `big-Θ` notation,
- `big-O` notation,
- and `big-Ω` notation.

So `Θ(n) == Θ(f(n))`

> When we use big-Θ notation, we're saying that we have an asymptotically tight bound on the running time. "Asymptotically" because it matters for only large values of n. "Tight bound" because we've nailed the running time to within a constant factor above and below. 

> — [Khan academy](https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/big-big-theta-notation)

Θ$$(n^0)$$ == Θ(1) which means that the algorithm will take the same amount of time, regardless the input size. For example, to find the smallest element in a sorted array (ASC). It would take constant time, since the smallest element must be at index 0.

$$lgn == log_2n$$ Is the same thing. It's just a shorter way to write it.

## Big-Theta notations order from most eficient to least.

- Θ(1)
- Θ(lg n)
- Θ(n)
- Θ(n·lg n)
- Θ($$n^2$$)
- Θ($$n^2$$lg n)
- Θ($$n^3$$)
- Θ($$2^n$$)

## Big-O is not the same as Big-Theta

Big-Theta expresses function growth by a simplified version of $$f(n)$$ and it describes upper and lower bounds.

In contrast, Big-O considers upper bound (worst case scenario). Might be imprecise but it is useful for large values of $$n$$.

## Wait, what? There is also Big-Omega

Ok so which is the difference among these notations?

Notation | Synonym | Bounds
-------- | ------------ | ------
Big-Θ | Big-Theta | lower and upper bounds
Big-O | Big-O | Upper bounds
Big-Ω | Big-Omega | Lower bounds
