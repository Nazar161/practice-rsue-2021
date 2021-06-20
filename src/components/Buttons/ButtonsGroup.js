import React from 'react';
import { connect } from 'react-redux';
import {sportList, studyList, scienceList, cultureList, socialList, allList} from '../../actions'
import './ButtonsGroup.css';

const ButtonsGroup = ({sportList, studyList, scienceList, cultureList, socialList, allList, activeBtn, selected}) => {
    
    // const options = ['rfrfrfrfr fdsf sdfdf']
    let headline;
    let link;

    if(activeBtn === 'all') {
        headline = `Доска почета факультета Компьютерных технологий и информационной безопасности`;
        link = "https://portfolio.rsue.ru/portfolio/index.php?section=21"
    } else if(activeBtn === 'study') {
        headline = `Cтуденты достигшие большого успеха в учебной деятельности`
        link = "https://portfolio.rsue.ru/portfolio/index.php?section=21"
    } else if (activeBtn === 'science') {
        headline = `Cтуденты достигшие большого успеха в научной деятельности`
        link = "https://portfolio.rsue.ru/portfolio/index.php?section=32"
    } else if (activeBtn === 'culture') {
        headline = `Cтуденты достигшие большого успеха в культурно-творческой деятельности`
        link = "https://portfolio.rsue.ru/portfolio/index.php?section=43"
    } else if (activeBtn === 'social') {
        headline = `Cтуденты достигшие большого успеха в общественной деятельности`
        link = "https://portfolio.rsue.ru/portfolio/index.php?section=42"
    } else if (activeBtn === 'sport') {
        headline = `Cтуденты достигшие большого успеха в Спортивной деятельности`
        link = "https://portfolio.rsue.ru/portfolio/index.php?section=41"
    }

    if (selected === 'prLeads') {
        return (
            <div className='prLeads-block'>
                <h1 className='prLeads-h1'>
                    Список Лидеров проектной деятельности 
                </h1>
                <p className='prLeads-p'>
                    Если ты тоже хочешь попасть в этот список то переходи по ссылке в свое портфолио<a href="https://portfolio.rsue.ru/portfolio/index.php?section=21">(нажми сюда)</a> и заполни форму. Мы проверим подлинность данных и если у тебя хватит баллов. То ты увидишь себя в этом списке.(Ты можешь познакомиться с общими правилами <a href="#">здесь</a>) 
                </p>
            </div>
        )
    }
    
    return (
        <div>
            <div className="btn-group">
                <button onClick={allList} className={activeBtn === 'all' ? 'active' : null}>Все</button>
                <span>Деятельность:</span>
                <button onClick={studyList} className={activeBtn === 'study' ? 'active' : null}>Учебная</button>
                <button onClick={scienceList} className={activeBtn === 'science' ? 'active' : null}>Научная</button>
                <button onClick={cultureList} className={activeBtn === 'culture' ? 'active' : null}>Культурно-творческая</button>
                <button onClick={socialList} className={activeBtn === 'social' ? 'active' : null}>Общественная</button>
                <button onClick={sportList} className={activeBtn === 'sport' ? 'active' : null}>Спортивная</button>
            </div>
            <h1 className="headline">
                {headline}
            </h1>
            <p className='prLeads-p'>
                    Если ты тоже хочешь попасть в этот список то переходи по ссылке в свое портфолио<a href={`${link}`}>(нажми сюда)</a> и заполни форму. Мы проверим подлинность данных и если у тебя хватит баллов. То ты увидишь себя в этом списке.(Ты можешь познакомиться с общими правилами <a href="#">здесь</a>) 
            </p>
        </div>
    );
};

const mapDispatchToProps = {
    sportList,
    studyList,
    scienceList,
    cultureList,
    socialList,
    allList
}

const mapStateToProps = (state) => {
    return {
        activeBtn: state.activeListName,
        selected: state.fameOrPrLeads
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ButtonsGroup);