let input = document.querySelector("#wl-input");
let qtd_input = document.querySelector("#wl-qtd");
let unidades = document.querySelector("#wl-unidades");
let labelCat = document.querySelector("#wl-label");
let categoryInput = document.querySelector("#wl-categoria");
let btn = document.querySelector("#wl-cadastrar");
let clear = document.querySelector("#wl-limpar");
let ul = document.querySelector("ul");
let ulCategories = document.querySelector("#wl-ul-categories");
let wpp = document.querySelector("#wl-wpp");
let count = document.querySelector("#wl-count");
let bkp = document.querySelector("#wl-bkp");
let bkpInput = document.querySelector("#wl-bkp-input");
let bkpModalBtn = document.querySelector("#wl-bkp-modal-btn");
let bkpModalArea = document.querySelector("#wl-bkp-area");
let bkpModalCloseBtn = document.querySelector("#wl-bkp-close");
let catModalBtn = document.querySelector("#wl-cadastrar-categoria");
let catModalArea = document.querySelector("#wl-cat-area");
let catModalCloseBtn = document.querySelector("#wl-cat-close");
let catInput = document.querySelector("#wl-cat-input");
let catConfirm = document.querySelector("#wl-cat-confirm");
let catHeader = document.querySelector("#wl-header-my-cat");

// MODAL PEDIDO

let pedidoModalBtn = document.querySelector("#wl-pedido-modal-btn");
let pedidoModalArea = document.querySelector("#wl-pedido-area");
let pedidoModalCloseBtn = document.querySelector("#wl-pedido-close");
let pedidoInput = document.querySelector("#wl-pedido-input");

