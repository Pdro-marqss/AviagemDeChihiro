import { MainContainer, TextContainer, Play } from './styles';

function Home() {
    return (
        <MainContainer>
            <TextContainer>
                <h2>Hayao Miyazaki</h2>
                <h1>A viagem <br /> de chihiro</h1>
                <p>Chihiro chega a um mundo magico dominado por <br />uma bruxa. Aqueles que a desobedecem são
                    <br /> transformados em animais.</p>
                <div className='buttons-container'>
                    <button className='btn-fill'><Play />Assistir agora</button>
                    <button className='btn-border'>Assistir o trailer</button>
                </div>
            </TextContainer >
            <img src="./assets/ilustracao.png" alt="Fantasminhas do filme" />
        </MainContainer>

        // continuar daqui (falta responsivo e ajustar tamanhos, parece que tem pouco espaco na tela)
    );
}

export default Home;