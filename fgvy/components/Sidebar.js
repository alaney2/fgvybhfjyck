import React, { ReactNode } from 'react';
import {
  IconButton,
  Avatar,
  Box,
  Button,
  Center,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorMode
} from '@chakra-ui/react';
import {
  MoonIcon,
  SunIcon,
} from '@chakra-ui/icons';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi';
import {
  FaRegEnvelope
} from 'react-icons/fa';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import NextLink from 'next/link'
import AtAGlance from '../components/AtAGlance';

const LinkItems = [
  { name: 'Home', icon: FiHome, href: '/properties' },
  { name: 'Finances', icon: FiTrendingUp, href: '/finances' },
  { name: 'Maintenance Requests', icon: FiCompass, href: '/maintenance-requests' },
  { name: 'Messages', icon: FaRegEnvelope, href: 'messages'},
  { name: 'Residents', icon: FiStar, href: '/residents' },
  { name: 'Settings', icon: FiSettings, href: '/settings' },
];

export default function Sidebar(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box h="100%" className='sidebar'>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box>
        {props.content && <props.content/>}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="0.3s ease"
      bg={useColorModeValue('white', 'gray.800')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.900')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          LOGO
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NextLink key={link.name} href={link.href} passHref>
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        </NextLink>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.800')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        Logo
      </Text>

      <HStack spacing={{ base: '0', md: '2' }}>
        <NextLink href="#" passHref>
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}>
            Properties
          </Button>
        </NextLink>
        <Button onClick={toggleColorMode} bg={useColorModeValue('white', 'gray.900')}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              px={4}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={'https://avatars.dicebear.com/api/male/username.svg'}
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">Building Owner</Text>
                  <Text fontSize="xs" color="gray.400">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Account Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <NextLink href='/' passHref>
                <MenuItem>
                  Sign Out
                </MenuItem>
              </NextLink>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};