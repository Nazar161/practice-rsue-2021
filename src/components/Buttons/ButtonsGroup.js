import React from 'react';
import { connect } from 'react-redux';
import {sportList, studyList, scienceList, cultureList, socialList, allList} from '../../actions'
import './ButtonsGroup.css';

const ButtonsGroup = ({sportList, studyList, scienceList, cultureList, socialList, allList, activeBtn}) => {
    return (
        <div className="btn-group">
            <button onClick={allList} className={activeBtn === 'all' ? 'active' : null}>All</button>
            <button onClick={studyList} className={activeBtn === 'study' ? 'active' : null}>Study</button>
            <button onClick={scienceList} className={activeBtn === 'science' ? 'active' : null}>Science</button>
            <button onClick={cultureList} className={activeBtn === 'culture' ? 'active' : null}>Culture</button>
            <button onClick={socialList} className={activeBtn === 'social' ? 'active' : null}>Social</button>
            <button onClick={sportList} className={activeBtn === 'sport' ? 'active' : null}>Sport</button>
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
        activeBtn: state.activeListName
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ButtonsGroup);