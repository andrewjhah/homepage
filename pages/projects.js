import { Container, Heading, SimpleGrid, Stack } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbSatellite from '../public/images/works/satellite.png'

const Projects = () => (
  <Layout title="Projects">
    <Container maxW = "container.xl">
      <Stack direction={['column', 'row']} my={4} spacing='24px' justify="space-between">
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>
      </Stack>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
        <GridItem
            href="https://medium.com/@andrew.hah/using-satellite-imagery-to-predict-house-prices-5454b3f53c42"
            title="Using Satellite Imagery to Predict House Prices"
            thumbnail={thumbSatellite}
          >
            Hybrid neural network model integrating both tabular and image data to predict house prices
          </GridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'
