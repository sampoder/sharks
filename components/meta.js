import Head from 'next/head'
import theme from '../lib/theme'

const makeTitle = (title, name) =>
  title === name ? title : `${title} – ${name}`

const Meta = ({
  title = 'The Singapore Sharks Football Club', // page title
  name = 'The Singapore Sharks Football Club', // site name
  description = 'The Singapore Sharks Football Club was formed in 2007 and is the only club in Singapore that offers Australian Football (AFL) primarily at the junior level. The club welcomes girls and boys from all nationalities, all schools and all abilities. We currently have over 400 passionate players, including well over 100 girls.', // page description
  image = 'https://sg-sharks.vercel.app/girls_footy.jpg', // social card image URL
  url = 'https://sg-sharks.vercel.app',
  children,
}) => (
  <Head>
    <meta key="og_locale" property="og:locale" content="en_US" />
    <meta key="og_type" property="og:type" content="website" />
    <meta key="og_site" property="og:site_name" content={name} />
    <title key="title">{makeTitle(title, name)}</title>
    <meta key="og_title" property="og:title" content={makeTitle(title, name)} />
    <meta
      key="tw_title"
      name="twitter:title"
      content={makeTitle(title, name)}
    />
    {description && (
      <>
        <meta key="desc" name="description" content={description} />
        <meta key="og_desc" property="og:description" content={description} />
        <meta key="tw_desc" name="twitter:description" content={description} />
      </>
    )}
    {image && (
      <>
        <meta key="og_img" property="og:image" content={image} />
        <meta key="tw_card" name="twitter:card" content="summary_large_image" />
        <meta key="tw_img" name="twitter:image" content={image} />
      </>
    )}
    <meta key="theme_color" name="theme-color" content={theme.colors.primary} />
    <meta
      key="tile_color"
      name="msapplication-TileColor"
      content={theme.colors.primary}
    />
    <link
      key="safari_icon"
      rel="mask-icon"
      href={`${url}/safari-pinned-tab.png`}
      color={theme.colors.primary}
    />
    <link
      key="apple_icon"
      rel="apple-touch-icon"
      sizes="180x180"
      href={`${url}/apple-touch-icon.png`}
    />
    <link
      key="favicon_32"
      rel="icon"
      type="image/png"
      sizes="32x32"
      href={`${url}/favicon-32x32.png`}
    />
    <link
      key="favicon_16"
      rel="icon"
      type="image/png"
      sizes="16x16"
      href={`${url}/favicon-16x16.png`}
    />
    <link key="manifest" rel="manifest" href={`${url}/site.webmanifest`} />
    {children}
  </Head>
)

export default Meta
