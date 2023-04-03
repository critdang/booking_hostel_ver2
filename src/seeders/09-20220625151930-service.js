module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Service', [{
      name: 'massage',
      thumbnail: 'massage.jpg',
      description: 'massage',
      price: 500,
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image01_v6902g',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'spa',
      thumbnail: 'spa.jpg',
      description: 'spa',
      price: 400,
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image02_i6zmui',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'restaurant',
      thumbnail: 'restaurant.jpg',
      description: 'restaurant',
      price: 700,
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image00_cf6bnv',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'swimming pool',
      thumbnail: 'swimming-pool.jpg',
      description: 'swimming pool',
      price: 300,
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image07_cmgbjw',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'karaoke',
      thumbnail: 'karaoke.jpg',
      description: 'karaoke',
      price: 350,
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image05_wunmvy',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Car rental services',
      price: 100,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image06_zwmn04',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Catering services',
      price: 200,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image14_ij0zwz',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Concierge services',
      price: 300,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image04_rexrcu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Courier services',
      price: 400,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image03_flqcna',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Doctor on call',
      price: 600,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image12_ifuft4',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Dry cleaning',
      price: 800,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image11_ed1bvz',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Excursions and guided tours',
      price: 1000,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image10_meauw7',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Flower arrangement',
      price: 1200,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image09_wiz3r7',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Ironing service',
      price: 1300,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image23_uo3ies',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Laundry and valet service',
      price: 100,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image08_h1jvuk',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Mail services',
      price: 500,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image20_zysi9x',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Room service (24-hour)',
      price: 700,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image19_r4wyac',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Shoeshine service',
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
      name: 'Transfer and chauffeur driven limousine services',
      price: 100,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image16_xaipa0',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Turndown service',
      price: 300,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image15_pkrybn',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Valet parking',
      price: 1000,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image26_oesenr',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Wake-up call',
      price: 100,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image13_tpfjy2',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Wedding services',
      price: 1000,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image25_iakr3s',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Wheelchair accessible',
      price: 100,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image24_cbevd9',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Wi-Fi in public areas',
      price: 100,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image46_mbhdik',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Airport transfer',
      price: 100,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image21_qggj5f',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Babysitting',
      price: 100,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image22_jfzhgr',
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
      name: 'Business center',
      price: 100,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image52_zvzc1t',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Car park',
      price: 100,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image31_bsbzzz',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Coffee shop',
      price: 100,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image30_rwlcup',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Concierge',
      price: 100,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image29_nbvbf0',
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
    {
      name: 'Elevator',
      price: 100,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image27_gdifyw',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Facilities for disabled guests',
      price: 100,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image39_fyjxnw',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Family room',
      price: 100,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image38_pdq7lx',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Laundry service',
      price: 100,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image37_oo1yqx',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Luggage storage',
      price: 100,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image36_puscbf',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Meeting facilities',
      price: 100,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image45_tnwqon',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Restaurant',
      price: 100,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image35_mekkvx',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Room service',
      price: 100,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image34_kemjki',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Safety deposit boxes',
      price: 100,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image44_ba0fp9',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Salon',
      price: 100,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image43_iirw8p',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Shops',
      price: 100,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image40_hzivi1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Smoking area',
      price: 100,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image42_ufhtmh',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Tours',
      price: 100,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image41_gypn1i',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Wi-Fi in public areas',
      price: 100,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image51_ri5khk',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: '24-hour front desk',
      price: 100,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image47_zjys6j',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: '24-hour room service',
      price: 100,
      thumbnail: 'service.jpg',
      description: 'service description',
      image: 'http://res.cloudinary.com/dmr3ppomm/image/upload/v1/hotel_service/image41_gypn1i',
      createdAt: new Date(),
      updatedAt: new Date()
    }
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
