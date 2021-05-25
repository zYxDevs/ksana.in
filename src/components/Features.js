import {
  Box,
  Container,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex
} from '@chakra-ui/react'
import { FcLink, FcBullish, FcTreeStructure } from 'react-icons/fc'

const Feature = ({ title, text, icon }) => {
  return (
    <Stack spacing="2" align="center" >
      <Flex mb={1} w={16} h={16} bg={'gray.100'} align={'center'} justify={'center'} color={'white'} rounded={'full'}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'} textAlign="center">{text}</Text>
    </Stack>
  )
}

export const Features = () => {
  return (
    <Container maxW={'5xl'} mx="auto" as="section">
      <Box p={4}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature
            icon={<Icon as={FcLink} w={10} h={10} />}
            title={'Mempercantik Tautan'}
            text={
              'Tidak perlu lagi mengingat tautan yang panjang, pesan tautan dambaanmu sekarang'
            }
          />
          <Feature
            icon={<Icon as={FcTreeStructure} w={10} h={10} />}
            title={'Bagikan Tautan'}
            text={
              'Sangat mudah membagikan tautan ke berbagai sosial media dan pesan instan, langsung dari halaman dashboard'
            }
          />
          <Feature
            icon={<Icon as={FcBullish} w={10} h={10} />}
            title={'Pantau Statistik'}
            text={
              'Pantau jumlah pengguna yang mengunjungi tautanmu dengan mudah'
            }
          />
        </SimpleGrid>
      </Box>
    </Container>
  )
}