import { modals } from "@mantine/modals";
import { ConfirmPrivacyPolicy } from "../components";
import { LoginPage, HomePages, AppShellContainer, Page1, Page2, Page3, Page4 } from "../pages";
import { createBrowserRouter, redirect } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShellContainer />,
    children: [
      {
        index: true,
        element: <HomePages />,
        loader: (deafault) => {
          const token = localStorage.getItem("token") || null;
          console.log(deafault);
          if (!token) {
            return redirect("/login");
          } else {
            return deafault;
          }
        },
      },
      {
        path: "/page1",
        element: <Page1 />,
      },
      {
        path: "/page2",
        element: <Page2 />,
      },
      {
        path: "/page3",
        element: <Page3 />,
      },
      {
        path: "/page4",
        element: <Page4 />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <ConfirmPrivacyPolicy
        children={<LoginPage />}
        canRender={!localStorage.getItem("acceptPolicy")}
      />
    ),
    loader: () => {
      const token = localStorage.getItem("token") || null;
      if (token) {
        return redirect("/");
      }
      return {};
    },
  },
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}
