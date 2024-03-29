import { IOInstance } from '@/common/io/instance'
import { Box } from '@mui/joy'
import React, { useEffect, useRef } from 'react'

export default function VerifyCode() {
  const verifyCodeRef = useRef<HTMLDivElement>()

  useEffect(() => {
    lodeVerifyCode()
  }, [])

  function lodeVerifyCode() {
    const svgDom = verifyCodeRef.current
    if (svgDom) {
      const height = svgDom.clientHeight
      const width = svgDom.offsetWidth
      IOInstance.request<unknown>({
        method: 'get',
        url: '/service/verify_code',
        params: {
          width,
          height,
          field: 'login',
        },
      }).then((res: string) => {
        svgDom.innerHTML = res
      })
    }
  }
  return (
    <Box
      width={'50%'}
      ref={verifyCodeRef}
      sx={{
        cursor: 'pointer',
        display: 'flex',
      }}
      onClick={lodeVerifyCode}></Box>
  )
}
