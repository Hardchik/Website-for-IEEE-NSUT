import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
    Image
  } from '@chakra-ui/react';
  import ieeecas from '../../assets/images/ieeecas.svg'
  
  export default function CAS() {
    return (
      <Center py={6}>
        <Box
          maxW={'320px'}
          w={'full'}
          h={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Image
            size={'xl'}
            src={ieeecas
            //   'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            }
            alt={'Avatar Alt'}
            mb={4}
            pos={'relative'}
            // _after={{
            //   content: '""',
            //   w: 4,
            //   h: 4,
            //   bg: 'green.300',
            //   border: '2px solid white',
            //   rounded: 'full',
            //   pos: 'absolute',
            //   bottom: 0,
            //   right: 3,
            // }}
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            CAS Chapter
          </Heading>
          {/* <Text fontWeight={600} color={'gray.500'} mb={4}>
            @lindsey_jam3s
          </Text> */}
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
                CAS focuses on the theory, analysis, design, and implementation of circuits and systems. The field spans theoretical foundations, applications, and circuits implementations of algorithms for signal processing.
          </Text>
  
          {/* <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #art
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #photography
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #music
            </Badge>
          </Stack> */}
  
          <Stack mt={8} direction={'row'} spacing={4}>
            {/* <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              Message
            </Button> */}
            <Button
              as={'a'}
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              href={'#'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}
              justifySelf={'bottom'}>
              Connect with Us
            </Button>
          </Stack>
        </Box>
      </Center>
    );
  }