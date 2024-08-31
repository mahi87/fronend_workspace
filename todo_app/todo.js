function add_todo(){
    let list = document.getElementById("pending_items")
    let input_text = document.getElementById("todo_input_text")
    list.innerHTML = `${list.innerHTML}\n <li onclick="done(event)">${input_text.value}</li>`
    input_text.value = ''
}
function done(event){
    let element = event.currentTarget
    let done_list = document.getElementById("done")
    done_list.innerHTML = `${done_list.innerHTML}\n <li onclick="move_back(event)"">${element.innerText}</li>`

    let pending_list = document.getElementById("pending_items")
    pending_list.innerHTML = pending_list.innerHTML.replace(element.outerHTML, "")
    
}
function move_back(event){
    let element = event.currentTarget
    let pending_list = document.getElementById("pending_items")
    pending_list.innerHTML = `${pending_list.innerHTML}\n <li onclick="done(event)">${element.innerText}</li>`

    let done_list = document.getElementById("done")
    done_list.innerHTML = done_list.innerHTML.replace(element.outerHTML, "")

}