const clientMocks = [
  {
    _id: '5dd49f85fc13ae2078000001',
    fullName: 'Hatty Brick',
    phone: '238-138-4815',
    address: '177 Menomonie Lane',
    postalCode: null,
    avatar: 'https://robohash.org/rationedoloressit.bmp?size=50x50&set=set1',
    email: 'hbrick0@tripod.com',
    username: 'hbrick0',
    password: '$2b$12$m8k/OTXOz0uGptbZI22kSeLJJvFBRZCb851qCd2y7Kva.n1QwbJHe',
    isAdmin: true
  },
  {
    _id: '5dd49f85fc13ae2078000002',
    fullName: 'Jeri Willwood',
    phone: '429-469-2204',
    address: '725 Service Way',
    postalCode: null,
    avatar: 'https://robohash.org/velfacerenihil.jpg?size=50x50&set=set1',
    email: 'jwillwood1@aol.com',
    username: 'jwillwood1',
    password: '$2b$12$m8k/OTXOz0uGptbZI22kSeLJJvFBRZCb851qCd2y7Kva.n1QwbJHe',
    isAdmin: false
  },
  {
    _id: '5dd49f85fc13ae2078000003',
    fullName: 'Fanni Rock',
    phone: '768-138-5300',
    address: '994 Carberry Trail',
    postalCode: null,
    avatar: 'https://robohash.org/autconsecteturomnis.png?size=50x50&set=set1',
    email: 'frock2@springer.com',
    username: 'frock2',
    password: '$2b$12$m8k/OTXOz0uGptbZI22kSeLJJvFBRZCb851qCd2y7Kva.n1QwbJHe',
    isAdmin: false
  },
  {
    _id: '5dd49f85fc13ae2078000004',
    fullName: 'Dody Saltmarsh',
    phone: '719-540-1194',
    address: '87317 Basil Trail',
    postalCode: null,
    avatar: 'https://robohash.org/nonassumendaut.bmp?size=50x50&set=set1',
    email: 'dsaltmarsh3@businessins_ider.com',
    username: 'dsaltmarsh3',
    password: '$2b$12$m8k/OTXOz0uGptbZI22kSeLJJvFBRZCb851qCd2y7Kva.n1QwbJHe',
    isAdmin: false
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
    return Promise.resolve(clientMocks[0].__id);
  }

  updateClient() {
    return Promise.resolve(clientMocks[0].__id);
  }
}

module.exports = { clientMocks, ClientsServiceMocks };
