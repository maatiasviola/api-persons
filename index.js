const { response } = require('express')
require('dotenv').config()
const express=require('express')
const morgan=require('morgan')
const app=express()
const cors = require('cors')
app.use(express.static('build'))
app.use(cors())
app.use(express.json())

const Person = require('./models/person')


app.get('/api/persons',(request,response,next)=>{
  Person.find({})
  .then(persons=>{
    response.json(persons)
  })
  .catch(err=>next(err))
})   

app.get('/info',(request,response,next)=>{
  Person.find({})
  .then(result=>{
    let cantidadPersons=result.length
    let date=new Date().toJSON()
    response.send(
    `<p>Phonebook has entries for ${cantidadPersons} people
        <p>${date}</p>
        </p>`
    )})
    .catch(error=>next(error))
})   

app.get('/api/persons/:id',(request,response,next)=>{
  const id=request.params.id
  Person.findById(id)
  .then(person => {
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
  })
  .catch(error => next(error))
  
}) 

app.delete('/api/persons/:id',(request,response,next)=>{
  const id=request.params.id
  Person.findByIdAndRemove(id)
  .then(
    response.status(204).end()
  )
  .catch(error => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body
  
  const person = {
    name: body.name,
    number: body.number,
  }

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})


morgan.token('data', function(req, res) {
  return JSON.stringify(req.body)
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))

app.post('/api/persons',(request,response,next)=>{

  const body=request.body

  if (body.name===undefined || body.number===undefined){
    return response.status(400).json({
      error:'Content missing'
    })
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  })

  person.save()
  .then(result => {
    console.log("Resulttttt")
    response.json(result)
  })
  .catch(error => {
    console.log(error)
    next(error)
  })
})


const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

app.use(errorHandler)


const PORT = process.env.PORT 
app.listen(PORT,()=>{
  console.log(`Server running on PORT ${PORT}`)
})    