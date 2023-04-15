module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Service', [{
      name: 'Massage',
      thumbnail: 'massage.jpg',
      description: 'massage',
      price: 500,
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image01_v6902g',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Spa',
      thumbnail: 'spa.jpg',
      description: 'spa',
      price: 400,
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image02_i6zmui',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Swimming pool',
      thumbnail: 'swimming-pool.jpg',
      description: 'swimming pool',
      price: 300,
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image07_cmgbjw',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Karaoke',
      thumbnail: 'karaoke.jpg',
      description: 'karaoke',
      price: 350,
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image05_wunmvy',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Car rental',
      price: 100,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image06_zwmn04',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Catering',
      price: 200,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image14_ij0zwz',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Guide tours',
      price: 300,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image04_rexrcu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Courier',
      price: 400,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image03_flqcna',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Doctor',
      price: 600,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image12_ifuft4',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Dry clean',
      price: 800,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image11_ed1bvz',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Excursions',
      price: 1000,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image10_meauw7',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Ironing',
      price: 1300,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image23_uo3ies',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Laundry',
      price: 100,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image08_h1jvuk',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Mail',
      price: 500,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image20_zysi9x',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Shoeshine',
      price: 2000,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image18_bogxlz',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Ticket service',
      price: 400,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image17_ezl3cj',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Parking',
      price: 1000,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image26_oesenr',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Transport',
      price: 100,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image13_tpfjy2',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Wedding',
      price: 1000,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image25_iakr3s',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Wheelchair',
      price: 100,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image24_cbevd9',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Wi-Fi',
      price: 100,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image46_mbhdik',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Airport',
      price: 100,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image21_qggj5f',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Bar',
      price: 100,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image33_psyptx',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Bicycle rental',
      price: 100,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image32_od2adi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Currency exchange',
      price: 100,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image28_w5tmvz',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
