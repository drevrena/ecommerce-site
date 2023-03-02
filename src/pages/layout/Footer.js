import React from "react";
import "../../css/footer.css"

export default function Footer() {
    return (
        <footer>
            Copyright &#169; ShoppyWare 2023, Inc.
            <ul className="footer-links">
                <li ><a className="footer-link" href="/legal">Legal Stuff</a></li>
                <li><a className="footer-link" href="/privacy">Privacy Policy</a></li>
                <li><a className="footer-link" href="/contact">Contacts</a></li>
            </ul>
        </footer>
    )
}