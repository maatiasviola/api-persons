const { response } = require('express')
const express=require('express')
const morgan=require('morgan')
const app=express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

let persons=[
  { 
    'name': 'Arto Hellas', 
    'number': '040-123456',
    'id': 1
  },
  { 
    'name': 'Ada Lovelace', 
    'number': '39-44-5323523',
    'id': 2
  },
  { 
    'name': 'Dan Abramov', 
    'number': '12-43-234345',
    'id': 3
  },
  { 
    'name': 'Mary Poppendieck', 
    'number': '39-23-6423122',
    'id': 4
  }
]

app.get('/api/persons',(request,response)=>{
  response.json(persons)
})   

app.get('/info',(request,response)=>{
  let cantidadPersons=persons.length
  let date=new Date().toJSON()
  response.send(
    `<p>Phonebook has entries for ${cantidadPersons} people
        <p>${date}</p>
        </p>`
        
  )
})   

app.get('/api/persons/:id',(request,response)=>{
  const id=request.params.id
  const person=persons.find(person=>person.id===Number(id))
  if (person){
    response.json(person)
  }else{
    response.status(404).end()
  }
  
}) 

app.delete('/api/persons/:id',(request,response)=>{
  const id=request.params.id
  persons=persons.filter(person=>person.id!==Number(id))
  
  response.status(204).end()
})

morgan.token('data', function(req, res) {
  return JSON.stringify(req.body)
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))

app.post('/api/persons',(request,response)=>{

  const content=request.body
  
  if (!content.name){
    return response.status(400).json({
      error:'Name missing'
    })
  }else if (!content.number){
    return response.status(400).json({
      error:'Number missing'
    })
  }else if(persons.find(person=>person.name.toLowerCase()===content.name.toLowerCase())!==undefined){
    return response.status(400).json({
      error:'Name already in phonebook'
    })
  }

  const maxId=Math.max(...persons.map(person=>person.id))
  

  const newPerson={
    name:content.name,
    number:content.number,
    id:maxId+1
  }
  
  persons=persons.concat(newPerson)
  response.json(newPerson)
})


const PORT = process.env.PORT || 3001
app.listen(PORT,()=>{
  console.log(`Server running on PORT ${PORT}`)
})    