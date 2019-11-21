const clientMocks = [
  {
    _id: '5dcdf839fc13ae66a9000006',
    username: 'etibols0',
    password: 'qIM2cG0iV',
    favorites: [
      '5dcdf839fc13ae66a9000007',
      '5dcdf839fc13ae66a9000008',
      '5dcdf839fc13ae66a9000009',
      '5dcdf839fc13ae66a900000a',
      '5dcdf839fc13ae66a900000b'
    ],
    user_id: '5dcdf839fc13ae66a900000c'
  },
  {
    _id: '5dcdf839fc13ae66a900000d',
    username: 'lmycroft1',
    password: 'JO6Bk4G3O9LT',
    favorites: [
      '5dcdf839fc13ae66a900000e',
      '5dcdf839fc13ae66a900000f',
      '5dcdf839fc13ae66a9000010',
      '5dcdf839fc13ae66a9000011',
      '5dcdf839fc13ae66a9000012'
    ],
    user_id: '5dcdf839fc13ae66a9000013'
  },
  {
    _id: '5dcdf839fc13ae66a9000014',
    username: 'ctortoishell2',
    password: 'LCBlaK',
    favorites: [
      '5dcdf839fc13ae66a9000015',
      '5dcdf839fc13ae66a9000016',
      '5dcdf839fc13ae66a9000017',
      '5dcdf839fc13ae66a9000018',
      '5dcdf839fc13ae66a9000019'
    ],
    user_id: '5dcdf839fc13ae66a900001a'
  },
  {
    _id: '5dcdf839fc13ae66a900001b',
    username: 'drountree3',
    password: 'qW2pR0UCaebP',
    favorites: [
      '5dcdf839fc13ae66a900001c',
      '5dcdf839fc13ae66a900001d',
      '5dcdf839fc13ae66a900001e',
      '5dcdf839fc13ae66a900001f',
      '5dcdf839fc13ae66a9000020'
    ],
    user_id: '5dcdf839fc13ae66a9000021'
  },
  {
    _id: '5dcdf839fc13ae66a9000022',
    username: 'ttarburn4',
    password: 'enuRAq',
    favorites: [
      '5dcdf839fc13ae66a9000023',
      '5dcdf839fc13ae66a9000024',
      '5dcdf839fc13ae66a9000025',
      '5dcdf839fc13ae66a9000026',
      '5dcdf839fc13ae66a9000027'
    ],
    user_id: '5dcdf839fc13ae66a9000028'
  },
  {
    _id: '5dcdf839fc13ae66a9000029',
    username: 'jpaulitschke5',
    password: 'Dsi9A4vQ',
    favorites: [
      '5dcdf839fc13ae66a900002a',
      '5dcdf839fc13ae66a900002b',
      '5dcdf839fc13ae66a900002c',
      '5dcdf839fc13ae66a900002d',
      '5dcdf839fc13ae66a900002e'
    ],
    user_id: '5dcdf839fc13ae66a900002f'
  },
  {
    _id: '5dcdf839fc13ae66a9000030',
    username: 'vmcgaw6',
    password: 'woODFr3x0',
    favorites: [
      '5dcdf839fc13ae66a9000031',
      '5dcdf839fc13ae66a9000032',
      '5dcdf839fc13ae66a9000033',
      '5dcdf839fc13ae66a9000034',
      '5dcdf839fc13ae66a9000035'
    ],
    user_id: '5dcdf839fc13ae66a9000036'
  },
  {
    _id: '5dcdf839fc13ae66a9000037',
    username: 'igaythorpe7',
    password: 'i1BkU5Dtu',
    favorites: [
      '5dcdf839fc13ae66a9000038',
      '5dcdf839fc13ae66a9000039',
      '5dcdf839fc13ae66a900003a',
      '5dcdf839fc13ae66a900003b',
      '5dcdf839fc13ae66a900003c'
    ],
    user_id: '5dcdf839fc13ae66a900003d'
  },
  {
    _id: '5dcdf839fc13ae66a900003e',
    username: 'lwilliamson8',
    password: 'Xqx9SiC6Ll',
    favorites: [
      '5dcdf839fc13ae66a900003f',
      '5dcdf839fc13ae66a9000040',
      '5dcdf839fc13ae66a9000041',
      '5dcdf839fc13ae66a9000042',
      '5dcdf839fc13ae66a9000043'
    ],
    user_id: '5dcdf839fc13ae66a9000044'
  },
  {
    _id: '5dcdf839fc13ae66a9000045',
    username: 'jrix9',
    password: 'rnq4nfWdSo',
    favorites: [
      '5dcdf839fc13ae66a9000046',
      '5dcdf839fc13ae66a9000047',
      '5dcdf839fc13ae66a9000048',
      '5dcdf839fc13ae66a9000049',
      '5dcdf839fc13ae66a900004a'
    ],
    user_id: '5dcdf839fc13ae66a900004b'
  }
];

class ClientsServiceMocks {
  getClients() {
    return Promise.resolve(clientMocks);
  }

  getClient() {
    return Promise.resolve(clientMocks[0]);
  }

  createClient() {
    return Promise.resolve(clientMocks[0]._id);
  }

  updateClient() {
    return Promise.resolve(clientMocks[0]._id);
  }
}

module.exports = { clientMocks, ClientsServiceMocks };
