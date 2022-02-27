import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';

export default function UserCard( { id, name, monthsAsTenant, monthsUntilRenewal, missedPayments } ) {
  return (
    <Center py={6} px={8}>
      <Box
        maxW={'340px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              {name}
            </Heading>
            <Text color={'gray.500'}>Tenant for {monthsAsTenant} months</Text>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{monthsUntilRenewal} months</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                until renewal
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{missedPayments}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                missed payments
              </Text>
            </Stack>
          </Stack>

          <NextLink href={{
            pathname: '/residents/[id]',
            query: { id: id }
          }} passHref>  
            <Button
              w={'full'}
              mt={8}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}>
              Manage
            </Button>
          </NextLink>
        </Box>
      </Box>
    </Center>
  );
}