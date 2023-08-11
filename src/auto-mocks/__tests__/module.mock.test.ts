test('implementation created by jest.createMockFromModule', () => {
    const utils = jest.createMockFromModule<{default: any}>('../utils').default;
    utils.isAuthorized = jest.fn(secret => secret === 'not wizard');
  
    expect(utils.authorize.mock).toBeTruthy();
    expect(utils.isAuthorized('not wizard')).toBe(true);
  });