import React, {useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import shark from '../images/letmesee_shark.png';
import shark_992 from '../images/shark-max 992.png';
import Authorization from './Authorization';
import Login from './Login';
import BurgerMenu from './BurgerMenu';

function Intro() {
    // default page for new users or when unlogin
    useEffect(() => {

    }, [])

    return (
        <div className='intro'>
            <Container>
                <div className='intro__wrapper xl'>
                    <p className='intro__greet'>Вітаю! だれですか。Let's learn languages 上品な!!!</p>
                    <img className='intro__icon' src={shark}/>
                </div>

                <div className='intro__wrapper lg'>
                    <BurgerMenu/>

                    <div className='intro__login'>
                        <Login/>
                    </div>

                    <div className='intro__description__block'>
                        <div className='intro__description__text'>
                            <p className='intro__description__main lg md'>Поповнюй свій іншомовний словарний запас!</p>
                            <p className='intro__description lg md'>
                                За допомогою розумної великої білої акули вивчайте слова різних мов у власних словниках. Використовуйте різні можливості сайту для полегшення процесу.
                            </p>
                        </div>
                
                        <img className='intro__icon' src={shark_992}/>
                    </div>
                </div>

                <Authorization/>
            </Container>

        </div>
    );

}

export default Intro;