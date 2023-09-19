import { modals } from "@mantine/modals";
import { Authntication } from "../components";
import { LoginPage, HomePages, AppShellContainer, Page1 } from "../pages";
import { createBrowserRouter, redirect } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Authntication
        children={<AppShellContainer />}
        canRender={!localStorage.getItem("acceptPolicy")}
        authnticated={!!localStorage.getItem("token")}
        authnticationPage={<LoginPage />}
      />
    ),
    loader: (deafault) => {
      const token = localStorage.getItem("token") || null;
      if (!token) {
        redirect("/login");
        return deafault;
      }
      return deafault;
    },
    children: [
      {
        index: true,
        element: <HomePages />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}
