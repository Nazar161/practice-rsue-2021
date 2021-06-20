const initialState ={
    list: [],
    activeListName: 'all',
    activeList: [],
    fameOrPrLeads: 'fame'
}



const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'LIST_LOADED':
            return {
                ...state,
                activeListName: state.activeListName,
                list: action.payload,
                activeList: action.payload,
                fameOrPrLeads: state.fameOrPrLeads
            }
        case 'SPORT_LIST':
            const sportList = state.list.filter(list => list.sport === true);
            return {
                ...state,
                activeListName: 'sport',
                activeList: sportList
            }
        case 'SCIENCE_LIST':
            const scienceList = state.list.filter(list => list.science === true);
            return {
                ...state,
                activeListName: 'science',
                activeList: scienceList
            }
        case 'STUDY_LIST':
            const studyList = state.list.filter(list => list.study === true);
            return {
                ...state,
                activeListName: 'study',
                activeList: studyList
            }
        case 'CULTURE_LIST':
            const cultureList = state.list.filter(list => list.culture === true);
            return {
                ...state,
                activeListName: 'culture',
                activeList: cultureList
            }
        case 'SOCIAL_LIST':
            const socialList = state.list.filter(list => list.social === true);
            return {
                ...state,
                activeListName: 'social',
                activeList: socialList
            }
        case 'ALL_LIST':
            return {
                ...state,
                activeListName: 'all',
                activeList: state.list
            }
        case 'SELECTED_FAME': 
            return {
                ...state,
                activeListName: 'all',
                activeList: state.list,
                fameOrPrLeads: 'fame'
            }
        case 'SELECTED_PR_LEADS':
            const projectLeads = state.list.filter(list => list.projects === true);
            return {
                ...state,
                activeList: projectLeads,
                fameOrPrLeads: 'prLeads'
            }
        default:
            return state;  
    }
}

export default reducer;