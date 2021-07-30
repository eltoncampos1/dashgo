import { Box, Button, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
    return (
        <Stack
            direction={["column","row"]}
            mt="8"
            spacing="6"
            justify="space-between"
            align="center"
        >
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <Stack
                direction="row"
                spacing="2"
            >

            <PaginationItem isCurrent pageNumber={1} />
            <PaginationItem pageNumber={2} />
            <PaginationItem pageNumber={3} />
            <PaginationItem pageNumber={4} />
            <PaginationItem pageNumber={5} />
            <PaginationItem pageNumber={6} />
            <PaginationItem pageNumber={7} />
            
            </Stack>
        </Stack>
    )
}