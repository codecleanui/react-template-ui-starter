import { Container } from "@mantine/core"
import { AppShell } from '@mantine/core';
import { CustomeHeader, SideNavbar } from "../../components"
import { Outlet } from "react-router-dom";
import { useContentStyle } from "./style";
import { TestActionsGrid } from "../../components/Test";

export function AppShellContainer() {
  const {classes} = useContentStyle()
  return (
    <AppShell
    classNames={classes}
      header={
        <CustomeHeader/>
      }
      navbar={<SideNavbar/>}
      children={
        <Container  sx={() => ({
          width: "100%",
          maxWidth: "100%",
          background:'transparent',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop:"100px",
        })}>
          <TestActionsGrid/>
          <Outlet />
          <TestActionsGrid/>

        </Container>
      }

      // footer={
      //   <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
      //     <Footer height={60} p="md">
      //       Application footer
      //     </Footer>
      //   </MediaQuery>

      // }
    />
  );
}

