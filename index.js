//import redux from 'redux' NODE üzerinden çalışıldığı için 
const redux = require('redux') //DEPENDENCY OLDUĞUNDAN CUSTOM HOOK İLE İMPORT EDİLDİ
const createStore = redux.createStore // Sayfa sonu store = createStore(reducer) ile tamamlanıyor
const bindActionCreators = redux.bindActionCreators // ACTIONCREATORS EXAMPLE
const combineReducers = redux.combineReducers //ÇOKLU REDUCER YAPILARINI BİRLEŞTİRMEK İÇİN KULLANILIR

const applyMiddleware = redux.applyMiddleware

const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
//ACTIONS
const CAKE_ORDERED = 'CAKE_ORDERED'  //NOT REQUIRED BUT STANDARD
const CAKE_RESTOCKED = 'CAKE_RESTOCKED' // SECOND EXAPMLE
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'  //ADD MULTIPLE EXAMPLE
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED' //ADD MULTIPLE EXAMPLE

function orderCake() { // We create action creator // Action Creator Bir Nesne Döndüren Fonksiyondur
    return {
        type: CAKE_ORDERED, // Line 1 - Action Type Özelliğine Sahip bir nesnedir
        payload: 1         // I can add one more features if I want
    }
}

function restockCake(payload = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload
    }
}

function orderIceCream(payload = 1) {
    return {
        type: ICECREAM_ORDERED,
        payload
    }
}

function restockIceCream(payload = 1) {
    return {
        type: ICECREAM_RESTOCKED,
        payload
    }
}

//REDUCER -- ANCAK REDUX İLE SARILACAK
// const initialState = {
//     numOfCakes: 10,
//     numofIceCream: 20,
// }

//REDUCER -- MULTI HALE GETİRİLİYOR -- ÇOKLU REDUCER İLE NESNE TAŞIMA İŞLEMİ
const initialCakeState = {
    numOfCakes: 10
}
const initialIceCreamState = {
    numofIceCream: 20
}

//(previousState, action) => newState
//REDUCER --
const cakeReducer = (state = initialCakeState, action) => {     //TODO Kod Buradan Çalışmaya Başlıyor
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state, numOfCakes: state.numOfCakes - 1
            }
        case CAKE_RESTOCKED:
            return {
                ...state, numOfCakes: state.numOfCakes + action.payload
            }
        default:
            return state
    }
}

//(previousState, action) => newState
//REDUCER 
const iceCreamReducer = (state = initialIceCreamState, action) => {     //TODO Kod Buradan Çalışmaya Başlıyor
    switch (action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state, numofIceCream: state.numofIceCream - 1
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state, numofIceCream: state.numofIceCream + action.payload
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})


const store = createStore(rootReducer, applyMiddleware(logger)) //REDUCER INITIALSTATE ILE BAGLI //ApplyMiddlewareLogger Eklendi
console.log('Initial State', store.getState()) //INITIAL STATE 'I CONSOL'A KAYDEDER.
const unsubscribe = store.subscribe(() => { })
// ESKI HALİ -- const subcribe = store.subscribe(() => console.log('pdate state', store.getState()))

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(3))
const actions = bindActionCreators({ orderCake, restockCake, orderIceCream, restockIceCream }, store.dispatch) //store işlemlerini actions altında birleştiriyoruz
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(3)
actions.orderIceCream()
actions.orderIceCream()
actions.restockIceCream(2)
unsubscribe() //AND EXIT

//TODO LINE 2,3,43 HOLDS APPLICATION STATE
//TODO LINE 44,45 ALLOWS ACCESS TO STATE VIA getState()
//TODO LINE 45 REGISTERS LISTENERS VIA SUBSCRIBE(listener)
//TODO LINE 46,47,48 ALLOWS STATE TO BE UPDATED VIA dispatch(action)
//TODO LINE 45,52 (const unsubribe =) HANDLES UNREGISTER OF LISTENER