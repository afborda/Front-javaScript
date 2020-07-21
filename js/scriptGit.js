$("form").on("submit", function (event) {
  event.preventDefault();
  let repository = $("#repository").val();
  const data = axios
    .get(`https://api.github.com/search/repositories?q=${repository}`)
    .then((response) => {
      $.each(response.data.items, function (i, item) {
        console.log(item.name);
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
