export default {
  name: "Gorza",
  level_required: "0",
  gold_cost: "0",
  gem_cost: "0",
  title: "Lumberyard",
  blueprint_unlocks: [],
  description: "Investing in this industry will speed up wood production.",
  bonus: "---",
  prerequisite: "---",
  levels: [
    {
      level: 1,
      time: "---",
      seconds: 0,
      investments: { gold: 100, gems: 2 },
      cost: 1000,
      effect: "Wood Production: 0.75/min",
    },
    {
      level: 2,
      time: "15m",
      seconds: 900,
      investments: { gold: 200, gems: 4 },
      cost: 4000,
      effect: "Wood Production: 1/min",
    },
    {
      level: 3,
      time: "1h",
      seconds: 3600,
      investments: { gold: 400, gems: 6 },
      cost: 12000,
      effect: "Wood Production: 1.25/min",
    },
    {
      level: 4,
      time: "1h 30m",
      seconds: 5400,
      investments: { gold: 1000, gems: 10 },
      cost: 60000,
      effect: "Wood Production: 1.5/min",
    },
    {
      level: 5,
      time: "2h",
      seconds: 7000,
      investments: { gold: 2200, gems: 20 },
      cost: 198000,
      effect: "Wood Production: 1.75/min",
    },
    {
      level: 6,
      time: "3h",
      seconds: 21600,
      investments: { gold: 2800, gems: 23 },
      cost: 300000,
      effect: "Wood Production: 2/min",
    },
    {
      level: 7,
      time: "4h",
      seconds: 10800,
      investments: { gold: 8000, gems: 30 },
      cost: 1425000,
      effect: "Wood Production: 2.25/min",
    },
    {
      level: 8,
      time: "5h",
      seconds: 18000,
      investments: { gold: 12000, gems: 35 },
      cost: 3200000,
      effect: "Wood Production: 2.5/min",
    },
    {
      level: 9,
      time: "7h",
      seconds: 25200,
      investments: { gold: 50000, gems: 40 },
      cost: 19800000,
      effect: "Wood Production: 2.75/min",
    },
    {
      level: 10,
      time: "11h 40m",
      seconds: 42000,
      investments: { gold: 150000, gems: 50 },
      cost: 70000000,
      effect: "Wood Production: 3/min",
    },
    {
      level: 11,
      time: "17h 20m",
      seconds: 62400,
      investments: { gold: 300000, gems: 60 },
      cost: 220000000,
      effect: "Wood Production: 3.25/min",
    },
    {
      level: 12,
      time: "1d",
      seconds: 86400,
      investments: { gold: 500000, gems: 70 },
      cost: 520000000,
      effect: "Wood Production: 3.5/min",
    },
    {
      level: 13,
      time: "1d 7h 40m",
      seconds: 114000,
      investments: { gold: 1000000, gems: 80 },
      cost: 1120000000,
      effect: "Wood Production: 3.75/min",
    },
    {
      level: 14,
      time: "1d 16h 20m",
      seconds: 145200,
      investments: { gold: 2000000, gems: 90 },
      cost: 3000000000,
      effect: "Wood Production: 4/min",
    },
    {
      level: 15,
      time: "2d 2h",
      seconds: 180000,
      investments: { gold: 4000000, gems: 100 },
      cost: 6400000000,
      effect: "Wood Production: 4.25/min",
    },
    {
      level: 16,
      time: "2d 12h 40m",
      seconds: 218400,
      investments: { gold: 10000000, gems: 100 },
      cost: 17000000000,
      effect: "Wood Production: 4.5/min",
    },
    {
      level: 17,
      time: "3d 20m",
      seconds: 260400,
      investments: { gold: 30000000, gems: 100 },
      cost: 54000000000,
      effect: "Wood Production: 4.75/min",
    },
    {
      level: 18,
      time: "3d 13h",
      seconds: 306666,
      investments: { gold: 50000000, gems: 100 },
      cost: 95000000000,
      effect: "Wood Production: 5/min",
    },
    {
      level: 19,
      time: "4d 2h 40m",
      seconds: 355200,
      investments: { gold: 100000000, gems: 100 },
      cost: 200000000000,
      effect: "Wood Production: 5.25/min",
    },
    {
      level: 20,
      time: "4d 17h 20m",
      seconds: 408000,
      investments: { gold: 100000000, gems: 100 },
      cost: "---",
      effect: "Wood Production: 5.5/min",
    },
  ],
  resource: "wood",
}