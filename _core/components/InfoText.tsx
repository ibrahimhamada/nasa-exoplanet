const InfoText = () => (
    <div>
        <h2>Exploring the Universe with NASA Exovision</h2>
        <p>
            NASA Exovision was born out of the excitement and innovation of the NASA Space Apps Challenge, a global
            hackathon that brings together bright minds to tackle real-world space challenges. Inspired by NASA’s
            ongoing missions and the boundless mysteries of the cosmos, our team set out to create an interactive,
            educational game that puts space exploration at your fingertips.
        </p>
        <br />
        <p>
            In Exovision, you’re not just exploring familiar planets within our solar system—you’re venturing far
            beyond, to distant worlds that NASA and astronomers have only recently begun to uncover. Get ready to chart
            your course through some of the most exciting exoplanets discovered to date. Here are just a few of the
            fascinating destinations waiting for you:
        </p>
        <br />

        <div style={{ margin: '0 40px' }}>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                {' '}
                {/* Ensure bullets are shown */}
                <li>
                    <h3>51 Pegasi b: The First Discovered Exoplanet</h3>
                    <p>
                        In 1995, astronomers made a groundbreaking discovery: 51 Pegasi b, the first planet ever found
                        orbiting a sun-like star outside our solar system. Known as a “hot Jupiter,” this gas giant
                        orbits extremely close to its star, making it scorchingly hot and wildly different from any
                        planets in our system. While it might not be habitable, its discovery opened the door to finding
                        countless other exoplanets.
                    </p>
                </li>
                <li>
                    <h3>Epsilon Eridani b: A Neighboring Gas Giant</h3>
                    <p>
                        One of the closest known exoplanets, Epsilon Eridani b is a gas giant located just 10.5
                        light-years away in the constellation Eridanus. Discovered in 2000, it orbits its star in a path
                        similar to Jupiter’s, making it a fascinating target for scientists looking for solar systems
                        like ours. It’s surrounded by a dust disk, hinting at the possibility of even more planets
                        within its system.
                    </p>
                </li>
            </ul>
        </div>

        <br />

        <p>
            In Exovision, you’ll visit 51 Pegasi b, Epsilon Eridani b and many other planets, learning how astronomers
            study nearby exoplanets and the potential for more hidden worlds in our galactic neighborhood.
        </p>
        <br />

        <h2>Chart Your Own Course</h2>
        <p>
            These are just a few of the destinations waiting for you in the game. As you continue your journey, you’ll
            uncover more distant exoplanets, each with its own mysteries and wonders. From scorching gas giants to
            potentially habitable super-Earths, the universe is full of worlds to explore—and it’s all within your
            reach.
        </p>

        <p>Ready to start your interstellar journey? The stars are waiting for you.</p>
    </div>
);

export default InfoText;
