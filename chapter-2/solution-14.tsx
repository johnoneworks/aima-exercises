/*
2. What about a reflex agent with state? Design such an agent.
 */

enum MAP_14 {
   A,
   B,
};

enum Status_14 {
   Clean,
   Dirty,
};

enum Action_14 {
   Suck,
   Right,
   Left,
   Wait,
   Undefined,
};

interface AgentState_14 {
   timer: number;
};

function determineAction_14(environment : MAP_14, status: Status_14, agentState: AgentState_14) : Action_14 {
   const TIME_TO_WAIT = 10;
   if (status === Status_14.Dirty) {
      return Action_14.Suck;
   } else if (agentState.timer < TIME_TO_WAIT) {
      agentState.timer++;
      return Action_14.Wait;
   } else if (environment === MAP_14.A) {
      return Action_14.Right;
   } else if (environment === MAP_14.B) {
      return Action_14.Left;
   } else {
      return Action_14.Undefined;
   }
}