import { render, screen } from "@testing-library/react";
import { PublicRoutes } from "../../src/router/PublicRoutes";
import { AuthContext } from "../../src/auth/context";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("test on publicRoutes", () => {

  test("shoudl show show children if is not loged", () => {
    render(
      <AuthContext.Provider value={{ logged: false }}>
        <PublicRoutes>
          <h1>Public</h1>
        </PublicRoutes>
      </AuthContext.Provider>
    );
    expect(screen.getByText("Public")).toBeTruthy();
   // screen.debug();
  });

  test("should navigate if is logged", () => {

    const contextValues = {
      logged: true,
      user: {
        name: "Ra",
        id: "123",
      },
    };

    render(
      <AuthContext.Provider value={contextValues}>
        <MemoryRouter initialEntries={["/login"]}>

          <Routes>
            <Route
              path="login"
              element={
                <PublicRoutes>
                  <h1>Public</h1>
                </PublicRoutes>
              }
            />
            <Route path="marvel" element={<h1>Marvel Page</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>

    );     
     screen.debug();
     expect(screen.getByText('Marvel Page')).toBeTruthy();
     

  });
});
