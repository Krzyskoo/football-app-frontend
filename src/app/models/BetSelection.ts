export interface BetSelection{
id: number;
  event: {
    eventId: string;
    sportKey: string;
    sportTitle: string;
    startTime: string;
    homeTeam: string;
    awayTeam: string;
    homeTeamOdds: string;
    awayTeamOdds: string;
    status: string;
    completed: boolean;
  };
lockedOdds: number;
predictedResult: 'HOME_WIN' | 'AWAY_WIN' | 'DRAW';
isWon: boolean;
completed: boolean;


}