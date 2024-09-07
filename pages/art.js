import { Container, Heading, SimpleGrid, Stack } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbRubbing1 from '../public/images/art/rubbing-1.png'

const Projects = () => (
  <Layout title="Projects">
    <Container maxW = "container.xl">
      <Stack direction={['column', 'row']} my={4} spacing='24px' justify="space-between">
        <Heading as="h3" fontSize={20} mb={4}>
          Art
        </Heading>
      </Stack>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
        <GridItem
            href="../public/images/art/rubbing-1.png" 
            target="_blank" 
            path={path}
            thumbnail={thumbRubbing1}
          >

          </GridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'
