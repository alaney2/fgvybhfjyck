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
  Spacer,
  Text
} from '@chakra-ui/react'
import {
  CheckIcon,
} from '@chakra-ui/icons';

const features = Array.apply(null, Array(8)).map(function (x, i) {
  return {
    id: i,
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
  };
});

const apartmentName = 'Seven07'
const apartmentAddress = '707 S 4th St, Champaign, IL 61820'

export default function AtAGlance() {
  return (
    <Box p={4} ml={{base: '0', md: '60'}}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'4xl'}>{apartmentName}</Heading>
        <Text color={'gray.500'} fontSize={'xl'}>
          {apartmentAddress}
        </Text>
      </Stack>

      <Flex mt={10}>
        <Spacer />
        <VStack align={'start'}>
          <Text fontWeight={600}>{'threejs building model'}</Text>
          <Text color={'gray.600'}>{}</Text>
        </VStack>
        <Spacer />

        <VStack align={'start'}>
          <Heading as='u' mb='6' fontSize={{base: '2xl', md: '3xl'}}>At a Glance</Heading>
          <HStack align={'top'}>
            <Box color={'green.400'} px={2}>
              <Icon as={CheckIcon} />
            </Box>
            <VStack align={'start'}>
              <Text fontWeight={600}>{'0 Maintenance Requests'}</Text>
              <Text color={'gray.600'}>{}</Text>
            </VStack>
          </HStack>
          <HStack align={'top'}>
            <Box color={'green.400'} px={2}>
              <Icon as={CheckIcon} />
            </Box>
            <VStack align={'start'}>
              <Text fontWeight={600}>{'80 Residents'}</Text>
              <Text color={'gray.600'}>{}</Text>
            </VStack>
          </HStack>
          <HStack align={'top'}>
            <Box color={'green.400'} px={2}>
              <Icon as={CheckIcon} />
            </Box>
            <VStack align={'start'}>
              <Text fontWeight={600}>{'$8,000,000 monthly income'}</Text>
              <Text color={'gray.600'}>{}</Text>
            </VStack>
          </HStack>
        </VStack>
        <Spacer />
      </Flex>
    </Box>
  )
}