import React, { useEffect, useState } from "react";
import { imgDB, txtDB } from "../firebase";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes, deleteObject } from "firebase/storage";
import { addDoc, collection, getDocs, deleteDoc, doc } from "firebase/firestore";

function Jokes() {
  const [txt, setTxt] = useState("");
  const [img, setImg] = useState("");
  const [data, setData] = useState([]);

  const handleUpload = (e) => {
    const imgs = ref(imgDB, `Imgs/${v4()}`);
    uploadBytes(imgs, e.target.files[0]).then((data) => {
      getDownloadURL(data.ref).then((val) => {
        setImg(val);
      });
    });
  };

  const handleClick = async () => {
    const valRef = collection(txtDB, "txtData");
    await addDoc(valRef, { txtVal: txt, imgUrl: img });
    alert("Data added successfully");
    getData(); // Refresh data after adding a new item
  };

  const handleDelete = async (id) => {
    const valRef = doc(txtDB, "txtData", id);
    await deleteDoc(valRef);
    alert("Data deleted successfully");
    getData(); // Refresh data after deleting an item
  };

  const getData = async () => {
    const valRef = collection(txtDB, "txtData");
    const dataDb = await getDocs(valRef);
    const allData = dataDb.docs.map((val) => ({ ...val.data(), id: val.id }));
    setData(allData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}>
  

      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
  
    }}>
      <input onChange={(e) => setTxt(e.target.value)} />
      <br />
      <input type="file" onChange={(e) => handleUpload(e)} />
      <br />
      <br />
      <button onClick={handleClick} style={{
        display:'flex', width:'100px', padding:'10px', color:'#fff', backgroundColor:'blue', cursor:'pointer'
      }}>Add</button>
      </div>
      

      <div>
      {data.map((value) => (
        <div key={value.id} style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
  
        }}>
          <h1>{value.txtVal}</h1>
          <img src={value.imgUrl} alt="" height="200px" width="200px" />
          <button onClick={() => handleDelete(value.id)} style={{
            width:'100%',
            padding:'10px',
            backgroundColor:'brown',
            color:'white',
            fontSize:'16px',
            cursor:'pointer'
          }}>Delete</button>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Jokes;
