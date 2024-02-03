import React, {useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import shark from '../images/letmesee_shark.png';
import shark_992 from '../images/shark-max 992.png';
import Authorization from './Authorization';

function Intro() {
    // default page for new users or when unlogin
    useEffect(() => {

    }, [])

    return (
        <div className='intro'>
            <Container>


                <div className='intro__wrapper lg'>
                    <p className='intro__greet'>Вітаю! だれですか。Let's learn languages 上品な!!!</p>
                    <img className='intro__icon' src={shark}/>
                </div>

                <div className='intro__wrapper md'>
                    <div className='intro__description__block'>
                        <p className='intro__description__main'>Поповнюй свій іншомовний словарний запас!</p>
                        <p className='intro__description'>За допомоги розумної та доброї (або не дуже) великої білої акули Ви матимете змогу із задоволенням вивчати слова різних мов! Створіть свій власний словник (або декілька) із особисто підібраними словами (або запропонованими акулою) та вивчайте їх, а різні можливості сайту Вам у цьому допоможуть.</p>
                    </div>
                    
                    <img className='intro__icon' src={shark_992}/>
                </div>

                <Authorization/>
                {/* <button></button>
                <button></button> */}
            </Container>

        </div>
    );

}

export default Intro;