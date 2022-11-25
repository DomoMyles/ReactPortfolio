import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
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
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })//end true only workd for a single /pricing not /priing/name/ect (if add more del end: true)
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )

}
