import React from "react";

export default function Footer() {
    return (
        <footer>
            <div className="contact-social">
                <div className="social">
                    <h2>Nous suivre</h2>
                    <div className="social-links">
                        <a href="https://www.facebook.com/profile.php?id=100094132932723">Page Facebook</a>
                        <a href="https://www.instagram.com/chessbar33/">Page Instagram</a>
                    </div>
                </div>
                <div className="contact">
                    <h2>Contact</h2>
                    <p>contact@chessbar.fr</p>
                </div>
            </div>
            <div className="copyright">
                <p>© 2024 Chess Bar. All rights reserved.</p>
            </div>
        </footer>
    )
}