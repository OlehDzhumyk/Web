import React, {useEffect, useState} from "react";
import "./catalog.css";
import Item from "../../components/toys/item";
import axios from "axios";
import Loader from "../../components/loader/Loader";


function Catalog() {

    const [medicaments, setMedicaments] = useState([{id: 1, name: 'Not found', price: 0, image: '', description: ''}])
    useEffect(() => {
        axios.get('http://localhost:8080/catalog')
            .then(res => setMedicaments(res.data))
    }, []);

    const [value, setValue] = useState('')

    const filteredItems = medicaments.filter(item => {
        return item.name.toLowerCase().includes(value.toLowerCase())
    })

    const [loading, setloading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setloading(false)
        }, 500)
    }, [])


    return (
        <>
            {loading ? <Loader/> :
                <main-content>
                    <aside>
                        <div className="searchSec">
                            <input type="text" id="search" placeholder="Search..."
                                   onChange={(event) => setValue(event.target.value)}/>
                        </div>
                        <h2>Sort by:</h2>
                        <div className="sortCat">
                            <ul>
                                <li><a href="/sortedCatalogByName">name</a></li>
                                <li><a href="/sortedCatalogByPrice">price</a></li>
                            </ul>
                        </div>
                    </aside>
                    <div className="main-chapter">
                        {
                            filteredItems.map((item, index) => {
                                return (
                                    <Item item={item} key={index}/>
                                )
                            })
                        }
                    </div>
                </main-content>
            }
        </>
    )
}

export default Catalog;
