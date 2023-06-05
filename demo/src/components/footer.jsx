function Footer() {
    return <footer className="page-footer blue">
        <div className="footer-copyright">
            <div className="container">
                {new Date().getFullYear()}
                _made by Andrew Ustyukhin
                <a className="grey-text text-lighten-4 right"
                href="#!">Link</a>
            </div>
        </div>
    </footer>
}
export {Footer};