export interface BetSelectionDetailed {
  eventId: string;
  homeTeam: string;
  awayTeam: string;
  predictedResult: 'HOME_WIN' | 'AWAY_WIN' | 'DRAW';
  lockedOdds: number;
}