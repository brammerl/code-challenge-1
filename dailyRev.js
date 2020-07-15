module.exports = (transactions) => {
  const dailyRevObj = {};
  transactions.forEach(transaction => {
    const date = new Date(transaction.timestamp);
    const offset = date.getTimezoneOffset() * 60000;
    console.log(offset);
    const standardDate = date.setMilliseconds(date.getMilliseconds() - offset)

    const newDate = new Date(standardDate).toDateString();
    
    if(!dailyRevObj[offset]){
      dailyRevObj[newDate] = transaction.price;
    } 

    dailyRevObj[newDate] += transaction.price;
  });

  return dailyRevObj;
};
