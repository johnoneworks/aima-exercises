/*
Implement a performance-measuring environment simulator for the vacuum-cleaner world depicted in Figure 2.8 and specified on page . 
Your implementation should be modular so that the sensors, actuators, and environment characteristics (size, shape, dirt placement, etc.) can be changed easily. 
(Note: for some choices of programming language and operating system there are already implementations in the online code repository.)
 */

/*
 function REFLEX-VACUUM-AGENT([location, status]) returns an action
    if status = Dirty then return Suck
    else if location = A then return Right
    else if location = B then return Left
 */

enum Environment {
   A = 0,
   B = 1,
};

enum Status {
   Clean = 0,
   Dirty = 1,
};

enum Action {
   Suck = 0,
   Right = 1,
   Left = 2,
   Undefined = 3,
};

function determineAction(environment : Environment, status: Status) : Action {
   if (status === Status.Dirty) {
      return Action.Suck;
   } else if (environment === Environment.A) {
      return Action.Right;
   } else if (environment === Environment.B) {
      return Action.Left;
   } else {
      return Action.Undefined;
   }
}