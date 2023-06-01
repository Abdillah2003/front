// import { useState, useEffect } from "react";
// import { Navigate, useNavigate } from "react-router";

// const FileJamur = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate()

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/api/jamur");
//         const jsonData = await response.json();
//         setData(jsonData);
//         setLoading(false);
//       } catch (error) {
//         console.log(error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   console.log(data);

//   const handleUpdate = (id) => {
//     // Implement your update logic here
//     navigate(`/edit/${id}`)
//   };

//   const handleDelete = (id) => {
//     setLoading(true);
//     fetch(`http://localhost:3001/api/deleteJamur/${id}`, {
//       method: "DELETE"
//     })
//     .then(hasil => {
//     const data = data.filter(el => {
//       return el.id != id
//     })
//       setData(data)
//     })
//     setLoading(false)
//   };

//   if (loading) return <h1>Loading...</h1>;

//   return (
//     <>
//       <div style={titleStyle}>Menjelajahi Dunia Jamur</div>
//       {data.map((item) => (
//         <div key={item.id} id={item.id} style={itemContainerStyle}>
//           <img src={item.pict} style={imageStyle} alt={item.habitat} />
//           <h2 style={habitatStyle}>{item.habitat}</h2>
//           <p style={descriptionStyle}>{item.description}</p>
//           <button onClick={() => handleUpdate(item.id)}>Update</button>
//           <button onClick={() => handleDelete(item.id)}>Delete</button>
//         </div>
//       ))}
//     </>
//   );
// };

// export default FileJamur;

// // CSS styles
// const titleStyle = {
//   fontSize: "24px",
//   fontWeight: "bold",
//   marginBottom: "20px"
// };

// const itemContainerStyle = {
//   marginBottom: "20px",
//   border: "1px solid #ccc",
//   padding: "10px",
//   borderRadius: "5px"
// };

// const imageStyle = {
//   width: "100%",
//   maxWidth: "300px",
//   marginBottom: "10px",
//   borderRadius: "5px"
// };

// const habitatStyle = {
//   fontSize: "18px",
//   fontWeight: "bold",
//   marginBottom: "5px"
// };

// const descriptionStyle = {
//   fontSize: "14px"
// };
