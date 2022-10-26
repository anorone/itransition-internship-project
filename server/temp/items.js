const items = [
  {
    id: 1,
    name: "Носки белые",
    description: "",
    tags: [],
    url: "",
    collection: { "id": 4, "name": "Носки" },
    owner: "superuser",
    createdOn: "2022-10-12",
  },
  {
    id: 1,
    name: "Носки серые",
    description: "",
    tags: [],
    url: "",
    collection: { "id": 4, "name": "Носки" },
    owner: "superuser",
    createdOn: "2022-10-12",
  },
  {
    id: 3,
    name: "Первый человек",
    description: "Неоконченный автобиографический роман Альбера Камю.",
    tags: ["биография", "Камю"],
    url: "/files/premier.jpg",
    collection: { "id": 5, "name": "Книги Альбера Камю" },
    owner: "superuser",
    createdOn: "2022-10-14",
  },
  {
    id: 4,
    name: "Посторонний",
    description: "Дебютный роман Альбера Камю.",
    tags: ["камю", "французская литература"],
    url: "/files/etranger.jpg",
    collection: { "id": 5, "name": "Книги Альбера Камю" },
    owner: "superuser",
    createdOn: "2022-10-19",
  },
  {
    id: 5,
    name: "Чума",
    description: "Роман французского писателя Альбера Камю.",
    tags: ["книги", "Камю", "классика", "популярное", "литература"],
    url: "/files/peste.jpg",
    collection: { "id": 5, "name": "Книги Альбера Камю" },
    owner: "superuser",
    createdOn: "2022-10-19",
  }
];

module.exports = items;
