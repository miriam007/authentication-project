export function loadUserId(){
    return function(dispatch){
        fetch("/api/userId")
        .then((res)=>{
            return res.text();
        }).then((userId)=>{
            dispatch(setCurrentUserId(userId));
        });
    };
}

export function setCurrentUserId(userId){
    return {
        type: "SET_USER_ID",
        value: userId
    }
}

