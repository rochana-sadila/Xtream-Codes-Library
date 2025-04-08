fetch("xtreams.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (xtreams) {
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for (let xtream of xtreams) {
      out += `
         <tr>
            <td>${xtream.id}</td>
            <td>${xtream.url}</td>
            <td>${xtream.user}</td>
            <td>${xtream.password}</td>
            <td>${xtream.valid}</td>
         </tr>
      `;
    }
    placeholder.innerHTML = out;
  });
