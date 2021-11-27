import React, { useEffect, useState,useContext } from "react";
import Helloabi from "./contracts/Hello.json";
import Voatingabi from "./contracts/Voating.json"
import Web3 from "web3";
import Navbar from "./Navbar";
import Cards from "./components/voter/cards"
import "./App.css";
import Button from '@mui/material/Button';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from "./components/landing/loginOption"
import AdminPage from "./components/admin/AdminPage"




const App = () => {
  const [refresh, setrefresh] = useState(0);

  let content;
  
  const [loading2, setloading2] = useState(false);

  const [account, setAccount] = useState("");
  const [loading, setLoading] = useState(true);
  var [Hello, setHello] = useState({});
  const [NetworkDataAdress, setNetworkDataAdress] = useState("");
  const [VoatMashine,setVoatMashine]=useState({})

  

  //----------------------------loading web 3 and checque for metamask------------------------------------------------------------

  const loadWeb3 = async () => {
    if (window.ethereum) {
      await window.ethereum.enable();
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };

  //----------------------------------------loading main data of contact data-------------------------------------------------------------

  const loadBlockchainData = async () => {
    //--------------------------------------loading web3 instance ------------------------------------------
    setLoading(true);
    if (
      typeof window.ethereum == "undefined" 
    ) {
      return;
    }
    const web3 = new Web3(window.ethereum);

    let url = window.location.href;
    console.log(url);
    //---------------------------------------loading all the account and essintials for contract--------------------------------------------
    const accounts = await web3.eth.getAccounts();

    if (accounts.length == 0) {
      return;
    }
    setAccount(accounts[0]);
    const networkId = await web3.eth.net.getId();
    const networkData= Voatingabi.networks[networkId];
    const string= networkData.address
    setNetworkDataAdress(string)
   // console.log("network data is")
    //console.log(NetworkDataAdress)
   // console.log("network id is")
    //console.log(string)
    
    //--------------------------------here play with methoda and make things-----------------------------------------------------
    if (networkId == 5777) {
       const voating = new web3.eth.Contract(Voatingabi.abi, networkData.address);
       setVoatMashine(voating)
       // await voating.methods.vote_applicant_1()
       //.send({from : accounts[0]})
       //.on('transactionhash',()=>{
       //  console.log("sucessfully voted to applicant 1")
       //})
     
       
       
      // const fetch_data1=await voating.methods.get_applicant_1_data().call()
       //const fetch_data2=await voating.methods.get_applicant_2_data().call()
       
       
         
       
      // console.log(fetch_data1)
      // console.log(fetch_data2)
       console.log(voating)
       
       //console.log( voating.methods)
       

      //const hello = {}
      //setHello(hello);

      setLoading(false);
    } else {
      window.alert("the contract not deployed to detected network.");
      setloading2(true);
    }
  };

const voteTO1 = async()=>{
  
        await VoatMashine.methods.vote_applicant_1()
       .send({from : account})
       .on('transactionhash',()=>{
         console.log("sucessfully voted to applicant 1")
       })
};




const voteTO2 = async()=>{
  
  await VoatMashine.methods.vote_applicant_2()
 .send({from : account})
 .on('transactionhash',()=>{
   console.log("sucessfully voted to applicant 2")
 })
};




const viewCurrentResult= async()=>{
  const fetch_vote1=await VoatMashine.methods.get_applicant_1_data().call()
  const fetch_vote2=await VoatMashine.methods.get_applicant_2_data().call()
  window.alert(
    "current vote of candidate 1 is : "+ fetch_vote1 + "\n" +
    "current vote of candidate 2 is : "+ fetch_vote2
     )
 
};


  
//----------------------------------------------some essintial stuffs----------------------------------------------------------------
  const onclick = async (a) => {
    const web3 = new Web3(window.web3);
    await Hello.methods
      .setCompleted(a.toString())
      .send({ from: account })
      .once("recepient", (recepient) => {
        console.log("success");
      })
      .on("error", () => {
        console.log("error");
      });
  };

  const walletAddress = async () => {
    await window.ethereum.request({
      method: "eth_requestAccounts",
      params: [
        {
          eth_accounts: {},
        },
      ],
    });
    window.location.reload();
  };
//-------------------------------------------calling use effect on reloading to load data-------------------------------------------------------------
  useEffect(() => {
    loadWeb3();
    loadBlockchainData();

    if (refresh == 1) {
      setrefresh(0);
      loadBlockchainData();
    }
    //esl
  }, [refresh]);
//------------------------------------------setup loading screen---------------------------------------------------------
  if (loading === true) {
    content = (
      <p className="text-center">
        Loading...{loading2 ? <div>loading....</div> : ""}
      </p>
    );
 //--------------------------------------------html jsx code-------------------------------------------------------   
  } else {
    content = (
      <div className="container">
        <main role="main" className="container">
          <div className="jumbotron">
            <h1>Project</h1>
            <div className="row" style={{ paddingTop: "30px" }}>
              {" "}
              <div className="row" style={{ paddingLeft: "40px" }}>
                <h3>text 1</h3>
              </div>
              <div className="row" style={{ paddingLeft: "40px" }}>
                <h3>text 2</h3>
              </div>
              <div className="row" style={{ paddingLeft: "40px" }}>
                <h3>text 3</h3>
              </div>
              <div className="row" style={{ paddingLeft: "40px" }}>
                <button className="btn btn-primary">Click on it</button>
              </div>
            </div>
          </div>
        </main>


      </div>
    );
  }


  const [candidate1B, setCandidate1B]=React.useState("");
    const [candidate2B, setCandidate2B]=React.useState("");
    const [candidate1infoB, setCandidate1infoB]=React.useState("");
    const [candidate2infoB, setCandidate2infoB]=React.useState("");

    const setCandidate1BF=(v)=>{
      setCandidate1B(v);
      
    }
  //  const getCandidate1BF=()=>{
  //    return candidate1B
      
  //  }
    const setCandidate2BF=(v)=>{
      setCandidate2B(v);
      
    }
  //   function getCandidate2BF(){
  //    return candidate2B
      
  //  }
    const setcandidate1infoBF=(v)=>{
      setCandidate1infoB(v);
      
    }
  //  const getcandidate1infoBF=()=>{
  //    return candidate1infoB
      
  //  }
    const setcandidate2infoBF=(v)=>{
      setCandidate2infoB(v);

    }
  //  const getcandidate2infoBF=()=>{
  //    return candidate2infoB

  //  }

   

    

  return (
    <>
    <div className="app">
    <div className="cardNav">
      <Navbar account={account} />

      

      

      {account == "" ? (
        <div className="container">
          {" "}
          Connect your wallet to application{"   "}{" "}
          <button onClick={walletAddress}>metamask</button>
        </div>
      ) : (

        
          
        <BrowserRouter>

      <Switch>
          <Route path="/landing">
            <LandingPage />
          </Route>
          <Route path="/admin">
            <AdminPage VoatMashine={VoatMashine} account={account} setCandidate1BF={setCandidate1BF} setCandidate2BF={setCandidate2BF} setcandidate1infoBF={setcandidate1infoBF} setcandidate2infoBF={setcandidate2infoBF} />
          </Route>
          <Route path="/cards">
            <Cards VoatMashine={VoatMashine} account={account} getcandidate1B={candidate1B} getcandidate2B={candidate2B} getcandidate1infoB={candidate1infoB} getcandidate2infoB={candidate2infoB} />
          </Route>

      </Switch>

      </BrowserRouter>
        

       

          
      )}
      {/* {content} */}
      
    </div>



    </div>
    </>      
  );
};

export default App;





//h1(hit2 9})