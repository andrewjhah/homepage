import { Container, Heading, LinkOverlay, SimpleGrid, Stack } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { ResearchGridItem } from '../components/grid-item'

import thumbStudentDepression from '../public/images/contents/student_depression.png'
import thumbLatticeCrypto from '../public/images/contents/lattice-crypto.png'

const Research = () => (
  <Layout title="Research">
    <Container maxW = "container.xl">
      <Stack direction={['column', 'row']} my={4} spacing='24px' justify="space-between">
        <Heading as="h3" fontSize={20} mb={4}>
          Research
        </Heading>
      </Stack>

        <Section delay={0.1}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <LinkOverlay href = "/files/andrew-hah-reu-paper.pdf">
              <ResearchGridItem id="lattice-crypto" title="Lattice-Based Cryptography" thumbnail={thumbLatticeCrypto}>
              </ResearchGridItem>
            </LinkOverlay>
            <LinkOverlay href = "/files/student_depression.pdf">
              <ResearchGridItem id="student_depression" title="Modeling and Predicting College Student Depression Levels" thumbnail={thumbStudentDepression}>
              </ResearchGridItem>
            </LinkOverlay>
          </SimpleGrid>
        </Section>
    </Container>
  </Layout>
)

export default Research
export { getServerSideProps } from '../components/chakra'
