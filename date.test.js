const add = require('./add');


describe('testing add function', () => {
  let date;
  beforeEach(async() => {
    date = new Date('August 19, 1975 23:15:30');
    
  });

  it('changes the year', async() => {
    console.log(date);
    const newDate = await add(date, '4y').toString();
    
    expect(newDate).toEqual('Sun Aug 19 1979 23:15:30 GMT-0700 (Pacific Daylight Time)');
  });

  it('changes the day', async() => {

    const newDate = await add(date, '4d').toString();
    
    expect(newDate).toEqual('Sat Aug 23 1975 23:15:30 GMT-0700 (Pacific Daylight Time)');
  });

  it('changes the minutes', async() => {
    const newDate = await add(date, '10m').toString();

    expect(newDate).toEqual('Tue Aug 19 1975 23:25:30 GMT-0700 (Pacific Daylight Time)');
  });

  it('changes the hours', async() => {
    const newDate = await add(date, '2h').toString();

    expect(newDate).toEqual('Wed Aug 20 1975 01:15:30 GMT-0700 (Pacific Daylight Time)');
  });

  it('changes weeks', async() => {
    const newDate = await add(date, '2w').toString();

    expect(newDate).toEqual('Tue Sep 02 1975 23:15:30 GMT-0700 (Pacific Daylight Time)');
  });
});
