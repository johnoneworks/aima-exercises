/*
2. What about a reflex agent with state? Design such an agent.
 */

interface Square_14_2 {
   row: number;
   column: number;
   status: Status_14_2;
}

interface Map_14_2 {
   squares: Square_14_2[];
}

enum Status_14_2 {
   Clean,
   Dirty,
   Obstacle,
};

enum Action_14_2 {
   Suck,
   Right,
   Left,
   Up,
   Down,
   Wait,
   Undefined,
};

function determineAction_14_2(agentSquare: Square_14_2): Action_14_2 {
   switch (agentSquare.status) {
      case Status_14_2.Dirty:
         return Action_14_2.Suck;
      case Status_14_2.Clean:
         // I am just going dirty
         const action = Math.floor(Math.random() * 4);
         switch (action) {
            case 0:
               return Action_14_2.Right;
            case 1:
               return Action_14_2.Left;
            case 2:
               return Action_14_2.Up;
            case 3:
               return Action_14_2.Down;
            default:
               // shouldn't get here
               return Action_14_2.Undefined;
         }

      default:
         // shouldn't get here
         return Action_14_2.Undefined;
   }
}

function contructMap_14_2(data): Map_14_2 {
   let map;
   map.squares = [];
   for (let i = 0; i < data.length; i++) {
      let square;
      square.row = data[i][0];
      square.column = data[i][1];
      switch (data[i][2]) {
         case 0:
            square.status = Status_14_2.Clean;
            break;
         case 1:
            square.status = Status_14_2.Dirty;
            break;
         case 2:
            square.status = Status_14_2.Obstacle;
            break;
         default:
            break;
      }
      map.squares.push(square);
   }

   return map;
}

function isMissionAccomplished_14_2(map) {
   for (let i = 0; i < map.squares.length; i++) {
      if (map.squares[i][2] === Status_14_2.Dirty) {
         return true;
      }
   }
   return false;
}

const map = contructMap_14_2([
   [0, 0, 1], [0, 1, 0],
   [1, 0, 2], [1, 1, 1]
]);

function findSquareIndex_14_2(map: Map_14_2, row, column) {
   for (let i = 0; i < map.squares.length; i++) {
      if (map.squares[i][0] === row && map.squares[i][1] === column) {
         return i;
      }
   }
   return -1;
}

let agentSquare = map.squares[0];
let cost = 0;
while (!isMissionAccomplished_14_2(map)) {
   cost++;
   const action = determineAction_14_2(agentSquare);
   /*
      Suck,
      Right,
      Left,
      Up,
      Down,
    */
   
   switch (action) {
      case Action_14_2.Suck:
         let index = findSquareIndex_14_2(map, agentSquare.row, agentSquare.column);
         map.squares[index].status = Status_14_2.Clean;
         break;
      case Action_14_2.Right:
         index = findSquareIndex_14_2(map, agentSquare.row, agentSquare.column + 1);
         if (index !== -1) {
            if (map.squares[index][2] === Status_14_2.Obstacle) {
               break;
            } else {
               agentSquare = map.squares[index];
            }
         }
         break;
      case Action_14_2.Left:
         index = findSquareIndex_14_2(map, agentSquare.row, agentSquare.column - 1);
         if (index !== -1) {
            if (map.squares[index][2] === Status_14_2.Obstacle) {
               break;
            } else {
               agentSquare = map.squares[index];
            }
         }
         break;
      case Action_14_2.Up:
         index = findSquareIndex_14_2(map, agentSquare.row - 1, agentSquare.column);
         if (index !== -1) {
            if (map.squares[index][2] === Status_14_2.Obstacle) {
               break;
            } else {
               agentSquare = map.squares[index];
            }
         }
         break;
      case Action_14_2.Down:
         index = findSquareIndex_14_2(map, agentSquare.row + 1, agentSquare.column);
         if (index !== -1) {
            if (map.squares[index][2] === Status_14_2.Obstacle) {
               break;
            } else {
               agentSquare = map.squares[index];
            }
         }
         break;
      // should not get here
      default:
         break;
   }
}
