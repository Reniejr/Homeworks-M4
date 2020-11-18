import React from 'react'

export default function MyBadge({category}) {
    let theme = '' 
    switch(category){
        case 'fantasy':
            theme='#1565b1';
        break;
        case 'history':
            theme='#ee710a';
        break;
        case 'horror':
            theme='#354855';
        break;
        case 'romance':
            theme='#da2037';
        break;
        case 'scifi':
            theme='#86929c';
        break;
        default: break;

    }
    return (
        <div className='badge' style={{backgroundColor: theme}}>
            <p>{category}</p>
        </div>
    )
}
