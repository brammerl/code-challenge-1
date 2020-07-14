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

    case /[h]/g.test(diff):
      diff = Number(diff.replace(/[h]/g, ''));

      date.setHours(date.getHours() + diff);

      return date;

    case /[w]/g.test(diff):
      diff = Number(diff.replace(/[w]/g, '')) * 7;
      

      date.setDate(date.getDate() + diff);

      return date;

    case /[M]/g.test(diff):
      diff = Number(diff.replace(/[M]/g, ''));

      date.setMonth(date.getMonth() + diff);

      return date;

    case /[s]/g.test(diff):
      diff = Number(diff.replace(/[s]/g, ''));

      date.setSeconds(date.getSeconds() + diff);

      return date;
  }
};

module.exports = add;

