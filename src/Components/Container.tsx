import {Details} from "./Details";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import planets from '../Planets.json'

interface IPropsParams {
    planet: string
}


export const Container = () => {
    const {planet}: IPropsParams = useParams()

    const [data, setData] = useState<any>(planets[2])

    const handleChangeOptions = (value: number) => {
        const planetFound = planets.find(p => p.name === planet)
        setData(planetFound)
        switch (value) {
            case 1:
                return setData(planetFound)
            case 2:
                return setData({...planetFound, image: planetFound.imageInside})
        }
    }

    useEffect(() => {
        const planetFound = planets.find(p => p.name === planet)
        setData(planetFound)
    }, [planet])

    return (
        <>
            <div>
                <div className="buttons-mobile" id="buttons">
                    <a href="#">Overview</a>
                    <a href="#">Structure</a>
                    <a href="#">Geology</a>
                </div>

                <div className="container">

                    <img className="mover-img" src={data.image} alt={data.name}/>

                    <div className="content">
                        <div className="description">
                            <h1>{data.name}</h1>
                            <p>{data.description} </p>
                            <a href="#">Source: <span>Wikipedia</span><i className="fas fa-share-square"/></a>
                        </div>

                        <div className="buttons" id="buttons">
                            <a onClick={() => handleChangeOptions(1)}>01 <span>Overview</span></a>
                            <a onClick={() => handleChangeOptions(2)}>02 <span>Internal Structure</span></a>
                            <a onClick={() => handleChangeOptions(3)}>03 <span>Surface Geology</span></a>
                        </div>
                    </div>
                </div>
            </div>

            <Details planet={data}/>
        </>
    )
}
