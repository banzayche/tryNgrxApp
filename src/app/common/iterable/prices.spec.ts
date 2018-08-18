import { prices } from "./prices";
import * as _ from 'lodash';

describe('pricest.ts', () => {
  it('should work as iterable', () => {
    const pricesArr = [...prices];
    
    expect(pricesArr.length).toBe(_.size(prices));
    expect(pricesArr[0]).toEqual({
      key: 'smartphone',
      value: 500
    });
    expect(pricesArr[3]).toEqual({
      key: 'tv',
      value: 700
    });
  });
});
