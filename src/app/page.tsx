import { NextPage } from 'next';
import Catalogue from '../components/Catalogue';
import Hero from '../components/Hero';
import { FilterProps } from '../services';

interface HomeProps {
  searchParams: FilterProps
}

const Home: NextPage<HomeProps> = ({ searchParams }) => (
  <main className="overflow-hidden">
    <Hero />
    <Catalogue searchParams={searchParams} />
  </main>
);

export default Home;
