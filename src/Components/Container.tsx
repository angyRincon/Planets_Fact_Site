import {Details} from "./Details";

export const Container = () => {
    return (
        <>
            <section className="container">
                <div className="image mover-img">
                    <img src="/images/planets/earth.png" alt=""/>
                </div>

                <div className="content">
                    <div className="description">
                        <h1>Earth</h1>
                        <p className="description-text">
                            Third planet from the Sun and the only astronomical object known to harbor and
                            support life. About 29.2% of Earth's surface is land consisting of continents and islands.
                            The remaining 70.8% is covered with water, mostly by oceans, seas, gulfs, and other
                            salt-water
                            bodies, but also by lakes, rivers, and other freshwater, which together constitute the
                            hydrosphere.
                        </p>
                        <p className="description-source">
                            Source:
                            <a href="https://en.wikipedia.org/wiki/Earth" target="_blank">
                                Wikipedia
                                <i className="fas fa-share-square"/>
                            </a>
                        </p>
                    </div>

                    <div className="buttons">
                        <a href="#" className="active"><span>01</span> Overview</a>
                        <a href="#"><span>02</span> Internal Structure</a>
                        <a href="#"><span>03</span> Surface Geology</a>
                    </div>
                </div>
            </section>

            <Details/>
        </>
    )
}