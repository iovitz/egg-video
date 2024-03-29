import React from 'react'
import Box, { BoxProps } from '@mui/joy/Box'

function Root(props: BoxProps) {
  return (
    <Box
      {...props}
      sx={[
        {
          bgcolor: 'background.appBody',
          display: 'grid',
          gridTemplateColumns: {
            sm: 'minmax(120px, 200px) minmax(450px, 1fr)',
          },
          gridTemplateRows: '64px 1fr',
          height: '100%',
        },
      ]}
    />
  )
}

function Header(props: BoxProps) {
  return (
    <Box
      component='header'
      className='Header'
      {...props}
      sx={[
        {
          p: 2,
          gap: 2,
          bgcolor: 'background.surface',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gridColumn: '1 / -1',
          borderBottom: '1px solid',
          borderColor: 'divider',
          position: 'sticky',
          top: 0,
          zIndex: 1100,
        },
      ]}
    />
  )
}

function SideNav(props: BoxProps) {
  return (
    <Box
      component='nav'
      className='Navigation'
      {...props}
      sx={[
        {
          p: 2,
          bgcolor: 'background.surface',
          borderRight: '1px solid',
          borderColor: 'divider',
        },
      ]}
    />
  )
}

function Main(props: BoxProps) {
  return <Box component='main' className='Main' {...props} />
}

export default {
  Root,
  Header,
  SideNav,
  Main,
}