const listar = () => {
  //CADASTRO DE CATEGORIAS PADRÃO

  let initialStorage = JSON.parse(localStorage.getItem("list")) || {};

  if (Object.keys(initialStorage).length === 0) {
    let initialCat = {
      "Geral 🛍️": [],
      "Legumes 🥕": [],
      "Verduras 🥦": [],
      "Frutas 🍊": [],
      "Mercearia 🧃": [],
      "Adega 🍾": [],
    };
    var catJSON = JSON.stringify(initialCat);
    localStorage.setItem("list", catJSON);
  }

  //FIM

  ul.innerHTML = "";
  let list = localStorage.getItem("list") || "{}";
  list = JSON.parse(list);
  let counter = 0;
  categoryInput.innerHTML = "";

  // Verificar se a lista está vazia

  const categoriesEmpty = Object.keys(list).every(
    (category) => list[category].length === 0
  );

  if (categoriesEmpty) {
    let emptyLi = document.createElement("li");
    emptyLi.textContent = "Sua sacola está vazia.";
    ul.appendChild(emptyLi);
    count.style.display = "none";
  }

  //LISTAR CATEGORIAS JÁ CADASTRADAS

  const listStorage = JSON.parse(localStorage.getItem("list")) || {};

  for (const category in listStorage) {
    if (listStorage.hasOwnProperty(category)) {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      categoryInput.appendChild(option);
    }
  }

  //FIM LISTAR CATEGORIAS JÁ CADASTRADAS

  for (let category in list) {
    let categoryItems = list[category];

    if (categoryItems.length > 0) {
      let categoryHeader = document.createElement("h2");
      categoryHeader.textContent = category;
      ul.appendChild(categoryHeader);

      categoryItems.forEach((item, index) => {
        counter += 1;
        let li = document.createElement("li");
        // li.innerHTML = item.value.replace(/\n/g, "<br>");
        li.innerHTML = `<span>${item.value.replace(
          /\n/g,
          "<br>"
        )}<br><br>Qtd: <b>${item.qtd + item.unid}</b></span>`;

        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" width="26px" height="26px" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="114.402" y="220.724" style="fill:#fdba74;" width="274.813" height="276.96"></rect> <g> <path style="fill:#c2410c;" d="M182.746,422.305c-7.905,0-14.313-6.409-14.313-14.313v-91.604c0-7.904,6.408-14.313,14.313-14.313 c7.905,0,14.313,6.409,14.313,14.313v91.604C197.06,415.895,190.652,422.305,182.746,422.305z"></path> <path style="fill:#c2410c;" d="M251.808,422.305c-7.905,0-14.313-6.409-14.313-14.313v-91.604c0-7.904,6.408-14.313,14.313-14.313 c7.905,0,14.313,6.409,14.313,14.313v91.604C266.121,415.895,259.713,422.305,251.808,422.305z"></path> <path style="fill:#c2410c;" d="M320.869,422.305c-7.905,0-14.313-6.409-14.313-14.313v-91.604c0-7.904,6.408-14.313,14.313-14.313 c7.905,0,14.313,6.409,14.313,14.313v91.604C335.182,415.895,328.774,422.305,320.869,422.305z"></path> <path style="fill:#c2410c;" d="M434.571,135.961c-8.435-13.251-21.524-22.423-36.856-25.828 c-7.712-1.722-15.362,3.152-17.076,10.869c-1.713,7.718,3.153,15.361,10.869,17.076c7.869,1.749,14.585,6.455,18.913,13.255 c4.328,6.8,5.75,14.879,4.002,22.748l-7.423,33.418L99.603,139.224l7.423-33.42c3.608-16.243,19.754-26.519,36.002-22.917 l145.2,32.249c7.713,1.713,15.361-3.153,17.076-10.869c1.713-7.718-3.153-15.361-10.869-17.076l-82.44-18.309l8.327-37.493 l122.96,27.308l-11.431,51.467c-1.713,7.718,3.153,15.361,10.869,17.076c1.045,0.232,2.088,0.344,3.116,0.344 c6.563,0,12.478-4.542,13.96-11.213l14.534-65.44c0.823-3.706,0.14-7.587-1.898-10.789c-2.038-3.202-5.266-5.463-8.972-6.286 L212.555,0.342c-7.713-1.709-15.362,3.152-17.076,10.869l-11.43,51.466l-34.815-7.732C117.579,47.909,86.11,67.948,79.079,99.6 l-10.526,47.391c-1.713,7.718,3.153,15.361,10.869,17.076l190.666,42.347H114.402c-7.905,0-14.313,6.409-14.313,14.313v276.96 c0,7.904,6.408,14.313,14.313,14.313h274.81c7.905,0,14.313-6.409,14.313-14.313V236.049l11.243,2.498 c1.026,0.229,2.067,0.341,3.103,0.341c2.701,0,5.37-0.764,7.686-2.239c3.202-2.038,5.463-5.266,6.288-8.972l10.526-47.391 C445.776,164.954,443.006,149.212,434.571,135.961z M374.9,483.374H128.716V235.04H374.9V483.374z"></path> </g> </g></svg>`;
        deleteBtn.addEventListener("click", () => {
          const confirmacao = confirm(
            `Tem certeza que deseja apagar este item? \n"${item.value}"`
          );
          if (confirmacao) {
            removerItem(category, index);
          }
        });

        li.appendChild(deleteBtn);
        ul.appendChild(li);
      });
    }
  }

  if (counter >= 1) {
    count.innerHTML =
      "Você possui  <b style='color: #15803d;'>" +
      counter +
      "</b> itens adicionados.";
    count.style.display = "block";
  } else {
    count.style.display = "none";
  }
};

const removerItem = (category, index) => {
  let listStorage = localStorage.getItem("list") || "{}";
  listStorage = JSON.parse(listStorage);

  let categoryItems = listStorage[category];
  categoryItems.splice(index, 1);

  localStorage.setItem("list", JSON.stringify(listStorage));

  let thisCat = categoryInput.value;
  listar();
  listarCategorias();
  categoryInput.value = thisCat;
};

const cadastrar = () => {
  if (
    input.value.trim() === "" ||
    categoryInput.value.trim() === "Sem categoria"
  ) {
    return;
  } else {
    let category = categoryInput.value.trim() || "Sem categoria";
    let qtd = qtd_input.value.trim() || 1;
    let unid = unidades.value.trim();

    let listStorage = localStorage.getItem("list") || "{}";
    listStorage = JSON.parse(listStorage);

    if (!listStorage.hasOwnProperty(category)) {
      listStorage[category] = [];
    }

    listStorage[category].push({
      value: input.value,
      qtd: qtd,
      unid: unid,
    });

    localStorage.setItem("list", JSON.stringify(listStorage));

    input.value = "";
    qtd_input.value = "";
    autoResize();
    listar();
    listarCategorias();
    categoryInput.value = category;
  }
};

