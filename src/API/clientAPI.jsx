
export const getAPI = async () => {
  //Working
  const json = await fetch("https://erp.microsystems-eg.com", {
    method: "POST",
    mode: "cors",
    Cookies: "ASP.NET_SessionId=lzfay5nitdst3h1rns5xevsy",
    headers: {
      "Content-Type": "application/json",
      "content-Length": "216829",
      "Host": "erp.microsystems-eg.com",
      // "mode": "no-cors",
    },
    body: JSON.stringify({
      ACC: "8",
      USRID: "webusr",
      PASS: "Web@2022",
      LNG: "ENG",
      CMDTXT: "GENARR",
      CMDPAR: "RPTNA=GETCONTACT;CCODE=C;",
    }),
  })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .catch((err) => {
      console.log("Error in getAPI: " + err);
    });
  return json;
};