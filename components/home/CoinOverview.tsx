import { fetcher } from '@/lib/coingecko.actions'
import { formatCurrency } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const CoinOverview = async () => {
  let coin: CoinDetailsData | null = null;
  try {
    coin = await fetcher<CoinDetailsData>('/coins/bitcoin', {
      dex_pair_format: 'symbol'
    })
  } catch (error) {
    console.error("CoinOverview Error:", error);
    return (
      <div id='coin-overview' className='flex items-center justify-center h-full min-h-[200px]'>
        <p className='text-red-500'>Failed to load coin data</p>
      </div>
    )
  }

  return (
    <div id='coin-overview'>
      <div className='header pt-2'>
        <Image
          src={coin.image.large} alt={coin.name}
          width={100}
          height={100}
        />
        <div className='info'>
          <p>{coin.name} / {coin.symbol.toUpperCase()}</p>
          <h1>{formatCurrency(coin.market_data.current_price.usd)}</h1>
        </div>
      </div>
    </div>
  )
}

export default CoinOverview