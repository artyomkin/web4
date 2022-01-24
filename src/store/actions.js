import * as actions from './actionTypes';

export const addPoint = point => ({
    type: actions.POINT_ADD,
    payload: point
})

export const removePoints = () => ({
    type: actions.POINTS_REMOVE
})

export const redrawGraph = (r) => ({
    type: actions.GRAPH_REDRAW,
    payload: r
})