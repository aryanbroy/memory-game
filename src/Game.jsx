import { useEffect, useState } from "react"
import './style.css'

export default function Game() {

    // const [gifUrls, setgifUrls] = useState([]);

    // const key = "BRYl43fr2qhxfiFmnPgDe6u4a3Sl3i3I";
    // const limit = 5;

    // useEffect(() => {
    //     fetch(`https://api.giphy.com/v1/gifs/search?q=cat&api_key=${key}&limit=${limit}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             const urls = data.data.map((gif) => gif.images.original.url);
    //             setgifUrls(urls)
    //         })
    // }, [])


    const image1 = './images/car1.jpg'
    const image2 = './images/car2.jpg'
    const image3 = './images/car3.jpg'
    const image4 = './images/car4.jpg'
    const image5 = './images/car5.jpg'

    const imagesObj = [{ image: image1, name: "Merc"}, {image: image2 , name: "Mustang"}, {image: image3, name: "Rolls"}, {image: image4, name: "BMW"}, {image: image5, name: "BMW"}]
    const [shuffledImages, setShuffledImages] = useState([]);
    const [count, setCount] = useState(0);
    const [maxCount, setMaxCount] = useState(0);

    useEffect(() => {
        const shuffled = [...imagesObj].sort(() => Math.random() - 0.5);
        setShuffledImages(shuffled);
    }, []);


    const [imagesClicked, setImagesClicked] = useState([]);

    const handleClick = (e) => {
        console.log(e.target.src)
        if (imagesClicked.includes(e.target.src)) {
            setCount(0)
            setImagesClicked([])
        }
        else {
            setImagesClicked([...imagesClicked, e.target.src])
            setCount((c) => c + 1);
        }
        const shuffled = [...shuffledImages].sort(() => Math.random() - 0.5);
        setShuffledImages(shuffled);
    }

    if (count > maxCount) {
        setMaxCount(count)
    }

    return (
        <>
            <h1 className="head">Memory Game</h1>
            <h1 className="theme">Cars Edition</h1>
            <div className="container">
                <div className="inside-container">
                    <div className="countings">
                        <h1 className="count">Count: {count}</h1>
                        <h1 className="count">Max Count: {maxCount}</h1>
                    </div>
                    
                    <div className="card-items">
                    {shuffledImages.map((image, index) => (
                        <div key = {index} className="card" onClick={handleClick}>
                            <img
                            src={image.image}
                            alt={`Image ${index + 1}`}
                            />
                            <p className="card-para">{image.name}</p>
                        </div>
                    ))}
                    </div>
                    
                </div>
            </div>
        </>
    )
}