const View = (state = {
	text	: "",
	radius	: "",
	cartItems : {},
},action)=>{
	switch (action.type){
		case 'updateRadius':
			state = {
				...state,
				radius: action.radius
			}
			break
		case 'addCart' :
			console.log('view-reducers')
			console.log(state.cartItems)
			let newCartItems = state.cartItems
			if (action.itemName in newCartItems){
				newCartItems[action.itemName] += 1
			} else {
				newCartItems[action.itemName]  = 1
			}
			state = {
				...state,
				cartItems : newCartItems
				// cartItems : state.cartItems.concat({"itemName" : action.itemName})
			}
			break
		case 'updateCart' :
			state = {
				...state,
				cartItems : Object.assign(state.cartItems, action.payload)
			}
			console.log("reducers-update", state.cartItems)
			break
		default : 				
	}
	return state
}
export default View