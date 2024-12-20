import {Name} from '../PropsPerson'
const Person = (props:Name) => {
  return (
    <>
      <h2>Welcome {props.name.first} {props.name.last} </h2>
    </>
  )
}

export default Person
