export function cartAdd(data) {
    return {
        type:'CART_ADD',
        data
    }
}

export function cartReduce(data) {
    return {
        type: 'CART_DEL',
        data
    }
}

export function getGoodNum(data) {
    return {
        type:'CART_GOODS_NUM',
        data
    }
}