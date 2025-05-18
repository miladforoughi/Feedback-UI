import PropTypes from 'prop-types'

const Header = ({
  headerText = 'Feedback UI',
  bgColor = 'rgba(0,0,0,0.4)',
  textColor = '#ff6a95',
}) => {
  return (
    <header
      style={{
        color: textColor,
        backgroundColor: bgColor,
      }}
    >
      <div className='container'>
        <h2>{headerText}</h2>
      </div>
    </header>
  )
}

Header.propTypes = {
  headerText: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
}

export default Header