const cadastrarCategoria = () => {
  if (catInput.value.trim() === "") {
    return;
  } else {
    let newCategory = catInput.value.trim();

    let listStorage = localStorage.getItem("list") || "{}";
    listStorage = JSON.parse(listStorage);

    if (!listStorage.hasOwnProperty(newCategory)) {
      listStorage[newCategory] = [];
    } else {
      alert("Categoria já adicionada.");
    }

    localStorage.setItem("list", JSON.stringify(listStorage));

    catInput.value = "";
    listar();
    listarCategorias();
  }
};

const listarCategorias = () => {
  ulCategories.innerHTML = "";
  let list = localStorage.getItem("list") || "{}";
  list = JSON.parse(list);
  let counter = 0;

  // Verificar se a lista está vazia
  if (Object.keys(list).length === 0) {
    let emptyLi = document.createElement("li");
    emptyLi.textContent = "Nenhuma categoria adicionada.";
    ulCategories.appendChild(emptyLi);
    catHeader.innerHTML = "Minhas Categorias";
    return;
  }

  for (const category in list) {
    if (list.hasOwnProperty(category)) {
      counter += 1;
      let li = document.createElement("li");
      li.innerHTML = category;

      let deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" width="26px" height="26px" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="114.402" y="220.724" style="fill:#fdba74;" width="274.813" height="276.96"></rect> <g> <path style="fill:#c2410c;" d="M182.746,422.305c-7.905,0-14.313-6.409-14.313-14.313v-91.604c0-7.904,6.408-14.313,14.313-14.313 c7.905,0,14.313,6.409,14.313,14.313v91.604C197.06,415.895,190.652,422.305,182.746,422.305z"></path> <path style="fill:#c2410c;" d="M251.808,422.305c-7.905,0-14.313-6.409-14.313-14.313v-91.604c0-7.904,6.408-14.313,14.313-14.313 c7.905,0,14.313,6.409,14.313,14.313v91.604C266.121,415.895,259.713,422.305,251.808,422.305z"></path> <path style="fill:#c2410c;" d="M320.869,422.305c-7.905,0-14.313-6.409-14.313-14.313v-91.604c0-7.904,6.408-14.313,14.313-14.313 c7.905,0,14.313,6.409,14.313,14.313v91.604C335.182,415.895,328.774,422.305,320.869,422.305z"></path> <path style="fill:#c2410c;" d="M434.571,135.961c-8.435-13.251-21.524-22.423-36.856-25.828 c-7.712-1.722-15.362,3.152-17.076,10.869c-1.713,7.718,3.153,15.361,10.869,17.076c7.869,1.749,14.585,6.455,18.913,13.255 c4.328,6.8,5.75,14.879,4.002,22.748l-7.423,33.418L99.603,139.224l7.423-33.42c3.608-16.243,19.754-26.519,36.002-22.917 l145.2,32.249c7.713,1.713,15.361-3.153,17.076-10.869c1.713-7.718-3.153-15.361-10.869-17.076l-82.44-18.309l8.327-37.493 l122.96,27.308l-11.431,51.467c-1.713,7.718,3.153,15.361,10.869,17.076c1.045,0.232,2.088,0.344,3.116,0.344 c6.563,0,12.478-4.542,13.96-11.213l14.534-65.44c0.823-3.706,0.14-7.587-1.898-10.789c-2.038-3.202-5.266-5.463-8.972-6.286 L212.555,0.342c-7.713-1.709-15.362,3.152-17.076,10.869l-11.43,51.466l-34.815-7.732C117.579,47.909,86.11,67.948,79.079,99.6 l-10.526,47.391c-1.713,7.718,3.153,15.361,10.869,17.076l190.666,42.347H114.402c-7.905,0-14.313,6.409-14.313,14.313v276.96 c0,7.904,6.408,14.313,14.313,14.313h274.81c7.905,0,14.313-6.409,14.313-14.313V236.049l11.243,2.498 c1.026,0.229,2.067,0.341,3.103,0.341c2.701,0,5.37-0.764,7.686-2.239c3.202-2.038,5.463-5.266,6.288-8.972l10.526-47.391 C445.776,164.954,443.006,149.212,434.571,135.961z M374.9,483.374H128.716V235.04H374.9V483.374z"></path> </g> </g></svg>`;
      deleteBtn.addEventListener("click", () => {
        const confirmacao = confirm(
          `Você tem certeza que deseja apagar esta categoria?\n"${category}"\n⚠️ Esta ação apagará todos os itens relacionados à esta categoria!`
        );
        if (confirmacao) {
          removerCategoria(category);
        }
      });

      li.appendChild(deleteBtn);
      ulCategories.appendChild(li);
    }
  }

  if (counter >= 1) {
    catHeader.innerHTML = "Minhas Categorias: " + counter;
  }
};

