import { CustomeForm } from '../../components/Form/index';
import {
  Paper,
  Text,
  Container,
  Flex,
} from "@mantine/core";

export function LoginPage() {
  return (
    <Container
      className=" max-h-full"
      sx={(theme) => ({
        height: "100vh",
        maxWidth: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        [theme.fn.largerThan("sm")]: {},
      })}
    >
      <Flex align="center" justify="center" direction="column" gap={1}>
        <Paper
          p={15}
          mt={30}
          radius="md"
          sx={(theme) => ({
            [theme.fn.largerThan("sm")]: {
              width: `calc(${theme.spacing.xl} * 15)`,
            },
          })}
          className=" shadow-xl"
        >
          <Paper withBorder radius="xl" p={0} className=" shadow-lg" mb={40}>
            <Flex
              sx={{
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                gap: 0,
                padding: 10,
              }}
            >

              <Text
                px={15}
                typeof="h5"
                align="center"
                size="xl"
                sx={(theme) => ({
                  fontWeight: 700,
                  [theme.fn.smallerThan("sm")]: {
                    fontSize: `calc(${theme.spacing.sm} * 1)`,
                  },
                })}
              >
               User Login
              </Text>

            </Flex>
          </Paper> 

          <CustomeForm />

        </Paper>
      </Flex>
    </Container>
  );
}
