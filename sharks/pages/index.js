import { Box, Button, Container, Flex, Heading, Grid, Link } from 'theme-ui'
import Schedule from '../components/schedule.mdx'
import Register from '../components/register.mdx'

function Program({ url, title, description }) {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}
    >
      <img
        src={url}
        style={{
          objectFit: 'cover',
          flexGrow: 1,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
        }}
        width="100%"
      />
      <Box
        p={3}
        sx={{
          bg: 'rgb(0,107,63)',
          color: 'white',
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
        }}
      >
        <Heading mb={1}>{title}</Heading>
        {description}
      </Box>
    </Flex>
  )
}

export default function Index(props) {
  return (
    <>
      <Box>
        <Box
          sx={{
            margin: 'auto',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            backgroundImage:
              'linear-gradient(90deg, rgba(0,107,63,0.7959558823529411) 0%, rgba(0,107,63,0.835171568627451) 100%), url(/banner.jpg)',
            py: 4,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            textAlign: 'center',
            color: 'white',
          }}
        >
          <img src="logo.png" height="120px" />
          <Heading sx={{ fontSize: 5 }}>The Singapore Sharks</Heading>
          <Heading mt={2}>
            <Link
              href="#schedule"
              color="white"
              sx={{ textDecoration: 'underline' }}
            >
              Schedule
            </Link>{' '}
            ~ <Link href="#registration" color="white"
              sx={{ textDecoration: 'underline' }}>Register</Link> ~{' '}
            <Link href="#partners" color="white"
              sx={{ textDecoration: 'underline' }}>Our Partners</Link>
          </Heading>
        </Box>
      </Box>
      <Container as="main" py={3} variant="copy" {...props}>
        <Box sx={{ fontSize: 2 }}>
          The Singapore Sharks Football Club was formed in 2007 and is the only
          club in Singapore that offers Australian Football (AFL) primarily at
          the junior level. The club welcomes girls and boys from all
          nationalities, all schools and all abilities. We currently have over
          400 passionate players, including well over 100 girls.
        </Box>
        <Box sx={{ fontSize: 2, my: 2 }}>
          At the moment, we run four programs:
        </Box>
        <Grid columns={[1, 2]}>
          <Program
            url="/junior.jpg"
            title="JUNIORS"
            description={`
            Girls & boys aged 3-6 years old. This is an introductory program
              focused on having fun whilst learning the basics of ball handling,
              kicking and movement.`}
          />
          <Program
            url="/girls_footy.jpg"
            title="GIRLS FOOTY"
            description={`
            Girls 7-14 years old. Girls footy is up to half-price off for
              2022! Girls get to enjoy their own separate groups, dedicated
              coaching and their own Lightning Rounds.`}
          />
          <Program
            url="/boys_footy.jpg"
            title="BOYS FOOTY"
            description={`
            Boys 7-14 years old. Program focuses on skills, fitness and match play, culminating in the famous Sharks Lightning Rounds.`}
          />
          <Program
            url="/seniors.jpg"
            title="SENIOR FOOTY"
            description={`
            All players 15 years and over.  Footy for teenagers, veterans and everyone in between.`}
          />
        </Grid>
      </Container>
      <Box mt={3} py={3} sx={{ bg: 'rgb(0,107,63)', color: 'white!important' }}>
        <Container variant="copy">
          <Heading as="h1" mb={3} mt={3} id="schedule">
            Schedule
          </Heading>
          <Schedule />
        </Container>
      </Box>
      <Box py={3}>
        <Container variant="copy">
          <Heading as="h1" id="registration" my={3}>
            Registration
          </Heading>
          <Register />
        </Container>
      </Box>
      <Box py={3} sx={{ bg: 'rgb(0,107,63)', color: 'white!important' }}>
        <Container variant="copy" mt={3}>
          <Heading as="h1" mb={2} id="partners">
            Thank You To Our Partners
          </Heading>
          <Box my={2}>
            The Singapore Sharks Football Club would not be able to function as
            successfully as we do without the very generous support of our
            sponsors and partners. We are extremely grateful for their ongoing
            involvement and partnership.
          </Box>
          <Box sx={{ bg: 'white', borderRadius: 4, padding: 3, color: 'text' }}>
            <img
              src="/visy.png"
              width="130px"
              style={{ marginBottom: '8px' }}
            />
            <br />
            <b>Visy</b> is a global leader in the packaging, paper and resource
            recovery industries, providing high quality, innovative and
            sustainable packaging products and solutions. We have been leading
            packaging innovation for over 60 years. We offer unique, fully
            integrated, forward thinking closed loop packaging and recycling
            solutions that align with customer and industry needs. Our
            manufacturing and processing, technology, logistics and design are
            part of a streamlined system that ensures our packaging solutions
            are consistently among the best in the world.
          </Box>
          <Box
            sx={{
              bg: 'white',
              borderRadius: 4,
              padding: 3,
              color: 'text',
              mt: 3,
            }}
          >
            <img
              src="/mpage.png"
              width="160px"
              style={{ marginBottom: '4px', marginTop: '8px' }}
            />
            <br />
            Established in London in 1976, <b>PageGroup</b> is one of the
            largest and most highly respected recruitment companies in the
            world. PageGroup employs over 8000 professionals with over 1500
            across 19 locations in Asia. PageGroup is listed in London and is a
            FTSE 250 company. LinkedIn has recognised PageGroup with the award
            of the world’s most socially engaged recruitment company. PageGroup
            established a presence in Singapore 22 years ago and currently
            employs over 200 people.
          </Box>
          <Box
            sx={{
              bg: 'white',
              borderRadius: 4,
              padding: 3,
              color: 'text',
              mt: 3,
            }}
          >
            <img
              src="odin.png"
              width="220px"
              style={{ marginBottom: '4px', marginTop: '8px' }}
            />
            <br />
            <b>Odin Mortage</b> is the leading mortgage brokers to Australian
            Expats & foreign nationals globally. ​We are committed to giving you
            the best experience – whether you are interested in a new loan,
            wanting to refinance, or just researching.
          </Box>
          <Box
            sx={{
              bg: 'white',
              borderRadius: 4,
              padding: 3,
              color: 'text',
              mt: 3,
            }}
          >
            <img
              src="coast.png"
              width="160px"
              style={{ marginBottom: '4px', marginTop: '8px' }}
            />
            <br />
            <b>Coast Clothing Co.</b> a Melbourne based resort-wear brand made
            for the modern, classic man that pushes to make sustainable thinking
            the standard, not the expectation.
          </Box>
          <Box
            sx={{
              bg: 'white',
              borderRadius: 4,
              padding: 3,
              color: 'text',
              mt: 3,
            }}
          >
            <img
              src="ais.png"
              width="160px"
              style={{ marginBottom: '4px', marginTop: '8px' }}
            />
            <br />
            <b>The Australian International School</b> is an International
            Baccalaureate (IB) Organisation World School based in Singapore. The
            school provides a challenging educational program for young people
            of all nationalities. Whilst the majority of students are from
            Australia and New Zealand, there are 49 nationalities represented at
            the school, reflecting the multicultural diversity of modern
            Australia.
          </Box>
        </Container>
      </Box>
      <Box bg="dark" color="white" py={3} sx={{ textAlign: 'center' }}>
        <Heading as="h3" mb={2}>
          Singapore Sharks Football Club
        </Heading>
        Follow us on{' '}
        <Link
          color="instagram"
          target="_blank"
          href="https://www.instagram.com/sharksaussierules/"
        >
          Instagram
        </Link>{' '}
        &{' '}
        <Link
          color="blue"
          target="_blank"
          href="https://www.facebook.com/Singapore-Sharks-AFL-504955326193778/?fref=ts"
        >
          Facebook
        </Link>
        .
      </Box>
    </>
  )
}
