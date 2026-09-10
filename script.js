// Sample soccer matches with odds
const matches = [
    {
        id: 1,
        homeTeam: "Manchester United",
        awayTeam: "Liverpool",
        time: "2025-09-15 15:00",
        league: "Premier League",
        odds: {
            home: 2.45,
            draw: 3.50,
            away: 2.80
        }
    },
    {
        id: 2,
        homeTeam: "Real Madrid",
        awayTeam: "Barcelona",
        time: "2025-09-16 20:30",
        league: "La Liga",
        odds: {
            home: 2.10,
            draw: 3.80,
            away: 3.40
        }
    },
    {
        id: 3,
        homeTeam: "Bayern Munich",
        awayTeam: "Borussia Dortmund",
        time: "2025-09-17 19:30",
        league: "Bundesliga",
        odds: {
            home: 1.85,
            draw: 3.90,
            away: 4.20
        }
    },
    {
        id: 4,
        homeTeam: "PSG",
        awayTeam: "Marseille",
        time: "2025-09-18 20:00",
        league: "Ligue 1",
        odds: {
            home: 1.65,
            draw: 4.00,
            away: 5.00
        }
    },
    {
        id: 5,
        homeTeam: "AC Milan",
        awayTeam: "Inter Milan",
        time: "2025-09-19 18:00",
        league: "Serie A",
        odds: {
            home: 2.35,
            draw: 3.45,
            away: 2.95
        }
    },
    {
        id: 6,
        homeTeam: "Chelsea",
        awayTeam: "Arsenal",
        time: "2025-09-20 16:30",
        league: "Premier League",
        odds: {
            home: 2.20,
            draw: 3.60,
            away: 3.10
        }
    }
];

let userBalance = 1000;
let selectedBet = null;

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadMatches();
    updateBalance();
});

// Load and display matches
function loadMatches() {
    const container = document.getElementById('matchesContainer');
    container.innerHTML = '';

    matches.forEach(match => {
        const card = createMatchCard(match);
        container.appendChild(card);
    });
}

// Create a match card element
function createMatchCard(match) {
    const card = document.createElement('div');
    card.className = 'match-card';
    card.innerHTML = `
        <div class="match-header">
            <div class="match-time">${formatDate(match.time)}</div>
            <div class="match-league">${match.league}</div>
        </div>
        
        <div class="match-teams">
            <div class="team">
                <div class="team-name">${match.homeTeam}</div>
            </div>
            <div class="vs">vs</div>
            <div class="team">
                <div class="team-name">${match.awayTeam}</div>
            </div>
        </div>

        <div class="odds-grid">
            <button class="odds-button" onclick="openBetModal(${match.id}, 'home', ${match.odds.home})">
                <span class="odds-label">Home</span>
                <span class="odds-value">${match.odds.home.toFixed(2)}</span>
            </button>
            <button class="odds-button" onclick="openBetModal(${match.id}, 'draw', ${match.odds.draw})">
                <span class="odds-label">Draw</span>
                <span class="odds-value">${match.odds.draw.toFixed(2)}</span>
            </button>
            <button class="odds-button" onclick="openBetModal(${match.id}, 'away', ${match.odds.away})">
                <span class="odds-label">Away</span>
                <span class="odds-value">${match.odds.away.toFixed(2)}</span>
            </button>
        </div>
    `;
    return card;
}

// Open bet placement modal
function openBetModal(matchId, outcome, odds) {
    const match = matches.find(m => m.id === matchId);
    if (!match) return;

    selectedBet = {
        matchId,
        outcome,
        odds,
        homeTeam: match.homeTeam,
        awayTeam: match.awayTeam
    };

    // Update modal content
    const outcomeLabel = {
        home: match.homeTeam + ' Win',
        draw: 'Draw',
        away: match.awayTeam + ' Win'
    };

    document.getElementById('betDetails').innerHTML = `
        <strong>${match.homeTeam} vs ${match.awayTeam}</strong><br>
        <small>${match.league}</small><br><br>
        <strong>Selection:</strong> ${outcomeLabel[outcome]}<br>
        <strong>Odds:</strong> ${odds.toFixed(2)}
    `;

    document.getElementById('selectedOdds').textContent = odds.toFixed(2);

    // Show modal
    document.getElementById('betModal').classList.add('show');

    // Setup stake calculation
    document.getElementById('stakeInput').oninput = calculatePayout;
}

// Close bet modal
function closeBetModal() {
    document.getElementById('betModal').classList.remove('show');
    document.getElementById('stakeInput').value = 10;
    selectedBet = null;
}

// Calculate potential payout
function calculatePayout() {
    if (!selectedBet) return;

    const stake = parseFloat(document.getElementById('stakeInput').value) || 0;
    const payout = (stake * selectedBet.odds).toFixed(2);
    document.getElementById('potentialPayout').textContent = `$${payout}`;
}

// Place a bet
function placeBet() {
    if (!selectedBet) return;

    const stake = parseFloat(document.getElementById('stakeInput').value);

    // Validation
    if (isNaN(stake) || stake <= 0) {
        alert('Please enter a valid stake amount');
        return;
    }

    if (stake > userBalance) {
        alert('Insufficient balance! You have $' + userBalance.toFixed(2));
        return;
    }

    // Deduct stake from balance
    userBalance -= stake;
    updateBalance();

    // Close modal
    closeBetModal();

    // Show success message
    const payout = (stake * selectedBet.odds).toFixed(2);
    showSuccessMessage(`Bet placed! Stake: $${stake.toFixed(2)} | Potential Payout: $${payout}`);

    // Store bet in localStorage
    storeBet(selectedBet, stake, payout);
}

// Store bet in localStorage
function storeBet(bet, stake, payout) {
    let bets = JSON.parse(localStorage.getItem('userBets')) || [];
    bets.push({
        ...bet,
        stake,
        payout,
        timestamp: new Date().toLocaleString(),
        id: Date.now()
    });
    localStorage.setItem('userBets', JSON.stringify(bets));
}

// Update balance display
function updateBalance() {
    document.getElementById('userBalance').textContent = '$' + userBalance.toFixed(2);
    localStorage.setItem('userBalance', userBalance);
}

// Show success message
function showSuccessMessage(message) {
    const msg = document.getElementById('successMessage');
    msg.textContent = message;
    msg.classList.add('show');

    setTimeout(() => {
        msg.classList.remove('show');
    }, 4000);
}

// Filter matches by league
function filterMatches() {
    const selectedLeague = document.getElementById('leagueFilter').value;
    const container = document.getElementById('matchesContainer');
    container.innerHTML = '';

    const filtered = selectedLeague 
        ? matches.filter(m => m.league === selectedLeague)
        : matches;

    filtered.forEach(match => {
        const card = createMatchCard(match);
        container.appendChild(card);
    });
}

// Format date for display
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Logout
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('userBalance');
        localStorage.removeItem('userBets');
        alert('Logged out! (This is a demo - no data was saved)');
        location.reload();
    }
}

// Load balance from localStorage
window.addEventListener('load', function() {
    const savedBalance = localStorage.getItem('userBalance');
    if (savedBalance) {
        userBalance = parseFloat(savedBalance);
        updateBalance();
    }
});