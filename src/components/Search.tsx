import {useState} from 'react'
import Fetch from "./Fetch";




function Search() {
  const [country, setCountry] = useState<string>('it')
  const [category, setCategory] = useState<string>('business')

  return (
    <div>
      {/* COUNTRY */}
      <label >Country</label>
      <select value={country} onChange={(e)=>setCountry(e.target.value)}>
        <option value="it">Italy</option>
        <option value="de">Germany</option>
        <option value="us">USA</option>
        <option value="fr">France</option>
        <option value="au">Australia</option>
        <option value="jp">Japan</option>
        <option value="ar">Argentina</option>
        <option value="br">Brasil</option>
        <option value="cn">China</option>
        <option value="gb">United Kingdom</option>
        <option value="hg">Hong Kong</option>
        <option value="in">India</option>
        <option value="kr">Korea</option>
        <option value="mx">Mexico</option>
        <option value="ng">Nigeria</option>
        <option value="nl">Netherlands</option>
        <option value="ph">Philippines</option>
        <option value="pt">Portugal</option>
        <option value="rs">Russia</option>
        <option value="sg">Singapore</option>
        <option value="th">Thailand</option>
        <option value="tr">Turkey</option>
        <option value="vz">Venezuela</option>
        <option value="za">South Africa</option>


      </select>
      {/* CATEGORY */}
      <label >Category</label>
      <select value={category} onChange={(e)=>setCategory(e.target.value)}>
        <option value="business">Business💰</option>
        <option value="entertainment">Entertainment 📺</option>
        <option value="general">General 🧵</option>
        <option value="science">Science 🔬</option>
        <option value="sports">Sports 🚵‍♀️</option>
        <option value="technology">Technology 👨‍💻</option>
        <option value="health">Health 🧡</option>
        
      </select>
      
      
      <Fetch country={country} category={category} />
    </div>
  );
}

export default Search;
