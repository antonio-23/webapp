import React from 'react'
import { storiesOf } from '@storybook/react'
import { StakeTile } from './StakeTile'
storiesOf('farmsList/stakeTile', module).add('tile', () => {
  return (
    <div style={{ width: 500, height: 500 }}>
      <StakeTile
      tokenXSymbol='BTC'
      tokenYSymbol='SOL'
      minPrice={2}
      maxPrice={5.005}
      fee={0.3}
      tokenXDeposit={2137}
      tokenYDeposit={911}
      value={5184}
        onStake={() => {
          console.log('stake')
        }}
      />
    </div>
  )
})
