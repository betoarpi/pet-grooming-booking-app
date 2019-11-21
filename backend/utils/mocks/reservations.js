const reservationMocks = [
  {
    _id: '5dd36f851f7b440418025a4f',
    client_id: '5dca01a5fc13ae7459000001',
    store_id: '5dd20c7067e9e203c449a436',
    pet_id: '5dd1828ffc44f500a4b7cc0f',
    services: [{ name: 'Baño', price: 100 }],
    date: '2019-11-23',
    time: '3:49',
    comments:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    status: 'reserved'
  },
  {
    _id: '5dd3703ccf0ca4042edace76',
    client_id: '5dca01a5fc13ae7459000001',
    store_id: '5dd20f5a88f14c03e76bd929',
    pet_id: '5dd182f85cbf4800b1b71417',
    services: [{ name: 'Baño', price: 100 }],
    date: '2019-11-24',
    time: '3:49',
    comments:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    status: 'reserved'
  },
  {
    _id: '5dd37067a61860043b782d98',
    client_id: '5dca01a5fc13ae7459000001',
    store_id: '5dd210fc8372c403f41ea899',
    pet_id: '5dd1831b5cbf4800b1b71418',
    services: [
      { name: 'Baño', price: 100 },
      { name: 'Corte', price: 100 }
    ],
    date: '2019-11-25',
    time: '3:49',
    comments:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    status: 'reserved'
  }
];

class ReservationServiceMocks {
  getReservations() {
    return Promise.resolve(reservationMocks);
  }

  getReservation() {
    return Promise.resolve(reservationMocks[0]);
  }

  createReservation() {
    return Promise.resolve(reservationMocks[0]._id);
  }

  updateReservation() {
    return Promise.resolve(reservationMocks[0]._id);
  }
}

module.exports = { reservationMocks, ReservationServiceMocks };
