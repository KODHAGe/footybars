const nhlData = [
  {
    'team': 'Nashville Predators',
    'points': [
      0,
      0,
      2,
      4,
      5,
      7,
      9,
      9,
      10,
      12,
      12,
      12,
      14,
      16,
      18,
      20,
      22,
      22,
      24,
      26,
      28,
      30,
      31,
      33,
      33,
      35,
      37,
      39,
      40,
      42,
      44,
      46,
      46,
      46,
      47,
      49,
      49,
      51,
      51,
      52,
      54,
      56,
      58,
      60,
      62,
      63,
      65,
      65,
      67,
      69,
      71,
      72,
      73,
      75,
      77,
      77,
      77,
      79,
      81,
      83,
      85,
      87,
      89,
      91,
      93,
      95,
      97,
      98,
      100,
      102,
      104,
      106,
      106,
      106,
      107,
      109
    ],
    'matchesLeft': 1,
    'crest':
      'https://en.wikipedia.org/wiki/Special:Redirect/file/Nashville Predators Logo (2011).svg',
    'primary': '#FFB81C',
    'secondary': '#041E42'
  },
  {
    'team': 'Tampa Bay Lightning',
    'points': [
      2,
      2,
      4,
      6,
      8,
      10,
      11,
      13,
      15,
      17,
      19,
      19,
      21,
      22,
      24,
      26,
      28,
      30,
      32,
      32,
      34,
      34,
      34,
      36,
      36,
      38,
      40,
      42,
      44,
      46,
      48,
      50,
      50,
      52,
      54,
      56,
      56,
      58,
      60,
      61,
      61,
      63,
      65,
      65,
      65,
      65,
      67,
      69,
      71,
      71,
      73,
      75,
      75,
      77,
      79,
      79,
      79,
      81,
      81,
      83,
      85,
      87,
      89,
      90,
      92,
      94,
      96,
      98,
      100,
      100,
      100,
      102,
      104,
      106,
      106,
      106
    ],
    'matchesLeft': 1,
    'crest':
      'https://en.wikipedia.org/wiki/Special:Redirect/file/Tampa Bay Lightning Logo 2011.svg',
    'primary': '#00205B',
    'secondary': '#FFFFFF'
  },
  {
    'team': 'Boston Bruins',
    'points': [
      2,
      2,
      2,
      4,
      4,
      6,
      7,
      9,
      10,
      11,
      13,
      13,
      15,
      15,
      16,
      16,
      16,
      18,
      20,
      22,
      24,
      24,
      26,
      28,
      28,
      30,
      32,
      34,
      34,
      35,
      37,
      39,
      41,
      43,
      45,
      46,
      48,
      50,
      52,
      53,
      55,
      56,
      58,
      60,
      62,
      64,
      66,
      66,
      68,
      70,
      72,
      74,
      74,
      76,
      78,
      78,
      80,
      82,
      82,
      82,
      84,
      86,
      88,
      90,
      92,
      94,
      94,
      96,
      96,
      98,
      99,
      100,
      102,
      104,
      105
    ],
    'matchesLeft': 1,
    'primary': '#111111',
    'secondary': '#FCB514',
    'crest':
      'https://en.wikipedia.org/wiki/Special:Redirect/file/Boston Bruins.svg'
  },
  {
    'team': 'Winnipeg Jets',
    'points': [
      0,
      0,
      2,
      4,
      6,
      6,
      8,
      9,
      10,
      12,
      14,
      16,
      17,
      19,
      19,
      21,
      23,
      25,
      27,
      27,
      29,
      31,
      31,
      33,
      34,
      36,
      38,
      38,
      38,
      39,
      41,
      41,
      41,
      43,
      45,
      46,
      46,
      48,
      50,
      52,
      53,
      55,
      57,
      59,
      59,
      59,
      61,
      63,
      65,
      66,
      68,
      69,
      71,
      73,
      73,
      73,
      75,
      77,
      79,
      79,
      81,
      83,
      83,
      85,
      87,
      89,
      91,
      91,
      92,
      92,
      94,
      96,
      98,
      100,
      102,
      104
    ],
    'matchesLeft': 1,
    'crest':
      'https://en.wikipedia.org/wiki/Special:Redirect/file/Winnipeg Jets Logo 2011.svg',
    'primary': '#041E41',
    'secondary': '#0060A5'
  },
  {
    'team': 'Vegas Golden Knights',
    'points': [
      2,
      4,
      6,
      6,
      8,
      10,
      12,
      14,
      16,
      16,
      16,
      16,
      18,
      19,
      19,
      21,
      21,
      23,
      25,
      27,
      29,
      31,
      31,
      31,
      31,
      33,
      35,
      37,
      39,
      40,
      42,
      44,
      46,
      48,
      50,
      52,
      54,
      56,
      56,
      58,
      60,
      61,
      61,
      63,
      64,
      66,
      68,
      68,
      70,
      72,
      72,
      74,
      74,
      76,
      76,
      78,
      80,
      82,
      82,
      84,
      86,
      87,
      87,
      87,
      89,
      89,
      91,
      93,
      95,
      95,
      95,
      97,
      99,
      100,
      101,
      103
    ],
    'matchesLeft': 1,
    'crest':
      'https://en.wikipedia.org/wiki/Special:Redirect/file/Vegas Golden Knights logo.svg',
    'primary': '#333F42',
    'secondary': '#B4975A'
  },
  {
    'team': 'San Jose Sharks',
    'points': [
      0,
      0,
      2,
      2,
      4,
      6,
      6,
      8,
      8,
      10,
      12,
      14,
      16,
      16,
      18,
      20,
      20,
      20,
      21,
      23,
      24,
      26,
      28,
      30,
      30,
      30,
      32,
      34,
      35,
      37,
      38,
      38,
      40,
      42,
      44,
      44,
      46,
      47,
      48,
      48,
      50,
      52,
      54,
      54,
      56,
      58,
      59,
      59,
      59,
      60,
      62,
      64,
      64,
      64,
      66,
      68,
      68,
      70,
      72,
      74,
      74,
      74,
      75,
      77,
      79,
      79,
      81,
      81,
      83,
      85,
      87,
      89,
      91,
      93,
      95,
      97,
      98
    ],
    'matchesLeft': 1,
    'crest':
      'https://en.wikipedia.org/wiki/Special:Redirect/file/SanJoseSharksLogo.svg',
    'primary': '#006D75',
    'secondary': '#EA7200'
  },
  {
    'team': 'Washington Capitals',
    'points': [
      2,
      4,
      5,
      5,
      7,
      7,
      7,
      9,
      9,
      9,
      11,
      11,
      13,
      15,
      17,
      17,
      19,
      21,
      21,
      21,
      23,
      23,
      25,
      27,
      29,
      29,
      31,
      33,
      35,
      37,
      37,
      39,
      41,
      43,
      45,
      46,
      46,
      47,
      49,
      51,
      53,
      55,
      57,
      57,
      59,
      60,
      60,
      61,
      63,
      65,
      65,
      65,
      67,
      69,
      70,
      71,
      73,
      73,
      75,
      75,
      75,
      77,
      77,
      79,
      81,
      81,
      81,
      83,
      85,
      87,
      89,
      89,
      91,
      93,
      95,
      97
    ],
    'matchesLeft': 1,
    'crest':
      'https://en.wikipedia.org/wiki/Special:Redirect/file/Washington Capitals.svg',
    'primary': '#CF0A2C',
    'secondary': '#FFFFFF'
  },
  {
    'team': 'Toronto Maple Leafs',
    'points': [
      2,
      4,
      6,
      6,
      8,
      10,
      12,
      12,
      14,
      14,
      14,
      14,
      16,
      16,
      16,
      18,
      20,
      22,
      24,
      26,
      28,
      28,
      29,
      31,
      31,
      33,
      35,
      35,
      37,
      39,
      41,
      41,
      41,
      41,
      43,
      43,
      45,
      47,
      48,
      48,
      48,
      50,
      52,
      53,
      53,
      54,
      55,
      57,
      57,
      59,
      61,
      63,
      65,
      65,
      67,
      69,
      71,
      73,
      75,
      75,
      77,
      79,
      81,
      83,
      84,
      85,
      85,
      85,
      87,
      89,
      91,
      93,
      93,
      95,
      97,
      97
    ],
    'matchesLeft': 1,
    'primary': '#002868',
    'secondary': '#FFFFFF',
    'crest':
      'https://en.wikipedia.org/wiki/Special:Redirect/file/Toronto Maple Leafs 2016 logo.svg'
  },
  {
    'team': 'Minnesota Wild',
    'points': [
      0,
      1,
      3,
      4,
      4,
      6,
      6,
      8,
      10,
      10,
      12,
      12,
      12,
      12,
      14,
      16,
      18,
      20,
      20,
      21,
      23,
      25,
      25,
      25,
      27,
      29,
      29,
      31,
      33,
      35,
      37,
      37,
      37,
      39,
      39,
      39,
      41,
      43,
      43,
      45,
      47,
      47,
      48,
      50,
      52,
      53,
      55,
      57,
      57,
      59,
      61,
      61,
      63,
      64,
      66,
      68,
      68,
      69,
      71,
      73,
      75,
      77,
      79,
      79,
      79,
      81,
      83,
      85,
      85,
      85,
      87,
      89,
      90,
      92,
      93,
      94
    ],
    'matchesLeft': 1,
    'crest':
      'https://en.wikipedia.org/wiki/Special:Redirect/file/Minnesota Wild.svg',
    'primary': '#AF1E24',
    'secondary': '#024930'
  },
  {
    'team': 'Pittsburgh Penguins',
    'points': [
      1,
      1,
      3,
      5,
      5,
      7,
      9,
      11,
      11,
      13,
      15,
      15,
      15,
      17,
      18,
      18,
      20,
      20,
      21,
      23,
      25,
      25,
      25,
      25,
      27,
      29,
      31,
      33,
      33,
      35,
      35,
      35,
      35,
      37,
      37,
      39,
      39,
      41,
      41,
      41,
      43,
      43,
      45,
      47,
      49,
      51,
      51,
      53,
      53,
      55,
      57,
      59,
      61,
      61,
      63,
      64,
      66,
      68,
      70,
      72,
      74,
      76,
      76,
      76,
      76,
      78,
      80,
      82,
      82,
      84,
      85,
      87,
      87,
      89,
      90,
      92,
      92
    ],
    'matchesLeft': 1,
    'primary': '#000000',
    'secondary': '#FCB514',
    'crest':
      'https://en.wikipedia.org/wiki/Special:Redirect/file/Pittsburgh Penguins logo (2016).svg'
  },
  {
    'team': 'Anaheim Ducks',
    'points': [
      2,
      3,
      3,
      5,
      5,
      5,
      7,
      9,
      9,
      11,
      13,
      13,
      13,
      14,
      15,
      17,
      17,
      19,
      21,
      23,
      23,
      23,
      24,
      24,
      26,
      26,
      27,
      28,
      30,
      31,
      33,
      35,
      36,
      36,
      36,
      38,
      40,
      40,
      42,
      44,
      46,
      47,
      47,
      49,
      49,
      51,
      53,
      53,
      55,
      57,
      59,
      60,
      60,
      60,
      62,
      64,
      65,
      65,
      67,
      69,
      71,
      73,
      73,
      74,
      76,
      78,
      80,
      80,
      80,
      80,
      82,
      84,
      86,
      88,
      89,
      91,
      91
    ],
    'matchesLeft': 1,
    'primary': '#111111',
    'secondary': '#B5985A',
    'crest':
      'https://en.wikipedia.org/wiki/Special:Redirect/file/Anaheim_Ducks.svg'
  },
  {
    'team': 'Los Angeles Kings',
    'points': [
      2,
      4,
      5,
      7,
      9,
      11,
      13,
      13,
      15,
      17,
      19,
      19,
      21,
      22,
      24,
      24,
      24,
      24,
      24,
      26,
      26,
      26,
      27,
      29,
      31,
      33,
      35,
      37,
      39,
      41,
      43,
      43,
      43,
      44,
      46,
      48,
      48,
      49,
      51,
      53,
      53,
      53,
      53,
      53,
      53,
      53,
      55,
      55,
      57,
      59,
      59,
      61,
      63,
      65,
      65,
      65,
      65,
      67,
      69,
      71,
      71,
      71,
      73,
      75,
      77,
      77,
      79,
      79,
      81,
      82,
      84,
      84,
      86,
      87,
      89,
      89,
      91
    ],
    'matchesLeft': 1,
    'primary': '#ACAEA9',
    'secondary': '#111111',
    'crest':
      'https://en.wikipedia.org/wiki/Special:Redirect/file/Los Angeles Kings Logo (2011).svg'
  },
  {
    'team': 'Columbus Blue Jackets',
    'points': [
      2,
      2,
      4,
      6,
      8,
      10,
      10,
      10,
      12,
      14,
      14,
      16,
      18,
      19,
      19,
      19,
      19,
      21,
      23,
      25,
      27,
      29,
      31,
      31,
      33,
      35,
      35,
      35,
      37,
      39,
      39,
      41,
      41,
      41,
      43,
      44,
      46,
      47,
      47,
      47,
      49,
      49,
      51,
      53,
      53,
      53,
      55,
      55,
      57,
      58,
      58,
      58,
      58,
      58,
      60,
      62,
      62,
      63,
      63,
      65,
      65,
      67,
      69,
      69,
      69,
      71,
      73,
      75,
      77,
      79,
      81,
      83,
      85,
      87,
      89,
      89,
      91
    ],
    'matchesLeft': 1,
    'crest':
      'https://en.wikipedia.org/wiki/Special:Redirect/file/Columbus Blue Jackets logo.svg',
    'primary': '#002654',
    'secondary': '#CE1126'
  },
  {
    'team': 'St. Louis Blues',
    'points': [
      2,
      4,
      6,
      8,
      8,
      8,
      10,
      12,
      13,
      15,
      17,
      19,
      21,
      21,
      23,
      25,
      27,
      27,
      27,
      29,
      31,
      33,
      33,
      35,
      35,
      35,
      36,
      38,
      40,
      42,
      44,
      44,
      44,
      46,
      46,
      46,
      46,
      48,
      48,
      48,
      50,
      52,
      54,
      54,
      55,
      55,
      57,
      59,
      59,
      61,
      63,
      65,
      65,
      67,
      67,
      69,
      71,
      71,
      72,
      72,
      72,
      72,
      72,
      72,
      74,
      75,
      75,
      77,
      79,
      79,
      81,
      83,
      85,
      87,
      89,
      91
    ],
    'matchesLeft': 1,
    'crest':
      'https://en.wikipedia.org/wiki/Special:Redirect/file/St. Louis Blues logo.svg',
    'primary': '#002F87',
    'secondary': '#FCB514'
  },
  {
    'team': 'Philadelphia Flyers',
    'points': [
      2,
      2,
      4,
      4,
      6,
      8,
      8,
      10,
      10,
      10,
      12,
      13,
      13,
      15,
      16,
      18,
      18,
      18,
      19,
      20,
      20,
      21,
      22,
      23,
      23,
      23,
      25,
      27,
      29,
      31,
      33,
      35,
      35,
      37,
      37,
      38,
      38,
      40,
      40,
      42,
      44,
      46,
      48,
      48,
      50,
      52,
      54,
      56,
      56,
      56,
      56,
      57,
      59,
      61,
      63,
      65,
      66,
      68,
      70,
      72,
      74,
      76,
      78,
      78,
      79,
      79,
      79,
      79,
      81,
      81,
      81,
      83,
      85,
      86,
      88,
      89,
      90
    ],
    'matchesLeft': 1,
    'primary': '#F74902',
    'secondary': '#000000',
    'crest':
      'https://en.wikipedia.org/wiki/Special:Redirect/file/Philadelphia Flyers.svg'
  },
  {
    'team': 'Colorado Avalanche',
    'points': [
      2,
      2,
      4,
      6,
      8,
      8,
      8,
      8,
      10,
      10,
      12,
      14,
      16,
      16,
      17,
      17,
      19,
      19,
      21,
      23,
      24,
      24,
      26,
      26,
      26,
      26,
      26,
      28,
      30,
      30,
      32,
      32,
      34,
      35,
      37,
      37,
      39,
      41,
      43,
      45,
      47,
      49,
      51,
      53,
      55,
      57,
      57,
      57,
      58,
      60,
      60,
      62,
      62,
      62,
      64,
      66,
      66,
      66,
      68,
      69,
      69,
      71,
      73,
      75,
      76,
      77,
      78,
      80,
      82,
      84,
      84,
      86,
      88,
      88,
      90,
      90
    ],
    'matchesLeft': 1,
    'primary': '#6F263D',
    'secondary': '#236192',
    'crest':
      'https://en.wikipedia.org/wiki/Special:Redirect/file/Colorado Avalanche logo.svg'
  },
  {
    'team': 'New Jersey Devils',
    'points': [
      2,
      4,
      6,
      6,
      8,
      10,
      12,
      12,
      14,
      16,
      18,
      18,
      19,
      19,
      20,
      22,
      24,
      25,
      25,
      27,
      28,
      30,
      32,
      32,
      34,
      34,
      36,
      36,
      36,
      38,
      39,
      41,
      43,
      45,
      47,
      49,
      50,
      50,
      51,
      51,
      52,
      52,
      54,
      56,
      56,
      56,
      56,
      56,
      58,
      60,
      62,
      62,
      62,
      62,
      62,
      64,
      66,
      68,
      70,
      70,
      70,
      72,
      74,
      74,
      74,
      74,
      76,
      76,
      78,
      80,
      82,
      82,
      82,
      84,
      86,
      88
    ],
    'matchesLeft': 1,
    'primary': '#CE1126',
    'secondary': '#000000',
    'crest':
      'https://en.wikipedia.org/wiki/Special:Redirect/file/New Jersey Devils logo.svg'
  },
  {
    'team': 'Dallas Stars',
    'points': [
      0,
      0,
      2,
      2,
      4,
      6,
      8,
      10,
      10,
      10,
      12,
      14,
      14,
      16,
      16,
      18,
      18,
      19,
      19,
      21,
      23,
      23,
      25,
      27,
      29,
      31,
      33,
      33,
      33,
      33,
      35,
      37,
      37,
      38,
      39,
      41,
      43,
      43,
      45,
      47,
      47,
      49,
      51,
      51,
      53,
      55,
      56,
      58,
      60,
      60,
      60,
      62,
      64,
      66,
      68,
      70,
      70,
      72,
      72,
      72,
      74,
      74,
      76,
      77,
      79,
      80,
      80,
      82,
      82,
      82,
      83,
      84,
      84,
      84,
      84,
      84,
      86
    ],
    'matchesLeft': 1,
    'primary': '#006847',
    'secondary': '#111111',
    'crest':
      'https://en.wikipedia.org/wiki/Special:Redirect/file/Dallas Stars logo (2013).svg'
  },
  {
    'team': 'Florida Panthers',
    'points': [
      0,
      2,
      4,
      4,
      4,
      4,
      6,
      6,
      8,
      9,
      9,
      9,
      10,
      10,
      12,
      12,
      14,
      16,
      16,
      16,
      18,
      18,
      20,
      22,
      22,
      23,
      24,
      26,
      26,
      28,
      29,
      29,
      29,
      31,
      33,
      35,
      37,
      39,
      39,
      39,
      40,
      42,
      42,
      44,
      44,
      44,
      44,
      46,
      48,
      50,
      52,
      52,
      54,
      56,
      58,
      58,
      58,
      60,
      62,
      64,
      66,
      68,
      70,
      71,
      73,
      75,
      75,
      77,
      77,
      79,
      81,
      81,
      83,
      85
    ],
    'matchesLeft': 1,
    'crest':
      'https://en.wikipedia.org/wiki/Special:Redirect/file/Florida Panthers 2016 logo.svg',
    'primary': '#C8102E',
    'secondary': '#041E42'
  },
  {
    'team': 'Calgary Flames',
    'points': [
      0,
      2,
      4,
      6,
      6,
      8,
      8,
      8,
      10,
      10,
      10,
      12,
      14,
      16,
      16,
      18,
      20,
      20,
      22,
      24,
      25,
      25,
      27,
      27,
      29,
      29,
      29,
      30,
      32,
      34,
      35,
      35,
      35,
      37,
      39,
      39,
      40,
      40,
      42,
      44,
      46,
      48,
      50,
      52,
      54,
      55,
      56,
      57,
      58,
      58,
      58,
      60,
      62,
      64,
      64,
      66,
      66,
      68,
      68,
      69,
      69,
      71,
      73,
      73,
      73,
      73,
      74,
      76,
      78,
      78,
      80,
      80,
      80,
      80,
      80,
      80,
      80
    ],
    'matchesLeft': 1,
    'primary': '#CE1126',
    'secondary': '#F3BC52',
    'crest':
      'https://en.wikipedia.org/wiki/Special:Redirect/file/Calgary Flames Logo.svg'
  },
  {
    'team': 'Carolina Hurricanes',
    'points': [
      2,
      3,
      3,
      5,
      7,
      7,
      7,
      9,
      9,
      10,
      10,
      11,
      13,
      15,
      16,
      18,
      18,
      20,
      22,
      22,
      22,
      24,
      25,
      25,
      27,
      27,
      28,
      29,
      29,
      31,
      33,
      35,
      35,
      37,
      39,
      41,
      43,
      43,
      44,
      46,
      46,
      46,
      48,
      48,
      48,
      50,
      50,
      50,
      52,
      54,
      56,
      56,
      56,
      57,
      59,
      61,
      63,
      63,
      63,
      64,
      64,
      64,
      65,
      67,
      69,
      69,
      69,
      71,
      71,
      71,
      71,
      73,
      73,
      75,
      77,
      79,
      79
    ],
    'matchesLeft': 1,
    'crest':
      'https://en.wikipedia.org/wiki/Special:Redirect/file/Carolina Hurricanes.svg',
    'primary': '#CC0000',
    'secondary': '#FFFFFF'
  },
  {
    'team': 'New York Rangers',
    'points': [
      0,
      0,
      2,
      2,
      2,
      2,
      3,
      4,
      6,
      6,
      8,
      8,
      10,
      12,
      14,
      16,
      18,
      20,
      20,
      20,
      22,
      24,
      26,
      28,
      28,
      30,
      32,
      32,
      34,
      35,
      35,
      37,
      39,
      41,
      42,
      42,
      44,
      45,
      47,
      47,
      49,
      49,
      49,
      49,
      51,
      53,
      53,
      53,
      53,
      55,
      55,
      55,
      55,
      55,
      57,
      59,
      59,
      59,
      59,
      59,
      59,
      59,
      60,
      62,
      64,
      66,
      66,
      66,
      67,
      69,
      71,
      72,
      72,
      72,
      74,
      74
    ],
    'matchesLeft': 1,
    'primary': '#0038A8',
    'secondary': '#CE1126',
    'crest':
      'https://en.wikipedia.org/wiki/Special:Redirect/file/New York Rangers.svg'
  },
  {
    'team': 'New York Islanders',
    'points': [
      0,
      2,
      3,
      3,
      5,
      5,
      7,
      9,
      11,
      11,
      13,
      15,
      15,
      17,
      18,
      18,
      20,
      22,
      24,
      24,
      26,
      28,
      30,
      32,
      32,
      34,
      34,
      35,
      35,
      37,
      37,
      37,
      39,
      39,
      40,
      42,
      44,
      44,
      44,
      44,
      44,
      44,
      46,
      48,
      50,
      50,
      50,
      52,
      53,
      55,
      55,
      55,
      57,
      58,
      58,
      60,
      60,
      60,
      62,
      64,
      64,
      65,
      65,
      65,
      65,
      66,
      67,
      68,
      70,
      70,
      70,
      70,
      72,
      72,
      72,
      72,
      74
    ],
    'matchesLeft': 1,
    'primary': '#00539B',
    'secondary': '#F47D30',
    'crest':
      'https://en.wikipedia.org/wiki/Special:Redirect/file/Logo New York Islanders.svg'
  },
  {
    'team': 'Edmonton Oilers',
    'points': [
      2,
      2,
      2,
      2,
      2,
      4,
      4,
      5,
      7,
      7,
      7,
      9,
      9,
      11,
      13,
      13,
      14,
      16,
      16,
      16,
      16,
      18,
      18,
      20,
      22,
      22,
      24,
      24,
      26,
      26,
      28,
      28,
      30,
      32,
      34,
      36,
      36,
      37,
      37,
      37,
      39,
      39,
      39,
      39,
      41,
      43,
      45,
      45,
      47,
      48,
      50,
      50,
      50,
      50,
      50,
      50,
      50,
      52,
      52,
      54,
      56,
      58,
      58,
      58,
      58,
      60,
      62,
      64,
      64,
      65,
      67,
      67,
      69,
      71,
      73,
      74,
      74
    ],
    'matchesLeft': 1,
    'primary': '#FF4C00',
    'secondary': '#041E41',
    'crest':
      'https://en.wikipedia.org/wiki/Special:Redirect/file/Logo Edmonton Oilers.svg'
  },
  {
    'team': 'Chicago Blackhawks',
    'points': [
      2,
      4,
      5,
      7,
      7,
      9,
      9,
      10,
      12,
      12,
      12,
      12,
      14,
      16,
      16,
      16,
      18,
      18,
      20,
      22,
      23,
      25,
      27,
      27,
      28,
      29,
      29,
      29,
      31,
      33,
      35,
      37,
      39,
      39,
      39,
      39,
      41,
      42,
      44,
      44,
      46,
      48,
      48,
      50,
      50,
      50,
      50,
      51,
      53,
      55,
      55,
      56,
      56,
      56,
      56,
      56,
      56,
      56,
      58,
      58,
      60,
      62,
      62,
      62,
      64,
      64,
      66,
      66,
      66,
      68,
      68,
      68,
      69,
      69,
      69,
      71,
      72
    ],
    'matchesLeft': 1,
    'primary': '#CF0A2C',
    'secondary': '#FFFFFF',
    'crest':
      'https://en.wikipedia.org/wiki/Special:Redirect/file/Chicago Blackhawks logo.svg'
  },
  {
    'team': 'Montréal Canadiens',
    'points': [
      2,
      2,
      2,
      2,
      3,
      3,
      3,
      3,
      5,
      5,
      7,
      9,
      9,
      11,
      13,
      15,
      15,
      17,
      18,
      18,
      18,
      18,
      19,
      21,
      23,
      25,
      27,
      29,
      29,
      30,
      30,
      32,
      32,
      34,
      36,
      36,
      36,
      36,
      36,
      36,
      38,
      40,
      41,
      42,
      42,
      44,
      44,
      46,
      46,
      46,
      46,
      48,
      50,
      50,
      51,
      51,
      51,
      51,
      52,
      54,
      55,
      56,
      58,
      60,
      61,
      61,
      61,
      62,
      62,
      64,
      64,
      64,
      64,
      64,
      66,
      66,
      68
    ],
    'matchesLeft': 1,
    'primary': '#AF1E2D',
    'secondary': '#FFFFFF',
    'crest':
      'https://en.wikipedia.org/wiki/Special:Redirect/file/Montreal Canadiens.svg'
  },
  {
    'team': 'Detroit Red Wings',
    'points': [
      2,
      4,
      4,
      6,
      8,
      8,
      8,
      9,
      9,
      9,
      9,
      11,
      13,
      13,
      15,
      17,
      17,
      18,
      20,
      22,
      23,
      23,
      24,
      25,
      25,
      25,
      25,
      27,
      27,
      28,
      29,
      31,
      33,
      33,
      33,
      33,
      35,
      37,
      39,
      41,
      41,
      41,
      43,
      43,
      43,
      45,
      46,
      46,
      48,
      50,
      50,
      50,
      51,
      53,
      55,
      55,
      57,
      57,
      57,
      58,
      60,
      62,
      62,
      62,
      62,
      63,
      63,
      63,
      63,
      63,
      63,
      63,
      65,
      65,
      65,
      65,
      67
    ],
    'matchesLeft': 1,
    'crest':
      'https://en.wikipedia.org/wiki/Special:Redirect/file/Detroit Red Wings logo.svg',
    'primary': '#CE1126',
    'secondary': '#FFFFFF'
  },
  {
    'team': 'Vancouver Canucks',
    'points': [
      2,
      3,
      3,
      3,
      5,
      5,
      7,
      9,
      11,
      13,
      14,
      14,
      16,
      16,
      18,
      18,
      18,
      20,
      20,
      21,
      23,
      25,
      25,
      26,
      26,
      28,
      30,
      32,
      32,
      32,
      32,
      32,
      34,
      34,
      34,
      35,
      35,
      37,
      37,
      37,
      38,
      38,
      38,
      40,
      42,
      42,
      42,
      44,
      44,
      46,
      48,
      48,
      48,
      48,
      48,
      50,
      50,
      50,
      52,
      53,
      53,
      55,
      55,
      56,
      57,
      59,
      59,
      59,
      59,
      59,
      59,
      59,
      59,
      61,
      61,
      63,
      65
    ],
    'matchesLeft': 1,
    'crest':
      'https://en.wikipedia.org/wiki/Special:Redirect/file/Vancouver Canucks logo.svg',
    'primary': '#001F5B',
    'secondary': '#008852'
  },
  {
    'team': 'Ottawa Senators',
    'points': [
      1,
      2,
      4,
      6,
      8,
      8,
      9,
      11,
      12,
      14,
      15,
      15,
      17,
      17,
      19,
      21,
      21,
      22,
      22,
      22,
      22,
      22,
      22,
      24,
      24,
      24,
      25,
      25,
      25,
      27,
      29,
      29,
      30,
      30,
      30,
      32,
      32,
      33,
      35,
      37,
      37,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      41,
      43,
      43,
      45,
      47,
      47,
      47,
      49,
      51,
      51,
      52,
      52,
      52,
      52,
      54,
      54,
      56,
      57,
      57,
      59,
      61,
      63,
      63,
      63,
      63,
      63,
      63,
      63
    ],
    'matchesLeft': 1,
    'crest':
      'https://en.wikipedia.org/wiki/Special:Redirect/file/Ottawa Senators.svg',
    'primary': '#CE1126',
    'secondary': '#000000'
  },
  {
    'team': 'Arizona Coyotes',
    'points': [
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      3,
      3,
      3,
      5,
      6,
      6,
      7,
      7,
      7,
      9,
      11,
      13,
      13,
      15,
      15,
      16,
      16,
      18,
      19,
      19,
      19,
      19,
      19,
      19,
      19,
      21,
      21,
      23,
      23,
      23,
      25,
      26,
      26,
      27,
      28,
      29,
      31,
      33,
      33,
      33,
      33,
      33,
      35,
      36,
      38,
      40,
      42,
      44,
      44,
      46,
      46,
      48,
      50,
      51,
      53,
      53,
      55,
      57,
      57,
      57,
      59,
      61,
      61,
      61,
      63
    ],
    'matchesLeft': 1,
    'crest':
      'https://en.wikipedia.org/wiki/Special:Redirect/file/Arizona Coyotes.svg',
    'primary': '#8C2633',
    'secondary': '#E2D6B5'
  },
  {
    'team': 'Buffalo Sabres',
    'points': [
      1,
      1,
      1,
      1,
      1,
      3,
      4,
      4,
      6,
      8,
      8,
      8,
      10,
      10,
      12,
      12,
      13,
      14,
      14,
      14,
      14,
      14,
      16,
      16,
      16,
      16,
      16,
      18,
      19,
      20,
      22,
      22,
      23,
      23,
      25,
      25,
      26,
      28,
      29,
      29,
      29,
      29,
      29,
      31,
      31,
      31,
      33,
      35,
      37,
      37,
      37,
      37,
      38,
      40,
      42,
      42,
      44,
      45,
      45,
      45,
      47,
      47,
      49,
      51,
      51,
      53,
      53,
      55,
      56,
      56,
      58,
      58,
      58,
      58,
      58,
      60
    ],
    'matchesLeft': 1,
    'crest':
      'https://en.wikipedia.org/wiki/Special:Redirect/file/Buffalo Sabres Logo.svg',
    'primary': '#002654',
    'secondary': '#FCB514'
  }
]

export default nhlData