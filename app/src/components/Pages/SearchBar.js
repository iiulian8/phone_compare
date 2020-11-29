import React, { useContext } from 'react';
import { useState, useEffect, createContext } from 'react';
import * as supplier_photos from '../../pics/suppliersPics/export_supp';
import * as phone_photos from '../../pics/phonePics/export_phones';
import { contextBasket } from '../Contexts/Basket';

function SearchBar() {
    const [search_field, setSearch] = useState('')
    const [radios, setRadio] = useState('lprice');
    const [phone_arr, setPArr] = useState([]);
    const [display_phones, setDArr] = useState([]);
    const [basket, updateBasket] = useContext(contextBasket);
    
    useEffect(() => {
        function getObjects() {
            fetch('http://localhost/comparison_project/api/fetch_objects.php')
                .then(response => response.json())
                .then(data => setPArr([...data])
                )
        }
        getObjects();

    }, [])

    

    function matchPhones(e) {
        e.preventDefault();
        setDArr([]);

        if (search_field !== '') {
            phone_arr.filter(phone => {
                const phone_fname = phone.phone_name + " " + phone.phone_model;

                if (phone_fname.toLowerCase().includes(search_field.toLowerCase())) {
                    return setDArr(prev => {
                        prev.push(phone)
                        return prev;
                    })
                }
            })

            switch (radios) {
                case 'lprice':

                    setDArr(prev =>
                        prev.sort((a, b) => (a.phone_price > b.phone_price) ? 1 : -1)
                    )
                    break;

                case 'hprice':
                    setDArr(prev => {
                        prev.sort((a, b) => (a.phone_price < b.phone_price) ? 1 : -1)
                        return prev;
                    })

                    break;

                case 'rating':
                    setDArr(prev => {
                        prev.sort((a, b) => (a.phone_rating < b.phone_rating) ? 1 : -1)
                        return prev;
                    })

                    break;
            }

        }

        setSearch('');
    }

    function createPDisplay() {
        let phonepic;
        let supplierpic;


        return display_phones.map(phone => {

            switch (phone.phone_name.toLowerCase()) {
                case 'iphone':
                    phonepic = phone_photos.iphone;
                    break;

                case 'huawei':
                    phonepic = phone_photos.huawei;
                    break;

                case 'samsung':
                    phonepic = phone_photos.samsung;
                    break;

            }


            switch (phone.supp_name.toLowerCase()) {
                case 'carphone warehouse':
                    supplierpic = supplier_photos.carphone;
                    break;

                case 'currys pc world':
                    supplierpic = supplier_photos.currys;
                    break;

                case 'argos':
                    supplierpic = supplier_photos.argos;
                    break

                case 'vodafone':
                    supplierpic = supplier_photos.vodafone;
                    break;

                case 'three':
                    supplierpic = supplier_photos.three;
                    break;

                case 'o2':
                    supplierpic = supplier_photos.o2;
                    break;

                case 'ee':
                    supplierpic = supplier_photos.ee;
                    break;

                case 'tesco mobile':
                    supplierpic = supplier_photos.tesco;
                    break;

                case 'sky mobile':
                    supplierpic = supplier_photos.sky;
                    break;

                case 'virgin media':
                    supplierpic = supplier_photos.virgin;
                    break;
            }

            return (
                <div class="phone">
                    <div class="item phonepic">
                        <img src={phonepic} />
                    </div>
                    <div class="item phonedetails">
                        <p>Brand:{phone.phone_name}</p>
                        <p>Model:{phone.phone_model}</p>
                        <p>Storage:{phone.phone_memory}</p>
                        <p>Camera:{phone.phone_camera}</p>
                    </div>
                    <div class="item supplierpic">
                        <img src={supplierpic}></img>
                    </div>
                    <div class="item phoneprice">
                        <h3>{phone.phone_rating}/5 Stars Rating</h3>
                        <h3>£{phone.phone_price}</h3>
                        <button type='button' className='cta' onClick={() => updateBasket(prev => [...prev, phone])}>Add to basket</button>

                    </div>
                </div>
            )
        }
        )
    }

    return (
        <div id='compare-container'>

            <div className="filters">
                <div className="searchbar">
                    <input type="text" id="searchbar" value={search_field} placeholder="Search smartphone..." onChange={(e) => setSearch(e.target.value)}></input>
                    <button type='button' id="searchbutton" value="submit" className="fa fa-search" onClick={(e) => matchPhones(e)}></button>
                </div>

                <div className="radio-container">
                    <label>
                        <input type="radio" name='r-button' checked={radios === 'lprice'} value={'lprice'} onChange={(e) => setRadio(e.target.value)} />
                        <span>Sort by price(Low to High)</span>
                    </label>
                    <label>
                        <input type="radio" name='r-button' checked={radios === 'hprice'} value={'hprice'} onChange={(e) => setRadio(e.target.value)} />
                        <span>Sort by price(High to Low)</span>
                    </label>
                    <label>
                        <input type="radio" name='r-button' checked={radios === 'rating'} value={'rating'} onChange={(e) => setRadio(e.target.value)} />
                        <span>Sort by customer rating</span>
                    </label>

                </div>
            </div>
            <div className="phones-container">
                {createPDisplay()}
                
            </div>

        </div>
    )
}

export default SearchBar;