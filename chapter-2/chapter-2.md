Exercise 1
Suppose that the performance measure is concerned with just the first T
 time steps of the environment and ignores everything thereafter. Show that a rational agent’s action may depend not just on the state of the environment but also on the time step it has reached.

 Solution 1
 Suppose we have an environment with two squares A & B for our agent to land on, and the performance measure is to have give the agent points when it is on A when T is odd, and B when T is even.

 Exercise 2
 Let us examine the rationality of various vacuum-cleaner agent functions.
1. Show that the simple vacuum-cleaner agent function described in Figure 2.3 is indeed rational under the assumptions listed on page 
2. Describe a rational agent function for the case in which each movement costs one point. Does the corresponding agent program require internal state?
3. Discuss possible agent designs for the cases in which clean squares can become dirty and the geography of the environment is unknown. Does it make sense for the agent to learn from its experience in these cases? If so, what should it learn? If not, why not?

Solution 2
1. 
    - From the table, we see that when agent is on dirty square, it sucks
    - From the table, we see that when agent is on clean square, it moves
    => so, the result is an agent that cleans then moves to another square and then repeats in patrolling when all squares are clean
2. I think Figure 2.3 still is optimal, under the assumption that dust occurs randomly and that the goal is to maximize the duration of both squares being clean. In this case, internal state is not needed.
3. It makes sense to learn from experience in these cases. Some of what it should learn:
    - the geography of the environment
    - the pattern of how squares get dirty

Exercise 3
Write an essay on the relationship between evolution and one or more of autonomy, intelligence, and learning.

Solution 3
Evolution is essentially a description of the rules for automaticlly adjusting to enhance the chance of surviving. I think intelligence and learning are just by products of evolution, where it happens that having intelligence and learning ability increased the chance of survival.