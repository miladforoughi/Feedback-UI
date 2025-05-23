import { FaQuestion } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'

function AboutIconLink() {
  const location = useLocation()
  console.log(location)
  return (
    <div className='about-link'>
      <Link
        to={{
          pathname: '/about',
          search: '?sort=name',
          hash: '#hello',
        }}
      >
        <FaQuestion size={30} />
      </Link>
    </div>
  )
}

export default AboutIconLink
