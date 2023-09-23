import { fireEvent, render, screen } from "@testing-library/react";
import { authReducer } from "../../../src/auth/context";
import { types } from "../../../src/auth/types/types";
import { LoginPage } from "../../../src/auth/pages/LoginPage";

describe("test on AuthReducer", () => {
  const initialState = {
    logged: false,
    // user: {id:'ABC', name: 'Raul'}
  };

  const mockOnLogin = jest.fn();

  test("should return state default", () => {
    const newState = authReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test("should cal login", () => {
    const action = {
      type: types.login,
      payload: {
        id: "abc",
        name: "Raul H",
      },
    };

    const newState = authReducer(initialState, action);
    expect(newState).toEqual({
      logged: true,
      user: action.payload,
    });
  });

  test("should logout and clear user name and logged to false", () => {
    const state = {
      logged: true,
      user: { id: "ABC", name: "Raul" },
    };

    const action = {
      type: types.logout,
    };

    const newState = authReducer(state, action);

    expect(newState).toEqual(initialState);
  });
});
