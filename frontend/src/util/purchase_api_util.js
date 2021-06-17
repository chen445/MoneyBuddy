export const purchasePoint = ({icon_id, point}) => {
  return axios.post(`/api/users/update`,{icon_id, point});
};
