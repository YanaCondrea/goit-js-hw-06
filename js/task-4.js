
/**
 * 
 * @param {Array} users - An array of users.
 * @param {string} gender - Gender of users.
 * @returns {number} - The total balance of users for a certain gender.
 */

const getTotalBalanceByGender = (users, gender) =>
users.map(user => user)
.filter(user => user.gender === gender)
.reduce((total, user) => {return total += user.balance},0) 

const clients = [
	{
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(clients, "male")); // 12053

console.log(getTotalBalanceByGender(clients, "female")); // 8863
