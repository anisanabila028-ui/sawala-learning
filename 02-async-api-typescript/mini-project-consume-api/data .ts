export interface User {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
}

export const dataUser: User[] = [
  {
    id: 1,
    name: "Annisa",
    email: "annisa@gmail.com",
    address: {
      city: "Tangerang",
    },
  },
  {
    id: 2,
    name: "gilang",
    email: "gilang@gmail.com",
    address: {
      city: "Jakarta",
    },
  },
  {
    id: 3,
    name: "Citra",
    email: "citra@gmail.com",
    address: {
      city: "Bandung",
    },
  },
];