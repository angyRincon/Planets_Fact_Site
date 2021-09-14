import {Details} from "./Details";

export const Container = () => {
    return (
        <>
            <div>
                <div className="buttons-mobile" id="buttons">
                    <a href="#">Overview</a>
                    <a href="#">Structure</a>
                    <a href="#">Geology</a>
                </div>
                <div className="container">

                    <img className="mover-img" src="/images/planets/earth.png" alt="earth"/>

                    <div className="content">
                        <div className="description">
                            <h1>Earth</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolor dolorum eaque
                                eum
                                facere fuga fugiat illum inventore ipsam iste natus obcaecati porro quae repellat saepe
                                temporibus, veritatis. Alias aliquid amet blanditiis corporis dolor, dolorum eius enim
                                fuga
                            </p>
                            <a href="#">Source: <span>Wikipedia</span><i className="fas fa-share-square"/></a>
                        </div>

                        <div className="buttons" id="buttons">
                            <a href="#">01 <span>Overview</span></a>
                            <a href="#">02 <span>Internal Structure</span></a>
                            <a href="#">03 <span>Surface Geology</span></a>
                        </div>
                    </div>
                </div>
            </div>

            {/*<Details/>*/}
        </>
    )
}
// ab76e5e2-492d-4287-b211-0475c868dc80
// c2f89511-2259-4f5a-a03c-5d85d6b1d844

/*
<div className="buttons">
    <a href="#">Overview</a>
    <a href="#">Structure</a>
    <a href="#">Surface</a>
</div>*/
