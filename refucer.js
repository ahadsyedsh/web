import { v4 as uuidv4 } from "uuid";

const reducer = (state, action) => {
    if (action.type === "add") {
        action.setBalance((balance) => {
            return balance + 10;
        });
        return [...state, { name: action.name, id: uuidv4() }];
    } else if (action.type === "fuel") {
        if (action.balance >= 50) {
            action.setBalance((balance) => balance - 50);
        }
        return state;
    } else {
        return state;
    }
};

export default reducer;
