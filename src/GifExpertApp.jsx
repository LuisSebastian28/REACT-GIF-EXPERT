import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;
        // categories.push('Valorant');
        // setCategories( [...categories, 'Valorant'] );
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GitExpertApp</h1>
            <AddCategory
                onNewCategory={onAddCategory}
            />

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category} />
                ))
            }

        </>
    )
}
