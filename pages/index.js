import Head from 'next/head'
import Link from 'next/link'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import IconButton from '@material-ui/core/IconButton'
import ImageOfficial from '../components/ImageOfficial'
import ColorBlock from '../components/ColorBlock'
import TitleText from '../components/TitleText'

export default function CoverPage() {

  return (
    <>
    <Head>
      <title>John Cavaseno | Actor, Dancer, Singer</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/gif/png" href="theater-icon-1.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/> 
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      {/* <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Montserrat&display=swap" rel="stylesheet"/>  */}
      {/* <link href="https://fonts.googleapis.com/css2?family=Londrina+Outline&display=swap" rel="stylesheet"/> */}
      <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500&display=swap" rel="stylesheet"/>
    </Head> 
    <ImageOfficial 
      source="/John_0073.jpg" 
      alternate="John Cavaseno Cool Look" 
      height='80vh'
      width='40vw'
      backgroundColor="#FFFFFF"
    />
    <ColorBlock
      height='32vh'
      width='100vw'
      backgroundColor='#DEB887'
      placement={{
        bottom: 0,
      }}
    />
    <TitleText
      fontFamily={`'Cinzel', serif`}
      color='#424242'
      placement={{
        top: 120,
        left: '50vw',
      }}
      size='9vw'
      text='John Cavaseno'
    />
    <div style={{
      position: 'absolute',
      bottom: 0,
      right: 0,
      zIndex: 1,
      margin: '1vh 1vw',
    }}>
      <Link href='/home'>
        <IconButton>
          <ArrowForwardIcon fontSize='large'/>
        </IconButton>
      </Link>
    </div>
    </>
  )
}
