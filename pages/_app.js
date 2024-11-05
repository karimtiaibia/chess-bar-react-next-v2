import { GlobalStyles } from '@/lib/GlobalStyles';
import { StyledComponentsRegistry } from '@/lib/StyledComponentsRegistry';
import Header from './components/Header';
import Footer from './components/Footer';
export default function MyApp({ Component, pageProps }) {
    return (
        <StyledComponentsRegistry>
            <GlobalStyles />
            <>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </>
        </StyledComponentsRegistry>
    );
}
