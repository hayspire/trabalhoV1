const modal = document.querySelector('.Mcontainer')
const tbody = document.querySelector('tbody')
const nome = document.querySelector('#m-modelo')
const marca = document.querySelector('#m-marca')
const tipo = document.querySelector('#m-tipo')
const qtd = document.querySelector('#m-quantidade')
const cond = document.querySelector('#m-condicao')
const dif = document.querySelector('#m-diferencial')
const btnSalvar = document.querySelector('#btnsalvar')

let itens
let id

function abreM(edit = false, index = 0) {
    modal.classList.add('active')
  
    modal.onclick = e => {
      if (e.target.className.indexOf('Mcontainer') !== -1) {
        modal.classList.remove('active')
      }
    }
  
    if (edit) {
      nome.value = itens[index].nome
      marca.value = itens[index].marca
      tipo.value = itens[index].tipo
      qtd.value = itens[index].qtd
      cond.value = itens[index].cond
      dif.value = itens[index].dif
      id = index
    } else {
      nome.value = ''
      marca.value = ''
      tipo.value = ''
      qtd.value = ''
      cond.value = ''
      dif.value = ''
    }
    
  }
  
  function editItem(index) {
  
    abreM(true, index)
  }const modal = document.querySelector('.M-container')
const tbody = document.querySelector('tbody')
const modelo = document.querySelector('#m-modelo')
const marca = document.querySelector('#m-marca')
const tipo = document.querySelector('#m-tipo')
const qtd = document.querySelector('#m-quantidade')
const cond = document.querySelector('#m-condicao')
const dif = document.querySelector('#m-diferencial')
const btnSalvar = document.querySelector('#btnsalvar')

let itens
let id



function abreM(edit = false, index = 0) {
    modal.classList.add('active')
  
    modal.onclick = e => {
      if (e.target.classnovo.indexOf('M-container') !== -1) {
        modal.classList.remove('active')
      }
    }
  
    if (edit) {
      modelo.value = itens[index].modelo
      marca.value = itens[index].marca
      tipo.value = itens[index].tipo
      qtd.value = itens[index].qtd
      cond.value = itens[index].cond
      dif.value = itens[index].dif
      id = index
    } else {
      modelo.value = ''
      marca.value = ''
      tipo.value = ''
      qtd.value = ''
      cond.value = ''
      dif.value = ''
    }
    
  }
  
  function editItem(index) {
  
    abreM(true, index)
  }
  
  function deleteItem(index) {
    itens.splice(index, 1)
    setItensBD()
    loadItens()
  }

  function insertItem(item, index) {
    let tr = document.createElement('tr')
  
    tr.innerHTML = `
      <td>${item.modelo}</td>
      <td>${item.marca}</td>
      <td> ${item.tipo}</td>
      <td> ${item.quantidade}</td>
      <td> ${item.condicao}</td>
      <td> ${item.diferencial}</td>
      <td class="acao">
        <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
      </td>
      <td class="acao">
        <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
      </td>
    `
    tbody.appendChild(tr)
  }
  
  btnSalvar.onclick = e => {
    
    if (modelo.value == '' || marca.value == '' || tipo.value == '') {
      return
    }
  
    e.preventDefault();
  
    if (id !== undefined) {
      itens[id].modelo = modelo.value
      itens[id].marca = marca.value
      itens[id].tipo = tipo.value
      itens[id].qtd = qtd.value
      itens[id].dif = dif.value
      itens[id].cond = cond.value

    } else {
      itens.push({'modelo': modelo.value, 'marca': marca.value, 'tipo': tipo.value, 'qtd': qtd.value, 'dif': dif.value, 'cond': cond.value})
    }
  
    setItensBD()
  
    modal.classList.remove('active')
    loadItens()
    id = undefined
  }
  
  function loadItens() {
    itens = getItensBD()
    tbody.innerHTML = ''
    itens.forEach((item, index) => {
      insertItem(item, index)
    })
  
  }
  
  const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
  const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))
  
  loadItens()
  
  function deleteItem(index) {
    itens.splice(index, 1)
    setItensBD()
    loadItens()
  }
  
  function insertItem(item, index) {
    let tr = document.createElement('tr')
  
    tr.innerHTML = `
      <td>${item.modelo}</td>
      <td>${item.marca}</td>
      <td> ${item.tipo}</td>
      <td> ${item.quantidade}</td>
      <td> ${item.condicao}</td>
      <td> ${item.diferencial}</td>
      <td class="acao">
        <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
      </td>
      <td class="acao">
        <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
      </td>
    `
    tbody.appendChild(tr)
  }
  
  btnSalvar.onclick = e => {
    
    if (nome.value == '' || marca.value == '' || tipo.value == '') {
      return
    }
  
    e.preventDefault();
  
    if (id !== undefined) {
      itens[id].nome = nome.value
      itens[id].marca = marca.value
      itens[id].tipo = tipo.value
      itens[id].qtd = qtd.value
      itens[id].dif = dif.value
      itens[id].cond = cond.value

    } else {
      itens.push({'nome': nome.value, 'marca': marca.value, 'tipo': tipo.value, 'qtd': qtd.value, 'dif': dif.value, 'cond': cond.value})
    }
  
    setItensBD()
  
    modal.classList.remove('active')
    loadItens()
    id = undefined
  }
  
  function loadItens() {
    itens = getItensBD()
    tbody.innerHTML = ''
    itens.forEach((item, index) => {
      insertItem(item, index)
    })
  
  }
  
  const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
  const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))
  
  loadItens()
