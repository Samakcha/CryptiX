import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import React from 'react';

export const CoinOverviewFallback = () => {
  return (
    <div id="coin-overview-fallback">
      <div className="header">
        <div className="header-image skeleton" />
        <div className="info">
          <div className="header-line-sm skeleton" />
          <div className="header-line-lg skeleton" />
        </div>
      </div>
    </div>
  );
};

export const TrendingCoinsFallback = () => {
  return (
    <div id="trending-coins-fallback">
      <h4>Trending Coins</h4>
      <div className="trending-coins-table">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent!">
              <TableHead className="bg-dark-400 py-4 pl-5">Name</TableHead>
              <TableHead className="bg-dark-400 py-4">24h Change</TableHead>
              <TableHead className="bg-dark-400 py-4 pr-5">Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 2, 3].map((_, i) => (
              <TableRow
                key={i}
                className="overflow-hidden border-b border-purple-100/5 hover:bg-dark-400/30!"
              >
                <TableCell className="name-cell py-4 pl-5">
                  <div className="name-link">
                    <div className="name-image skeleton" />
                    <div className="name-line skeleton" />
                  </div>
                </TableCell>
                <TableCell className="change-cell py-4">
                  <div className="change-line skeleton" />
                </TableCell>
                <TableCell className="price-cell py-4 pr-5">
                  <div className="price-line skeleton" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
