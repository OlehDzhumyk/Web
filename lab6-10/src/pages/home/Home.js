import React, {useState} from "react";
import "./home.css";
import homePage from "./../../assets/icons/home.jpg";
import firstVaccine from "./../../assets/icons/lego.svg";
import secondVaccine from "./../../assets/icons/barbie.png";
import thirdVaccine from "./../../assets/icons/hasbro.png";
import gift from "./../../assets/icons/gift.png";

function Home() {
    const [show, setShow] = useState(false)
    return (
        <main>
            <section className="hero">
                <img src={homePage}/>
                <div className="hero-text">
                    <h1>Ми робимо батьків героями для дітей, пропонуємо широкий асортимент іграшок та подарунків,
                        перші приносимо тренди на ринок, забезпечуємо сервіс вище очікування.
                    </h1>
                    <p>
                        Здійснюючи покупку в магазині будьте впевнені, що іграшка буде не тільки красивою
                        і розвиваючою, але і безпечною. Це обумовлено тим,
                        що Бі працює тільки з виробниками та офіційними постачальниками,
                        які надають сертифікати автентичності на іграшки.
                    </p>
                </div>
            </section>
            <section className="toys">
                <div className="first-toy">
                    <img src={firstVaccine}/>
                    <h2>Lego</h2>
                    <p>Lego A/S, веде бізнес як The Lego Group — данська приватна компанія
                        зі штаб-квартирою в місті Біллунні, Данія. Компанія
                        відома насамперед виробництвом іграшок Lego, які головним
                        чином являють собою набори з'єднуваних пластикових цеглинок.
                    </p>
                </div>
                <div className="second-toy">
                    <img src={secondVaccine}/>
                    <h2>Barbie</h2>
                    <p>Ба́рбі — лялька американської компанії Mattel, спершу дитяча іграшка,
                        переважно для хлопчиків і дівчаток віком 3-14 років,
                        згодом стала такожм об'єктом, який колекціонують дорослі.
                        Створена 1959 року в США у штаті Вісконсин. Її авторкою є Рут Гендлер.
                        Повне ім'я Барбі — Барбара
                    </p>
                </div>
                <div className="third-toy">
                    <img src={thirdVaccine}/>
                    <h2>Hasbro</h2>
                    <p>Hasbro — це американська компанія з виробництва іграшок та настільних ігор;
                        найбільша у світі компанія, що займається виробництвом іграшок.
                        Штаб-квартира розташовується в місті Потакет, штат Род-Айленд, США;
                        велика частина продукції виробляється в країнах східної Азії.
                    </p>
                </div>
            </section>
            {show &&
                <div className="gift">
                    <img src={gift}/>
                    <div className="gift-block">
                        <div className="gift-text">
                            <h1>Купон на 300 bakcs</h1>
                            <p>З цим кожен получить невеликий подарунок, аби
                                ніхто не залишився цього року без подарунку.
                                <a href="https://pokupon.ua/uk"><span> Детальніше</span></a>
                            </p>
                        </div>
                    </div>
                </div>
            }
            <button className="view-more" onClick={() => setShow(!show)} >{show ? "Hide": "Show more"}</button>
        </main>
    );
}

export default Home;
