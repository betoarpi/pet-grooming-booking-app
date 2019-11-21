const petsMocks = [
  {
    _id: '5dd1828ffc44f500a4b7cc0f',
    name: 'Morita',
    type: 'cat',
    client_id: '5dcf5728de17870110316aff'
  },
  {
    _id: '5dd182f85cbf4800b1b71417',
    name: 'Maik',
    type: 'cat',
    client_id: '5dcf5728de17870110316aff'
  },
  {
    _id: '5dd1831b5cbf4800b1b71418',
    name: 'Cooper',
    type: 'cat',
    client_id: '5dcf5728de17870110316aff'
  },
  {
    _id: '5dd192752c55d900cba46a5e',
    name: 'Snupi',
    type: 'cat',
    client_id: '5dcf5728de17870110316aff'
  }
];

class PetsServiceMocks {
  getPets() {
    return Promise.resolve(petsMocks);
  }

  getPet() {
    return Promise.resolve(petsMocks[0]);
  }

  createPet() {
    return Promise.resolve(petsMocks[0]._id);
  }

  updatePet() {
    return Promise.resolve(petsMocks[0]._id);
  }
}

module.exports = { petsMocks, PetsServiceMocks };
