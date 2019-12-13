/* Generate random data */
const random = (num, offset=0) => Math.floor(Math.random() * num) + offset;
const uuid = () => random(10 ** 4);
const newDate = new Date();
const minutes = () => {
  const min = random(60);
  return min < 10 ? `0${min}` : min
};
const date = () => `${random(10,8)}:${minutes()}`;
const total = () => Math.floor(Math.random() * 10 ** 2)

export const orders = [
  {
    tableID: 'table 1',
    orders: [
      {
        orderID: uuid(),
        status: 'new',
        date: date(),
        total: total(),
      },
      {
        orderID: uuid(),
        status: 'ordered',
        date: date(),
        total: total(),
      },
      {
        orderID: uuid(),
        status: 'ready',
        date: date(),
        total: total(),
      },
      {
        orderID: uuid(),
        status: 'cancelled',
        date: date(),
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
        date: date(),
        total: total(),
      },
      {
        orderID: uuid(),
        status: 'ordered',
        date: date(),
        total: total(),
      },
      {
        orderID: uuid(),
        status: 'delivered',
        date: date(),
        total: total(),
      },
      {
        orderID: uuid(),
        status: 'done',
        date: date(),
        total: total(),
      },
    ],
  },
];