const MyFooter = () => {
    return (
        <footer>
            <div className="row justify-content-center mt-5">
                <div className="col col-6">
                    <div className="row">
                        <div className="col mb-2">
                            <i className="bi bi-facebook footer-icon me-2" style={{ color: '#838383' }}></i>
                            <i className="bi bi-instagram footer-icon me-2" style={{ color: '#838383' }}></i>
                            <i className="bi bi-twitter-x footer-icon me-2" style={{ color: '#838383' }}></i>
                            <i className="bi bi-youtube footer-icon" style={{ color: '#838383' }}></i>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4">
                        <div className="col">
                            <div className="row">
                                <div className="col footer-links">
                                    <p><a href="#" style={{ color: '#838383', textDecoration: 'none' }}>Audio and Subtitles</a></p>
                                    <p><a href="#" style={{ color: '#838383', textDecoration: 'none' }}>Media Center</a></p>
                                    <p><a href="#" style={{ color: '#838383', textDecoration: 'none' }}>Privacy</a></p>
                                    <p><a href="#" style={{ color: '#838383', textDecoration: 'none' }}>Contact us</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col footer-links">
                                    <p><a href="#" style={{ color: '#838383', textDecoration: 'none' }}>Audio Description</a></p>
                                    <p><a href="#" style={{ color: '#838383', textDecoration: 'none' }}>Investor Relations</a></p>
                                    <p><a href="#" style={{ color: '#838383', textDecoration: 'none' }}>Legal Notices</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col footer-links">
                                    <p><a href="#" style={{ color: '#838383', textDecoration: 'none' }}>Help Center</a></p>
                                    <p><a href="#" style={{ color: '#838383', textDecoration: 'none' }}>Jobs</a></p>
                                    <p><a href="#" style={{ color: '#838383', textDecoration: 'none' }}>Cookie Preferences</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col footer-links">
                                    <p><a href="#" style={{ color: '#838383', textDecoration: 'none' }}>Gift Cards</a></p>
                                    <p><a href="#" style={{ color: '#838383', textDecoration: 'none' }}>Terms of Use</a></p>
                                    <p><a href="#" style={{ color: '#838383', textDecoration: 'none' }}>Corporate Information</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mb-2">
                            <button type="button" className="btn btn-sm footer-button rounded-0 mt-3" style={{ color: '#838383', borderColor: '#838383' }}>
                                Service Code
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mb-2 mt-2 copyright" style={{ color: '#838383', fontSize: '0.6em' }}>
                            © 1997-2023 Netflix, Inc.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default MyFooter