const removerCategoria = (category) => {
  let listStorage = localStorage.getItem("list") || "{}";
  listStorage = JSON.parse(listStorage);
  if (listStorage.hasOwnProperty(category)) {
    delete listStorage[category];
    localStorage.setItem("list", JSON.stringify(listStorage));
  }
  listar();
  listarCategorias();
};

btn.addEventListener("click", cadastrar);

catConfirm.addEventListener("click", cadastrarCategoria);

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && event.ctrlKey) {
    cadastrar();
  }
});

catInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    cadastrarCategoria();
  }
});

clear.addEventListener("click", () => {
  let dataToDel = localStorage.getItem("list");

  let dataToDelCats = JSON.parse(dataToDel);

  let catEmpty = Object.keys(dataToDelCats).every(
    (category) => dataToDelCats[category].length === 0
  );

  if (
    dataToDel &&
    Object.keys(JSON.parse(dataToDel)).length !== 0 &&
    !catEmpty
  ) {
    const confirmacao = confirm(
      "Você tem certeza que deseja apagar todos os itens?"
    );
    if (confirmacao) {
      clearStorage = JSON.parse(localStorage.getItem("list"));
      for (const categoria in clearStorage) {
        if (clearStorage.hasOwnProperty(categoria)) {
          clearStorage[categoria] = [];
        }
      }
      localStorage.setItem("list", JSON.stringify(clearStorage));
      let thisCat = categoryInput.value;
      listar();
      listarCategorias();
      categoryInput.value = thisCat;
    }
  } else {
    alert("Nenhum item a ser apagado.");
  }
});

