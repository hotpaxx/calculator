
const users = [
    {
        content: 'Frontend Misha',
        id: 'fe',
        relations: ['pm', 'be', 'ds']
    },
    {
        content: 'Design Pasha',
        id: 'ds',
        relations: ['pm', 'fe']
    },
    {
        content: 'Project Manager Sanya',
        id: 'pm',
        relations: ['ba', 'fe', 'be', 'ds']
    },
    {
        content: 'Backend Grisha',
        id: 'be',
        relations: ['pm', 'fe', 'ba']
    },
    {
        content: 'Business Analyst Sveta',
        id: 'ba',
        relations: ['pm']
    }
]
const app = document.getElementById('app')
const renderList = () => {


    for(const item of users){
        
        let div = document.createElement('div')
        div.id = item.id
        div.className = "block"
        div.textContent = `${item.content}`
        app.appendChild(div)

        div.addEventListener(`click`,()=>{
            
            inFocus(item)
        })

    }
    const inFocus = (item) => {
        const clickTag = document.getElementById(item.id)
        if(clickTag.classList.contains('focus')){
            resetList()
        }else{
            resetList()
            clickTag.classList.add('focus')
            enableRelations(item.relations)
        }

        
    }
    const enableRelations = (rel) =>{
        for(const itemRel of rel){
            const enableTag = document.getElementById(itemRel)
            enableTag.classList.add('enable')
        }
    }
    const resetList = () =>{
        for(item of users){
            const tag = document.getElementById(item.id)
            tag.classList.remove('focus','enable')
        }
    }

}


renderList()
// for(let i = 0; i < users.length; i++){
//     let div = document.createElement('div')
//     div.id = users[i].id
//     div.addEventListener('click',()=>{
//         console.log(users[i].relations)
//     })
//     div.textContent = `${i+1}. ${users[i].content}`
//     app.appendChild(div)
//     div.addEventListener('click',()=>{
//         document.getElementById(users[i].id).style.color = 'red'
//     })
    
// }



/*const listUser = ['dfdfdfd','asasasasasa','ghghghghghg']
for(let i = 0; i < listUser.length; i++){
    let div = document.createElement('div')
    div.addEventListener('click',()=>{
        console.log(listUser[i])
    })
    div.textContent = `${i+1}. ${listUser[i]}`
    app.appendChild(div)
}
/*const app = document.getElementById('app')
app.addEventListener('click',()=>{
    app.className = 'fcolor'
})*/