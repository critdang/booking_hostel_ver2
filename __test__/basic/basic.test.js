/* eslint-disable no-undef */
const { findMax } = require('../../src/service/basic.service');

describe('Plus method', () => {
  test('findMax([2, 8, 3])', () => {
    expect(findMax([2, 8, 3])).toBe(8);
  });
});
