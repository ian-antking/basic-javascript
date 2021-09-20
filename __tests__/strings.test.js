const { sayHello } = require('../src/strings');

describe('strings', () => {
  describe('sayHello', () => {
    it('returns "Hello World!" when passed "World"', () => {
      expect(sayHello('World')).toBe('Hello World!');
    });
  });
});
