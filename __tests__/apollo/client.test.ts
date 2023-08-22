import {mergeList} from 'src/apollo/client';

describe('merge list function', () => {
  it('should merge 2 arrays, appending it', () => {
    const arr1 = {items: [1, 2], nextToken: 123};
    const arr2 = {items: [3, 4]};

    const merged = mergeList(arr1, arr2);
    expect(merged.items).toHaveLength(4);
    expect(merged.items).toEqual([1, 2, 3, 4]);
  });
  it('should merge 2 arrays, unshift', () => {
    const arr1 = {items: [1, 2], nextToken: 123};
    const arr2 = {items: [3, 4], nextToken: 123};

    const merged = mergeList(arr1, arr2);
    expect(merged.items).toHaveLength(4);
    expect(merged.items).toEqual([3, 4, 1, 2]);
  });
  it('should work even if the list is empty', () => {
    const arr1 = undefined;
    const arr2 = {items: [1, 2], nextToken: 123};
    const merged = mergeList(arr1, arr2);
    expect(merged.items).toHaveLength(2);
    expect(merged.items).toEqual([1, 2]);
  });
});
