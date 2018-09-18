var formInputs = document.querySelector('.form-inputs')
var inputTitle = document.querySelector('.input-title')
var inputBody = document.querySelector('.input-body')
var submitButton = document.querySelector('.submit-button')
var searchBar = document.querySelector('.search-bar')
var ideasContainer = document.querySelector('.ideas-container')
var deleteButton = document.querySelector('.delete-button')
var upVoteButton = document.querySelector('.upvote-button')
var downVoteButton = document.querySelector('.downvote-button')
var quality = document.querySelector('h4')

submitButton.addEventListener('click', handleSubmit)
ideasContainer.addEventListener('click', handleButtons)

function handleSubmit(event){
  event.preventDefault()
  var newElement = document.createElement('article')
  newElement.innerHTML = (`
    <h2 id=${Date.now()}>${inputTitle.value}</h2>
    <button name='delete' class='delete-button'></button>
    <p>${inputBody.value}</p>
    <button name='upvote' class='upvote-button'></button>
    <button name='downvote' class='downvote-button'></button>
    <h3>quality: <h4>swill</h4></h3>
  `)
  ideasContainer.append(newElement)
}

function handleButtons(event){
  var { name, parentNode } = event.target
  if(name === 'delete') {
    deleteCard(event)
  }
  if(name === 'upvote') {
    upvoteCard(parentNode)
  }
  if(name === 'downvote') {
    downvoteCard(parentNode)
  }
}

function deleteCard(event) {
  event.target.parentNode.remove()
}

function upvoteCard(node) {
  var qualityText = node.children[6]
  if(qualityText.innerText === 'swill') {
    qualityText.innerText = 'plausible'
  }
  else if(qualityText.innerText ==='plausible') {
    qualityText.innerText = 'genius'
  }
  else if(qualityText.innerText === 'genius') {
    qualityText.innerText = 'genius'
  }
}

function downvoteCard(node) {
  var qualityText = node.children[6]
  if(qualityText.innerText === 'genius') {
    qualityText.innerText = 'plausible'
  }
  else if(qualityText.innerText ==='plausible') {
    qualityText.innerText = 'swill'
  }
  else if(qualityText.innerText === 'swill') {
    qualityText.innerText = 'swill'
  }
}















