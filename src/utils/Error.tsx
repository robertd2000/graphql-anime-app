type ErrorType = {
  error: any
}

export const Error: React.FC<ErrorType> = ({ error }) => {
  return (
    <div>
      <h2 style={{ color: 'white' }}> {error.message}</h2>
    </div>
  )
}
