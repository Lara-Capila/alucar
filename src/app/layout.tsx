import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './globals.css';

export const metadata = {
  title: 'AluCar',
  description: 'Descubra a liberdade das estradas com nosso serviço de aluguel de carros.',
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <html lang="pt-br">
    <body className="relative">
      <Navbar />
      {children}
      <Footer />
    </body>
  </html>
);

export default RootLayout;
