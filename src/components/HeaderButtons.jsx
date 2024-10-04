import React from 'react'
import LinkButton from './LinkButton'

const HeaderButtons = () => {
    return (
        <header className="App-header">
            <LinkButton
                to='/'
                text='Home'
                textProps={{
                    fontSize: 20
                }}
            />
            <LinkButton
                to='/quiz'
                text='Restart'
                textProps={{
                    fontSize: 20
                }}
            />
        </header>
    )
}

export default HeaderButtons