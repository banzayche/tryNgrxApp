import { Compose } from "./compose";


describe('compose.ts', () => {
  it('should compose class, get all behaviour methods', () => {
    class MockBehaviourClass {
      getPlusOne(a: number) {
        return a + 1;
      }
      doNothing() {}
    }
    @Compose(MockBehaviourClass)
    class MockBaseClass {}

    const mockBaseClass = new MockBaseClass();

    expect(mockBaseClass['getPlusOne']).toBeDefined();
    expect(mockBaseClass['doNothing']).toBeDefined();
    expect(mockBaseClass['getPlusOne'](1)).toBe(2);
  });

  it('should compose class, get particular behaviour method', () => {
    class MockBehaviourClass {
      getPlusOne(a: number) {
        return a + 1;
      }
      doNothing() {}
    }
    @Compose(MockBehaviourClass, ['getPlusOne'])
    class MockBaseClass {}

    const mockBaseClass = new MockBaseClass();

    expect(mockBaseClass['getPlusOne']).toBeDefined();
    expect(mockBaseClass['getPlusOne'](1)).toBe(2);
  });

  it('should be instase of propper obj', () => {
    class MockBehaviourClass {
      getPlusOne(a: number) {
        return a + 1;
      }
      doNothing() {}
    }
    @Compose(MockBehaviourClass)
    class MockBaseClass {}

    const mockBaseClass = new MockBaseClass();

    expect(mockBaseClass instanceof MockBehaviourClass).not.toBeTruthy();
    expect(mockBaseClass instanceof MockBaseClass).toBeTruthy();
  })
});
