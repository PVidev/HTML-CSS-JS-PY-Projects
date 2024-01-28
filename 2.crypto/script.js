function calculateProfit() {
    const hashRate = parseFloat(document.getElementById('hashRate').value);
    const powerConsumption = parseFloat(document.getElementById('powerConsumption').value);
    const electricityCost = parseFloat(document.getElementById('electricityCost').value);
    const miningFee = parseFloat(document.getElementById('miningFee').value);
    const exchangeRate = parseFloat(document.getElementById('exchangeRate').value);
    
    if (!exchangeRate) {
      alert("Please enter Exchange Rate.");
      return;
    }
  
    const revenuePerHour = (hashRate * (1 - miningFee)) * exchangeRate;
    const revenuePerSixHours = revenuePerHour * 6;
    const revenuePerTwelveHours = revenuePerHour * 12;
    const revenuePerDay = revenuePerHour * 24;
    const revenuePerWeek = revenuePerDay * 7;
    const revenuePerTwoWeeks = revenuePerWeek * 2;
    const revenuePerThreeWeeks = revenuePerWeek * 3;
    const revenuePerMonth = revenuePerDay * 30;
  
    const powerCostPerHour = (powerConsumption / 1000) * electricityCost;
    const powerCostPerSixHours = powerCostPerHour * 6;
    const powerCostPerTwelveHours = powerCostPerHour * 12;
    const powerCostPerDay = powerCostPerHour * 24;
    const powerCostPerWeek = powerCostPerDay * 7;
    const powerCostPerTwoWeeks = powerCostPerWeek * 2;
    const powerCostPerThreeWeeks = powerCostPerWeek * 3;
    const powerCostPerMonth = powerCostPerDay * 30;
  
    const hourlyProfit = revenuePerHour - powerCostPerHour;
    const sixHourlyProfit = revenuePerSixHours - powerCostPerSixHours;
    const twelveHourlyProfit = revenuePerTwelveHours - powerCostPerTwelveHours;
    const dailyProfit = revenuePerDay - powerCostPerDay;
    const weeklyProfit = revenuePerWeek - powerCostPerWeek;
    const twoWeeksProfit = revenuePerTwoWeeks - powerCostPerTwoWeeks;
    const threeWeeksProfit = revenuePerThreeWeeks - powerCostPerThreeWeeks;
    const monthlyProfit = revenuePerMonth - powerCostPerMonth;
    const color = (monthlyProfit >= 0) ? 'green' : 'red';
  
    document.getElementById('hourlyProfit').innerHTML = `<p style="color: ${color}">1 Houre: $${hourlyProfit.toFixed(2)}</p>`;
    document.getElementById('sixHourlyProfit').innerHTML = `<p style="color: ${color}">6 Hours: $${sixHourlyProfit.toFixed(2)}</p>`;
    document.getElementById('twelveHourlyProfit').innerHTML = `<p style="color: ${color}">12 Hours: $${twelveHourlyProfit.toFixed(2)}</p>`;
    document.getElementById('dailyProfit').innerHTML = `<p style="color: ${color}">1 Day: $${dailyProfit.toFixed(2)}</p>`;
    document.getElementById('weeklyProfit').innerHTML = `<p style="color: ${color}">1 Week: $${weeklyProfit.toFixed(2)}</p>`;
    document.getElementById('twoWeeksProfit').innerHTML = `<p style="color: ${color}">2 Weeks: $${twoWeeksProfit.toFixed(2)}</p>`;
    document.getElementById('threeWeeksProfit').innerHTML = `<p style="color: ${color}">3 Weeks: $${threeWeeksProfit.toFixed(2)}</p>`;
    document.getElementById('monthlyProfit').innerHTML = `<p style="color: ${color}">1 Mount: $${monthlyProfit.toFixed(2)}</p>`;
  }
  
  function convertToGigaHash(teraHash) {
    return teraHash * 1000;
  }
  