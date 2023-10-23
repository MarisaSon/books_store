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
        description:
          "One of the biggest challenges for organizations that have adopted microservice architecture is the lack of architectural, operational, and organizational standardization.After splitting a monolithic application or building a microservice ecosystem from scratch, many engineers are left wondering whats next. In this practical book, author Susan Fowler presents a set of microservice standards in depth, drawing from her experience standardizing over a thousand microservices at Uber. You will learn how to design microservices that are stable, reliable, scalable, fault tolerant, performant, monitored, documented, and prepared for any catastrophe.",
      },
      {
        id: 2,
        title: "Release It!",
        author: "Michael T. Nygard",
        price: 45,
        coverImage:
          "https://m.media-amazon.com/images/I/51YLCdLeopS._SL1000_.jpg",
        description:
          "In Release It!, Michael T. Nygard shows you how to design and architect your application for the harsh realities it will face. You will learn how to design your application for maximum uptime, performance, and return on investment. Mike explains that many problems with systems today start with the design.",
      },
    ];
  }
}
