/*
2. What about a reflex agent with state? Design such an agent.
 */

enum Environment {
   A,
   B,
};

enum Status {
   Clean,
   Dirty,
};

enum Action {
   Suck,
   Right,
   Left,
   Wait,
   Undefined,
};

interface AgentState {
   timer: number;
};

function determineAction(environment : Environment, status: Status, agentState: AgentState) : Action {
   const TIME_TO_WAIT = 10;
   if (status === Status.Dirty) {
      return Action.Suck;
   } else if (agentState.timer < TIME_TO_WAIT) {
      agentState.timer++;
      return Action.Wait;
   } else if (environment === Environment.A) {
      return Action.Right;
   } else if (environment === Environment.B) {
      return Action.Left;
   } else {
      return Action.Undefined;
   }
}