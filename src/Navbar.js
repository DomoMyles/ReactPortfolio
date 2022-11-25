import React from 'react'

export default funciton Navbar()
const path = window.location.pathname
return (<nav className="nav">
    <a href="/" className="site-title">SiteName</a>
    <ul>
        <CustomLink>Pricing</CustomLink>
        <CustomLink>about</CustomLink>
    </ul>
</nav>
)

function CustomLink({ href, children, ...props }) {
    return (
        <li>
            <a href={href}>{children}</a>
        </li>
    )

}