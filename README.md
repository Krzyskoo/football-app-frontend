# Football App – Frontend

**Football App – Frontend** is a single-page application (SPA) that serves as the user interface for an online football betting platform. It allows users to register and log in, browse football matches with odds, place bets, and deposit funds. The frontend communicates with the FootballBetApp backend via a REST API to manage user accounts, transactions, and match data. This project demonstrates a modern web application built with Angular for portfolio showcase purposes.

## Features

- **User authentication**: Registration and login using JWT (JSON Web Token).
- **Match listing**: Browse upcoming football matches with teams, kickoff time, status, and betting odds. Filter by date or league.
- **Bet placement**: Select a match, choose an outcome, and place a wager at the displayed odds.
- **Fund deposits**: Integrate with a payment API (e.g., Stripe) to top up user balance.
- **User dashboard**: View current balance and access quick actions (e.g., make a deposit).
- **Developer experience**: Hot-reload in development mode for rapid feedback.

> **Note:** Administrative functions (e.g., adding matches, settling bets) are handled in the backend. This frontend focuses on the player-facing interface.

## Technologies

- **Angular 15+** (Angular CLI + Vite)  
- **TypeScript**  
- **Tailwind CSS** (utility-first styling)  
- **HTML5 & CSS3** (Flexbox/Grid)  
- **Angular HttpClient** for REST API integration  
- **HTTP Interceptor** for attaching JWT to requests  
- **NPM** (or **Yarn**) for package management  

## Prerequisites

- **Node.js** 18.x or newer  
- **npm** 8.x or newer (or **Yarn**)  
- **Angular CLI** (optional): `npm install -g @angular/cli`  
- **Modern browser** (Chrome, Firefox, Edge)  
- **FootballBetApp backend** running locally (Java 17+, Spring Boot, database)
## Backend

This frontend relies on the FootballBetApp backend:

Repository: https://github.com/Krzyskoo/FootballBetApp

Default port: 8080

Run: mvn spring-boot:run or via Docker (docker-compose up)

Ensure CORS is configured and API endpoints are accessible to the frontend.

## Installation

```bash
git clone https://github.com/Krzyskoo/football-app-frontend.git
cd football-app-frontend
npm install

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

By default, the frontend expects the backend API at http://localhost:8080. To change this, edit the environment files in src/environments/:

// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api'
};

