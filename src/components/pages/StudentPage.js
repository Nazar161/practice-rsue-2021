import React from 'react';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { listLoaded } from '../../actions';
import { Button } from '@material-ui/core';
import './StudentPage.css'

const StudentPage = ({listItems}) => {

    const params = useParams();


    const student = listItems.find(el => +el.id === +params.id)
    const {name, photo, activity, moreInfo} = student
    return (
        <div className='student-page'>
            <Link to='/'  style={{textDecoration: 'none'}}>
                <Button size="large" color="secondary" variant="contained">
                    Назад
                </Button>
            </Link>
            <div className="photo"><img className="student-img" src={photo} alt="jpg"></img></div>
            <div className='student-info'>
                <h1>{name}</h1>
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