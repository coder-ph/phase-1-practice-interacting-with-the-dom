//Counter
const counter = document.getElementById('counter')
let mycounter = 0;
let isPaused = false;
setInterval(()=> {
    if(!isPaused)
    mycounter ++
    counter.textContent = mycounter
},1500)

//minus
 const minusButton = document.getElementById('minus')
 minusButton.addEventListener('click', function(){
    mycounter = `${mycounter - 1}`
 })

//Addition
const addButton = document.getElementById('plus')
 addButton.addEventListener('click', function(){
    mycounter = `${mycounter + 1}`
 })

 const heartButton = document.getElementById('heart')
 heartButton.addEventListener('click',function heartClick () {

    const mylikes = document.getElementsByClassName('likes')[0]
    const listLikes = document.createElement('li')
    
    listLikes.textContent = `${mycounter} has been liked 1 time`
    //console.log(listLikes)
    mylikes.appendChild(listLikes)
 })

 // pause button
 const pauseButton = document.getElementById('pause')
 pauseButton.addEventListener('click', function(){
    isPaused = !isPaused
    pauseButton.textContent = isPaused? 'resume' : 'pause';

    document.querySelectorAll('#minus, #plus, #heart, #submit'). forEach(button =>{
        button.disabled = isPaused
    })
 })
 

//Adding Comments
const myform = document.querySelector('form')

myform.addEventListener('submit',function(e){
    e.preventDefault()

    const commentValue = e.target.commentinput.value
    submitComment(commentValue)
    myform.reset()
})

function submitComment(comment){
    const commentList = document.getElementById('list')
    
    const paragraph = document.createElement('p')
    paragraph.textContent = comment
    
    commentList.appendChild(paragraph)
}
