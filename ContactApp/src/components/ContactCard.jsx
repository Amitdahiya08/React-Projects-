// react icons
import { HiOutlineUserCircle } from 'react-icons/hi';
import { IoMdTrash } from 'react-icons/io';
import { RiEditCircleLine } from 'react-icons/ri';

// firebase imports
import {db} from "../config/firebase"
import { deleteDoc, doc } from 'firebase/firestore'

// react hooks
import useDisclouse from '../hooks/useDisclouse';
import AddAndUpdateContact from './AddAndUpdateContact';

// react-toastify
import { toast } from 'react-toastify';

const ContactCard = ({ contact }) => {
  const {isOpen,toggleOpen} = useDisclouse();
  const deleteContact = async (id)=>{
    try {
      await deleteDoc(doc(db,"contacts",id))
      toast.success("Contact Deleted Succesfully !")
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div 
    key={contact.id}
    className="flex items-center justify-around rounded-lg bg-yellow p-2">
      <div className="flex gap-1">
        <HiOutlineUserCircle className="text-4xl text-orange" />
        <div>
          <h2 className="font-medium">{contact.Name}</h2>
          <p className="text-sm">{contact.Email}</p>
        </div>
      </div>
      <div className="flex text-3xl">
        <RiEditCircleLine className='cursor-pointer' onClick={()=>toggleOpen()} />
        <IoMdTrash  onClick={()=>deleteContact(contact.id)} className="text-orange cursor-pointer" />
      </div>
      <AddAndUpdateContact isUpdate="true" contact={contact} toggleOpen={toggleOpen} isOpen={isOpen}/>
    </div>
  );
};

export default ContactCard;
