const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  return `Olá ${order['order'].delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, N°: ${order.address.number}, AP: ${order.address.apartment}`;

}

console.log(customerInfo(order));

const orderModifier = (order) => {
  let getPizzas = Object.keys(order['order'].pizza);
  let getValueDrinks = Object.values(order['order'].drinks.coke);
  order.payment = 50;
  console.log(getValueDrinks);

  order['order'].delivery.deliveryPerson = 'Luiz Silva';
  return `Olá ${order['order'].delivery.deliveryPerson}, o total do seus pedido de ${getPizzas[0]}, ${getPizzas[1]} e ${getValueDrinks[0]} é R$:${order.payment.toFixed(2)}`

}
console.log('----------');
console.log(orderModifier(order));

