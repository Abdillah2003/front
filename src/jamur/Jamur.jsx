import { useState, useEffect } from "react";

const Jamur = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [latin_name, setLatinName] = useState("");
  const [description, setDescription] = useState("");
  const [habitat, setHabitat] = useState("");
  const [pict, setPict] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editItemId, setEditItemId] = useState("");
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://backend-dot-tcc-2-d-123200017.df.r.appspot.com/api/jamur");
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleTambah = async () => {
    try {
      const response = await fetch("https://backend-dot-tcc-2-d-123200017.df.r.appspot.com/api/addJamur", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          latin_name,
          description,
          habitat,
          pict,
        }),
      });

      if (response.ok) {
        // Berhasil tambah data, refresh data kucing
        fetchData();
        setName("");
        setLatinName("");
        setDescription("");
        setHabitat("");
        setPict("")
      } else {
        console.log("Gagal menambahkan data kucing");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (id_mush) => {
    // Mengaktifkan mode edit dengan ID yang dipilih
    setEditMode(true);
    setEditItemId(id_mush);
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`https://backend-dot-tcc-2-d-123200017.df.r.appspot.com/api/updateJamur/${editItemId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_mush: editItemId,
          name,
          latin_name,
          description,
          habitat,
          pict,
        }),
      });
  
      if (response.ok) {
        // Berhasil update data, refresh data kucing dan keluar dari mode edit
        fetchData();
        setEditMode(false);
        setEditItemId("");
        setName("");
        setLatinName("");
        setDescription("");
        setHabitat("");
        setPict("")
      } else {
        console.log("Gagal mengupdate data kucing");
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  const handleCancelEdit = () => {
    // Batal edit dan reset form
    setEditMode(false);
    setEditItemId("");
    setName("");
    setLatinName("");
    setDescription("");
    setHabitat("");
    setPict("")
  };

  const handleDelete = async (id_mush) => {
    try {
      const response = await fetch(`https://backend-dot-tcc-2-d-123200017.df.r.appspot.com/api/deleteJamur/${id_mush}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        // Berhasil menghapus data, refresh data kucing
        fetchData();
      } else {
        console.log("Gagal menghapus data kucing");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="container mx-auto">
      <div className="max-w-xl mx-auto rounded overflow-hidden shadow-lg my-4">
  <div className="px-6 py-4">
    <h2 className="font-bold text-2xl mb-4">
      {editMode ? "Edit Jamur" : "Tambah Jamur Baru"}
    </h2>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
      </label>
      <input
        placeholder="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
      </label>
      <input
        placeholder="Latin Name"
        type="text"
        value={latin_name}
        onChange={(e) => setLatinName(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
      </label>
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      ></textarea>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
      </label>
      <textarea
        placeholder="Habitat"
        value={habitat}
        onChange={(e) => setHabitat(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      ></textarea>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
      </label>
      <textarea
        placeholder="Picture"
        value={pict}
        onChange={(e) => setPict(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      ></textarea>
    </div>
    <div className="flex justify-end">
      {editMode ? (
        <>
          <button
            onClick={handleUpdate}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
          >
            Update
          </button>
          <button
            onClick={handleCancelEdit}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Cancel
          </button>
        </>
      ) : (
        <button
          onClick={handleTambah}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Tambah
        </button>
      )}
    </div>
  </div>

      </div>

  {data.map((item) => (
  <div key={item.id_mush} id_mush={item.id_mush} className="border-2 rounded-lg p-4 mb-4">
    <img src={item.pict} alt={item.habitat} className="mb-2 rounded-xl " />
    <h1 className="font-bold text-xl">{item.name}</h1>
    <p className="italic text-gray-600">{item.latin_name}</p>
    <p className="font-bold mt-2">Habitat: {item.habitat}</p>
    <p className="text-gray-700">Deskripsi: {item.description}</p>
    <div className="mt-4">
      <button
        onClick={() => {
          handleEdit(item.id_mush);
          document.getElementById("editForm");
        }}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
      >
        Edit
      </button>
      <button
        onClick={() => handleDelete(item.id_mush)}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Delete
      </button>
    </div>
  </div>
))}


    </div>
  );
};

export default Jamur;