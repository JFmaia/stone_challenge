import { ReactComponent as StoneLogo } from '../../assets/stone.svg';

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

                        </div>
                    </div>
                </nav>
            </header>
            <main>

            </main>
        </div> 
    )
}