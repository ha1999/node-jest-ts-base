// Copyright (c) Meta Platforms, Inc. and affiliates.. All Rights Reserved.
jest.enableAutomock();
import utils from '../utils';

test('if utils are mocked', () => {
  expect((utils.authorize as jest.Mock).mock).toBeTruthy();
  expect((utils.isAuthorized as jest.Mock).mock).toBeTruthy();
});

test('mocked implementation', () => {
  (utils.authorize as jest.Mock).mockReturnValue('mocked_token');
  (utils.isAuthorized as jest.Mock).mockReturnValue(true);

  expect(utils.authorize()).toBe('mocked_token');
  expect(utils.isAuthorized('not_wizard')).toBeTruthy();
});