wpp.addEventListener("click", () => {
  let localStorageData = localStorage.getItem("list");

  if (
    localStorageData &&
    Object.keys(JSON.parse(localStorageData)).length !== 0
  ) {
    let dataObject = JSON.parse(localStorageData);

    let dataAtual = new Date();

    let dia = dataAtual.getDate();
    let mes = dataAtual.getMonth() + 1;
    let ano = dataAtual.getFullYear();
    let dataFormatada = `${dia}/${mes}/${ano}`;

    // Filtra as categorias não vazias
    let categoriasNaoVazias = Object.keys(dataObject).filter(
      (category) => dataObject[category].length > 0
    );

    // Cria a mensagem a ser enviada no WhatsApp apenas para categorias não vazias
    let message = "";
    message += `―――――――――――――――――` + "\n";
    message += `         _*🥕   SacolApp   🍅*_` + "\n";
    message += `―――――――――――――――――` + "\n";
    message += "\n";
    message += `🛒 *Meu pedido [${dataFormatada}]*` + "\n";
    message += "\n";
    categoriasNaoVazias.forEach((category) => {
      message += `*${category}*` + "\n";
      let items = dataObject[category];
      items.forEach(function (item) {
        message += "• " + item.value + " - " + item.qtd + item.unid + "\n";
      });
      message += "\n";
    });

    if (categoriasNaoVazias.length > 0) {
      $("#wl-wpp").prop("disabled", true);
      $("#wl-wpp").text("Enviando...");
      $.ajax({
        type: "POST",
        url: "https://sacolapp.cashiers.com.br/controllers/pedidos/create",
        data: { message: message, pedidoInput: $("#wl-pedido-input").val() },
        success: function (response) {
          // Codifica a mensagem para ser usada no link do WhatsApp
          let encodedMessage = encodeURIComponent(message);
          let phoneNumber = "5534998395367";
          // Cria o link do WhatsApp com a mensagem
          let whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

          // Redireciona o usuário para o WhatsApp
          pedidoInput.value = "";
          pedidoModalArea.style.display = "none";
          labelCat.style.zIndex = "1";
          wpp.disabled = true;
          $("#wl-wpp").html(
            '<svg id="fill-svg" height="26px" width="26px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000">' +
              '<g id="SVGRepo_bgCarrier" stroke-width="0"></g>' +
              '<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>' +
              '<g id="SVGRepo_iconCarrier">' +
              '<path style="fill:#128c7e;" d="M255.999,512c-25.934,0-51.961-4.332-77.361-12.875c-7.966-2.68-12.251-11.309-9.571-19.274 c2.678-7.966,11.305-12.254,19.274-9.571c22.267,7.49,45.03,11.286,67.659,11.286c124.377,0,225.565-102.089,225.565-227.572 c0.002-123.271-101.637-223.56-226.568-223.56c-123.823,0-224.563,100.289-224.563,223.56c0,43.274,11.989,85.16,34.672,121.139 l5.913,8.87c2.442,3.666,3.179,8.211,2.015,12.46l-16.162,59.025l60.92-15.584c8.144-2.086,16.43,2.829,18.514,10.97 c2.083,8.143-2.829,16.431-10.97,18.514l-86.28,22.072c-5.253,1.344-10.821-0.208-14.622-4.074s-5.259-9.459-3.827-14.687 l21.243-77.585l-2.173-3.259c-0.068-0.103-0.137-0.208-0.204-0.315C13.65,350.655,0,303.091,0,253.994 c0-68.07,26.535-131.939,74.717-179.841C122.813,26.334,186.837,0,254.996,0c68.356,0,132.71,26.173,181.205,73.699 C485.081,121.6,512,185.63,512,253.992c0,68.482-26.824,133.176-75.532,182.162C387.837,485.064,323.745,512,255.999,512z"></path>' +
              '<path style="fill:#a7fff5;" d="M399.217,353.076l4.634-15.273c1.482-4.351-0.274-10.09-4.532-12.685l-67.288-38.073 c-4.258-2.593-9.905-1.948-13.609,2.217l-30.747,33.223c-2.407,2.036-5.833,2.867-9.072,1.478 c-11.254-5.064-35.944-16.411-54.297-34.765l0.003-0.003c-0.254-0.25-0.501-0.501-0.753-0.75c-0.25-0.253-0.501-0.499-0.75-0.753 l-0.003,0.003c-19.138-19.138-29.702-43.043-34.765-54.297c-1.389-3.24-0.558-6.665,1.478-9.072l33.223-30.747 c4.165-3.704,4.81-9.352,2.217-13.609l-38.073-67.288c-2.593-4.258-8.334-6.014-12.685-4.532l-15.273,4.634 c-16.384,4.728-31.099,16.026-39.795,32.415c-10.545,21.018-14.054,45.922-2.564,76.283c19.287,51.196,45.82,86.259,66.758,107.196 c20.937,20.937,56,47.469,107.196,66.758c30.361,11.49,55.263,7.981,76.283-2.564C383.19,384.175,394.489,369.46,399.217,353.076z"></path>' +
              '<path style="fill:#128c7e;" d="M326.998,417.787c-0.002,0-0.003,0-0.005,0c-13.54,0-27.625-2.733-41.862-8.121 c-56.146-21.153-92.209-49.867-112.57-70.229c-20.362-20.36-49.076-56.423-70.237-112.592c-11.749-31.04-10.673-60.813,3.203-88.47 c0.052-0.103,0.105-0.207,0.158-0.309c10.239-19.298,28.062-33.826,48.91-39.873l14.993-4.55c2.503-0.817,5.142-1.231,7.847-1.231 c9.2,0,17.798,4.732,22.439,12.35c0.085,0.14,0.167,0.282,0.25,0.425l37.978,67.12c6.274,10.571,4.141,24.171-5.117,32.519 l-29.022,26.858c5.2,11.338,14.549,30.101,29.36,45.012c0.119,0.114,0.236,0.228,0.35,0.347l1.28,1.28 c0.117,0.114,0.233,0.231,0.347,0.35c14.476,14.369,34.119,24.297,45.021,29.354l26.85-29.013 c5.002-5.548,12.058-8.725,19.388-8.725c4.62,0,9.153,1.246,13.131,3.608l67.12,37.978c0.143,0.081,0.285,0.164,0.425,0.25 c10.031,6.113,14.774,19.082,11.119,30.285l-4.55,14.995c-6.047,20.849-20.575,38.671-39.873,48.91 c-0.102,0.055-0.204,0.107-0.309,0.158C358.659,413.98,342.972,417.787,326.998,417.787z M132.651,152.183 c-9.966,19.968-10.573,40.877-1.853,63.911c20.27,53.803,48.35,86.887,63.286,101.823c14.935,14.935,48.02,43.017,101.801,63.278 c10.804,4.089,21.264,6.158,31.111,6.158h0.003c11.294,0,22.03-2.617,32.818-8.004c12.012-6.426,21.039-17.53,24.779-30.492 c0.02-0.067,0.038-0.134,0.059-0.199l3.717-12.25l-60.938-34.48l-28.59,30.893c-0.421,0.455-0.87,0.884-1.344,1.284 c-4.395,3.714-9.928,5.761-15.584,5.761c-3.209,0-6.342-0.645-9.313-1.919c-0.082-0.035-0.163-0.072-0.245-0.108 c-10.407-4.682-38.053-17.121-58.813-37.883c-0.078-0.078-0.154-0.155-0.228-0.234l-0.457-0.453 c-0.043-0.043-0.087-0.087-0.129-0.129l-0.453-0.457c-0.079-0.075-0.157-0.152-0.234-0.228 c-20.782-20.782-32.152-46.069-37.616-58.222l-0.266-0.592c-0.037-0.082-0.072-0.163-0.108-0.245 c-3.573-8.33-2.1-17.869,3.844-24.898c0.4-0.473,0.829-0.921,1.283-1.342l30.893-28.59l-34.48-60.938l-12.25,3.717 c-0.065,0.02-0.132,0.04-0.199,0.059C150.181,131.144,139.077,140.169,132.651,152.183z">' +
              "</path>" +
              "</g>" +
              "</svg> Enviar para nosso WhatsApp"
          );
          window.open(whatsappLink, "_blank");
        },
      });
    } else {
      alert("Nenhum pedido a ser compartilhado.");
    }
  } else {
    alert("Nenhum pedido a ser compartilhado.");
  }
});

