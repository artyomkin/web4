import * as actions from './actionTypes.js'

export default function reducer(state = { points:[], radius:3 }, action){
    let newState;
    switch(action.type){
        case actions.POINT_ADD:
            return{
                points: [...state.points, action.payload],
                radius: state.radius,
            };
        case actions.POINTS_REMOVE:
            return{
                radius: state.radius,
                points: [],
            };
        case actions.GRAPH_REDRAW:
            return{
                points: state.points,
                radius: action.payload
            }
        default:
            return state;
    }
}