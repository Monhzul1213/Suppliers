import React, { useState, useEffect } from 'react';
import { Filter, Table,Card } from '../components/company';
import { Header } from '../components/menu/Header';
import { useSelector, useDispatch } from 'react-redux';
import {collection, doc, getDocs} from 'firebase/firestore'
import {db} from '../firebase'
import{Empty, Error} from '../components/all'
import '../css/list.css'
import { useDimensions } from '../helpers/useDimensions';
import LoadingOverlay from 'react-loading-overlay';
// import {  addDoc ,updateDoc, collection, doc} from 'firebase/firestore';
// import {db} from '../firebase'
 LoadingOverlay.propTypes = undefined;
export function Company(){
  const { height } = useDimensions();

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);
  const [visible, setVisible] = useState(false);

  const addRequest = () => {
      // setError(null);
      setVisible(true);
      setSelected(null)
  }
  function getUser(){
    let users = []
    const userCollectionRef =collection(db, 'smWebUsers')
     getDocs(userCollectionRef )
     .then(response=>{
      response.docs.map(doc => {
        // console.log(doc?.data(), doc?.id)
        let user = {...doc.data(), ...{ id: doc?.id }};
        console.log(user)
        users.push(user);
      })
      // console.log(users)
      setData(users)
     })
     .catch(error=> console.log(error.message))
  }

  useEffect(() => {
    getUser();
    return () => {};
  }, [])

  const onClose = toLoad => {
    setVisible(false);
   
    if(toLoad){
       getUser()
    }
  } 
  let overlayStyle = { overlay: base => ({...base, background: 'rgba(0, 0, 0, 0.2)'}) };
  let cardProps = { visible, setVisible, selected, setSelected,  setData };
  let filterProps = { addRequest, setData,  setError , setVisible };
  return (
    <>
     <LoadingOverlay active={loading} spinner styles={overlayStyle}>
          <Header/>
          <div className='page_container' style={{height: height - 58}}>
           {visible ? <Card onClose={onClose} {...cardProps} />: null}
          <div className='page_back'>
            {error ? <Error error={error} /> : null}
            <Filter {...filterProps} />            
            <div className='data_back' id='inventory_page'>
             
            {data?.length ? <Table data={data} setData={setData} selected={selected} setVisible={setVisible} setSelected={setSelected} /> : <Empty />}
             </div>
            </div>
          </div>
          </LoadingOverlay>
        </>
    
    )
  }