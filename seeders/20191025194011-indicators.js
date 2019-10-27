'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Indicators', [
      {
        id: 1,
        symbol: 'SMA',
        name: 'Simple Moving Average',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        symbol: 'EMA',
        name: 'Exponential Moving Average',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        symbol: 'WMA',
        name: 'Weighted Moving Average',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        symbol: 'DEMA',
        name: 'Double Exponential Moving Average',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        symbol: 'TEMA',
        name: 'Triple Exponential Moving Average',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        symbol: 'TRIMA',
        name: 'Triangular Moving Average',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        symbol: 'KAMA',
        name: 'Kaufman Adaptive Moving Average',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        symbol: 'MAMA',
        name: 'MESA Adaptive Moving Average',
        values: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        symbol: 'VWAP',
        name: 'Volume Weighted Average Price',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        symbol: 'T3',
        name: 'Triple Exponential Moving Average',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        symbol: 'MACD',
        name: 'Moving Average Convergence / Divergence',
        values: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        symbol: 'MACDEXT',
        name: 'Moving Average Convergence / Divergence Values With Controllable Moving Average Type',
        values: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        symbol: 'STOCH',
        name: 'Stochastic Oscillator',
        values: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 14,
        symbol: 'STOCHF',
        name: 'Stochastic Fast',
        values: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 15,
        symbol: 'RSI',
        name: 'Relative Strength Index',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 16,
        symbol: 'STOCHRSI',
        name: 'Stochastic Relative Strength Index',
        values: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 17,
        symbol: 'WILLR',
        name: 'Williams %R',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 18,
        symbol: 'ADX',
        name: 'Average Directional Movement Index',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 19,
        symbol: 'ADXR',
        name: 'Average Directional Movement Index Rating',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 20,
        symbol: 'APO',
        name: 'Absolute Price Oscillator',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 21,
        symbol: 'PPO',
        name: 'Percentage Price Oscillator',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 22,
        symbol: 'MOM',
        name: 'Momentum',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 23,
        symbol: 'BOP',
        name: 'Balance Of Power',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 24,
        symbol: 'CCI',
        name: 'Commodity Channel Index',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 25,
        symbol: 'CMO',
        name: 'Chande Momentum Oscillator',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 26,
        symbol: 'ROC',
        name: 'Rate Of Change',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 27,
        symbol: 'ROCR',
        name: 'Rate Of Change Ratio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 28,
        symbol: 'AROON',
        name: 'Aroon',
        values: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 29,
        symbol: 'AROONOSC',
        name: 'Aroon Oscillator',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 30,
        symbol: 'MFI',
        name: 'Money Flow Index',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 31,
        symbol: 'TRIX',
        name: '1-Day Rate Of Change Of A Triple Smooth Exponential Moving Average',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 32,
        symbol: 'ULTOSC',
        name: 'Ultimate Oscillator',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 33,
        symbol: 'DX',
        name: 'Directional Movement Index',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 34,
        symbol: 'MINUS_DI',
        name: 'Minus Directional Indicator',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 35,
        symbol: 'PLUS_DI',
        name: 'Plus Directional Indicator',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 36,
        symbol: 'MINUS_DM',
        name: 'Minus Directional Movement',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 37,
        symbol: 'PLUS_DM',
        name: 'Plus Directional Movement',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 38,
        symbol: 'BBANDS',
        name: 'Bollinger Bands',
        values: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 39,
        symbol: 'MIDPOINT',
        name: 'Midpoint',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 40,
        symbol: 'MIDPRICE',
        name: 'Midpoint Price',
        values: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 41,
        symbol: 'SAR',
        name: 'Parabolic SAR',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 42,
        symbol: 'TRANGE',
        name: 'True Range',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 43,
        symbol: 'ATR',
        name: 'Average True Range',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 44,
        symbol: 'NATR',
        name: 'Normalized Average True Range',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 45,
        symbol: 'AD',
        name: 'Chaikin A/D line',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 46,
        symbol: 'ADOSC',
        name: 'Chaikin A/D Oscillator',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 47,
        symbol: 'OBV',
        name: 'On Balance Volume',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 48,
        symbol: 'HT_TRENDLINE',
        name: 'Hilbert Transform, Instantaneous Trendline',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 49,
        symbol: 'HT_SINE',
        name: 'Hilbert Transform, Sine Wave',
        values: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 50,
        symbol: 'HT_TRENDMODE',
        name: 'Hilbert Transform, Trend Vs Cycle Mode ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 51,
        symbol: 'HT_DCPERIOD',
        name: 'Hilbert Transform, Dominant Cycle Period',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 52,
        symbol: 'HT_DCPHASE',
        name: 'Hilbert Transform, Dominant Cycle Phase',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 53,
        symbol: 'HT_PHASOR',
        name: 'Hilbert Transform, Phasor Components',
        values: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Indicators', null, {});
  }
};
