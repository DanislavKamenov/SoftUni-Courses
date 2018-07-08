let subscriptions = {
    loginUser: [],
    logoutUser: [],
    notification: [],
    getData: []
}

export default {
    events: {
        loginUser: 'loginUser',
        logoutUser: 'logoutUser',
        notification: 'notification',
        getData: 'getData'
    },
    subscribe: (eventName, fn) =>
        subscriptions[eventName].push(fn),
    trigger: (eventName, data) => 
        subscriptions[eventName].forEach(fn => fn(data))
}