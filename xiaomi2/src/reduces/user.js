export default function (state={},action) {
    let user = action.data
    switch (action.type) {
        case 'USER_NAME':
            return 'USER_NAME'
        default :
            return state
    }
}