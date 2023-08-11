import utils from "../utils";

jest.disableAutomock()

test('original implementation authorize', () => {
    expect(utils.authorize()).toBe('token');
});

test('original implementation isAuthorized', () => {
    expect(utils.isAuthorized("wizard")).toBeTruthy();
    expect(utils.isAuthorized("wizard-clone")).toBeFalsy();
});