import { useState } from "react";
import { addContact,editContact } from "../redux/actions/contactsActions";
import {connect} from 'react-redux';
import { useRef } from "react";
import { useEffect } from "react";


function AddEditContact({addContact,editContactData,editContact}){
    const [contact,setContact]=useState({
        name:"",
        phone:"",
        email:"",
    });
    useEffect(()=>{
        setContact(editContactData);
    },[editContactData],);
    const changeHandler=(name,value)=>{
        const oldContact={...contact};
        oldContact[name]=value;
        setContact(oldContact);
    };
    const handleSubmit=()=>{
        if(contact.id !== null && contact.id !== undefined){
            editContact(contact,contact.id);
            let oldContact={...contact};
            oldContact.id=null;
            setContact(oldContact);
        }else{
        addContact(contact);
        }
        setContact({
            name:"",
            phone:"",
            email:"",
                });
                closeRef.current.click();
    };
    const closeRef=useRef();
    return(
        <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Add/Edit contact</h5>
        <button type="button" ref={closeRef} className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <form>
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" id="name" name="name" placeholder="Enter name" value={contact.name} onChange={(e)=>changeHandler('name',e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Phone</label>
                <input type="number" className="form-control" id="phone" name="phone"  placeholder="Enter Phone_number" value={contact.phone} onChange={(e)=>changeHandler('phone',e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email"  className="form-control" id="email" name="email" placeholder="Enter Email" value={contact.email} onChange={(e)=>changeHandler('email',e.target.value)}/>
            </div><br/>
        </form>     
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
    );
}

const mapStateToProps=(state)=>{
    return{
        contacts:state.contacts,
   }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addContact:(contact)=>dispatch(addContact(contact)),
        editContact:(contact,id)=>dispatch(editContact(contact,id)),

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddEditContact);
