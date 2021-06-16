import axios from "axios";

export const createCategory = (Data) => {
  return axios.post("/api/category", Data);
};

export const fetchAllCategory = (Data) => {
  return axios.get("/api/category", Data);
};

export const deleteCategory = (catergoryId)=>{
    return axios.delete(`/api/category`,{catergoryId: catergoryId} )
}

