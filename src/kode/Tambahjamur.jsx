// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AddJamur = () => {
//   const [name, setName] = useState("");
//   const [latin_name, setLatinName] = useState("");
//   const [description, setDescription] = useState("");
//   const [habitat, setHabitat] = useState("");
//   const [pict, setPict] = useState("");
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const addJamur = (e) => {
//     e.preventDefault();
//     let data = {
//       name: name,
//       latin_name: latin_name,
//       description: description,
//       habitat: habitat,
//       pict: pict,
//     }
//     console.log(JSON.stringify(data))
//     fetch("http://localhost:3000/api/addJamur", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json", 
//       }, 
//       body: JSON.stringify(data)
//     })
//     .then(hasil => hasil.json())
//   };

//   return (
//     <div className="container mx-auto p-4">
//       {error && <div className="text-red-500 mb-4">{error}</div>}
//       <form onSubmit={addJamur}>
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
//         <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded cursor-pointer" type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default AddJamur;
