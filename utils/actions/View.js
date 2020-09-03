export function updateRadius(radius){
	return {
		type  : "updateRadius",
		radius: radius
	}
}

export function addCart(itemName){
	console.log('view-actions')
	return{
		type : "addCart",
		itemName : itemName
	}
}

export function updateCart(payload){
	console.log("payload", payload)
	return{
		type : "updateCart",
		payload : payload
	}
}