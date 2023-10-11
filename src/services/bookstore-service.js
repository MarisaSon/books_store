export default class BookstoreService {
  getBooks() {
    return [
      {
        id: 1,
        title: "Production-Ready Microservices",
        author: " Susan J. Fowler",
        price: 32,
        coverImage:
          "https://m.media-amazon.com/images/I/81D4AHNvMsL._SL1500_.jpg",
      },
      {
        id: 2,
        title: "Release It!",
        author: "Michael T. Nygard",
        price: 45,
        coverImage:
          "https://m.media-amazon.com/images/I/51YLCdLeopS._SL1000_.jpg",
      },
    ];
  }
}
