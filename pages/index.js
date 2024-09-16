import {
  Link,
  Container,
  Heading,
  Box,
  Stack,
  SimpleGrid,
  Button,
  chakra,
  IconButton,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import Image from 'next/image'
import { BsLinkedin, BsMedium } from 'react-icons/bs'
import { BioSection, BioYear } from '../components/bio'
import thumbSatellite from '../public/images/works/satellite.png'
import thumbStudentDepression from '../public/images/contents/student_depression.png'
import thumbLatticeCrypto from '../public/images/contents/lattice-crypto.png'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container maxW = "container.md">
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Andrew Hah
          </Heading>
          <p>Math, CS @ UChicago</p>
          <Stack mt={4} spacing={4} direction='row' align='center'>
            <Link href="/files/resume.pdf" target="_blank">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="red" size='md' variant='solid'>
                Resume / CV
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/andrewhah/" target="_blank">
              <IconButton
                variant='outline'
                colorScheme='red'
                aria-label='linkedin'
                fontSize='20px'
                icon={<BsLinkedin />}
              />
            </Link>
            <Link href="https://medium.com/@andrew.hah/" target="_blank">
              <IconButton
                variant='outline'
                colorScheme='red'
                aria-label='medium'
                fontSize='20px'
                icon={<BsMedium />}
              />
            </Link>
          </Stack>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="130px"
            h="130px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/andrew.jpg"
              alt="Profile image"
              borderRadius="full"
              width="170"
              height="170"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <p>
        I’m a student at the University of Chicago studying mathematics and computer science with a keen interest in interdisciplinary problem-solving. I am fascinated by the crossroads where hard sciences like math and computer science meet the more nuanced, human-centric fields like sociology and economics. My aim is to leverage mathematical precision and computational algorithms as  tools for dissecting complex systems, providing innovative solutions to real-world challenges.
        </p>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Technical Skills
        </Heading>
        <BioSection>
          <BioYear>Programming Languages:</BioYear>
          C, Python, Rust, Javascript, HTML, CSS, PostgreSQL
        </BioSection>
        <BioSection>
          <BioYear>Frameworks & Libraries:</BioYear>
          Pytorch, React, Pandas, Numpy
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          My Interests
        </Heading>
        <p>
        Squash, Tennis, Poker, Abstract Art, Fashion, Philosophy
        </p>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Projects/Research
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <GridItem href="/files/andrew-hah-reu-paper.pdf"
        title="Lattice-Based Cryptography"
        thumbnail={thumbLatticeCrypto}>
      
        </GridItem>
          <GridItem
            href="https://medium.com/@andrew.hah/using-satellite-imagery-to-predict-house-prices-5454b3f53c42"
            title="Using Satellite Imagery to Predict House Prices"
            thumbnail={thumbSatellite}
          >
            Hybrid neural network model integrating both tabular and image data to predict house prices
          </GridItem>
          <GridItem
            href="/files/student_depression.pdf"
            title="Modeling and Predicting College Student Depression Levels"
            thumbnail={thumbStudentDepression}>

            </GridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
