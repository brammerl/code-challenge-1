module.exports = (transactions) => {
  const dailyRevObj = {};
  transactions.forEach(transaction => {
    const date = new Date(transaction.timestamp).toDateString();
    if(!dailyRevObj[date]){
      dailyRevObj[date] = transaction.price;
    } 

    dailyRevObj[date] += transaction.price;
  });

  return dailyRevObj;
};
