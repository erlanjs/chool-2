import React, {useState} from 'react';
import school from "./../../../images/Chooo.jpg"
import child from "./../../../images/students.png"
import book from "./../../../images/book.png"
import teach from "./../../../images/teach.png"
import {media} from "../../media";

const Info = () => {

    const [modal, setModal] = useState(false)

    return (
        <section id="info">
            <div className="container">
                <div className="info-general__width" />
                <div className="info-general">
                    <div className="info-general__block">
                        <div style={{width: media(250, 625), height: media(190, 438), margin: media(10, 25)}}/>
                        <img src={school} alt="img" style={{width: media(250, 625), height: media(190, 438)}}/>
                    </div>
                    <div className="info-general__block2">
                        <h1>Мектеп тууралуу маалымат</h1>
                        <div className="info-general__block2__gen">
                            <div className="info-general__block2__gen__cer" style={{width: media(70, 100), height: media(70, 100)}}>
                                <img src={child} alt="img"/>
                            </div>
                            <div className="info-general__block2__gen__item">
                                <h2>Учурдагы окуучулар</h2>
                                <h3>564</h3>
                            </div>
                        </div>
                        <div className="info-general__block2__gen">
                            <div className="info-general__block2__gen__cer" style={{width: media(70, 100), height: media(70, 100)}}>
                                <img src={book} alt="img"/>
                            </div>
                            <div className="info-general__block2__gen__item">
                                <h2>Жалпы китептердин саны</h2>
                                <h3>6747</h3>
                            </div>
                        </div>
                        <div className="info-general__block2__gen">
                            <div className="info-general__block2__gen__cer" style={{width: media(70, 100), height: media(70, 100)}}>
                                <img src={teach} alt="img"/>
                            </div>
                            <div className="info-general__block2__gen__item">
                                <h2>Учурдагы мугалимдер</h2>
                                <h3>63</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info-general2">
                    {/*<p style={{fontSize: media(16, 18)}}>«Билим   ачкычы   мектеп»   дегендей   Ош   областынын   Алай   районуна караштуу   «Кашка-Суу»   отро  мектеби  1968-жылы  март  айынан  түптөлгөн.*/}
                    {/*</p>*/}
                    <button
                        onClick={() => setModal(true)}
                    >Толук маалымат
                    </button>
                    {modal && (
                        <div className="info-general2__modal">
                            <div className="info-general2__modal__block">
                                <h1 onClick={() => setModal(false)}>Жабуу</h1>
                                <p>Эсенкелди  уулу Максатбек  атындагы  орто мектебинин  тарыхы.
                                    - Билим берүү уюмунун түзүлүшү жана өнүгүүсү жөнүндө кыскача тарыхы;
                                    «Билим   ачкычы   мектеп»   дегендей   Ош   областынын   Алай   районуна караштуу   «Кашка-Суу»   отро  мектеби  1968-жылы  март  айынан  түптөлгөн.
                                    1970-72-жылдары  башталгыч   мектеп   болуп    1974-75-жылдан  тартып         8  жылдык  мектеп  болуп  уюшулган.  1975-76-жылдары  «Кашка-Суу» орто мектеби   базасы   түзүлгөн.    Мектеп  кылым  карыткан  агып  жаткан    Кашка-Суунун  атынан  «Кашка-Суу»  орто мектеби деп аталган.
                                    Турмушта  адам  баласы  жашаган  жашы менен  эмес  эли, мекени  үчүн  жумшалган  эмгеги  менен  кадыр  баркка  жана  урмат  сыйга  ээ  болот эмеспи. Ак ниеттуу  асыл  эмгек,  эч  качан  көз  жаздымда  калбайт   жана унутулбайт . Анын  сыңарындай   «Кашка-Суу»  орто  мектебинде  директор  болуп эмгектенген  атуулдар  булар;
                                    1968-жылы   Эмелдилдеев Кошбак.		         	1991-жылы  Кутмаматов  Адиш.
                                    1972-жылы   Курманалиев Кеңеш.  		         	1992-жылы   Калилов   Кубаныч.
                                    1978-жылы   Кудайбергенов Төлөн.  		1995-жылы  Камбаралиева Алтынай.
                                    1980-жылы   Көчкөнбаев Абдилат.			2001-жылы   Рахманов   Чынгыз.
                                    1982-жылы   Толубаев Бостонбай.                 	2007-жылы   Андаров    Кутпидин.
                                    1986-жылы   Кулукеева Света.                        	2008-жылы   Тагайкулов    Мукаш.
                                    1987-жылы   Атабаев Мусабек.                      	2015-жылы   Арапов  Тагдырбек
                                    1990-жылы  Шакирова   Галдаркан.			2017-жылы 	Сеитбекова Нүргүл
                                    Ал  мезгилдеги  жамаатта  чыгармачылык  менен  иштеген  Эл  агартуунун мыктылары   Кааров  Исирапил,   Исмаилова  Гүлбара,    Бердибеков  Козу,   Тайчабарова   Марпат,    Алишаева   Пайизкан,     Сариева   Райла   ж. б.  азыркы  учурда   ардактуу   эс   алууда.
                                    2011-жылдан   баштап   «Кашка-Суу»   орто мектебине   Эсенкелди  уулу Максатбек   атындагы   орто   мектеби   деген   жаңы  ат  ыйгарылган.
                                    2019-жылдын апрель айынан баштап  Жалилов Нурбек директор болуп эмгектенүүдө.

                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Info;