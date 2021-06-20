import React, { Component } from 'react';
import { connect } from 'react-redux';
import WithOurService from '../hoc/with-our-service';
import StudentsListItem from '../StudentsListItem'
import { getStudentsThunkCreator } from '../../asyncActions';
import './StudentsList.css'


class StudentsList extends Component {

    
    componentDidMount() {

        if (this.props.listItems.length === 0) {

            this.props.getStudentsThunkCreator();
            
        }
    }
    
    render() {

        const {listItems} = this.props;

        return (
            <ul className="students-list">
                {
                    listItems.map(listItem => {
                        return <StudentsListItem
                            key={listItem.id}
                            listItem={listItem}/>
                    })
                }
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        listItems: state.activeList
    }
}

const mapDispatchToProps = {
    getStudentsThunkCreator
}

export default WithOurService()(connect(mapStateToProps, mapDispatchToProps)(StudentsList))