export  interface StoryNode {
  id: string;
  title: string;
  text: string;
  image?: string;
  choices?: Choice[];
  riddle?: Riddle;
  ending?: boolean;
  isMonsterEncounter?: boolean;
}

export interface Choice {
  text: string;
  nextNode: string;
}

export interface Riddle {
  question: string;
  answer: string;
  failNode: string;
  successNode: string;
}

export interface GameState {
  currentNodeId: string;
  visitedNodes: string[];
  riddleAnswer: string;
  showRiddleError: boolean;
}
 