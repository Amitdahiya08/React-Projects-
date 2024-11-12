// react hooks 
import { useEffect, useState } from "react";
import useDisclouse from "./hooks/useDisclouse.js";

// components here
import Navbar from "./components/Navbar";
import NotFoundContact from "./components/NotFoundContact.jsx";
import ContactCard from "./components/ContactCard.jsx";
import AddAndUpdateContact from "./components/AddAndUpdateContact.jsx";

// all react icons here
import { FaSearch } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";

// firebase imports
import { db } from "./config/firebase.js";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

// react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const {isOpen,toggleOpen} = useDisclouse();
  const [allContacts, setAllContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        
        onSnapshot(contactsRef,(snapshot)=>{
          const contactsLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactsLists);
          setAllContacts(contactsLists);
          return contactsLists;
        })

      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value.toLowerCase();
    const filteredContacts = allContacts.filter((contact) =>
      contact.Name.toLowerCase().includes(value)
    );
    setContacts(filteredContacts);
  };
  


  return (
    <>
    <div className="mx-auto max-w-[370px]">
      <Navbar />
      <div className="flex gap-2 mt-4">
        <div className="relative flex items-center flex-grow">
          <FaSearch className="ml-2 text-white text-2xl absolute" />
          <input
            onChange={filterContacts}
            type="text"
            className="h-10 flex-grow rounded-md border border-white bg-transparent text-white pl-10"
          />
        </div>
        <FaCirclePlus onClick={toggleOpen}  className="text-4xl text-white cursor-pointer" />
      </div>
      <div className="mt-4 flex flex-col gap-3">
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))
        ) : (
          <NotFoundContact />
        )}
      </div>
    </div>
        <AddAndUpdateContact toggleOpen={toggleOpen} isOpen={isOpen}/>
        <ToastContainer/>
    </>
  );
};

export default App;
