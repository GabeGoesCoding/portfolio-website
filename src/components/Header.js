export default function Header() {
    return (
    <section class="header">
        <nav>
            <div class="nav-links" id="navLinks">
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/home/#aboutMe">About Me</a></li>
                    <li><a href="" target="_blank">Resume</a></li>
                    <li><a href="/portfolio">Portfolio</a></li>
                    <li><a href="" target="_blank">GitHub</a></li>
                    <li><a href="" target="_blank">LinkedIn</a></li>
                </ul>
            </div>

            {/* <div class="personal-links" id="personalLinks">
                <ul>
                    <li><a href="" target="_blank">GitHub</a></li>
                    <li><a href="" target="_blank">LinkedIn</a></li>
                </ul>
            </div> */}

        </nav>
    </section>
    )
}