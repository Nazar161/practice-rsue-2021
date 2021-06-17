const initialState ={
    list: [],
    activeListName: 'all',
    activeList: []
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'LIST_LOADED':
            return {
                ...state,
                activeListName: 'all',
                list: action.payload,
                activeList: action.payload
            }
        case 'SPORT_LIST':
            const sportList = state.list.filter(list => list.activity === 'sport');
            return {
                ...state,
                activeListName: 'sport',
                activeList: sportList
            }
        case 'SCIENCE_LIST':
            const scienceList = state.list.filter(list => list.activity === 'science');
            return {
                ...state,
                activeListName: 'science',
                activeList: scienceList
            }
        case 'STUDY_LIST':
            const studyList = state.list.filter(list => list.activity === 'study');
            return {
                ...state,
                activeListName: 'study',
                activeList: studyList
            }
        case 'CULTURE_LIST':
            const cultureList = state.list.filter(list => list.activity === 'culture');
            return {
                ...state,
                activeListName: 'culture',
                activeList: cultureList
            }
        case 'SOCIAL_LIST':
            const socialList = state.list.filter(list => list.activity === 'social');
            return {
                ...state,
                activeListName: 'social',
                activeList: socialList
            }
        case 'ALL_LIST':
            const allList = state.list
            return {
                ...state,
                activeListName: 'all',
                activeList: allList
            }
        default:
            return state;  
    }
}

export default reducer;