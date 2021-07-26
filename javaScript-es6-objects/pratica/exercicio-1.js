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
    console.log(`Olá Ana Silveira, entrega para: ${order.name}, telefone: ${order.phoneNumber},R.${order.address.street}, Nº:${order.address.number}, AP ${order.address.apartment}`);
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    const pizzas = Object.keys(order.order.pizza);  
    order.order.payment = 50;
    order.name = 'Pedro Buente';
    console.log(`Olá ${order.name}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${order.order.drinks.coke.type} é de R$ ${order.order.payment}.00` )
  
  }
  
  orderModifier(order);