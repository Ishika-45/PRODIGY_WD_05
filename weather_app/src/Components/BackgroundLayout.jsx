import React, {useState} from 'react'
import { useStateContext } from '../Context'

const BackgroundLayout = () => {
  const { weather } = useStateContext()
  const [image, setImage] = useState(Clear)

  return (
    <div>
      BackgroundLayout
    </div>
  )
}
export default BackgroundLayout
 