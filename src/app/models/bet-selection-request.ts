import { Result } from "./result.enum";

export interface BetSelectionRequest {
    eventId: string;
    predictedResult: Result;
}