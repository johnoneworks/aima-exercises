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

enum MAP_11 {
   A = 0,
   B = 1,
};

enum Status_11 {
   Clean = 0,
   Dirty = 1,
};

enum Action_11 {
   Suck = 0,
   Right = 1,
   Left = 2,
   Undefined = 3,
};

function determineAction_11(environment : MAP_11, status: Status_11) : Action_11 {
   if (status === Status_11.Dirty) {
      return Action_11.Suck;
   } else if (environment === MAP_11.A) {
      return Action_11.Right;
   } else if (environment === MAP_11.B) {
      return Action_11.Left;
   } else {
      return Action_11.Undefined;
   }
}