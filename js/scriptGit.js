$("form").on("submit", function (event) {
  event.preventDefault();
  let repository = $("#repository").val();
  const data = axios
    .get(`https://api.github.com/search/repositories?q=${repository}`)
    .then((response) => {
      let tr;
      response.data.items.forEach((v, i) => {
        var td = document.createElement("th");
        //th.setAttribute("scope", "row");

        if (!(i % 5)) {
          tr = document.createElement("tr");
          document.getElementById("table0").appendChild(tr);
        }
        td.appendChild(document.createTextNode(v.full_name));
        tr.appendChild(td);
      });

      $.each(response.data.items, function (i, item) {
        console.log(item.name);
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
