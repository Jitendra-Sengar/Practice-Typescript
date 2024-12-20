type GreetProps={
    name:string,
    count?:number,
    isLoggedin:boolean
}

const Greet = (props:GreetProps) => {
    
  return (
    <>
      <h2>Greet Props</h2>
      {props.isLoggedin ? `Welcome ${props.name} You have ${props.count} points`: 'Welcome Guest'}
    </>
  )
}

export default Greet
