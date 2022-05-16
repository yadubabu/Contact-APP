import contacts from "../../components/Contacts";

const initialState={
    contacts:[{
        name:"mohini",
        phone:"58648564",
        email:"mohini@gmail.com"
    }
],
contact:{}
};

const contactReducer=(state=initialState,action)=>{
    switch(action.type){
        case "GET_ALL_CONTACTS":
            return {...state};
        case "ADD_CONTACT":{
            let contacts=[...state.contacts];
            contacts.push(action.payload);
            return {...state,contacts}
        }
        case "EDIT_CONTACT":{
            let contacts=[...state.contacts];
            contacts[action.id]=action.payload;
            return {...state,contacts}
        }
        case "DELETE_CONTACT":{
            let contacts=[...state.contacts];
            contacts.splice(action.id,1);
            return {...state,contacts}
        }
        case "GET_SINGLE_CONTACT":
            return {...state,contact:{...state.contacts[action.index],id:action.index}};
        default :
        return state;
    }
}

export default contactReducer;