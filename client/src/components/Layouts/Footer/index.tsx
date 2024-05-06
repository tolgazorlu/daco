const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-300 text-base-content">
            <aside>
                <span className="font-bandal text-4xl text-primary">
                    dacospace
                </span>
                <p>Copyright © 2024 - All right reserved</p>
                <a href="/policy" className="underline hover:text-info">
                    Privacy Policy
                </a>
                <a href="/terms" className="underline hover:text-info ">
                    Terms and Conditions
                </a>
            </aside>
        </footer>
    );
};

export default Footer;
