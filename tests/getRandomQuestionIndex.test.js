class StorageMock {
  constructor() { this.store = {}; }
  getItem(key) { return this.store[key] || null; }
  setItem(key, value) { this.store[key] = String(value); }
  removeItem(key) { delete this.store[key]; }
  clear() { this.store = {}; }
}

describe('getRandomQuestionIndex', () => {
  beforeEach(() => {
    jest.resetModules();
    global.sessionStorage = new StorageMock();
    global.questions = Array.from({ length: 3 }, (_, i) => ({ numb: i }));
  });

  test('returns unique indices until questions are exhausted', () => {
    const { getRandomQuestionIndex } = require('../js/script.js');
    const seen = new Set();
    for (let i = 0; i < global.questions.length; i++) {
      const idx = getRandomQuestionIndex();
      expect(idx).not.toBeNull();
      expect(seen.has(idx)).toBe(false);
      seen.add(idx);
    }
  });

  test('returns null when no questions remain', () => {
    const { getRandomQuestionIndex } = require('../js/script.js');
    // Exhaust questions
    for (let i = 0; i < global.questions.length; i++) {
      getRandomQuestionIndex();
    }
    expect(getRandomQuestionIndex()).toBeNull();
  });
});
