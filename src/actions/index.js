const listLoaded = (newList) => {
    return {
        type: "LIST_LOADED",
        payload: newList
    }
}

const sportList = () => {
    return {
        type: "SPORT_LIST"
    }
}
const scienceList = () => {
    return {
        type: "SCIENCE_LIST"
    }
}
const studyList = () => {
    return {
        type: "STUDY_LIST"
    }
}
const cultureList = () => {
    return {
        type: "CULTURE_LIST"
    }
}
const socialList = () => {
    return {
        type: "SOCIAL_LIST"
    }
}

const allList = () => {
    return {
        type: "ALL_LIST"
    }
}

const selectedFame = () => {
    return {
        type: "SELECTED_FAME"
    }
}


const selectedPrLeads = () => {
    return {
        type: "SELECTED_PR_LEADS"
    }
}

export {
    listLoaded,
    sportList,
    scienceList,
    studyList,
    cultureList,
    socialList,
    allList,
    selectedFame,
    selectedPrLeads
}