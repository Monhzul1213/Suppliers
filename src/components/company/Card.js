import React, { useEffect, useState } from 'react';
import { Modal , message} from 'antd';
import { useTranslation } from 'react-i18next';
import {addDoc, collection , where, query, doc, setDoc, updateDoc, getDocs} from 'firebase/firestore';
import {db} from '../../firebase'
import { formatNumber } from '../../helpers';
import '../../css/card.css';
import moment, { isDate } from 'moment';
import { Cardlength,Cardlength1, CardPassword,CardPassword1, CardInput, CardInput1, CardField, CardNote, Loader, DynamicAIIcon, Error1, CardDropdown } from '../all';
import { now } from 'lodash';
// import { Options } from '../all/CardDropdown';

export function Card(props){
  const { visible, selected, setSelected, data, onClose, setData, getUser} = props;
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState();
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  const [CpnyID, setCpnyID] = useState('');
  const [CpnyName, setCpnyName] = useState({ value: '', error: null});
  const [WebUserID, setWebUserID] = useState({ value: '', error: null });
  const [WebPassword, setWebPassword] = useState({ value: '', error: null });
  const [AppServerIP, setAppServerIP] = useState('');
  const [VendID, setVendID] = useState( { value: '', error: null } );
  const [VendorCount, setVendorCount] = useState({ value: '', error: null });
  const [UseVendorCount, setUseVendorCount] = useState('');
  const [LicenseAmt, setLicenseAmt] = useState({ value: '', error: null });
  const [WebServiceURL, setWebServiceURL] = useState({  error: null });
  const [AppServerLoginUserID, setAppServerLoginUserID] = useState({  error: null });
  const [AppServerVersion, setAppServerVersion] = useState({  error: null });
  const [AppServerLoginUserPass, setAppServerLoginUserPass] = useState({ value: '', error: null });
  const [Phone, setPhone] = useState({ value: '', error: null });
  const [Address, setAddress] = useState({  error: null });
  const [Email, setEmail] = useState(null);
  const [AppServerLoginPort, setAppServerLoginPort] = useState({  error: null });
  const [CreatedProgID, setCreatedProgID] = useState({ value: '', error: null });
  const [ CreatedDate, setCreatedDate] = useState({ value: '', error: null });
  const [CreatedUserName, setCreatedUserName] = useState({ value: '', error: null });
  const [LastUpdate, setLastUpdate] = useState({ value: '', error: null });
  const [LastUserName, setLastUserName] = useState({ value: '', error: null });
  const [TxnType, setTxnType] = useState({ value: '', error: null });

 
  useEffect(() => {
    setEmail({ value: selected?.Email ?? '' })
    setCpnyID({ value: selected?.CpnyID ?? '' })
    setCpnyName({ value: selected?.CpnyName ??'' });

    setWebUserID({ value: selected?.WebUserID ?? '' })
    setWebPassword({ value: selected?.WebPassword ?? ''   })
    setAppServerIP({ value: selected?.AppServerIP ?? '' })
    setVendID({ value: selected?.VendID ?? '' })
    setVendorCount({ value: selected?.VendorCount ?? '' })
    setUseVendorCount({value: formatNumber(selected?.UseVendorCount) })
    setWebServiceURL({ value: selected?.WebServiceURL ?? '' })
    setAppServerLoginUserID({ value: selected?.AppServerLoginUserID ?? '' })
    setAppServerLoginUserPass({ value: selected?.AppServerLoginUserPass ?? ''  })
    setAddress({ value: selected?.Address ?? '' })
    setAppServerLoginPort({ value: selected?.AppServerLoginPort ?? '' })
    setAppServerVersion({ value: selected?.AppServerVersion ?? '' })
    setLicenseAmt({value : disabled ? formatNumber(selected?.LicenseAmt ): (selected?.LicenseAmt ?? '') });
    setPhone({ value: selected?.Phone ?? '' });
    setCreatedDate({value: selected?.CreatedDate})
    // setTxnType({value: selected?.TxnType} )
    const Options = [
      { label: "Бараа материал : Багцлалт", value: 'INAS' },
        { label: "Бараа материал : Тохируулга", value: 'INAJ' },
        {label: "Бараа материал : Зарлага", value: 'INII' },
        {label: "Бараа материал : Тооллого", value: 'INPI' },
        { label: "Бараа материал : Орлого", value: 'INRC' },
        { label: "Бараа материал : Шилжүүлэг", value: 'INTR' },
        { label: "Борлуулалт : Буцаалтын орлого", value: 'PSCM' },
        { label: "Борлуулалт : Зарлага", value: 'PSIN' }
      ];
    // console.log(selected?.TxnType )
    if(selected?.TxnType){
      const list = [];
      const typeList = selected?.TxnType?.split(',');
      console.log(typeList)
      typeList?.map(item => {
        let option = Options?.filter(opt => opt.value === item)[0]
        if(option?.value == item){
          list.push(option)
        }
        console.log(item)  
      })
      setTxnType({ value: list })
    }
    setDisabled(disabled);
    return () => {};
  }, [selected]);

 
  async function handleSubmit  (e){
    e.preventDefault()
    let text = LicenseAmt?.value?.replace(/[^0-9]/g, '');
    let text1 = AppServerIP?.value?.replace(/[^0-9.]/g, '');
    
  //   let txnType = [];
  //   TxnType?.value?.map(item => {
  //     //label, value
  //     txnType.push(item?.value)
  //   })
  //  console.log(txnType)

  //  let Txntype = [];
  //   txnType.map(item => {
  //     //label, value
  //     Txntype.push(item)
  //   })
  //  console.log(Txntype)
   
   
// return;
     if(WebUserID?.value && isValidEmail(WebUserID?.value) && CpnyID?.value&& CpnyName?.value && WebPassword?.value &&WebServiceURL?.value &&Phone?.value && !isNaN(Phone?.value) &&Address?.value && Email?.value && isValidEmail(Email?.value)  ){
      setLoader(true);
      setError(null);
      let requests = [{
        LicenseAmt: parseFloat(text),
        AppServerIP: parseFloat(text1),
      }];

    if(selected)requests[0].RequestID = selected.RequestID;

    if(selected){

      // const userRef = db.collection("smWebUsers").doc(selected.id) //doc(db, "smWebUsers", selected.id )
      const userRef = doc(db, "smWebUsers", selected.id )
      // const q1 = query(userRef, where("WebUserID", "==", WebUserID?.value))
      // const q1 = userRef.filter(element => element.WebUserID === WebUserID?.value);
      // const query1 = await getDocs(q1)
      // let exists = null;
      // query1.forEach(doc => exists = doc.data());
      console.log(userRef)
      // if(exists){
      //   setError("Хэрэглэгч бүртгэлтэй байна")
      // }  
      // else { 
      setDoc(userRef, {CpnyID: CpnyID?.value ,CpnyName: CpnyName?.value, WebUserID:WebUserID?.value.toLowerCase(), WebPassword: WebPassword?.value, Phone:Phone?.value,  
      WebServiceURL:WebServiceURL?.value, 
      Address:Address?.value, Email:Email?.value ,CreatedDate: CreatedDate?.value, LastUserName: Email?.value, LastUpdate:  moment().format('yyyy.MM.DD, HH:mm:ss')})

        onClose(true);
       message.success(t('request_success'))
      // }
     
       
    
      } else {
     const userCollRef= collection(db, 'smWebUsers')
     const q1 = query(userCollRef, where("WebUserID", "==", WebUserID?.value
      ))
     const query1 = await getDocs(q1)
     let exists = null;
     query1.forEach(doc => exists = doc.data());
     console.log(exists)
     if(exists){
       setError("Хэрэглэгч бүртгэлтэй байна")
     }  
     else {
    
       addDoc(userCollRef, {CpnyID: CpnyID?.value ,CpnyName: CpnyName?.value, WebUserID:WebUserID?.value.toLowerCase(), WebPassword:WebPassword?.value, Phone:Phone?.value,  WebServiceURL:WebServiceURL?.value, Address:Address?.value, Email:Email?.value, CreatedDate: moment().format('yyyy.MM.DD, HH:mm:ss '),  LastUserName: Email?.value, LastUpdate:  moment().format('yyyy.MM.DD, HH:mm:ss ')} )
       onClose(true)
       message.success(t('request_success'));
     }
      }
      setLoader(false);
  }
   else {
    if(!WebUserID?.value) setWebUserID({ error: 'is_empty'});
    if(!WebPassword) setWebPassword({value: '', error: 'is_empty'});
    if(!CpnyID?.value) setCpnyID({value: '', error: 'is_empty'});
    if(!CpnyName?.value) setCpnyName({value: '', error: 'is_empty'});
    // if(!VendID?.value) setVendID({value: '', error: 'is_empty'});
    if(!VendorCount?.value) setVendorCount({value: '', error: 'is_empty'});
    if(!LicenseAmt?.value) setLicenseAmt({value: '', error: 'is_empty'});
    if(!WebServiceURL?.value) setWebServiceURL({value: '', error: 'is_empty'});
    if(!AppServerLoginUserID?.value) setAppServerLoginUserID({value: '', error: 'is_empty'});
    if(!AppServerLoginUserPass) setAppServerLoginUserPass({value: '', error: 'is_empty'});
    if(!Phone?.value) setPhone({value: '', error: 'is_empty'});
    if(!Address?.value) setAddress({value: '', error: 'is_empty'});
    if(!AppServerLoginPort?.value) setAppServerLoginPort({value: '', error: 'is_empty'});
    if(!AppServerIP?.value) setAppServerIP({value: '', error: 'is_empty'});
    if(!AppServerVersion?.value) setAppServerVersion({value: '', error: 'is_empty'});
    if(!Email?.value) setEmail({value: '', error: 'is_empty'});
    if(!TxnType?.value) setTxnType({value: '', error: 'is_empty'});
    else if(isNaN(text)) setVendorCount({...VendorCount, ...{error: 'must_number'}});
    else if(isNaN(Phone?.value)) setPhone({...Phone, ...{error: 'must_number'}});
    else if(isNaN(text)) setLicenseAmt({...LicenseAmt, ...{error: 'must_number'}});
    else if(isNaN(AppServerLoginPort?.value)) setAppServerLoginPort({...AppServerLoginPort, ...{error: 'must_number'}});
    else if(!checkIfValidIP(AppServerIP?.value)) setAppServerIP({...AppServerIP, ...{error: 'is_IP'}});
    // else if(isNaN(text1)) setAppServerIP({...AppServerIP, ...{error: 'must_number'}});
   if(!isValidEmail(WebUserID?.value)) setWebUserID({...WebUserID, ...{error: 'is_invalid'}});
   if(!isValidEmail(Email?.value)) setEmail({...Email, ...{error: 'is_invalid'}});
   
  }
  }


  const changeLicense = value => {
    let text = value?.value?.replace(/[^0-9]/g, '');
    if(isNaN(text)) setLicenseAmt({ value: value?.value, error: 'must_number'});
    else setLicenseAmt({ value: formatNumber(text) });
  }
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
    
  }
  function checkIfValidIP(str) {
    // Regular expression to check if string is a IP address
    const regexExp = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
    return regexExp.test(str);
  }
  const changeVendorCount = value => {
    let text = value?.value?.replace(/[^0-9]/g, '');
    if(isNaN(text)) setVendorCount({ value: value?.value, error: 'must_number'});
    else setVendorCount({ value: formatNumber(text) });
  } 
  const changePhone = value => {
    if(isNaN(value?.value)) setPhone({ value: value?.value, error: 'must_number'});
    else setPhone(value);
  }
  const changePort = value => {
    if(isNaN(value?.value)) setAppServerLoginPort({ value: value?.value, error: 'must_number'});
    else setAppServerLoginPort(value);
  }
  // const changeIP = value => {
  //   if(isNaN(value?.value)) setAppServerIP({ value: value?.value, error: 'must_number'});
  //   else setAppServerIP(value);
  // }
  // const changeIP = value => {
  //   let text1 = value?.value?.replace(/[0-9]/g, '');
  //   if(isNaN(text1)) setAppServerIP({ value: value?.value, error: 'must_number'});
  //   else setAppServerIP(text1);
  // }
  const handleEnter = e => {
    if (e?.key?.toLowerCase() === "enter") {
      const form = e.target.form;
      const index = [...form].indexOf(e.target);
      form.elements[index + 1].focus();
      e.preventDefault();
    }
  }

  return (
    <Modal title={null} footer={null} closable={false} visible={visible} 
     width={700}> 
     <DynamicAIIcon name='AiFillCloseCircle' className='close_icon' onClick={() => onClose(false)} />
      <p className='card_title'>{t('new_vendor')}</p>
      {error ? <Error1 error={error} /> : null}
      <form className='card_container' onSubmit={handleSubmit}>
      <div className='cart'>
        <div className='card1' >  
      <CardInput label={('print.company')} setValue={setCpnyID} value={CpnyID} handleEnter={handleEnter}/>
      
      <CardInput1 label={('table.company')} value={CpnyName} setValue={setCpnyName} handleEnter={handleEnter} /> 
     
      </div>
      <div className='card2'>
      <CardInput label={('user_email')}  disabled={disabled} value={WebUserID}  setValue={setWebUserID} handleEnter={handleEnter} />
      <CardInput1 label={('user_password')}   value={WebPassword} setValue={setWebPassword} isPassword={true} handleEnter={handleEnter} /> 
      
      </div>
      <div className='card3'>
      <CardInput label={('login.email')}handleEnter={handleEnter} value={Email} setValue={setEmail}  />

      <CardInput1 label={('table.phone')} handleEnter={handleEnter}value={Phone} setValue={changePhone}  />
      
      </div>
      <div className='card3'>
      <CardInput label={('table.webservice')}  value={WebServiceURL} setValue={setWebServiceURL} handleEnter={handleEnter} />
      <Cardlength label={('table.vendorCount')}  value={VendorCount} setValue={changeVendorCount} handleEnter={handleEnter} /> 
      </div>
      <div className='card'>
    
      {/* <CardDropdown label={('txntype')}  value={TxnType} handleEnter={handleEnter} setValue={setTxnType} /> */}
      <CardNote label={('table.address')}  value={Address} setValue={setAddress} /> 
      </div>
      {/* <div className='card4'>
      <CardInput label={('table.License')}  disabled={disabled} value={LicenseAmt} setValue={changeLicense} handleEnter={handleEnter}/>
      </div> */}
      
     
      </div>
      {!disabled && <button type='submit' disabled={loader} className='login_form_btn'>
        {loader ? <Loader className='login_loader' color='#fff' /> :t('save') }
      </button>}
    </form>
     
    </Modal>
  )
}