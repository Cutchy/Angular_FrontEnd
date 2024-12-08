const bdInitialAssignments = [
    {"id":1,"nom":"iStar Financial Inc.","dateLimite":"2025-07-05","rendu":false},
    {"id":2,"nom":"CIRCOR International, Inc.","dateLimite":"2025-02-24","rendu":false},
    {"id":3,"nom":"Rosetta Stone","dateLimite":"2025-10-09","rendu":true},
    {"id":4,"nom":"MYR Group, Inc.","dateLimite":"2025-04-11","rendu":true},
    {"id":5,"nom":"BlackRock New York Investment Quality Municipal Trust Inc. (Th","dateLimite":"2025-02-04","rendu":true},
    {"id":6,"nom":"Overseas Shipholding Group, Inc.","dateLimite":"2025-04-24","rendu":false},
    {"id":7,"nom":"HC2 Holdings, Inc.","dateLimite":"2025-04-14","rendu":false},
    {"id":8,"nom":"Platform Specialty Products Corporation","dateLimite":"2025-02-23","rendu":false},
    {"id":9,"nom":"Sientra, Inc.","dateLimite":"2024-11-22","rendu":false},
    {"id":10,"nom":"Vocera Communications, Inc.","dateLimite":"2026-02-02","rendu":true},
    {"id":11,"nom":"Salem Media Group, Inc.","dateLimite":"2025-06-15","rendu":true},
    {"id":12,"nom":"Primo Water Corporation","dateLimite":"2025-10-30","rendu":true},
    {"id":13,"nom":"TriplePoint Venture Growth BDC Corp.","dateLimite":"2025-09-04","rendu":true},
    {"id":14,"nom":"PowerShares DWA Developed Markets Momentum Portfolio","dateLimite":"2025-08-10","rendu":true},
    {"id":15,"nom":"Qwest Corporation","dateLimite":"2025-02-16","rendu":false},
    {"id":16,"nom":"Cellectar Biosciences, Inc.","dateLimite":"2025-07-29","rendu":true},
    {"id":17,"nom":"W.R. Berkley Corporation","dateLimite":"2025-11-08","rendu":false},
    {"id":18,"nom":"Immersion Corporation","dateLimite":"2025-07-14","rendu":false},
    {"id":19,"nom":"MCBC Holdings, Inc.","dateLimite":"2025-04-05","rendu":true},
    {"id":20,"nom":"Prudential Short Duration High Yield Fund, Inc.","dateLimite":"2025-03-05","rendu":false},
    {"id":21,"nom":"ANI Pharmaceuticals, Inc.","dateLimite":"2025-07-13","rendu":false},
    {"id":22,"nom":"Fidelity and Guaranty Life","dateLimite":"2025-08-13","rendu":false},
    {"id":23,"nom":"J.M. Smucker Company (The)","dateLimite":"2025-03-04","rendu":true},
    {"id":24,"nom":"Tecnoglass Inc.","dateLimite":"2025-11-08","rendu":true},
    {"id":25,"nom":"Engility Holdings, Inc.","dateLimite":"2025-11-08","rendu":true},
    {"id":26,"nom":"Aquinox Pharmaceuticals, Inc.","dateLimite":"2024-12-28","rendu":false},
    {"id":27,"nom":"World Acceptance Corporation","dateLimite":"2024-12-31","rendu":true},
    {"id":28,"nom":"Yintech Investment Holdings Limited","dateLimite":"2025-06-04","rendu":false},
    {"id":29,"nom":"iPath US Treasury 2-year Bull ETN","dateLimite":"2025-07-18","rendu":true},
    {"id":30,"nom":"iShares Asia 50 ETF","dateLimite":"2026-03-09","rendu":true},
    {"id":31,"nom":"Pure Cycle Corporation","dateLimite":"2025-01-30","rendu":true},
    {"id":32,"nom":"Benitec Biopharma Limited","dateLimite":"2026-01-20","rendu":false},
    {"id":33,"nom":"MRC Global Inc.","dateLimite":"2025-09-20","rendu":true},
    {"id":34,"nom":"Spring Bank Pharmaceuticals, Inc.","dateLimite":"2026-01-03","rendu":true},
    {"id":35,"nom":"HealthEquity, Inc.","dateLimite":"2025-02-05","rendu":true},
    {"id":36,"nom":"Lehman ABS Corporation","dateLimite":"2024-12-19","rendu":false},
    {"id":37,"nom":"ABAXIS, Inc.","dateLimite":"2025-01-15","rendu":false},
    {"id":38,"nom":"Dominion Energy, Inc.","dateLimite":"2025-06-17","rendu":false},
    {"id":39,"nom":"Eagle Bancorp, Inc.","dateLimite":"2025-08-24","rendu":true},
    {"id":40,"nom":"Teck Resources Ltd","dateLimite":"2025-07-13","rendu":false},
    {"id":41,"nom":"Liberty Global plc","dateLimite":"2025-08-27","rendu":false},
    {"id":42,"nom":"Hyster-Yale Materials Handling, Inc.","dateLimite":"2025-02-12","rendu":true},
    {"id":43,"nom":"Amkor Technology, Inc.","dateLimite":"2025-01-04","rendu":true},
    {"id":44,"nom":"Arista Networks, Inc.","dateLimite":"2025-04-04","rendu":false},
    {"id":45,"nom":"Howard Bancorp, Inc.","dateLimite":"2025-11-08","rendu":false},
    {"id":46,"nom":"Landmark Bancorp Inc.","dateLimite":"2025-05-05","rendu":true},
    {"id":47,"nom":"Voya Global Equity Dividend and Premium Opportunity Fund","dateLimite":"2026-03-10","rendu":true},
    {"id":48,"nom":"M III Acquisition Corp.","dateLimite":"2025-03-23","rendu":true},
    {"id":49,"nom":"CalAtlantic Group, Inc.","dateLimite":"2025-10-10","rendu":true},
    {"id":50,"nom":"PHH Corp","dateLimite":"2025-06-30","rendu":true},
    {"id":51,"nom":"ATN International, Inc.","dateLimite":"2025-10-20","rendu":false},
    {"id":52,"nom":"iPath US Treasury Long Bond Bear ETN","dateLimite":"2025-01-02","rendu":false},
    {"id":53,"nom":"Calgon Carbon Corporation","dateLimite":"2024-12-19","rendu":false},
    {"id":54,"nom":"Cutera, Inc.","dateLimite":"2025-05-27","rendu":false},
    {"id":55,"nom":"Kate Spade & Company","dateLimite":"2026-02-27","rendu":true},
    {"id":56,"nom":"NextEra Energy, Inc.","dateLimite":"2026-02-01","rendu":true},
    {"id":57,"nom":"Capitol Acquisition Corp. III","dateLimite":"2024-12-06","rendu":true},
    {"id":58,"nom":"Humana Inc.","dateLimite":"2024-11-25","rendu":false},
    {"id":59,"nom":"Wilhelmina International, Inc.","dateLimite":"2025-12-23","rendu":false},
    {"id":60,"nom":"NextEra Energy, Inc.","dateLimite":"2025-07-24","rendu":true},
    {"id":61,"nom":"Travelport Worldwide Limited","dateLimite":"2025-09-11","rendu":false},
    {"id":62,"nom":"Polar Power, Inc.","dateLimite":"2025-06-18","rendu":false},
    {"id":64,"nom":"Natural Alternatives International, Inc.","dateLimite":"2025-04-16","rendu":false},
    {"id":65,"nom":"Origo Acquisition Corporation","dateLimite":"2026-02-05","rendu":true},
    {"id":66,"nom":"Hingham Institution for Savings","dateLimite":"2025-04-25","rendu":true},
    {"id":67,"nom":"HC2 Holdings, Inc.","dateLimite":"2025-03-10","rendu":false},
    {"id":68,"nom":"KB Financial Group Inc","dateLimite":"2025-08-25","rendu":false},
    {"id":69,"nom":"Morgan Stanley","dateLimite":"2025-11-25","rendu":false},
    {"id":70,"nom":"Travelzoo","dateLimite":"2026-01-03","rendu":true},
    {"id":71,"nom":"Citizens & Northern Corp","dateLimite":"2025-02-22","rendu":false},
    {"id":72,"nom":"Cato Corporation (The)","dateLimite":"2025-05-25","rendu":true},
    {"id":73,"nom":"Equity Residential","dateLimite":"2025-03-09","rendu":false},
    {"id":74,"nom":"TIER REIT, Inc.","dateLimite":"2026-01-23","rendu":true},
    {"id":75,"nom":"Immersion Corporation","dateLimite":"2025-05-16","rendu":true},
    {"id":76,"nom":"Northeast Bancorp","dateLimite":"2025-09-06","rendu":false},
    {"id":77,"nom":"Just Energy Group, Inc.","dateLimite":"2026-01-25","rendu":false},
    {"id":78,"nom":"Hannon Armstrong Sustainable Infrastructure Capital, Inc.","dateLimite":"2025-01-28","rendu":false},
    {"id":79,"nom":"Double Eagle Acquisition Corp.","dateLimite":"2025-06-15","rendu":true},
    {"id":80,"nom":"China Lending Corporation","dateLimite":"2025-12-13","rendu":false},
    {"id":81,"nom":"The Charles Schwab Corporation","dateLimite":"2026-01-18","rendu":false},
    {"id":82,"nom":"S&P Global Inc.","dateLimite":"2025-07-30","rendu":false},
    {"id":83,"nom":"Washington Real Estate Investment Trust","dateLimite":"2025-12-18","rendu":true},
    {"id":84,"nom":"Kilroy Realty Corporation","dateLimite":"2025-07-29","rendu":false},
    {"id":85,"nom":"Dunkin' Brands Group, Inc.","dateLimite":"2025-01-24","rendu":true},
    {"id":86,"nom":"BOK Financial Corporation","dateLimite":"2026-01-12","rendu":false},
    {"id":87,"nom":"Teekay LNG Partners L.P.","dateLimite":"2025-11-02","rendu":true},
    {"id":88,"nom":"Axcelis Technologies, Inc.","dateLimite":"2025-09-21","rendu":true},
    {"id":89,"nom":"DENTSPLY SIRONA Inc.","dateLimite":"2025-03-28","rendu":false},
    {"id":90,"nom":"Watsco, Inc.","dateLimite":"2025-07-31","rendu":false},
    {"id":91,"nom":"Xencor, Inc.","dateLimite":"2025-08-15","rendu":true},
    {"id":92,"nom":"Prudential Financial, Inc.","dateLimite":"2025-01-02","rendu":true},
    {"id":93,"nom":"China Auto Logistics Inc.","dateLimite":"2025-04-20","rendu":false},
    {"id":94,"nom":"Kratos Defense & Security Solutions, Inc.","dateLimite":"2026-01-13","rendu":true},
    {"id":95,"nom":"Kosmos Energy Ltd.","dateLimite":"2025-11-09","rendu":false},
    {"id":96,"nom":"Darling Ingredients Inc.","dateLimite":"2024-12-25","rendu":false},
    {"id":97,"nom":"Argan, Inc.","dateLimite":"2025-08-02","rendu":false},
    {"id":98,"nom":"Ocean Bio-Chem, Inc.","dateLimite":"2025-10-31","rendu":false},
    {"id":99,"nom":"Artesian Resources Corporation","dateLimite":"2026-03-10","rendu":false},
    {"id":100,"nom":"Axon Enterprise, Inc.","dateLimite":"2025-10-06","rendu":true}]

export { bdInitialAssignments };