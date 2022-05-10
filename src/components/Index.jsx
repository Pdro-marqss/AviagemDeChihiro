import { Container, Facebook, Instagram, Twitter, Youtube } from './styles';

function Header() {
    return (
        <Container>
            <img src="./assets/Logo.svg" alt="Logo" />
            <div className='social'>
                <Facebook />
                <Instagram />
                <Twitter />
                <Youtube />
            </div>
        </Container>
    );
}

export default Header;