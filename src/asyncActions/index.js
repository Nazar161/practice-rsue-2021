import OurService from "../services/service";
import { listLoaded } from "../actions";


const ourService = new OurService();

export const getStudentsThunkCreator = () => {
    return dispatch => {
        ourService.getListItems()
        .then(res => dispatch(listLoaded(res)))
    }
}