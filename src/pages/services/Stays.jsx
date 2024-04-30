import React from 'react'
import { toast } from 'sonner'
const Stays = () => {
  const [open, setOpen] = React.useState(false)
  if (open === true) {
    var num = 3
    // toast('Your message has been sent.')
    console.log(num)
  }
  return (
    <div>
      <button onClick={() => setOpen(prev => !prev)}>Send</button>
    </div>
  )
}

export default Stays