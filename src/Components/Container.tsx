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
    const [selected, setIsSelected] = useState<number>(1)

    const handleChangeOptions = (value: number) => {
        const planetFound = planets.find(p => p.name === planet)
        setData(planetFound)
        setIsSelected(value)

        switch (value) {
            case 1:
                return setData(planetFound)
            case 2:
                return setData({
                    ...planetFound,
                    image: planetFound.imageInside,
                    description: planetFound.descriptionInside
                })
            case 3:
                return setData({
                    ...planetFound,
                    description: planetFound.descriptionSurface
                })
        }
    }

    useEffect(() => {
        const planetFound = planets.find(p => p.name === planet)
        setData(planetFound)
        setIsSelected(1)
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
                            <a href="#" id="1" className={selected === 1 ? 'active' : ""}
                               onClick={() => handleChangeOptions(1)}>01 <span>Overview</span></a>
                            <a href="#" id="2" className={selected === 2 ? 'active' : ""}
                               onClick={() => handleChangeOptions(2)}>02 <span>Internal Structure</span></a>
                            <a href="#" className={selected === 3 ? 'active' : ""}
                               onClick={() => handleChangeOptions(3)}>03 <span>Surface Geology</span></a>
                        </div>
                    </div>
                </div>
            </div>

            <Details planet={data}/>
        </>
    )
}
