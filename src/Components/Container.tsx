import {Details} from "./Details";

export const Container = () => {
    return (
        <div>
            <div className="container">
                <img src="/images/planets/earth.png" alt="earth"/>

                <div className="content">
                    <div className="description">
                        <h1>Earth</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolor dolorum eaque eum
                            facere fuga fugiat illum inventore ipsam iste natus obcaecati porro quae repellat saepe
                            temporibus, veritatis. Alias aliquid amet blanditiis corporis dolor, dolorum eius enim fuga

                        </p>
                        <a href="#">Source: <span>Wikipedia</span><i className="fas fa-share-square"/></a>
                    </div>

                    <div className="buttons" id="buttons">
                        <a href="#">Overview</a>
                        <a href="#">Structure</a>
                        <a href="#">Surface</a>
                    </div>
                </div>
            </div>
        </div>
    )
}


/*
<div className="buttons">
    <a href="#">Overview</a>
    <a href="#">Structure</a>
    <a href="#">Surface</a>
</div>*/
