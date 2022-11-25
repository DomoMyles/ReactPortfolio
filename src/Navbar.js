import React from 'react'
import { Link, useRouteMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    const path = window.location.pathname
    return (<nav className="nav">
        <Link to="/" className="site-title">SiteName</Link>
        <ul>
            <CustomLink to="/profile">Pricing</CustomLink>
            <CustomLink to="/about">about</CustomLink>
        </ul>
    </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = usematch({ path: resolvedPath.pathname, end: true })//end true only workd for a single /pricing not /priing/name/ect (if add more del end: true)
    return (
        <li className={path === to ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )

}
