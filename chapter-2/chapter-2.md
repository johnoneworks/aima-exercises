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

Exercise 4
For each of the following assertions, say whether it is true or false and support your answer with examples or counterexamples where appropriate.
1. An agent that senses only partial information about the state cannot be perfectly rational.
2. There exist task environments in which no pure reflex agent can behave rationally.
3. There exists a task environment in which every agent is rational.
4. The input to an agent program is the same as the input to the agent function.
5. Every agent function is implementable by some program/machine combination.
6. Suppose an agent selects its action uniformly at random from the set of possible actions. There exists a deterministic task environment in which this agent is rational.
7. It is possible for a given agent to be perfectly rational in two distinct task environments.
8. Every agent is rational in an unobservable environment.
9. A perfectly rational poker-playing agent never loses.

Solution 4
1. False
    - Let's say the performance metric is to gather as much money from the ground as possible (greedy).
    - Then having only the partial infomation about is there money on the ground is needed
2. True
    - Let's say there is a reflex agent that jumps a meter when it spots a light (maybe it's a laser firing at it!)
    - Now say there are killer spikes in random places that occurs relatively more often than when lights are actually lasers and that the performance metric is to live
    - Now reflex agent will perform non-rationally
3. True
    - Chess, nuff said
4. True
    - According to definition, the agent program is the implementation of the agent function, so I would say it's a 1-to-1 mapping of inputs
5. False
    - Self driving, AGI and so on...
6. True
    - stupid example, but say there are to actions {A, B}, and both action will have the same performance measure, then random actions are rational
7. True
    - Use 6, but having different task environments that give same performace measures
8. False
    - Take an example of an agent with no sensors, but the performance measure is to not run into any thing, then a moving agent is not rational
9. False
    - Agent goes all in with AA then gets beat with no more chips to reload

Exercise 5 & 6
For each of the following activities, give a PEAS description of the task environment and characterize it in terms of the properties listed in Section 
- Playing soccer.
- Performing a gymnastics floor routine.
- Exploring the subsurface oceans of Titan.
- Shopping for used AI books on the Internet.
- Playing a tennis match.
- Practicing tennis against a wall.
- Performing a high jump.
- Knitting a sweater.
- Bidding on an item at an auction.

Solution 5 & 6
- Playing soccer
    - P: score more goals than opposing team
    - E: soccer field, opposing team location and motion, ball
    - A: humanoid? robot that can kick? the ball and move around
    - S: video cameras, lidar?
- Performing a gymnastics floor routine
    - P: scores according to gymnastic rules
    - E: gym floor, maybe items used for the performance
    - A: humanoid robot that can perform gymastic movements
    - S: video cameras
- Exploring the subsurface oceans of Titan
    - P: amount of "data" (I don't really know what are the important data for this) collected
    - E: ocean and all its glory
    - A: robotic vehicle that can move freely in the ocean
    - S: a bunch of sensors that we want data for
- Shopping for used AI books on the Internet
    - P: minimized price, maximized satisfaction
    - E: information on the internet
    - A: display screen capable of human input
    - S: Internet data tranceiver
- Playing a tennis match
    - P: win amount of sets needed before opponent does
    - E: tennis court, opposing player location and movement, ball
    - A: robotic vehicle that can use a racquet and move around
    - S: video cameras, lidar?
- Practicing tennis against a wall
    - P: having the rebound ball trajectory land within half court and hitting the ball within 1 bounce
    - E: wall, half-court, ball
    - A: robotic vehicle that can use a racquet and move around
    - S: video cameras, lidar?
- Performing a high jump
    - P: having agent clear the bar set for the height
    - E: valid field, bar for height
    - A: robotic vehicle that can jump (take off from ground and then after hitting max height, free fall and land?)
    - S: video cameras, lidar?
- Knitting a sweater
    - P: within a finite time stopping with a sweater that adheres to the size requirement
    - E: placment of needles, placement of thread(s), awareness of current progress
    - A: robotic mechanism for manipulating thread and needlework
    - S: video cameras, lidar?
- Bidding on an item at an auction (I am assuming live auction)
    - P: obtaining item of interest at the range of price (lowest when there are more than one option) within the allotted time frame
    - E: auction house, stage of display, auctioner
    - A: mechanics to participate in auction
    - S: video cameras, microphone