catModalBtn.addEventListener("click", () => {
  catModalArea.style.display = "flex";
  labelCat.style.zIndex = "0";
});

catModalCloseBtn.addEventListener("click", () => {
  catModalArea.style.display = "none";
  labelCat.style.zIndex = "1";
});

bkp.addEventListener("click", () => {
  let dataToExport = localStorage.getItem("list");

  if (dataToExport && Object.keys(JSON.parse(dataToExport)).length !== 0) {
    const blob = new Blob([dataToExport], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "backup_sacolao.json";
    a.click();
    URL.revokeObjectURL(url);
    setTimeout(() => {
      bkpModalArea.style.display = "none";
      alert("Backup exportado com sucesso!");
    }, 1000);
  } else {
    alert("Nenhum item a ser exportado.");
  }
});

bkpInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const importedData = JSON.parse(e.target.result);
      if (importedData) {
        localStorage.setItem("list", JSON.stringify(importedData));
        listar();
        listarCategorias();
        bkpInput.value = "";
        alert("Backup importado com sucesso!");
        bkpModalArea.style.display = "none";
      } else {
        console.error("Inválido.");
      }
    };
    reader.readAsText(file);
  }
});

bkpModalBtn.addEventListener("click", () => {
  bkpModalArea.style.display = "flex";
  labelCat.style.zIndex = "0";
});

bkpModalCloseBtn.addEventListener("click", () => {
  bkpModalArea.style.display = "none";
  labelCat.style.zIndex = "1";
});

pedidoModalBtn.addEventListener("click", () => {
  pedidoModalArea.style.display = "flex";
  labelCat.style.zIndex = "0";
});

pedidoModalCloseBtn.addEventListener("click", () => {
  pedidoModalArea.style.display = "none";
  labelCat.style.zIndex = "1";
});

function autoResize() {
  input.style.height = "auto";
  input.style.height = input.scrollHeight + "px";
}

listar();
listarCategorias();

$("#wl-pedido-input")
  .mask("(00) 00000-0000")
  .on("input", function () {
    // Remova os caracteres de formatação da máscara para obter apenas os dígitos
    var numericValue = $(this).cleanVal();

    // Verifique se o valor possui a quantidade correta de dígitos
    if (numericValue.length === 11) {
      // Ajuste conforme necessário
      // Remova o atributo 'disabled' do botão
      $("#wl-wpp").removeAttr("disabled");
    } else {
      // Adicione o atributo 'disabled' ao botão se não estiver de acordo
      $("#wl-wpp").attr("disabled", "disabled");
    }
  });
