import React, { Component } from 'react';
import { connect } from 'react-redux';
import WithOurService from '../hoc/with-our-service';
import StudentsListItem from '../StudentsListItem'
import { listLoaded } from '../../actions';
import './StudentsList.css'


class StudentsList extends Component {

    componentDidMount() {
        const {OurService} =this.props 
        
        OurService.getListItems()
            .then(res => this.props.listLoaded(res))
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
    listLoaded
}

export default WithOurService()(connect(mapStateToProps, mapDispatchToProps)(StudentsList))