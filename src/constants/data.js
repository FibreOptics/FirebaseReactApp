const data = {
  users: [
    {
      id: 1,
      email: "john@test.com",
      password: "john",
      authorizedReport: [1, 2]
    },
    {
      id: 2,
      email: "jane@test.com",
      password: "jane",
      authorizedReport: [2, 3]
    },
    {
      id: 3,
      email: "miriam@test.com",
      password: "miri",
      authorizedReport: [1, 2, 3]
    },
    {
      id: 4,
      email: "js@sj.com",
      password: "jssj",
      authorizedReport: [1, 2, 3]
    }
  ],
  reports: [
    {
      id: 1,
      name: "JoyReport",
      customerName: "Joy",
      date: "1/2/2019",
      age: 10,
      filterBy: ["name"]
    },
    {
      id: 2,
      name: "JeffReport",
      customerName: "Jeff",
      date: "2/2/2019",
      age: 20,
      filterBy: ["age"]
    },
    {
      id: 3,
      name: "JackReport",
      customerName: "Jack",
      date: "3/2/2019",
      age: 30,
      filterBy: ["name", "age"]
    }
  ]
};
export default data;
