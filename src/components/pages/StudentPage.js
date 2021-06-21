import React from 'react';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { listLoaded } from '../../actions';
import { Button } from '@material-ui/core';
import './StudentPage.css'

const StudentPage = ({listItems}) => {

    const params = useParams();


    const student = listItems.find(el => +el.id === +params.id)
    const {name, photo, surname, moreInfo} = student
    return (
        <div className='student-page'>
            <Link to='/' className='back-btn'>
                    Назад
            </Link>
            {/* <a href='/' className='personal-area-btn'>Назад</a> */}
            <div className="photo"><img className="student-img" src={photo} alt="jpg"></img></div>
            <div className='student-info'>
                <h1>{name} {surname}</h1>
                <p>{moreInfo}</p>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        listItems: state.list
    }
}

const mapDispatchToProps = {
    listLoaded
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentPage);