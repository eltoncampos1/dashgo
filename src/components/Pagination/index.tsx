import { Box, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
    totalCountOfRegisters: number;
    registerPerPage?:number;
    currentPage?:number;
    onPageChange: (page: number ) => void;
}

const sibilingsCount = 1;


function generatePagesArray(from: number, to: number) {
    return [...new Array(to - from)]
        .map((_, idx) =>  {
            return from + idx + 1;
        })
        .filter(page => page > 0)
}

export function Pagination( { 
    totalCountOfRegisters,
    registerPerPage = 10,
    currentPage = 1,
    onPageChange
}: PaginationProps) {
    const lastPage = Math.ceil(totalCountOfRegisters / registerPerPage);


    const previousPages = currentPage > 1 
        ? generatePagesArray(currentPage -1 - sibilingsCount, currentPage -1)
        : []

    const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + sibilingsCount, lastPage))
    : [] 

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

            { currentPage > ( 1 + sibilingsCount) && (
                <>
                    <PaginationItem onPageChange={onPageChange} pageNumber={1} />
                    {currentPage > ( 2 + sibilingsCount) && (
                        <Text
                            color="gray.300" 
                            w="8"
                            textAlign="center"
                        >...</Text>
                    )}
                </>
            )}

            {previousPages.length > 0 && previousPages.map(page => {
                return <PaginationItem onPageChange={onPageChange} key={page} pageNumber={page} />
            })}

            <PaginationItem onPageChange={onPageChange} pageNumber={currentPage} isCurrent />
            
            {nextPages.length > 0 && nextPages.map(page => {
                return <PaginationItem onPageChange={onPageChange} key={page} pageNumber={page} />
            })}


            { (currentPage + sibilingsCount) <  lastPage && (
                <>
                    {(currentPage + 1 + sibilingsCount) < lastPage && (
                        <Text
                        color="gray.300" 
                        w="8"
                        textAlign="center"
                        >...</Text>
                        )}
                    <PaginationItem onPageChange={onPageChange} pageNumber={lastPage} />
                </>
            )}
            
            </Stack>
        </Stack>
    )
}