'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Stocks', [
      {
        id: 1,
        symbol: 'AEP',
        name: 'American Electric Power',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        symbol: 'BA',
        name: 'Boeing Company',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        symbol: 'BEN',
        name: 'Franklin Resources',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        symbol: 'BMY',
        name: 'Bristol-Myers Squibb',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        symbol: 'CAT',
        name: 'Caterpillar Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        symbol: 'CL',
        name: 'Colgate-Palmolive',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        symbol: 'COP',
        name: 'ConocoPhillips',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        symbol: 'CPB',
        name: 'Campbell Soup',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        symbol: 'CVS',
        name: 'CVS Health',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        symbol: 'CVX',
        name: 'Chevron Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        symbol: 'D',
        name: 'Dominion Energy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        symbol: 'DD',
        name: 'DuPont de Nemours Inc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        symbol: 'DE',
        name: 'Deere & Co.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 14,
        symbol: 'DHI',
        name: 'D. R. Horton',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 15,
        symbol: 'DHR',
        name: 'Danaher Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 16,
        symbol: 'DRI',
        name: 'Darden Restaurants',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 17,
        symbol: 'DTE',
        name: 'DTE Energy Co.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 18,
        symbol: 'EBAY',
        name: 'eBay Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 19,
        symbol: 'ED',
        name: 'Consolidated Edison',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 20,
        symbol: 'EIX',
        name: 'Edison Int\'l',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 21,
        symbol: 'ES',
        name: 'Eversource Energy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 22,
        symbol: 'ETN',
        name: 'Eaton Corporation',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 23,
        symbol: 'ETR',
        name: 'Entergy Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 24,
        symbol: 'EXC',
        name: 'Exelon Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 25,
        symbol: 'F',
        name: 'Ford Motor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 26,
        symbol: 'FCX',
        name: 'Freeport-McMoRan Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 27,
        symbol: 'FE',
        name: 'FirstEnergy Corp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 28,
        symbol: 'FITB',
        name: 'Fifth Third Bancorp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 29,
        symbol: 'GD',
        name: 'General Dynamics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 30,
        symbol: 'GE',
        name: 'General Electric',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 31,
        symbol: 'GLW',
        name: 'Corning Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 32,
        symbol: 'HAL',
        name: 'Halliburton Co.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 33,
        symbol: 'HBAN',
        name: 'Huntington Bancshares',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 34,
        symbol: 'HIG',
        name: 'Hartford Financial Svc.Gp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 35,
        symbol: 'HOG',
        name: 'Harley-Davidson',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 36,
        symbol: 'HSY',
        name: 'The Hershey Company',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 37,
        symbol: 'HUM',
        name: 'Humana Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 38,
        symbol: 'IBM',
        name: 'International Business Machines',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 39,
        symbol: 'IP',
        name: 'International Paper',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 40,
        symbol: 'JNPR',
        name: 'Juniper Networks',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 41,
        symbol: 'K',
        name: 'Kellogg Co.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 42,
        symbol: 'KLAC',
        name: 'KLA Corporation',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 43,
        symbol: 'KMB',
        name: 'Kimberly-Clark',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 44,
        symbol: 'KO',
        name: 'Coca-Cola Company',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 45,
        symbol: 'KR',
        name: 'Kroger Co.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 46,
        symbol: 'KSS',
        name: 'Kohl\'s Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 47,
        symbol: 'L',
        name: 'Loews Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 48,
        symbol: 'LEG',
        name: 'Leggett & Platt',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 49,
        symbol: 'LHX',
        name: 'L3Harris Technologies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 50,
        symbol: 'M',
        name: 'Macy\'s Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 51,
        symbol: 'MAR',
        name: 'Marriott Int\'l.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 52,
        symbol: 'MCK',
        name: 'McKesson Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 53,
        symbol: 'MCO',
        name: 'Moody\'s Corp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 54,
        symbol: 'MET',
        name: 'MetLife Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 55,
        symbol: 'MKC',
        name: 'McCormick & Co.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 56,
        symbol: 'MMM',
        name: '3M Company',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 57,
        symbol: 'MO',
        name: 'Altria Group Inc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 58,
        symbol: 'MRK',
        name: 'Merck & Co.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 59,
        symbol: 'MS',
        name: 'Morgan Stanley',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 60,
        symbol: 'MSI',
        name: 'Motorola Solutions Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 61,
        symbol: 'MTB',
        name: 'M&T Bank Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 62,
        symbol: 'NI',
        name: 'NiSource Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 63,
        symbol: 'NSC',
        name: 'Norfolk Southern Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 64,
        symbol: 'NTRS',
        name: 'Northern Trust Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 65,
        symbol: 'OMC',
        name: 'Omnicom Group',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 66,
        symbol: 'PAYX',
        name: 'Paychex Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 67,
        symbol: 'PEG',
        name: 'Public Serv. Enterprise Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 68,
        symbol: 'PEP',
        name: 'PepsiCo Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 69,
        symbol: 'PFE',
        name: 'Pfizer Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 70,
        symbol: 'PG',
        name: 'Procter & Gamble',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 71,
        symbol: 'PNW',
        name: 'Pinnacle West Capital',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 72,
        symbol: 'PPG',
        name: 'PPG Industries',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 73,
        symbol: 'PPL',
        name: 'PPL Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 74,
        symbol: 'QCOM',
        name: 'QUALCOMM Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 75,
        symbol: 'ROK',
        name: 'Rockwell Automation Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 76,
        symbol: 'RTN',
        name: 'Raytheon Co.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 77,
        symbol: 'SBUX',
        name: 'Starbucks Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 78,
        symbol: 'SEE',
        name: 'Sealed Air',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 79,
        symbol: 'SO',
        name: 'Southern Co.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 80,
        symbol: 'SPGI',
        name: 'S&P Global, Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 81,
        symbol: 'SRE',
        name: 'Sempra Energy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 82,
        symbol: 'STT',
        name: 'State Street Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 83,
        symbol: 'TMO',
        name: 'Thermo Fisher Scientific',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 84,
        symbol: 'TPR',
        name: 'Tapestry, Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 85,
        symbol: 'TROW',
        name: 'T. Rowe Price Group',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 86,
        symbol: 'TSN',
        name: 'Tyson Foods',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 87,
        symbol: 'TXN',
        name: 'Texas Instruments',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 88,
        symbol: 'UNP',
        name: 'Union Pacific Corp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 89,
        symbol: 'USB',
        name: 'U.S. Bancorp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 90,
        symbol: 'UTX',
        name: 'United Technologies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 91,
        symbol: 'VIAB',
        name: 'Viacom Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 92,
        symbol: 'VLO',
        name: 'Valero Energy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 93,
        symbol: 'VNO',
        name: 'Vornado Realty Trust',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 94,
        symbol: 'WAT',
        name: 'Waters Corporation',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 95,
        symbol: 'WHR',
        name: 'Whirlpool Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 96,
        symbol: 'WM',
        name: 'Waste Management Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 97,
        symbol: 'WRK',
        name: 'WestRock',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 98,
        symbol: 'WU',
        name: 'Western Union Co',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 99,
        symbol: 'WY',
        name: 'Weyerhaeuser',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 100,
        symbol: 'XEL',
        name: 'Xcel Energy Inc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 101,
        symbol: 'XOM',
        name: 'Exxon Mobil Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 102,
        symbol: 'XRX',
        name: 'Xerox',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 103,
        symbol: 'ABT',
        name: 'Abbott Laboratories',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 104,
        symbol: 'ARNC',
        name: 'Arconic Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 105,
        symbol: 'HON',
        name: 'Honeywell Int\'l Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 106,
        symbol: 'SHW',
        name: 'Sherwin-Williams',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 107,
        symbol: 'CMI',
        name: 'Cummins Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 108,
        symbol: 'EMR',
        name: 'Emerson Electric Company',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 109,
        symbol: 'SLB',
        name: 'Schlumberger Ltd.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 110,
        symbol: 'CSX',
        name: 'CSX Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 111,
        symbol: 'CLX',
        name: 'The Clorox Company',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 112,
        symbol: 'GIS',
        name: 'General Mills',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 113,
        symbol: 'NEM',
        name: 'Newmont Goldcorp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 114,
        symbol: 'MCD',
        name: 'McDonald\'s Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 115,
        symbol: 'LLY',
        name: 'Lilly (Eli) & Co.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 116,
        symbol: 'BAX',
        name: 'Baxter International Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 117,
        symbol: 'BDX',
        name: 'Becton Dickinson',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 118,
        symbol: 'JNJ',
        name: 'Johnson & Johnson',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 119,
        symbol: 'GPC',
        name: 'Genuine Parts',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 120,
        symbol: 'HPQ',
        name: 'HP Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 121,
        symbol: 'WMB',
        name: 'Williams Cos.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 122,
        symbol: 'JPM',
        name: 'JPMorgan Chase & Co.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 123,
        symbol: 'IFF',
        name: 'Intl Flavors & Fragrances',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 124,
        symbol: 'AXP',
        name: 'American Express Co',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 125,
        symbol: 'BAC',
        name: 'Bank of America Corp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 126,
        symbol: 'CI',
        name: 'CIGNA Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 127,
        symbol: 'DUK',
        name: 'Duke Energy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 128,
        symbol: 'LNC',
        name: 'Lincoln National',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 129,
        symbol: 'TAP',
        name: 'Molson Coors Brewing Company',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 130,
        symbol: 'NEE',
        name: 'NextEra Energy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 131,
        symbol: 'DIS',
        name: 'The Walt Disney Company',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 132,
        symbol: 'WFC',
        name: 'Wells Fargo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 133,
        symbol: 'INTC',
        name: 'Intel Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 134,
        symbol: 'TGT',
        name: 'Target Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 135,
        symbol: 'TXT',
        name: 'Textron Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 136,
        symbol: 'VFC',
        name: 'V.F. Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 137,
        symbol: 'WBA',
        name: 'Walgreens Boots Alliance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 138,
        symbol: 'AIG',
        name: 'American International Group',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 139,
        symbol: 'FDX',
        name: 'FedEx Corporation',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 140,
        symbol: 'PCAR',
        name: 'PACCAR Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 141,
        symbol: 'ADP',
        name: 'Automatic Data Processing',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 142,
        symbol: 'GWW',
        name: 'Grainger (W.W.) Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 143,
        symbol: 'MAS',
        name: 'Masco Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 144,
        symbol: 'ADM',
        name: 'Archer-Daniels-Midland Co',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 145,
        symbol: 'WMT',
        name: 'Walmart',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 146,
        symbol: 'SNA',
        name: 'Snap-on',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 147,
        symbol: 'SWK',
        name: 'Stanley Black & Decker',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 148,
        symbol: 'BF.B',
        name: 'Brown-Forman Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 149,
        symbol: 'AAPL',
        name: 'Apple Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 150,
        symbol: 'OXY',
        name: 'Occidental Petroleum',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 151,
        symbol: 'CAG',
        name: 'Conagra Brands',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 152,
        symbol: 'LB',
        name: 'L Brands Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 153,
        symbol: 'T',
        name: 'AT&T Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 154,
        symbol: 'VZ',
        name: 'Verizon Communications',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 155,
        symbol: 'LOW',
        name: 'Lowe\'s Cos.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 156,
        symbol: 'PHM',
        name: 'Pulte Homes Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 157,
        symbol: 'HES',
        name: 'Hess Corporation',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 158,
        symbol: 'LMT',
        name: 'Lockheed Martin Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 159,
        symbol: 'HAS',
        name: 'Hasbro Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 160,
        symbol: 'BLL',
        name: 'Ball Corp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 161,
        symbol: 'WCG',
        name: 'WellCare',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 162,
        symbol: 'APD',
        name: 'Air Products & Chemicals Inc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 163,
        symbol: 'NUE',
        name: 'Nucor Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 164,
        symbol: 'PKI',
        name: 'PerkinElmer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 165,
        symbol: 'NOC',
        name: 'Northrop Grumman',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 166,
        symbol: 'CNP',
        name: 'CenterPoint Energy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 167,
        symbol: 'TJX',
        name: 'TJX Companies Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 168,
        symbol: 'DOV',
        name: 'Dover Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 169,
        symbol: 'PH',
        name: 'Parker-Hannifin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 170,
        symbol: 'ITW',
        name: 'Illinois Tool Works',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 171,
        symbol: 'GPS',
        name: 'Gap Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 172,
        symbol: 'JWN',
        name: 'Nordstrom',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 173,
        symbol: 'MDT',
        name: 'Medtronic plc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 174,
        symbol: 'HRB',
        name: 'Block H&R',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 175,
        symbol: 'SYY',
        name: 'Sysco Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 176,
        symbol: 'MMC',
        name: 'Marsh & McLennan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 177,
        symbol: 'AVY',
        name: 'Avery Dennison Corp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 178,
        symbol: 'HD',
        name: 'Home Depot',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 179,
        symbol: 'PNC',
        name: 'PNC Financial Services',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 180,
        symbol: 'C',
        name: 'Citigroup Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 181,
        symbol: 'STI',
        name: 'SunTrust Banks',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 182,
        symbol: 'NKE',
        name: 'Nike',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 183,
        symbol: 'ECL',
        name: 'Ecolab Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 184,
        symbol: 'GL',
        name: 'Globe Life Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 185,
        symbol: 'NWL',
        name: 'Newell Brands',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 186,
        symbol: 'ORCL',
        name: 'Oracle Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 187,
        symbol: 'ADSK',
        name: 'Autodesk Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 188,
        symbol: 'MRO',
        name: 'Marathon Oil Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 189,
        symbol: 'AEE',
        name: 'Ameren Corp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 190,
        symbol: 'AMGN',
        name: 'Amgen Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 191,
        symbol: 'LIN',
        name: 'Linde plc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 192,
        symbol: 'IPG',
        name: 'Interpublic Group',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 193,
        symbol: 'COST',
        name: 'Costco Wholesale Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 194,
        symbol: 'CSCO',
        name: 'Cisco Systems',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 195,
        symbol: 'EMN',
        name: 'Eastman Chemical',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 196,
        symbol: 'KEY',
        name: 'KeyCorp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 197,
        symbol: 'UNM',
        name: 'Unum Group',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 198,
        symbol: 'MSFT',
        name: 'Microsoft Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 199,
        symbol: 'LUV',
        name: 'Southwest Airlines',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 200,
        symbol: 'UNH',
        name: 'United Health Group Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 201,
        symbol: 'CBS',
        name: 'CBS Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 202,
        symbol: 'MU',
        name: 'Micron Technology',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 203,
        symbol: 'BSX',
        name: 'Boston Scientific',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 204,
        symbol: 'AMAT',
        name: 'Applied Materials Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 205,
        symbol: 'BK',
        name: 'The Bank of New York Mellon Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 206,
        symbol: 'ALL',
        name: 'Allstate Corp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 207,
        symbol: 'CMA',
        name: 'Comerica Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 208,
        symbol: 'AON',
        name: 'Aon plc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 209,
        symbol: 'AZO',
        name: 'AutoZone Inc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 210,
        symbol: 'ADBE',
        name: 'Adobe Systems Inc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 211,
        symbol: 'CAH',
        name: 'Cardinal Health Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 212,
        symbol: 'SCHW',
        name: 'Charles Schwab Corporation',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 213,
        symbol: 'EFX',
        name: 'Equifax Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 214,
        symbol: 'APA',
        name: 'Apache Corporation',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 215,
        symbol: 'PGR',
        name: 'Progressive Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 216,
        symbol: 'YUM',
        name: 'Yum! Brands Inc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 217,
        symbol: 'BBT',
        name: 'BB&T Corporation',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 218,
        symbol: 'CINF',
        name: 'Cincinnati Financial',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 219,
        symbol: 'COF',
        name: 'Capital One Financial',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 220,
        symbol: 'RF',
        name: 'Regions Financial Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 221,
        symbol: 'AES',
        name: 'AES Corp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 222,
        symbol: 'CCL',
        name: 'Carnival Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 223,
        symbol: 'CTL',
        name: 'CenturyLink Inc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 224,
        symbol: 'AGN',
        name: 'Allergan, Plc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 225,
        symbol: 'CMS',
        name: 'CMS Energy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 226,
        symbol: 'AFL',
        name: 'AFLAC Inc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 227,
        symbol: 'NTAP',
        name: 'NetApp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 228,
        symbol: 'BBY',
        name: 'Best Buy Co. Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 229,
        symbol: 'VMC',
        name: 'Vulcan Materials',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 230,
        symbol: 'ADI',
        name: 'Analog Devices, Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 231,
        symbol: 'XLNX',
        name: 'Xilinx',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 232,
        symbol: 'CTXS',
        name: 'Citrix Systems',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 233,
        symbol: 'A',
        name: 'Agilent Technologies Inc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 234,
        symbol: 'TIF',
        name: 'Tiffany & Co.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 235,
        symbol: 'DVN',
        name: 'Devon Energy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 236,
        symbol: 'EOG',
        name: 'EOG Resources',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 237,
        symbol: 'INTU',
        name: 'Intuit Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 238,
        symbol: 'RHI',
        name: 'Robert Half International',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 239,
        symbol: 'SYK',
        name: 'Stryker Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 240,
        symbol: 'CTAS',
        name: 'Cintas Corporation',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 241,
        symbol: 'FISV',
        name: 'Fiserv Inc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 242,
        symbol: 'ZION',
        name: 'Zions Bancorp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 243,
        symbol: 'ZBH',
        name: 'Zimmer Biomet Holdings',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 244,
        symbol: 'ABC',
        name: 'AmerisourceBergen Corp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 245,
        symbol: 'NVDA',
        name: 'Nvidia Corporation',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 246,
        symbol: 'EQR',
        name: 'Equity Residential',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 247,
        symbol: 'SPG',
        name: 'Simon Property Group Inc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 248,
        symbol: 'EA',
        name: 'Electronic Arts',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 249,
        symbol: 'GS',
        name: 'Goldman Sachs Group',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 250,
        symbol: 'PFG',
        name: 'Principal Financial Group',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 251,
        symbol: 'PRU',
        name: 'Prudential Financial',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 252,
        symbol: 'UPS',
        name: 'United Parcel Service',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 253,
        symbol: 'ANTM',
        name: 'Anthem',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 254,
        symbol: 'TRV',
        name: 'The Travelers Companies Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 255,
        symbol: 'DGX',
        name: 'Quest Diagnostics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 256,
        symbol: 'AIV',
        name: 'Apartment Investment & Management',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 257,
        symbol: 'SYMC',
        name: 'Symantec Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 258,
        symbol: 'PLD',
        name: 'Prologis',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 259,
        symbol: 'BIIB',
        name: 'Biogen Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 260,
        symbol: 'ETFC',
        name: 'E*Trade',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 261,
        symbol: 'MYL',
        name: 'Mylan N.V.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 262,
        symbol: 'GILD',
        name: 'Gilead Sciences',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 263,
        symbol: 'LH',
        name: 'Laboratory Corp. of America Holding',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 264,
        symbol: 'NOV',
        name: 'National Oilwell Varco Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 265,
        symbol: 'STZ',
        name: 'Constellation Brands',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 266,
        symbol: 'PSA',
        name: 'Public Storage',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 267,
        symbol: 'AMP',
        name: 'Ameriprise Financial',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 268,
        symbol: 'LEN',
        name: 'Lennar Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 269,
        symbol: 'AMZN',
        name: 'Amazon.com Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 270,
        symbol: 'EL',
        name: 'Estee Lauder Cos.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 271,
        symbol: 'VRSN',
        name: 'Verisign Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 272,
        symbol: 'GOOG',
        name: 'Alphabet Inc Class C',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 273,
        symbol: 'BXP',
        name: 'Boston Properties',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 274,
        symbol: 'KIM',
        name: 'Kimco Realty',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 275,
        symbol: 'CME',
        name: 'CME Group Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 276,
        symbol: 'CELG',
        name: 'Celgene Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 277,
        symbol: 'CBRE',
        name: 'CBRE Group',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 278,
        symbol: 'FIS',
        name: 'Fidelity National Information Services',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 279,
        symbol: 'CTSH',
        name: 'Cognizant Technology Solutions',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 280,
        symbol: 'AVB',
        name: 'AvalonBay Communities, Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 281,
        symbol: 'RL',
        name: 'Ralph Lauren Corporation',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 282,
        symbol: 'VAR',
        name: 'Varian Medical Systems',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 283,
        symbol: 'CHRW',
        name: 'C. H. Robinson Worldwide',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 284,
        symbol: 'HST',
        name: 'Host Hotels & Resorts',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 285,
        symbol: 'AIZ',
        name: 'Assurant',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 286,
        symbol: 'DFS',
        name: 'Discover Financial Services',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 287,
        symbol: 'AKAM',
        name: 'Akamai Technologies Inc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 288,
        symbol: 'MCHP',
        name: 'Microchip Technology',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 289,
        symbol: 'ICE',
        name: 'Intercontinental Exchange',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 290,
        symbol: 'EXPE',
        name: 'Expedia Group',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 291,
        symbol: 'NBL',
        name: 'Noble Energy Inc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 292,
        symbol: 'EXPD',
        name: 'Expeditors',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 293,
        symbol: 'JEC',
        name: 'Jacobs Engineering Group',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 294,
        symbol: 'AMT',
        name: 'American Tower Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 295,
        symbol: 'HCP',
        name: 'HCP Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 296,
        symbol: 'PM',
        name: 'Philip Morris International',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 297,
        symbol: 'ISRG',
        name: 'Intuitive Surgical Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 298,
        symbol: 'COG',
        name: 'Cabot Oil & Gas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 299,
        symbol: 'MA',
        name: 'Mastercard Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 300,
        symbol: 'DVA',
        name: 'DaVita Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 301,
        symbol: 'IVZ',
        name: 'Invesco Ltd.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 302,
        symbol: 'CF',
        name: 'CF Industries Holdings Inc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 303,
        symbol: 'CRM',
        name: 'Salesforce.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 304,
        symbol: 'PXD',
        name: 'Pioneer Natural Resources',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 305,
        symbol: 'APH',
        name: 'Amphenol Corp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 306,
        symbol: 'FLS',
        name: 'Flowserve Corporation',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 307,
        symbol: 'NDAQ',
        name: 'Nasdaq, Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 308,
        symbol: 'WEC',
        name: 'Wec Energy Group Inc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 309,
        symbol: 'SJM',
        name: 'JM Smucker',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 310,
        symbol: 'PBCT',
        name: 'People\'s United Financial',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 311,
        symbol: 'XRAY',
        name: 'Dentsply Sirona',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 312,
        symbol: 'WYNN',
        name: 'Wynn Resorts Ltd',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 313,
        symbol: 'RSG',
        name: 'Republic Services Inc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 314,
        symbol: 'FLIR',
        name: 'FLIR Systems',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 315,
        symbol: 'IRM',
        name: 'Iron Mountain Incorporated',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 316,
        symbol: 'WELL',
        name: 'Welltower Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 317,
        symbol: 'HRL',
        name: 'Hormel Foods Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 318,
        symbol: 'VTR',
        name: 'Ventas Inc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 319,
        symbol: 'ORLY',
        name: 'O\'Reilly Automotive',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 320,
        symbol: 'FTI',
        name: 'TechnipFMC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 321,
        symbol: 'PWR',
        name: 'Quanta Services Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 322,
        symbol: 'WDC',
        name: 'Western Digital',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 323,
        symbol: 'FMC',
        name: 'FMC Corporation',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 324,
        symbol: 'FAST',
        name: 'Fastenal Co',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 325,
        symbol: 'BKNG',
        name: 'Booking Holdings Inc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 326,
        symbol: 'ROST',
        name: 'Ross Stores',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 327,
        symbol: 'V',
        name: 'Visa Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 328,
        symbol: 'ROP',
        name: 'Roper Technologies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 329,
        symbol: 'NRG',
        name: 'NRG Energy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 330,
        symbol: 'BRK.B',
        name: 'Berkshire Hathaway',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 331,
        symbol: 'DISCA',
        name: 'Discovery Inc. Class A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 332,
        symbol: 'HP',
        name: 'Helmerich & Payne',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 333,
        symbol: 'OKE',
        name: 'ONEOK',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 334,
        symbol: 'CERN',
        name: 'Cerner',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 335,
        symbol: 'KMX',
        name: 'Carmax Inc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 336,
        symbol: 'CB',
        name: 'Chubb Limited',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 337,
        symbol: 'JCI',
        name: 'Johnson Controls International',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 338,
        symbol: 'IR',
        name: 'Ingersoll-Rand PLC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 339,
        symbol: 'FFIV',
        name: 'F5 Networks',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 340,
        symbol: 'NFLX',
        name: 'Netflix Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 341,
        symbol: 'EW',
        name: 'Edwards Lifesciences',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 342,
        symbol: 'BLK',
        name: 'BlackRock',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 343,
        symbol: 'CMG',
        name: 'Chipotle Mexican Grill',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 344,
        symbol: 'MPC',
        name: 'Marathon Petroleum',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 345,
        symbol: 'ACN',
        name: 'Accenture plc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 346,
        symbol: 'MOS',
        name: 'The Mosaic Company',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 347,
        symbol: 'TEL',
        name: 'TE Connectivity Ltd.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 348,
        symbol: 'XYL',
        name: 'Xylem Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 349,
        symbol: 'BWA',
        name: 'BorgWarner',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 350,
        symbol: 'DLTR',
        name: 'Dollar Tree',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 351,
        symbol: 'PRGO',
        name: 'Perrigo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 352,
        symbol: 'TRIP',
        name: 'TripAdvisor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 353,
        symbol: 'CCI',
        name: 'Crown Castle International Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 354,
        symbol: 'PSX',
        name: 'Phillips 66',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 355,
        symbol: 'ALXN',
        name: 'Alexion Pharmaceuticals',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 356,
        symbol: 'KMI',
        name: 'Kinder Morgan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 357,
        symbol: 'MNST',
        name: 'Monster Beverage',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 358,
        symbol: 'LRCX',
        name: 'Lam Research',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 359,
        symbol: 'STX',
        name: 'Seagate Technology',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 360,
        symbol: 'LYB',
        name: 'LyondellBasell',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 361,
        symbol: 'PNR',
        name: 'Pentair plc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 362,
        symbol: 'MDLZ',
        name: 'Mondelez International',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 363,
        symbol: 'DG',
        name: 'Dollar General',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 364,
        symbol: 'GRMN',
        name: 'Garmin Ltd.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 365,
        symbol: 'APTV',
        name: 'Aptiv Plc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 366,
        symbol: 'ABBV',
        name: 'AbbVie Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 367,
        symbol: 'PVH',
        name: 'PVH Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 368,
        symbol: 'REGN',
        name: 'Regeneron Pharmaceuticals',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 369,
        symbol: 'MAC',
        name: 'Macerich',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 370,
        symbol: 'KSU',
        name: 'Kansas City Southern',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 371,
        symbol: 'GM',
        name: 'General Motors',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 372,
        symbol: 'ZTS',
        name: 'Zoetis',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 373,
        symbol: 'FOXA',
        name: 'Fox Corporation Class A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 374,
        symbol: 'NLSN',
        name: 'Nielsen Holdings',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 375,
        symbol: 'NWSA',
        name: 'News Corp. Class A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 376,
        symbol: 'DAL',
        name: 'Delta Air Lines Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 377,
        symbol: 'AME',
        name: 'AMETEK Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 378,
        symbol: 'VRTX',
        name: 'Vertex Pharmaceuticals Inc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 379,
        symbol: 'CPRI',
        name: 'Capri Holdings',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 380,
        symbol: 'ALLE',
        name: 'Allegion',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 381,
        symbol: 'ADS',
        name: 'Alliance Data Systems',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 382,
        symbol: 'FB',
        name: 'Facebook, Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 383,
        symbol: 'MHK',
        name: 'Mohawk Industries',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 384,
        symbol: 'TSCO',
        name: 'Tractor Supply Company',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 385,
        symbol: 'ESS',
        name: 'Essex Property Trust, Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 386,
        symbol: 'GOOGL',
        name: 'Alphabet Inc Class A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 387,
        symbol: 'UA',
        name: 'Under Armour Class C',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 388,
        symbol: 'AVGO',
        name: 'Broadcom Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 389,
        symbol: 'XEC',
        name: 'Cimarex Energy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 390,
        symbol: 'AMG',
        name: 'Affiliated Managers Group Inc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 391,
        symbol: 'MLM',
        name: 'Martin Marietta Materials',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 392,
        symbol: 'DISCK',
        name: 'Discovery Inc. Class C',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 393,
        symbol: 'URI',
        name: 'United Rentals, Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 394,
        symbol: 'UHS',
        name: 'Universal Health Services, Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 395,
        symbol: 'RCL',
        name: 'Royal Caribbean Cruises Ltd',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 396,
        symbol: 'HCA',
        name: 'HCA Healthcare',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 397,
        symbol: 'SWKS',
        name: 'Skyworks Solutions',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 398,
        symbol: 'HSIC',
        name: 'Henry Schein',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 399,
        symbol: 'EQIX',
        name: 'Equinix',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 400,
        symbol: 'HBI',
        name: 'Hanesbrands Inc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 401,
        symbol: 'SLG',
        name: 'SL Green Realty',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 402,
        symbol: 'AAL',
        name: 'American Airlines Group',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 403,
        symbol: 'O',
        name: 'Realty Income Corporation',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 404,
        symbol: 'QRVO',
        name: 'Qorvo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 405,
        symbol: 'JBHT',
        name: 'J. B. Hunt Transport Services',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 406,
        symbol: 'KHC',
        name: 'Kraft Heinz Co',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 407,
        symbol: 'AAP',
        name: 'Advance Auto Parts',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 408,
        symbol: 'PYPL',
        name: 'PayPal',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 409,
        symbol: 'ATVI',
        name: 'Activision Blizzard',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 410,
        symbol: 'UAL',
        name: 'United Airlines Holdings',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 411,
        symbol: 'CMCSA',
        name: 'Comcast Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 412,
        symbol: 'FOX',
        name: 'Fox Corporation Class B',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 413,
        symbol: 'NWS',
        name: 'News Corp. Class B',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 414,
        symbol: 'VRSK',
        name: 'Verisk Analytics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 415,
        symbol: 'HPE',
        name: 'Hewlett Packard Enterprise',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 416,
        symbol: 'SYF',
        name: 'Synchrony Financial',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 417,
        symbol: 'ILMN',
        name: 'Illumina Inc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 418,
        symbol: 'CHD',
        name: 'Church & Dwight',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 419,
        symbol: 'WLTW',
        name: 'Willis Towers Watson',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 420,
        symbol: 'EXR',
        name: 'Extra Space Storage',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 421,
        symbol: 'CFG',
        name: 'Citizens Financial Group',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 422,
        symbol: 'FRT',
        name: 'Federal Realty Investment Trust',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 423,
        symbol: 'CXO',
        name: 'Concho Resources',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 424,
        symbol: 'AWK',
        name: 'American Water Works Company Inc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 425,
        symbol: 'UDR',
        name: 'UDR, Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 426,
        symbol: 'UAA',
        name: 'Under Armour Class A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 427,
        symbol: 'CNC',
        name: 'Centene Corporation',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 428,
        symbol: 'HOLX',
        name: 'Hologic',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 429,
        symbol: 'ULTA',
        name: 'Ulta Beauty',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 430,
        symbol: 'GPN',
        name: 'Global Payments Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 431,
        symbol: 'ALK',
        name: 'Alaska Air Group Inc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 432,
        symbol: 'DLR',
        name: 'Digital Realty Trust Inc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 433,
        symbol: 'LKQ',
        name: 'LKQ Corporation',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 434,
        symbol: 'AJG',
        name: 'Arthur J. Gallagher & Co.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 435,
        symbol: 'TDG',
        name: 'TransDigm Group',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 436,
        symbol: 'FBHS',
        name: 'Fortune Brands Home & Security',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 437,
        symbol: 'ALB',
        name: 'Albemarle Corp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 438,
        symbol: 'LNT',
        name: 'Alliant Energy Corp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 439,
        symbol: 'FTV',
        name: 'Fortive Corp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 440,
        symbol: 'MTD',
        name: 'Mettler Toledo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 441,
        symbol: 'CHTR',
        name: 'Charter Communications',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 442,
        symbol: 'COO',
        name: 'The Cooper Companies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 443,
        symbol: 'COTY',
        name: 'Coty, Inc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 444,
        symbol: 'MAA',
        name: 'Mid-America Apartments',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 445,
        symbol: 'IDXX',
        name: 'IDEXX Laboratories',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 446,
        symbol: 'INCY',
        name: 'Incyte',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 447,
        symbol: 'CBOE',
        name: 'Cboe Global Markets',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 448,
        symbol: 'REG',
        name: 'Regency Centers Corporation',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 449,
        symbol: 'DISH',
        name: 'Dish Network',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 450,
        symbol: 'SNPS',
        name: 'Synopsys Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 451,
        symbol: 'AMD',
        name: 'Advanced Micro Devices Inc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 452,
        symbol: 'ARE',
        name: 'Alexandria Real Estate Equities',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 453,
        symbol: 'RJF',
        name: 'Raymond James Financial Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 454,
        symbol: 'DXC',
        name: 'DXC Technology',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 455,
        symbol: 'IT',
        name: 'Gartner Inc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 456,
        symbol: 'INFO',
        name: 'IHS Markit Ltd.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 457,
        symbol: 'ALGN',
        name: 'Align Technology',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 458,
        symbol: 'ANSS',
        name: 'ANSYS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 459,
        symbol: 'RE',
        name: 'Everest Re Group Ltd.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 460,
        symbol: 'HLT',
        name: 'Hilton Worldwide Holdings Inc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 461,
        symbol: 'BKR',
        name: 'Baker Hughes Co',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 462,
        symbol: 'AOS',
        name: 'A.O. Smith Corp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 463,
        symbol: 'DRE',
        name: 'Duke Realty Corp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 464,
        symbol: 'MGM',
        name: 'MGM Resorts International',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 465,
        symbol: 'PKG',
        name: 'Packaging Corporation of America',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 466,
        symbol: 'RMD',
        name: 'ResMed',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 467,
        symbol: 'IQV',
        name: 'IQVIA Holdings Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 468,
        symbol: 'SBAC',
        name: 'SBA Communications',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 469,
        symbol: 'CDNS',
        name: 'Cadence Design Systems',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 470,
        symbol: 'NCLH',
        name: 'Norwegian Cruise Line Holdings',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 471,
        symbol: 'HII',
        name: 'Huntington Ingalls Industries',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 472,
        symbol: 'IPGP',
        name: 'IPG Photonics Corp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 473,
        symbol: 'SIVB',
        name: 'SVB Financial',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 474,
        symbol: 'TTWO',
        name: 'Take-Two Interactive',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 475,
        symbol: 'MSCI',
        name: 'MSCI Inc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 476,
        symbol: 'ABMD',
        name: 'ABIOMED Inc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 477,
        symbol: 'EVRG',
        name: 'Evergy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 478,
        symbol: 'TWTR',
        name: 'Twitter, Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 479,
        symbol: 'BR',
        name: 'Broadridge Financial Solutions',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 480,
        symbol: 'HFC',
        name: 'HollyFrontier Corp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 481,
        symbol: 'FLT',
        name: 'FleetCor Technologies Inc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 482,
        symbol: 'CPRT',
        name: 'Copart Inc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 483,
        symbol: 'ANET',
        name: 'Arista Networks',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 484,
        symbol: 'ROL',
        name: 'Rollins Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 485,
        symbol: 'FTNT',
        name: 'Fortinet',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 486,
        symbol: 'KEYS',
        name: 'Keysight Technologies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 487,
        symbol: 'JKHY',
        name: 'Jack Henry & Associates',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 488,
        symbol: 'FANG',
        name: 'Diamondback Energy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 489,
        symbol: 'LW',
        name: 'Lamb Weston Holdings Inc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 490,
        symbol: 'MXIM',
        name: 'Maxim Integrated Products Inc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 491,
        symbol: 'CE',
        name: 'Celanese',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 492,
        symbol: 'FRC',
        name: 'First Republic Bank',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 493,
        symbol: 'TFX',
        name: 'Teleflex',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 494,
        symbol: 'ATO',
        name: 'Atmos Energy Corp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 495,
        symbol: 'WAB',
        name: 'Wabtec Corporation',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 496,
        symbol: 'DOW',
        name: 'Dow Inc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 497,
        symbol: 'CTVA',
        name: 'Corteva',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 498,
        symbol: 'AMCR',
        name: 'Amcor plc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 499,
        symbol: 'MKTX',
        name: 'MarketAxess',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 500,
        symbol: 'TMUS',
        name: 'T-Mobile US',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 501,
        symbol: 'IEX',
        name: 'IDEX Corporation',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 502,
        symbol: 'LDOS',
        name: 'Leidos Holdings',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 503,
        symbol: 'CDW',
        name: 'CDW',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 504,
        symbol: 'NVR',
        name: 'NVR Inc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 505,
        symbol: 'LVS',
        name: 'Las Vegas Sands Corp',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Stocks', null, {});
  }
};
