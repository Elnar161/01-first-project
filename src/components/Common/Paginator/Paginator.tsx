import React from 'react';
import { useState } from 'react';
import styles from './Paginator.module.css';
import cn from 'classnames';

type PropsType = {
    totalCount: number
    pageSize: number 
    currentPageNumber: number
    portionSize?: number 
    onPageChanged: (pageNumber: number) => void  
}

let Paginator: React.FC<PropsType> = ({totalCount, pageSize, currentPageNumber, 
                                   onPageChanged, portionSize = 10}) => {
       
    debugger;
    let pagesCount = Math.ceil(totalCount / pageSize);
        
        let pages: Array<number> = [];
        
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        let portionCount = Math.ceil(pagesCount/portionSize);
        let [portionNumber, setPortionNumber] = useState(1);
        let lefrPositionPageNumber = (portionNumber - 1) * portionSize + 1;
        let  rightPortionPageNumber = portionNumber * portionSize;


        return (                           
            <div>
                { portionNumber > 1 && 
                  <button onClick={() => {setPortionNumber(portionNumber - 1)}}>prev</button>}

                {
                    pages.filter((p) => (p>=lefrPositionPageNumber) && (p<=rightPortionPageNumber))
                         .map((p) => {return <span  className={cn({[styles.selectedPage]: currentPageNumber === p}, styles.pageNumber)}
                         onClick={(e) => { onPageChanged(p); }}>{p}</span>})
                }


                { portionCount > portionNumber &&
                  <button onClick={() => {setPortionNumber(portionNumber + 1)}}>next</button> }
            </div>
        );
}

export default Paginator;