const app = require('../src/app');

describe('app', () => {
  it('should sum 2 and 5 and get 7', () => {
    expect(app(2, 5)).toBe(7);
  });
  it('should sum 15 and 7 and get 22', () => {
    expect(app(15, 7)).toBe(22);
  });
  it('should sum 25 and 50 and get 75', () => {
    expect(app(25, 50)).toBe(75);
  });
  it('should sum 2500 and 5000 and get 7500', () => {
    expect(app(2500, 5000)).toBe(7500);
  });
  it('should sum 125000 and 75000 and get 200000', () => {
    expect(app(125000, 75000)).toBe(200000);
  });
});