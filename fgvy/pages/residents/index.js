import Head from 'next/head'
import Sidebar from '../../components/Sidebar';
import UserCard from '../../components/UserCard';
import {
  Box,
  Grid,
  SimpleGrid,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
  VStack,
  Stack,
  HStack,
  Heading,
  Container,
  Icon,
  Flex,
  Wrap,
  Spacer,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Center,
} from '@chakra-ui/react'
import {
  SearchIcon,
} from '@chakra-ui/icons';

const residentInfo = [
  { id: 1, name: 'John Doe', monthsAsTenant: 5, monthsUntilRenewal: 7, missedPayments: 0},
  { id: 2, name: 'John Doe', monthsAsTenant: 5, monthsUntilRenewal: 7, missedPayments: 0},
  { id: 3, name: 'John Doe', monthsAsTenant: 5, monthsUntilRenewal: 7, missedPayments: 0},
  { id: 4, name: 'John Doe', monthsAsTenant: 5, monthsUntilRenewal: 7, missedPayments: 0},
  { id: 5, name: 'John Doe', monthsAsTenant: 5, monthsUntilRenewal: 7, missedPayments: 0},
  { id: 6, name: 'John Doe', monthsAsTenant: 5, monthsUntilRenewal: 7, missedPayments: 0},
  { id: 7, name: 'John Doe', monthsAsTenant: 5, monthsUntilRenewal: 7, missedPayments: 0},
  { id: 8, name: 'John Doe', monthsAsTenant: 5, monthsUntilRenewal: 7, missedPayments: 0},
  { id: 9, name: 'John Doe', monthsAsTenant: 5, monthsUntilRenewal: 7, missedPayments: 0},
  { id: 10, name: 'John Doe', monthsAsTenant: 5, monthsUntilRenewal: 7, missedPayments: 0},
  { id: 11, name: 'John Doe', monthsAsTenant: 5, monthsUntilRenewal: 7, missedPayments: 0},
  { id: 12, name: 'John Doe', monthsAsTenant: 5, monthsUntilRenewal: 7, missedPayments: 0},
  { id: 13, name: 'John Doe', monthsAsTenant: 5, monthsUntilRenewal: 7, missedPayments: 0},
  { id: 14, name: 'John Doe', monthsAsTenant: 5, monthsUntilRenewal: 7, missedPayments: 0},
  { id: 15, name: 'John Doe', monthsAsTenant: 5, monthsUntilRenewal: 7, missedPayments: 0},
  { id: 16, name: 'John Doe', monthsAsTenant: 5, monthsUntilRenewal: 7, missedPayments: 0},

];

export default function Residents() {
  return (
    <div>
      <Head>
        <title>Residents</title>
      </Head>
      <Sidebar/>
      
      <Box ml={{base: '0', md: '60'}}>
        <Center>
          <InputGroup textAlign={'center'} m='24' maxW={'lg'} bg={useColorModeValue('gray.100', 'gray.600')} rounded={'lg'} >
            <InputLeftElement pointerEvents='none'>
              <SearchIcon color='gray.300' />
            </InputLeftElement>
            <Input placeholder='Search' />
          </InputGroup>
        </Center>

        <SimpleGrid minChildWidth='340px'>
          {residentInfo.map((resident) => (
            <UserCard 
              key={resident.id} 
              id={resident.id}
              name={resident.name} 
              monthsAsTenant={resident.monthsAsTenant} 
              monthsUntilRenewal={resident.monthsUntilRenewal} 
              missedPayments={resident.missedPayments}
            />
          ))}
        </SimpleGrid>
      </Box>
    </div>
  )
}
