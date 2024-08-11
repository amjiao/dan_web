
/**const left = document.querySelector('.fa-solid')

left.addEventListener('click', (e) => {
  console.log('left')
})*/

const collapsible = document.querySelector('.collapsible')
let open = false

collapsible.addEventListener('click', (e) => {
  if(open === false){
    console.log('clicked')
    document.querySelector('.collapse-content').style.display="block";
    document.querySelector('.collapsible').innerHTML="Show Less"
    open = true
  }else{
    document.querySelector('.collapse-content').style.display="none";
    document.querySelector('.collapsible').innerHTML="Show More"
    open = false
  }
})

