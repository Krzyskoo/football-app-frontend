import { BetSelectionRequest } from "./bet-selection-request";
export interface BetRequest {
    amount: number;
    selections: BetSelectionRequest[];
}