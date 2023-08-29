import { NextPage } from 'next';
// import Catalogue from '../components/Catalogue';
import dynamic from 'next/dynamic';

import Hero from '../components/Hero';
import { FilterProps } from '../services';

interface HomeProps {
  searchParams: FilterProps
}

const Catalogue = dynamic(() => import('../components/Catalogue'));

const Home: NextPage<HomeProps> = ({ searchParams }) => (
  <main className="overflow-hidden">
    <Hero />
    <Catalogue searchParams={searchParams} />
  </main>
);

export default Home;
