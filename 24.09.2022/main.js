const result = document.getElementById('result')


function initNumbers(){
    const numFirst = document.getElementById('first_number').value
    const numSecond = document.getElementById('second_number').value

    return {
        first: Number(numFirst),
        second: Number(numSecond)
    }

}

function renderResult(res){
    result.textContent = res
}


function sumNum(){
    const tmp = initNumbers().first + initNumbers().second
    renderResult(tmp)
}