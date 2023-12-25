import React from 'react';
import Container from 'react-bootstrap/Container';
import shark from '../images/letmesee_shark.png';
import Authorization from './Authorization';

class Intro extends React.Component {
    // default page for new users or when unlogin
    render() {
        return (
            <div className='intro'>
                <Container>
                    <div className='intro__wrapper'>
                        <p className='intro__greet'>Вітаю! だれですか。Let's learn languages 上品な!!!</p>
                        <img className='intro__icon' src={shark}/>
                    </div>

                    <Authorization/>
                    {/* <button></button>
                    <button></button> */}
                </Container>

            </div>
        );
    }
}

export default Intro;