import React from "react";
import Container from 'react-bootstrap/Container'
import about_shark from '../images/about_shark.png';

class About extends React.Component {
    render() {
        return(
            <div className="about">
                <Container>
                    <div className="about__wrapper">
                        <p className="about__nani">これは何ですか。</p>
                        
                        <div className="about__features__block">
                            <img className="about__icon" src={about_shark}/>

                            <div className="about__features">
                                <p className="about__features__q">Які можливості надає сайт?</p>
                                <ul className="about__features__list">
                                    <li className="about__features__list--item">Створювати власні словники</li>
                                    <li className="about__features__list--item">Бачити перелік слів/кандзі для відповідного рівня</li>
                                    <li className="about__features__list--item">Імпортувати/експортувати файли зі словами та додавати їх у словники</li>
                                    <li className="about__features__list--item">Проходити тести</li>
                                    <li className="about__features__list--item">Отримувати нагороди та похвалу/похлаву від акули</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default About;