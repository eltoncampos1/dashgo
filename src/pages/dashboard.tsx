import { Flex, SimpleGrid,Box, Text } from '@chakra-ui/react'
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic'

import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { theme } from '../styles/theme'

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
})

const options: ApexOptions = {
   chart: {
       toolbar: {
           show: false
       },
       zoom: {
           enabled: false,
       },
       foreColor: theme.colors.gray[500]
   },
   grid: {
       show: false,
   },
   dataLabels: {
       enabled: false,
   },
   tooltip: {
       enabled: false,
   },
   xaxis: {
       type: 'datetime',
       axisBorder: {
           color: theme.colors.gray[600]
       },
       axisTicks: {
            color: theme.colors.gray[600]
       },
       categories: [
           '2021-07-23T00:00:00.000Z',
           '2021-07-24T00:00:00.000Z',
           '2021-07-25T00:00:00.000Z',
           '2021-07-26T00:00:00.000Z',
           '2021-07-27T00:00:00.000Z',
           '2021-07-28T00:00:00.000Z',
           '2021-07-29T00:00:00.000Z',
       ]
   },
   fill: {
       opacity: .3,
       type: 'gradient',
       gradient: {
           shade: 'dark', 
           opacityFrom: .7,
           opacityTo: .3
       }
   }
}

const series = [
    { 
        name: 'series1', data: [31,104, 89, 65,39, 25,70]
    }
]


export default function Dashboard() {
    return (
        <Flex
            direction="column"
            h="100vh"
        >
            <Header />

            <Flex
                w="100%"
                my="6"
                maxW={1480}
                mx="auto"
                px="6"
            >
                <Sidebar />


                <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
                    <Box
                        p="8"
                        bg="gray.800"
                        borderRadius={8}
                        pb={4}
                    >
                        <Text fontSize="lg" mb="4">
                            Inscritos da semana
                        </Text>
                        <Chart options={options} series={series} type="area" height={160} />
                    </Box>

                    <Box
                        p="8"
                        bg="gray.800"
                        borderRadius={8}
                        pb={4}
                    >
                        <Text fontSize="lg" mb="4">
                            Taxa de abertura
                        </Text>
                        <Chart options={options} series={series} type="area" height={160} />

                    </Box>

                </SimpleGrid>
            </Flex>
        </Flex>
    )
}