import {useState,useEffect} from 'react'
//import BankingContract from "../contracts/Banking.json";
import getWeb3 from "../getWeb3";
import contractAbi from './contractAbi.json';



const useBasicDetails = () => {
  const [contract, setContract] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [web3, setWeb3] = useState(undefined);
  // const [contractAddress,setContractAddress] = useState(undefined)
  const contractAddress = '0xb0cE57858Edf7703203A1DB515822F4b87d9441A';
    //Loading web3 , contract , account
    useEffect(() => { 
      // console.log(BankingContract);
        
        getBasicDetails();
    }, []);
    const getBasicDetails = async () => {
      try {
        // Get network provider and web3 instance.
        const web3 = await getWeb3();
        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts();
        const contract = new web3.eth.Contract(contractAbi, contractAddress);
        setWeb3(web3);
        setAccount(accounts[0]);
        setContract(contract);
      } catch (error) {
        // Catch any errors for any of the above operations.
      
        console.error(error);
      }
    };
    return [web3,account,contract,contractAddress]
}

export default useBasicDetails
