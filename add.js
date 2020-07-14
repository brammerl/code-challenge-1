// add function 
const add = (date, diff) => {
  // get date 
  switch(true) {
    case /[yY]/g.test(diff): 
      diff = Number(diff.replace(/[yY]/g, ''));
      date.setFullYear(date.getFullYear() + diff);

      return date;

    case /[d]/g.test(diff): 
      diff = Number(diff.replace(/[dD]/g, ''));
      date.setDate(date.getDate() + diff);

      return date;
    case /[m]/g.test(diff):
      diff = Number(diff.replace(/[m]/g, ''));

      date.setMinutes(date.getMinutes() + diff);

      return date;
  }
};

module.exports = add;

