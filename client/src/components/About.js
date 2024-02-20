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
                                    <li className="about__features__list--item">
                                        <p className="about__features__list--item--text">
                                            Створювати власні словники
                                        </p>
                                    </li>
                                    <li className="about__features__list--item">
                                        <p className="about__features__list--item--text">
                                            Бачити перелік слів/кандзі для відповідного рівня
                                        </p>
                                    </li>
                                    <li className="about__features__list--item">
                                        <p className="about__features__list--item--text">
                                            Імпортувати/експортувати файли зі словами та додавати їх у словники
                                        </p>
                                    </li>
                                    <li className="about__features__list--item">
                                        <p className="about__features__list--item--text">
                                            Проходити тести
                                        </p>
                                    </li>
                                    <li className="about__features__list--item">
                                        <p className="about__features__list--item--text">
                                            Отримувати нагороди та похвалу/похлаву від акулиОтримувати нагороди та похвалу/похлаву від акули
                                        </p>
                                    </li>
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