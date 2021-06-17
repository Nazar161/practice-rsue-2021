import React from 'react';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import WithOurService from '../hoc';
import { listLoaded } from '../../actions';
import './StudentPage.css'

const StudentPage = ({listItems, OurService, listLoaded}) => {

    const params = useParams();

    useEffect(() => {
        if (listItems[0].name === null) {
            OurService.getListItems()
                .then(res => listLoaded(res))
        }
    },)


    const student = listItems.find(el => +el.id === +params.id)
    const {name, photo, activity} = student
    return (
        <div>
            <Link to='/'>назад</Link>
            <span>{name}</span>
            <img src={photo} alt="jpg"></img>
            <div>{activity}</div>
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

export default WithOurService()(connect(mapStateToProps, mapDispatchToProps)(StudentPage));