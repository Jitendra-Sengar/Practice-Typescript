type PersonList={
    person:{
        first:string,
        last:string
    }[]
}
const PersonList = (props:PersonList) => {
  return (
    <>
      <h2>Person List</h2>
      {props.person.map((name)=>{
        return(
            <h2 key={name.first}>{name.first}{name.last}</h2>
        )
      })}
    </>
  )
}

export default PersonList
