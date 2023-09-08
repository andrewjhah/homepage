import { Container, Heading, LinkOverlay, SimpleGrid, Stack } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { ResearchGridItem } from '../components/grid-item'

import thumbStudentDepression from '../public/images/contents/student_depression.png'

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
            <LinkOverlay href = "/files/student_depression.pdf">
              <ResearchGridItem id="student_depression" title="Modelling and Predicting Student Depression Levels" thumbnail={thumbStudentDepression}>
              </ResearchGridItem>
            </LinkOverlay>
          </SimpleGrid>
        </Section>
    </Container>
  </Layout>
)

export default Research
export { getServerSideProps } from '../components/chakra'
