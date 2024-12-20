type StatusProps={
    status:'error' | 'success' | 'loading'
}

const Status = (props:StatusProps) => {
    let message;
    if(props.status==='success'){
        message='Success'
    }else if(props.status==='loading'){
        message='Loading...'
    }else if(props.status==='error'){
        message='error'
    }
  return (
    <>
      <h2>Status-{message}</h2>
    </>
  )
}

export default Status
