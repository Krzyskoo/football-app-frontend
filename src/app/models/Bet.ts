import { BetSelection } from "./BetSelection";

export interface Bet {
  betId: number;
  totalOdds: number;
  stake: number;
  status: string;
  winAmount: number;
  selections: BetSelection[];
  createdDt: string;
}
