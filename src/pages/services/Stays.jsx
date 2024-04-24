import React from 'react'
import { useToast } from '@/components/ui/use-toast'
const Stays = () => {
  const toast = useToast()
  return (
    <div>
      <button onClick={() => toast({
        description: "Your message has been sent.",
      })
      }>
        click
      </button>
    </div>
  )
}

export default Stays