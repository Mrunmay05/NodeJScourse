const chalk=require('chalk')
const fs=require('fs')

function getNotes(a){
    return a
}

const addnote=function(title,body){
    const notes=loadnotes()
    const duplicatenotes=notes.filter(function(note){
           return note.title==title
    })
    if(duplicatenotes.length==0){
        notes.push({
            title:title,
            body:body,
        })
        savenotes(notes)
        console.log(chalk.red('new note added'))
    }
    else{
        console.log('note title taken!')
    }
   
    
}

const removenote=function(title){
    const notes=loadnotes()
    const notetokeep=notes.filter(function(note){
        return note.title!==title
    })
    if(notes.length>notetokeep.length)
    {
        console.log(chalk.green('title removed!'))
    }
    savenotes(notetokeep)
}

const savenotes=function(notes){
     const datajson=JSON.stringify(notes)
     fs.writeFileSync('notes.json',datajson) 
}

const loadnotes=function(){
    try{
        const databuffer=fs.readFileSync('notes.json')
        const dataJSON=databuffer.toString()
        return JSON.parse(dataJSON)   
    }catch(e){
       return []
    }
      
}

module.exports={
    getNotes: getNotes,
    addnote:addnote,
    removenote:removenote
}