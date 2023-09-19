import { Button, Flex, Text } from "@mantine/core";
import { Card, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { CustomeButton } from "..";

export const ConfirmPrivacyPolicy = ({
  canRender,
  children,
}: {
  canRender: boolean;
  children: React.ReactElement;
}) => {
  const [opened, { close }] = useDisclosure(canRender);

  return (
    <>
      <Modal.Root 
         opened={opened} 
         onClose={() => {}} 
         title="" 
         centered
         radius={7}
         shadow="xl"
         
         >
        <Modal.Overlay opacity={0.55} blur={5}  />
        <Modal.Content sx={{backgroundColor:"#fff"}}>
          <Modal.Header>
            <Modal.Title>Privacy Policy</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Flex
              align={"center"}
              justify={"center"}
              direction={"column"}
              gap={10}
            >
              <Card
                sx={{
                  borderRadius: 10,
                }}
              >
                <Text>
                  By clicking "Enter Site," you agree to abide by our terms of
                  service and privacy policy. This website may use cookies to
                  enhance your user experience.
                </Text>
              </Card>
              <Flex align={'center'} justify={'space-evenly'} direction={'row'} gap={20} maw={230}>
              <CustomeButton
                onClick={() => {
                  localStorage.setItem("acceptPolicy", "Accept");
                  close();
                }}
                w={100}
              >
                Accept
              </CustomeButton>
              <CustomeButton
                onClick={() => {
                  localStorage.setItem("acceptPolicy", "Accept");
                  close();
                }}
                w={100}
              >
                Decline
              </CustomeButton> 
              </Flex>
            </Flex>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
      {!opened ? children : ""}
    </>
  );
};
const modalsContainer = {
  /* ...other modals */
};
declare module "@mantine/modals" {
  export interface MantineModalsOverride {
    modals: typeof modalsContainer;
  }
}
