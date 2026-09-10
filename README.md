# ⚽ Soccer Betting Grid - Demo Website

A fully functional **demo sports betting website** with a soccer odds grid display. This is an **educational/fantasy betting platform** using fake money - no real money is involved.

## 🎯 Features

✅ **Soccer Odds Grid Display** - View upcoming matches with live odds  
✅ **Bet Placement** - Click odds to place bets with fantasy money  
✅ **Real-time Odds** - Dynamic odds display for multiple outcomes  
✅ **Balance Management** - Track your fantasy balance ($1000 starting balance)  
✅ **Bet Calculation** - See potential payouts before confirming bets  
✅ **League Filtering** - Filter matches by league (Premier League, La Liga, etc.)  
✅ **Responsive Design** - Works on desktop, tablet, and mobile  

## 🚀 How to Use

### 1. **View the Website**

Simply open `index.html` in your web browser, or deploy to a hosting service:

**Local:**
```bash
# If you have Python installed:
python -m http.server 8000
# Visit http://localhost:8000
```

**Online Hosting (Free Options):**
- [Vercel](https://vercel.com) - Drag & drop your files
- [Netlify](https://netlify.com) - Drag & drop your files
- [GitHub Pages](https://pages.github.com) - Push to `gh-pages` branch

### 2. **Place a Bet**

1. Browse upcoming soccer matches
2. Click any odds button (Home Win, Draw, or Away Win)
3. Enter your stake amount (starting balance: $1000)
4. Confirm to place the bet
5. Your balance updates automatically

### 3. **Filter Matches**

Use the league dropdown to filter matches by:
- Premier League
- La Liga
- Serie A
- Bundesliga
- Ligue 1

## 📊 Odds Explanation

Each match displays three betting options:

| Outcome | Example Odds | Meaning |
|---------|--------------|----------|
| **Home Win** | 2.45 | $1 bet wins $2.45 (profit: $1.45) |
| **Draw** | 3.50 | $1 bet wins $3.50 (profit: $2.50) |
| **Away Win** | 2.80 | $1 bet wins $2.80 (profit: $1.80) |

**Formula:** Payout = Stake × Odds

Example: $10 bet at 2.45 odds = $24.50 payout ($14.50 profit)

## 🎮 Demo Accounts

**Default User:**
- Balance: $1,000 (fantasy money)
- No login required

Your balance persists in your browser's local storage. Clear your browser data to reset.

## 📁 File Structure

```
soccer-betting-grid/
├── index.html          # Main HTML page
├── styles.css          # All styling
├── script.js           # JavaScript logic
└── README.md           # This file
```

## 🛠️ Technologies Used

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Storage:** Browser LocalStorage (no backend needed)
- **Hosting:** Static files (works on any web host)

## 🎓 How Betting Odds Work

Sportsbooks create odds by:

1. **Assessing Probability** - Analyze team form, stats, injuries
2. **Setting Base Odds** - Convert probabilities to decimal odds
3. **Adding Margin** - Build in profit (overround 5-10%)
4. **Adjusting Live** - Update odds based on betting action

In this demo, odds are fixed. Real sportsbooks adjust them constantly!

## ⚠️ Important Disclaimer

**This is a DEMO website for educational purposes only.**
- No real money is involved
- All bets use fantasy currency
- This is NOT a licensed gambling platform
- Operating a real sportsbook requires proper licensing and compliance

## 🔄 Next Steps to Expand

Want to add more features?

- [ ] User login/registration system
- [ ] Bet history page
- [ ] Real sports API integration
- [ ] Live score updates
- [ ] Admin panel to manage odds
- [ ] Backend database (Node.js/MongoDB)
- [ ] Payment processing (for real money - requires licensing!)

## 📞 Support

For questions about this demo, check the code comments or create an issue on GitHub.

---

**Happy Betting! (With Fantasy Money!) 🎉**