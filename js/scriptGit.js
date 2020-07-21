$("form").on("submit", function (event) {
  event.preventDefault();
  let repository = $("#repository").val();
  const data = axios
    .get(`https://api.github.com/search/repositories?q=${repository}`)
    .then((response) => {
      getDataRepository(response);
    })
    .catch((error) => {
      console.log(error);
    });
});

const getDataRepository = (value) => {
  let tr;
  value.data.items.forEach((v, i) => {
    var td = document.createElement("th");

    if (!(i % 5)) {
      tr = document.createElement("tr");
      document.getElementById("table0").appendChild(tr);
    }
    td.appendChild(document.createTextNode(v.full_name));
    tr.appendChild(td);
  });
};
