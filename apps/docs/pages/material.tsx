import React from 'react'
import Mica from '@wui/windows/materials/mica'
import Button from '@wui/windows/button'
import { useRouter } from 'next/router'
import clsx from 'clsx'

export default function Material() {
  const router = useRouter()

  const mode = router.query.mode === undefined || router.query.mode === 'light' ? 'light' : 'dark'

  const [isAlt, setIsAlt] = React.useState(false)

  return (
    <div className="content">
      <h1>Mica</h1>
      <div className={clsx('mica-playground', mode)}>
        <Mica variant={isAlt ? 'alt' : 'base'} style={{ width: '80%', height: 416 }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <Button variant="standard" onClick={() => setIsAlt(!isAlt)}>
              This is Mica {isAlt ? 'Alt' : ''}
            </Button>
          </div>
        </Mica>
      </div>
    </div>
  )
}
