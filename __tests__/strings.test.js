const { sayHello } = require('../src/strings');

describe('strings', () => {
  describe('sayHello', () => {
    it('returns "Hello World!" when passed "World"', () => {
      expect(sayHello('World')).toBe('Hello World!');
    });

    it('returns "Hello James" when passed "James"', () => {
      expect(sayHello('James')).toBe('Hello James!');
    });
  });
});
