const ownerMocks = [
  {
    _id: '5dd2d7a0fc13ae0ead000000',
    firstName: 'Spence',
    lastName: 'Colville',
    phone: ['940-213-4060', '344-942-5344', '329-395-1496'],
    address: '0 Sugar Park',
    postalCode: 'B1V',
    avatar: 'https://robohash.org/minusutoccaecati.png?size=100x100&set=set1',
    email: 'scolville0@artisteer.com',
    username: 'scolville0',
    password: 'g2OEU0EG2'
  },
  {
    _id: '5dd2d7a0fc13ae0ead000001',
    firstName: 'Sonnie',
    lastName: 'Escott',
    phone: ['587-108-5142', '843-155-2699', '602-282-7769'],
    address: '09 Crescent Oaks Way',
    postalCode: '7580-005',
    avatar:
      'https://robohash.org/voluptatemomnisdolorem.png?size=100x100&set=set1',
    email: 'sescott1@hatena.ne.jp',
    username: 'sescott1',
    password: 'fK2qHMsL'
  },
  {
    _id: '5dd2d7a0fc13ae0ead000002',
    firstName: 'Nickie',
    lastName: 'Pitsall',
    phone: ['674-999-7108', '241-129-2147', '555-573-6766'],
    address: '98 Anzinger Circle',
    postalCode: '06152',
    avatar: 'https://robohash.org/estdistinctionatus.bmp?size=100x100&set=set1',
    email: 'npitsall2@msn.com',
    username: 'npitsall2',
    password: 'RgPcOBMyv'
  },
  {
    _id: '5dd2d7a0fc13ae0ead000003',
    firstName: 'Nealy',
    lastName: 'Lang',
    phone: ['279-685-7009', '669-694-1783', '285-165-7022'],
    address: '5 Doe Crossing Parkway',
    postalCode: null,
    avatar: 'https://robohash.org/cupiditatesitomnis.bmp?size=100x100&set=set1',
    email: 'nlang3@wix.com',
    username: 'nlang3',
    password: '8yk2c6arOLZ'
  },
  {
    _id: '5dd2d7a0fc13ae0ead000004',
    firstName: 'Herve',
    lastName: 'Noquet',
    phone: ['954-324-2318', '538-848-3230', '824-436-4547'],
    address: '701 Ridgeview Street',
    postalCode: '6511',
    avatar: 'https://robohash.org/sintevenietqui.png?size=100x100&set=set1',
    email: 'hnoquet4@tuttocitta.it',
    username: 'hnoquet4',
    password: 'KAW43Q'
  },
  {
    _id: '5dd2d7a0fc13ae0ead000005',
    firstName: 'Lombard',
    lastName: 'Petrelli',
    phone: ['783-903-3993', '697-702-5373', '872-571-6226'],
    address: '073 Oak Lane',
    postalCode: '4332',
    avatar:
      'https://robohash.org/quianostrumvoluptatem.jpg?size=100x100&set=set1',
    email: 'lpetrelli5@livejournal.com',
    username: 'lpetrelli5',
    password: 'TQ9rUEQvh6W'
  },
  {
    _id: '5dd307aba01a2001b51805d2',
    firstName: 'Maris',
    lastName: 'Reid',
    phone: ['737-326-4590', '949-895-8789', '536-555-0772'],
    address: '97998 Duke Place',
    postalCode: null,
    avatar: 'https://robohash.org/excepturinonrerum.jpg?size=100x100&set=set1',
    email: 'mreid6@diigo.com',
    username: 'mreid6',
    password: 'BF6F7HjgV'
  }
];
class OwnersServiceMocks {
  getOwners() {
    return Promise.resolve(ownerMocks);
  }

  getOwner() {
    return Promise.resolve(ownerMocks[0]);
  }

  createOwner() {
    return Promise.resolve(ownerMocks[0]._id);
  }

  updateOwner() {
    return Promise.resolve(ownerMocks[0]._id);
  }
}
module.exports = { ownerMocks, OwnersServiceMocks };
