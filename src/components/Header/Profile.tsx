import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex
        align="center"
    >
        <Box mr="4" textAlign="right">
            <Text>Elton Campos</Text>
            <Text color="gray.300" fontSize="small">eltoncampos36@gmail.com</Text>
        </Box>

        <Avatar
            size="md"
            name="Elton Campos"
            src="https://github.com/eltoncampos1.png"
        />
    </Flex>
    )
}