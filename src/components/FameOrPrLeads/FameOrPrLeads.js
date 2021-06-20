import React from 'react';
import './FameOrPrLeads.css';
import { connect } from 'react-redux';
import { selectedFame, selectedPrLeads } from '../../actions';

const FameOrPrLeads = ({selected, selectedFame, selectedPrLeads}) => {
    return (
        <div className="btns">
            <button onClick={selectedFame} 
                    className={selected === 'fame' ? 'btns-fopl active' : 'btns-fopl'}>
                Доска почета
            </button>
            <button onClick={selectedPrLeads} 
                    className={selected === 'prLeads' ? 'btns-fopl active' : 'btns-fopl'}>
                Лидеры проектной деятельности
            </button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        selected: state.fameOrPrLeads
    }
}

const mapDispatchToProps = {
    selectedFame,
    selectedPrLeads
}

export default connect(mapStateToProps, mapDispatchToProps)(FameOrPrLeads);