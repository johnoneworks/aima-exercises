/*
2. What about a reflex agent with state? Design such an agent.
 */

enum MAP_13_2 {
   A,
   B,
};

enum Status_13_2 {
   Clean,
   Dirty,
};

enum Action_13_2 {
   Suck,
   Right,
   Left,
   Wait,
   Undefined,
};

interface AgentState {
   timer: number;
};

function determineAction_13_2(environment : MAP_13_2, status: Status_13_2, agentState: AgentState) : Action_13_2 {
   const TIME_TO_WAIT = 10;
   if (status === Status_13_2.Dirty) {
      return Action_13_2.Suck;
   } else if (agentState.timer < TIME_TO_WAIT) {
      agentState.timer++;
      return Action_13_2.Wait;
   } else if (environment === MAP_13_2.A) {
      return Action_13_2.Right;
   } else if (environment === MAP_13_2.B) {
      return Action_13_2.Left;
   } else {
      return Action_13_2.Undefined;
   }
}