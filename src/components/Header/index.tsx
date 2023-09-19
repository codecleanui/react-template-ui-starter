import { Avatar, Flex, Paper, Text } from "@mantine/core";
import { IconLogout, IconWebhook } from "@tabler/icons-react";
import { CustomeActionButton,  SwitchToggle } from "..";
import { logout } from "../../api";

export const CustomeHeader = () => {
  return (
    <Paper
      withBorder
      radius="xl"
      px={10}
      className=" shadow-lg"
      mb={40}
      sx={(theme) => ({
        top: 10,
        left: 220,
        right: 40,
        position: "fixed",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        [theme.fn.smallerThan("sm")]: {
          left: 10,
          right: 10,
        },
      })}
    >
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "row",
          gap: 0,
          padding: 4,
        }}
      >
        <Avatar
          radius="xl"
          className=" shadow-xl"
          sx={(theme) => ({
            [theme.fn.smallerThan("md")]: {
              padding: `calc(${theme.spacing.sm} * 0.5)`,
            },
          })}
        >
          <IconWebhook size="2rem" />
          {/* <Text
                  color="white"
                  size="sm"
                  sx={(theme) => ({
                    [theme.fn.smallerThan("sm")]: {
                      fontSize: `calc(${theme.spacing.xs} * 1)`,
                    },
                  })}
                >
                  A
                </Text> */}
        </Avatar>

        <Text
          px={15}
          align="center"
          size="md"
          sx={(theme) => ({
            fontWeight: 700,
            [theme.fn.smallerThan("sm")]: {
              fontSize: `calc(${theme.spacing.sm} * 1)`,
            },
          })}
        >
          AMN CORPRATION
        </Text>
      </Flex>
      <Flex gap={10}>
        <CustomeActionButton onClick={
          () => logout()
        }>
          <IconLogout />
        </CustomeActionButton>
        <SwitchToggle />
      </Flex>
    </Paper>
  );
};
