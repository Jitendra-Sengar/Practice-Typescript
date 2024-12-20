import './App.css'
import Button from './components/Button'
import Greet from './components/Greet'
import Heading from './components/Heading'
import Input from './components/Input'
import Oscar from './components/Oscar'
import Person from './components/Person'
import PersonList from './components/PersonList'
import Status from './components/Status'

const App = () => {
  const names={
    first:'Ramu',
    last:'Mera beta'
  }
  const personList=[
    {
      first:'Ramu',
      last:'Kaka'
    },
    {
      first:'Shyamu',
      last:'Sundar'
    }
  ]
  return (
    <>
      <Greet name='vishwas'  isLoggedin={true}/>
      <Person name={names}/>
      <PersonList person={personList}/>
      <Status status='error'/>
      <Heading>
        Pranjal is a Good Boy.
      </Heading>
      <Oscar>
        <Heading>Tiwari is a bad boy.</Heading>
      </Oscar>
      <Button handleClick={(event,id)=>console.log("Button is clicked",event,id)}/>
      <Input value='' handleChange={(event)=>console.log(event)}/>
    </>
  )
}

export default App
