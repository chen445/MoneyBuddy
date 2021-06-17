import axios from "axios";

export const createCategory = (Data) => {
  return axios.post("/api/categories/create", Data);
};

export const fetchAllCategory = (Data) => {
  return axios.get("/api/category", Data);
};

export const deleteCategory = (catergoryId)=>{
    return axios.delete(
      `/api/categories/delete`, {catergoryId}
    );
}

export const editCategory = (category_Id, changename, changeicon) =>{
  return axios.patch(`/api/categories/update`, {
    category_Id,
    changename,
    changeicon,
  });
}

