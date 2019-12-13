const uuid = () => Math.floor(Math.random() * 10 ** 4)
const date = new Date().toDateString();
const total = () => Math.floor(Math.random() * 10 ** 2)

export const orders = [
  {
    tableID: 'table 1',
    orders: [
      {
        orderID: uuid(),
        status: 'new',
        date,
        total: total(),
      },
      {
        orderID: uuid(),
        status: 'ordered',
        date,
        total: total(),
      },
      {
        orderID: uuid(),
        status: 'ready',
        date,
        total: total(),
      },
      {
        orderID: uuid(),
        status: 'cancelled',
        date,
        total: total(),
      },
    ],
  },
  {
    tableID: 'table 2',
    orders: [
      {
        orderID: uuid(),
        status: 'new',
        date,
        total: total(),
      },
      {
        orderID: uuid(),
        status: 'ordered',
        date,
        total: total(),
      },
      {
        orderID: uuid(),
        status: 'delivered',
        date,
        total: total(),
      },
      {
        orderID: uuid(),
        status: 'done',
        date,
        total: total(),
      },
    ],
  },
];