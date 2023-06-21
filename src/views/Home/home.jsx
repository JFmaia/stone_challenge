// Importando svg como component, logo da Stone
import { ReactComponent as StoneLogo } from '../../assets/stone.svg';
import { ReactComponent as FrontMachine } from '../../assets/fees/front-machine.svg';
import { ReactComponent as Arrow } from '../../assets/machine/arrow.svg';

//Import button light
import {ButtonLight} from '../../components/ButtonLight/ButtonLight';
import "../../components/ButtonLight/ButtonLight.css";

//Import button Dark
import {ButtonDark} from '../../components/ButtonDark/ButtonDark';
import "../../components/ButtonDark/ButtonDark.css";

export function Home(){
    return (
        <div>
            <header>
                <nav className='container nav-bar'>
                    <div className='options-about'>
                        <StoneLogo/>
                        <a className='item-option' href="">Produtos</a>
                        <a className='item-option' href="">Sobre a Stone</a>
                        <a className='item-option' href="">Blog</a>
                    </div>
                    <div className='options-contact'>
                        <a className='item-option' href="">Atendimento</a>
                        <a className='item-option' href="">Baixe o app</a>
                        <div className='box-buttons'>
                            <ButtonLight>Login</ButtonLight>
                            <ButtonDark className="">Seja Stone</ButtonDark>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                {/* Section hero */}
                <section className='section-hero'>
                    <div className='container hero'>
                        <div className='hero-content'>
                            <article className='hero-text'>
                                <h1>
                                    A parceria de mais de 1 milhão de lojistas brasileiros
                                </h1>
                                <h2>
                                    Ser Stone é juntar soluções de venda com uma conta PJ gratuita, seguros, plano de saúde e atendimento humano em 5 segundos
                                </h2>
                            </article>
                            <ButtonDark className="spanded">
                                Seja Stone agora
                            </ButtonDark>
                        </div>
                    </div>
                </section>
                {/* Section hero */}

                {/* Section fees */}
                <section>
                    <div className='container fees'>
                        <div className='fees-content'>
                            <article className='fees-text'>
                                <p className='title'>
                                    Menos banco, <strong>mais negócio</strong> 
                                </p>
                                <p className='subtext'>
                                    Solução financeira com taxas personalizadas e Conta PJ gratuita aberta em poucas horas, direto pelo celular. Sem burocracia, sem asteriscos e sem musiquinha
                                </p>
                            </article>
                            <ButtonDark className="spanded">
                                Descubra suas taxas
                            </ButtonDark>
                        </div>
                        <FrontMachine/>
                    </div>
                </section>
                {/* Section fees */}

                {/* Section little machine */}
                <section>
                    <div className='container little-machine'>
                        <img className='img-machine' src="https://res.cloudinary.com/dunz5zfpt//f_auto,c_limit,w_640,q_auto/v1/site-stone/machine/pricing2" alt="Imagem da maquineta" height={458} width={458}/>
                        <div className='little-machine-content'>
                            <article className='little-machine-text'>
                                <h2>
                                    MAQUININHA DE CARTÃO
                                </h2>
                                <h1>
                                    Maquininha rápida, inteligente e com taxas personalizadas
                                </h1>
                                <h3>
                                    Feita pra vender mais: no débito ou no crédito, no Pix ou no voucher
                                </h3>
                            </article>
                            <div className='little-machine-options'>
                                <a href="" rel="noopener noreferrer">
                                    <span>
                                        Conheça a maquininha
                                    </span>
                                    <Arrow/>
                                </a>
                                <a href="" rel="noopener noreferrer">
                                    <span>
                                        Descubra suas taxas personalizadas
                                    </span>
                                    <Arrow/>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Section little machine */}
            </main>
        </div> 
    )
}