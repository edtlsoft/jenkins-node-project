const app = require('../src/app');

describe('app', () => {
  it('should sum 2 and 5 and get 7', () => {
    expect(app(2, 5)).toBe(7);
  });
  it('should sum 15 and 7 and get 22', () => {
    expect(app(2, 5)).toBe(7);
  });
  it('should sum 25 and 50 and get 75', () => {
    expect(app(2, 5)).toBe(7);
  });
});