import { Container, Heading, SimpleGrid, Stack } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbRubbing1 from '../public/images/art/rubbing-1.png'
import thumbRubbing2 from '../public/images/art/rubbing-2.png'
import thumbRubbing3 from '../public/images/art/rubbing-3.png'
import thumbCharc1 from '../public/images/art/charc-1.png'
import thumbCharc2 from '../public/images/art/charc-2.png'
import thumbCenti1 from '../public/images/art/centi-1.png'
import thumbCenti2 from '../public/images/art/centi-2.png'
import thumbPhoto1 from '../public/images/art/photo-1.png'

const Projects = () => (
  <Layout title="Projects">
    <Container maxW = "container.xl">
      <Stack direction={['column', 'row']} my={4} spacing='24px' justify="space-between">
        <Heading as="h3" fontSize={20} mb={4}>
          Art
        </Heading>
      </Stack>

      <SimpleGrid columns={[1, 1, 3]} gap={6}>
        <Section>
        <GridItem
            href="/images/art/rubbing-1.png" 
            target="_blank" 
            thumbnail={thumbRubbing1}
          >
          </GridItem>
          <GridItem
            href="/images/art/rubbing-2.png" 
            target="_blank" 
            thumbnail={thumbRubbing2}
          >
          </GridItem>
          <GridItem
            href="/images/art/rubbing-3.png" 
            target="_blank" 
            thumbnail={thumbRubbing3}
          >
          </GridItem>
        </Section>
      </SimpleGrid>
    {/* <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
        <GridItem
            href="/images/art/charc-1.png" 
            target="_blank" 
            thumbnail={thumbCharc1}
        >
        </GridItem>
        <GridItem
            href="/images/art/charc-2.png" 
            target="_blank" 
            thumbnail={thumbCharc2}
        >
        </GridItem>
        <GridItem
            href="/images/art/centi-1.png" 
            target="_blank" 
            thumbnail={thumbCenti1}
        >
        </GridItem>
        <GridItem
            href="/images/art/centi-2.png" 
            target="_blank" 
            thumbnail={thumbCenti2}
        >
        </GridItem>
        </Section>
    </SimpleGrid>
    <SimpleGrid columns={[1, 1, 4]} gap={6}>
        <Section>
        <GridItem
            href="/images/art/photo-1.png" 
            target="_blank" 
            thumbnail={thumbPhoto1}
        >
        </GridItem>
        </Section>
    </SimpleGrid> */}
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'
