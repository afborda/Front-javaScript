$("#cepUser").keypress(function () {
  let cepValue = $("#cepUser").val();

  if (cepValue.length === 8) {
    axios
      .get(`http://api.postmon.com.br/v1/cep/${cepValue}`)
      .then((response) => {
        getValueAddress(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
});

const getValueAddress = (response) => {
  const { bairro, cidade, logradouro, estado, estado_info } = response.data;
  $("#inputAddress").val(logradouro + " - " + cidade + " - " + estado);
  $("#streetUser").val(logradouro);
  $("#districtUser").val(bairro);
  $("#contryUser").val(estado_info.nome);
  $("#ufUser").val(estado);
};

$("form").on("submit", function (event) {
  event.preventDefault();
  let data = $.param({
    name: $("#nameUser").val(),
    birthday: $("#birthdayUser").val(),
    cpf: $("#cpfUser").val(),
    phone: $("#phoneUser").val(),
    email: $("#emailUser").val(),
    cep: $("#cepUser").val(),
    Address: $("#inputAddress").val(),
    street: $("#streetUser").val(),
    complement: $("#complementUser").val(),
    district: $("#districtUser").val(),
    contry: $("#contryUser").val(),
    uf: $("#ufUser").val(),
    description: $("#descriptionUser").val(),
  });
  console.log(data);
});
