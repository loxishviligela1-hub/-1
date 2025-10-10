1
// function groupOrdersByDate(orders) {
//   return orders.reduce((acc, order) => {
//     if (!acc[order.date]) {
//       acc[order.date] = 0;
//     }
//     acc[order.date] += order.amount;
//     return acc;
//   }, {});
// }

// const data = [
//   { date: '2025-01-01', amount: 12.5 },
//   { date: '2025-01-01', amount: 7.5 },
//   { date: '2025-01-02', amount: 10 }
// ];

// console.log(groupOrdersByDate(data));






2
// function averagePriceByVendor(products) {
//   const grouped = {};


//   for (const item of products) {
//     if (!grouped[item.vendor]) {
//       grouped[item.vendor] = { total: 0, count: 0 };
//     }
//     grouped[item.vendor].total += item.price;
//     grouped[item.vendor].count += 1;
//   }

//   const result = {};
//   for (const vendor in grouped) {
//     result[vendor] = grouped[vendor].total / grouped[vendor].count;
//   }

//   return result;
// }


// const data = [
//   { vendor: 'A', price: 10 },
//   { vendor: 'A', price: 20 },
//   { vendor: 'B', price: 15 }
// ];

// console.log(averagePriceByVendor(data));






3
// function findLongestString(strings) {
//   let longest = "";

//   for (const str of strings) {
//     if (str.length > longest.length) {
//       longest = str;
//     }
//   }

//   return longest;
// }

// const data = ["apple", "banana", "kiwi"];
// console.log(findLongestString(data));





4
// function sumObjectValues(obj) {
//   return Object.values(obj).reduce((sum, value) => sum + value, 0);
// }

// const data = { x: 5, y: 3 };
// console.log(sumObjectValues(data));








5
// function sumActiveOrders(orders) {
//   return orders
//     .filter(order => order.status === "active")
//     .map(order => ({ ...order, amount: order.amount * 2 }))
//     .reduce((sum, order) => sum + order.amount, 0);
// }

// const data = [
//   { id: 1, amount: 10, status: "active" },
//   { id: 2, amount: 5, status: "inactive" }
// ];

// console.log(sumActiveOrders(data));






6
// class UserManager {
//   constructor() {
//     this.users = [];
//     this.nextId = 1;
//   }

  
//   create(user) {
//     const newUser = { id: this.nextId++, ...user };
//     this.users.push(newUser);
//     return newUser;
//   }

 
//   read(id) {
//     return this.users.find(user => user.id === id) || null;
//   }


//   update(id, data) {
//     const user = this.users.find(user => user.id === id);
//     if (!user) return null;
//     Object.assign(user, data);
//     return user;
//   }


//   delete(id) {
//     const index = this.users.findIndex(user => user.id === id);
//     if (index === -1) return false;
//     this.users.splice(index, 1);
//     return true;
//   }
// }


// const manager = new UserManager();

// const user1 = manager.create({ name: "Gela", email: "gelako2009@gmail.com" });
// console.log(user1);

// console.log(manager.read(1)); 

// manager.update(1, { name: "Gela Loxishvili" });
// console.log(manager.read(1)); 

// manager.delete(1);
// console.log(manager.read(1));






7
// async function logExpensiveProducts() {
//   try {
//     const response = await fetch('https://dummyjson.com/products');
//     const data = await response.json();

    
//     const expensiveProducts = data.products.filter(product => product.price > 100);

    
//     const names = expensiveProducts.map(product => product.title);
//     console.log(names);
//   } catch (error) {
//     console.error("Error fetching products:", error);
//   }
// }

// logExpensiveProducts();







8
// function getActiveUsersFullName(users) {
//   return users
//     .filter(user => user.active)
//     .map(user => ({ full: `${user.first} ${user.last}` }));
// }

// const data = [
//   { first: "a", last: "b", active: true },
//   { first: "c", last: "d", active: false }
// ];

// console.log(getActiveUsersFullName(data));
