const {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
} = require('../src/strings');

describe('strings', () => {
  describe('sayHello', () => {
    it('returns "Hello World!" when passed "World"', () => {
      expect(sayHello('World')).toBe('Hello World!');
    });

    it('returns "Hello James" when passed "James"', () => {
      expect(sayHello('James')).toBe('Hello James!');
    });
  });

  describe('uppercase', () => {
    it('returns an uppercased string', () => {
      expect(uppercase('abc')).toEqual('ABC');
      expect(uppercase('def')).toEqual('DEF');
      expect(uppercase('ghi')).toEqual('GHI');
    });
  });

  describe('lowercase', () => {
    it('returns a lowercased string', () => {
      expect(lowercase('ABC')).toEqual('abc');
      expect(lowercase('DEF')).toEqual('def');
      expect(lowercase('GHI')).toEqual('ghi');
    });
  });

  describe('countCharacters', () => {
    it('returns the number of characters in the string', () => {
      expect(countCharacters('fsfsgsfdg')).toEqual(9);
      expect(countCharacters('fsfsg')).toEqual(5);
      expect(countCharacters('')).toEqual(0);
    });
  });

  describe('firstCharacter', () => {
    it('returns the first character of the string', () => {
      expect(firstCharacter('ABC')).toEqual('A');
      expect(firstCharacter('DEF')).toEqual('D');
      expect(firstCharacter('GHI')).toEqual('G');
    });
  });

  describe('firstCharacters', () => {
    it('returns the first 4 characters of the string', () => {
      expect(firstCharacters('sd32fg45', 4)).toEqual('sd32');
    });

    it('returns the first 2 characters of the string', () => {
      expect(firstCharacters('asd', 2)).toEqual('as');
    });
  });
});
