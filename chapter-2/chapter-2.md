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

Exercise 7
Define in your own words the following terms: agent, agent function, agent program, rationality, autonomy, reflex agent, model-based agent, goal-based agent, utility-based agent, learning agent.

Solution 7
- agent: an entity that interacts with the defined environment
- agent function: the set inputs to the sensors with corresponsding actions that the agent will perform
- agent program: a program that implements the agent function
- rationality: the ability to decide and choose actions that leads to the best possible result
- autonomy: the ability to function on its own (totally different than what's on the text book...XD)
    - not depending on preset rules and settings, but being able to derive its own decision (by learning and adjusting)
- reflex agent: agents that perform actions on hardcoded rules (wrong on this one as well)
    - an agent that only depends on the current precept and not the history
- model-based agent: agent that models a concept so that it acts according to the conditions of the model
    - should emphasize that it the model refers to the environment
- goal-based agent: agent that has a goal being set and acts according to end in that goal
- utility-based agent: a fine-grained version of the goal-based agent, where the goal is replaced with a set of utility measures, where the agent tries to maximize the total utility
- learning agent: agent that uses results from actions that readjusts their agent program

Exercise 8
This exercise explores the differences between agent functions and agent programs.
1. Can there be more than one agent program that implements a given agent function? Give an example, or show why one is not possible.
2. Are there agent functions that cannot be implemented by any agent program?
3. Given a fixed machine architecture, does each agent program implement exactly one agent function?
4. Given an architecture with n
 bits of storage, how many different possible agent programs are there?
5. Suppose we keep the agent program fixed but speed up the machine by a factor of two. Does that change the agent function?

Solution 8
1. Yes, example, one in Javascript, one in C#
2. I would assume yes, example, an agent function that does impossible things, i.e. input clap of hand -> output become god
3. No, i.e., function #1 returns true for input 1 but false for input 2; function #2 returns true for input 1 but false for input 2 & 3.
4. I think it's infinity, as there should be agent programs that don't need storage, assuming that we are not counting the storage needed for the agent program itself
5. No, unless there are time contraints on the precept and actions. I.e. an action "needs" 2 hours to finish, then you can't speed it to 1 hour

Exercise 9
Write pseudocode agent programs for the goal-based and utility-based agents.

Solution 9
- goal-based
    function GOAL-BASED-AGENT(percept) returns an action
        persistent: 
            state, the agent's current conception of the world state
            transition_model, a description of how the next state depends on the current state and action
            sensor_model, a description of how the current world state is reflected in the agent's percepts
            goal, the goal of the agent
            action, the most recent action, initially none

        state <- UPDATE-STATE(state, action, percept, transition_model, sensor_model)
        action <- CHOOSE-ACTION(goal, state, transition_model)
        return action
- utility-based
    function UTILITY-BASED-AGENT(percept) returns an action
        persistent:
            state, the agent's current conception of the world state
            transition_model, a description of how the next state depends on the current state and action
            sensor_model, a description of how the current world state is reflected in the agent's percepts
            utility_model, a description of the utility tradeoffs for the "happiest" expected result
            action, the most recent action, initially none

        state <- UPDATE-STATE(state, action, percept, transition_model, sensor_model)
        action <- CHOOSE-ACTION(utility_model, state, transition_model)
        return action

Exercise 10
Consider a simple thermostat that turns on a furnace when the temperature is at least 3 degrees below the setting, and turns off a furnace when the temperature is at least 3 degrees above the setting. Is a thermostat an instance of a simple reflex agent, a model-based reflex agent, or a goal-based agent?

Solution 10
Reflex, since no previous percept is needed

Exercise 11
Implement a performance-measuring environment simulator for the vacuum-cleaner world depicted in Figure 2.8 and specified on page . Your implementation should be modular so that the sensors, actuators, and environment characteristics (size, shape, dirt placement, etc.) can be changed easily. (Note: for some choices of programming language and operating system there are already implementations in the online code repository.)

Solution 11
See solution-11.tsx

Exercise 12
Implement a simple reflex agent for the vacuum environment in Exercise 2.10. Run the environment with this agent for all possible initial dirt configurations and agent locations. Record the performance score for each configuration and the overall average score.

Solution 12
Problem with Exercise 10, doesn't make sense and I'm too lazy to come up with my own problem...

Exercise 13
Consider a modified version of the vacuum environment in Exercise 2.10, in which the agent is penalized one point for each movement.
1. Can a simple reflex agent be perfectly rational for this environment? Explain.
2. What about a reflex agent with state? Design such an agent.
3. How do your answers to 1 and 2 change if the agent’s percepts give it the clean/dirty status of every square in the environment?

Solution 13
Still some problems with Exercise 10
1. Under the condition that dirt appears after being cleaned, then yes. That's because, it makes rational sense to travel (maybe after a timeout) to another square to check if it's dirty
2. See soultion-13-2.tsx
3. If the status of all squares is given, then the agent doesn't need to wait

Exercise 14
Consider a modified version of the vacuum environment in Exercise 2.10, in which the geography of the environment—its extent, boundaries, and obstacles—is unknown, as is the initial dirt configuration. (The agent can go Up and Down as well as Left and Right.)
1. Can a simple reflex agent be perfectly rational for this environment? Explain.
2. Can a simple reflex agent with a randomized agent function outperform a simple reflex agent? Design such an agent and measure its performance on several environments.
3. Can you design an environment in which your randomized agent will perform poorly? Show your results.
4. Can a reflex agent with state outperform a simple reflex agent? Design such an agent and measure its performance on several environments. Can you design a rational agent of this type?

Solution 14
1. I don't think so, as there is no way to systematically make sure that all empty spaces are traversed
2. Yes, see solution-14-2.tsx
3. Yes, let's place agent in a position where there are obstacles in all four directions. Then randomized agents will perform worse
4. Yes, with state, the reflex agent can eliminate unwanted moves.