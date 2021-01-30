import React from 'react';
import { InterfaceCard } from '../interfaces/interface';
import Card from './Catalog/Card/Card';

export interface StandardSalesHitProps {
  salesHit: Array<InterfaceCard>;
}

const SalesHit: React.FC<StandardSalesHitProps> = ({ salesHit }) => (
  <div className='row'>
    {salesHit.map(e => (
      <Card key={e.id} price={e.price} id={e.id} src={e.images[0]} title={e.title} />
    ))}
  </div>
);

export default SalesHit;
