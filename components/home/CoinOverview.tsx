import { fetcher } from '@/lib/coingecko.actions'
import { formatCurrency } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import CandlestickChart from '../CandleStickChart'

const CoinOverview = async () => {
  try {

    const [coin, coinOHLCData] = await Promise.all([
      await fetcher<CoinDetailsData>('/coins/bitcoin', {
        dex_pair_format: 'symbol'
      }),
      await fetcher<OHLCData[]>('/coins/bitcoin/ohlc', {
        vs_currency: 'usd',
        days: 1,
        // interval: "daily",

      })
    ])
    return (
      <div id='coin-overview'>
        <CandlestickChart data={coinOHLCData} coinId = "bitcoin">

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
        </CandlestickChart>

      </div>
    )
  } catch (error) {
    console.error("CoinOverview Error:", error);
    return (
      <div id='coin-overview' className='flex items-center justify-center h-full min-h-[200px]'>
        <p className='text-red-500'>Failed to load coin data</p>
      </div>
    )
  }
}


export default CoinOverview