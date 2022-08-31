
export const getClients = async () => {
  //Working
  const json = await fetch("http://localhost:3000/check", {
    method: "GET",
  })
    // .then((res) => {
    //   return res.json();
    // })
    // .then((data) => {
    //   console.log(data);
    //   return data;
    // })
    .catch((err) => {
      console.log("Error in getAPI: " + err);
    });
    // console.log(json);
  return json.json();
};



