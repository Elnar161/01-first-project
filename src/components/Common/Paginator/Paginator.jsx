import React from 'react';
import s from './Paginator.module.css';

let Paginator = ({totalCount, pageSize, currentPage, onPageChanged}) => {
        let pagesCount = Math.ceil(totalCount / pageSize);
        
        let arrPages = [];
        
        for (let i = 1; i <= pagesCount; i++) {
            let el = <span className={currentPage === i && s.selectedPage} 
                           onClick={(e) => { onPageChanged(i); }}>{i}</span>;
            arrPages.push(el);
        }

        return (                           
            <div>
                {arrPages}
            </div>
        );
}

export default Paginator;