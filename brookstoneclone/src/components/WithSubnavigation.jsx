import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  
  export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          
            
  
            <Flex display={{ base: 'none', md: 'flex' }}  paddingLeft='180px' ml={10}>
              <DesktopNav />
            </Flex>
          
  
          
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={8}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'Massage',
      children: [
        {
          label: 'Massage Chairs',
          href: 'https://www.brookstone.com/collections/massage-chairs',
        },
        {
          label: 'Eye',
          
          href: 'https://www.brookstone.com/collections/eye-massagers',
        },
        {
          label: 'Foot & leg',
          
          href: 'https://www.brookstone.com/collections/type-foot-and-calf-massager',
        },
        {
          label: 'Intimate',
          
          href: 'https://www.brookstone.com/collections/intimate',
        },
        {
          label: 'View all',
          
          href: 'https://www.brookstone.com/collections/massage',
        },
      ],
    },
    {
      label: 'Wellness',
      children: [
        {
          label: 'Bath',
          
          href: 'https://www.brookstone.com/collections/bathroom',
        },
        {
          label: 'Cold & Heat Therapy',
         
          href: 'https://www.brookstone.com/collections/cold-heat-sounds-light-therapy',
        },
        {
          label: 'Cupping',
         
          href: 'https://www.brookstone.com/collections/cupping',
        },
        {
          label: 'Grooming',
         
          href: 'https://www.brookstone.com/collections/grooming',
        },
        {
          label: 'View All',
         
          href: 'https://www.brookstone.com/collections/wellness',
        },
        
      ],
    },
    {
      label: 'Sleep',
      children:[
        {
          label:'Air Quality',
          href: 'https://www.brookstone.com/collections/air-quality-sanitization'
        },
        {
          label:'Alarms',
          href: 'https://www.brookstone.com/collections/alarms'
        },
        {
          label:'Intimate Pillows',
          href: 'https://www.brookstone.com/collections/intimate-pillows'
        },
        {
          label:'View All',
          href: 'https://www.brookstone.com/collections/sleep'
        },
      ]
    },
    {
      label: 'Home',
      children:[
        {
          label:'Accent & Decor',
          href: 'https://www.brookstone.com/collections/accent-decor'
        },
        {
          label:'Furniture',
          href: 'https://www.brookstone.com/collections/furniture'
        },
        {
          label:'Kitchen',
          href: 'https://www.brookstone.com/collections/kitchen-appliances'
        },
        {
          label:'View All',
          href: 'https://www.brookstone.com/collections/home'
        },
      ]
    },
    {
      label: 'Wine & Bar',
      children:[
        {
          label:'Accent & Decor',
          href: 'https://www.brookstone.com/collections/accent-decor'
        },
        {
          label:'Furniture',
          href: 'https://www.brookstone.com/collections/furniture'
        },
        {
          label:'Kitchen',
          href: 'https://www.brookstone.com/collections/kitchen-appliances'
        },
        {
          label:'View All',
          href: 'https://www.brookstone.com/collections/home'
        },
      ]
    },
    {
      label: 'Fitness',
      children:[
        {
          label:'Accent & Decor',
          href: 'https://www.brookstone.com/collections/accent-decor'
        },
        {
          label:'Furniture',
          href: 'https://www.brookstone.com/collections/furniture'
        },
        {
          label:'Kitchen',
          href: 'https://www.brookstone.com/collections/kitchen-appliances'
        },
        {
          label:'View All',
          href: 'https://www.brookstone.com/collections/home'
        },
      ]
    },
    {
      label: 'Outdoor',
      children:[
        {
          label:'Accent & Decor',
          href: 'https://www.brookstone.com/collections/accent-decor'
        },
        {
          label:'Furniture',
          href: 'https://www.brookstone.com/collections/furniture'
        },
        {
          label:'Kitchen',
          href: 'https://www.brookstone.com/collections/kitchen-appliances'
        },
        {
          label:'View All',
          href: 'https://www.brookstone.com/collections/home'
        },
      ]
    },
    {
      label: 'Technology',
      children:[
        {
          label:'Accent & Decor',
          href: 'https://www.brookstone.com/collections/accent-decor'
        },
        {
          label:'Furniture',
          href: 'https://www.brookstone.com/collections/furniture'
        },
        {
          label:'Kitchen',
          href: 'https://www.brookstone.com/collections/kitchen-appliances'
        },
        {
          label:'View All',
          href: 'https://www.brookstone.com/collections/home'
        },
      ]
    },
    {
      label: 'Travel',
      children:[
        {
          label:'Accent & Decor',
          href: 'https://www.brookstone.com/collections/accent-decor'
        },
        {
          label:'Furniture',
          href: 'https://www.brookstone.com/collections/furniture'
        },
        {
          label:'Kitchen',
          href: 'https://www.brookstone.com/collections/kitchen-appliances'
        },
        {
          label:'View All',
          href: 'https://www.brookstone.com/collections/home'
        },
      ]
    },{
      label: 'Accessories',
      children:[
        {
          label:'Accent & Decor',
          href: 'https://www.brookstone.com/collections/accent-decor'
        },
        {
          label:'Furniture',
          href: 'https://www.brookstone.com/collections/furniture'
        },
        {
          label:'Kitchen',
          href: 'https://www.brookstone.com/collections/kitchen-appliances'
        },
        {
          label:'View All',
          href: 'https://www.brookstone.com/collections/home'
        },
      ]
    },{
      label: 'Entertainment',
      children:[
        {
          label:'Accent & Decor',
          href: 'https://www.brookstone.com/collections/accent-decor'
        },
        {
          label:'Furniture',
          href: 'https://www.brookstone.com/collections/furniture'
        },
        {
          label:'Kitchen',
          href: 'https://www.brookstone.com/collections/kitchen-appliances'
        },
        {
          label:'View All',
          href: 'https://www.brookstone.com/collections/home'
        },
      ]
    },{
      label: 'Gift',
      children:[
        {
          label:'Accent & Decor',
          href: 'https://www.brookstone.com/collections/accent-decor'
        },
        {
          label:'Furniture',
          href: 'https://www.brookstone.com/collections/furniture'
        },
        {
          label:'Kitchen',
          href: 'https://www.brookstone.com/collections/kitchen-appliances'
        },
        {
          label:'View All',
          href: 'https://www.brookstone.com/collections/home'
        },
      ]
    },{
      label: 'Sale',
      children:[
        {
          label:'Accent & Decor',
          href: 'https://www.brookstone.com/collections/accent-decor'
        },
        {
          label:'Furniture',
          href: 'https://www.brookstone.com/collections/furniture'
        },
        {
          label:'Kitchen',
          href: 'https://www.brookstone.com/collections/kitchen-appliances'
        },
        {
          label:'View All',
          href: 'https://www.brookstone.com/collections/home'
        },
      ]
    },
  ];