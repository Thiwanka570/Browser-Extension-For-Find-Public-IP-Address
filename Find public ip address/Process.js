
fetch("https://api.ipify.org?format=json")
  .then(response => response.json())
  .then(data => {
    console.log(data.ip);
    ipAddr=data.ip;
    document.getElementById("ipAddr").innerHTML= data.ip;
  })
  .catch(error => console.error("Error fetching IP addressV6:", error));

  fetch("https://api64.ipify.org?format=json")
  .then(response => response.json())
  .then(data => {
    console.log(data.ip);
    ipAddr=data.ip;
    document.getElementById("ipAddrV4").innerHTML= data.ip;
  })
  .catch(error => console.error("Error fetching IP addressV4:", error));

  