jest.mock("../request");

import * as user from "../user";

describe("test get userName by userId", () => {
  // Testing promise can be done using `.resolves`.
  it("works with resolves", () => {
    expect.assertions(1);
    return expect(user.getUserName(5)).resolves.toBe("Paul");
  });

  // The assertion for a promise must be returned.
  it("works with promises", () => {
    expect.assertions(1);
    return expect(user.getUserName(4)).resolves.toBe("Mark");
  });

  // Testing for async errors using `.rejects`.
  it("tests error with rejects", () => {
    expect.assertions(1);
    return expect(user.getUserName(3)).rejects.toEqual({
      error: "User with 3 not found.",
    });
  });

  // Testing for async errors using `.rejects`.
  test("tests error with promises", async () => {
    expect.assertions(1);
    return expect(user.getUserName(2)).rejects.toEqual({
      error: "User with 2 not found.",
    });
  });
});


describe("test get userAge by userId", () => {
  // Testing promise can be done using `.resolves`.
  it("works with resolves", () => {
    expect.assertions(1);
    return expect(user.getUserAge(5)).resolves.toBe(20);
  });

  // The assertion for a promise must be returned.
  it("works with promises", () => {
    expect.assertions(1);
    return expect(user.getUserAge(4)).resolves.toBe(18);
  });

  // Testing for async errors using `.rejects`.
  it("tests error with rejects", () => {
    expect.assertions(1);
    return expect(user.getUserAge(3)).rejects.toEqual({
      error: "User with 3 not found.",
    });
  });

  // Testing for async errors using `.rejects`.
  test("tests error with promises", async () => {
    expect.assertions(1);
    return expect(user.getUserAge(2)).rejects.toEqual({
      error: "User with 2 not found.",
    });
  });
});
