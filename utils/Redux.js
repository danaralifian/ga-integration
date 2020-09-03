import {    
    updateRadius,
    addCart,
    updateCart
} from './actions/View'

export const mapStateToProps = (state) => {
    return {
        View: state.View,
    }
}

export const mapDispatchToProps = (dispatch) => {
	return {
		updateRadius: (radius) => {
            dispatch(updateRadius(radius))
        },
        addCart : (itemName) => {
			console.log('redux')
            dispatch(addCart(itemName))
        },
        updateCart : (itemName) => {
            dispatch(updateCart(itemName))
        }
	}
}
