// import { useEffect } from "react";
// import { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// const EditJamur = () => {
//     const [name, setName] = useState("");
//     const [latin_name, setLatinName] = useState("");
//     const [description, setDescription] = useState("");
//     const [habitat, setHabitat] = useState("");
//     const [pict, setPict] = useState("");
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(true)
//     const navigate = useNavigate();
//     const { id } = useParams();

//   const editJamur = (e) => {
//     e.preventDefault();
//     let data = {
//         name: name,
//         latin_name: latin_name,
//         description: description,
//         habitat: habitat,
//         pict: pict,
//       }
//     console.log(JSON.stringify(data))
//     fetch(`http://localhost:3001/api/updateJamur/${id}`, {
//       method: "PUT",
//       headers: {"Content-Type":"application/json"},
//       body: JSON.stringify(data),
//     })
//     .then(el => el.json())
//     .then(elHasil => {
//       console.log(elHasil)
//       navigate("/filejamur")})
//   };

//   useEffect(() => {
//     setLoading(true);
//     fetch(`http://localhost:3001/api/updateJamur${id}`)
//     .then(hasil => hasil.json())
//     .then(lastHasil => {
//       setName(lastHasil.name)
//       setLatinName(lastHasil.latin_name)
//       setDescription(lastHasil.description)
//       setHabitat(lastHasil.habitat)
//       setPict(lastHasil.pict)
//     })
//     setLoading(false)
//   }, [id]);

//   if (error) return <div>Error!</div>;

//   return (
//     <>
//       {loading ? (
//         <h1 style={{ width: "100%", textAlign: "center", marginTop: "20px" }}>
//           Loading...
//         </h1>
//       ) : (
//         <div className="container">
//           <form onSubmit={editJamur}>
//         <div className="mb-4">
//           <label htmlFor="name" className="font-bold mb-2">Name</label>
//           <input
//             id="name"
//             className="border border-gray-300 px-4 py-2 rounded"
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="latin_name" className="font-bold mb-2">Latin Name</label>
//           <input
//             id="latin_name"
//             className="border border-gray-300 px-4 py-2 rounded"
//             type="text"
//             value={latin_name}
//             onChange={(e) => setLatinName(e.target.value)}
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="description" className="font-bold mb-2">Description</label>
//           <textarea
//             id="description"
//             className="border border-gray-300 px-4 py-2 rounded"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           ></textarea>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="habitat" className="font-bold mb-2">Habitat</label>
//           <input
//             id="habitat"
//             className="border border-gray-300 px-4 py-2 rounded"
//             type="text"
//             value={habitat}
//             onChange={(e) => setHabitat(e.target.value)}
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="pict" className="font-bold mb-2">Pict</label>
//           <input
//             id="pict"
//             className="border border-gray-300 px-4 py-2 rounded"
//             type="text"
//             value={pict}
//             onChange={(e) => setPict(e.target.value)}
//           />
//         </div>
//         <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded cursor-pointer" type="submit">Edit</button>
//       </form>
//         </div>
//       )}
//     </>
//   );
// };

// export default EditJamur;
