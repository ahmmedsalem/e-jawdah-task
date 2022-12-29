import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deleteRecord } from '../../redux/commercialsSlice';

import { AnimatePresence, motion } from "framer-motion";
import "./CommercialList.scss"


const CommercialList = () => {

    const dispatch = useDispatch();

    const recordsItems = useSelector((state) => state.records.items);

    return ( 
      <>
      {recordsItems.length > 0 && 
        <AnimatePresence>
          {
          recordsItems.map(item =>
            <motion.div 
              key={item.id}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              className="col-6"
            >
              <div className="record-card p-15 py-20 mt-10 mb-5">
                <div className="record-card__header d-flex">
                  <p className="text-white">
                    الاسم التجاري الكامل
                  </p>
                  <button 
                    className="record-card__button text-white mt-0 p-0" 
                    onClick={() => dispatch(deleteRecord({ id: item.id }))}
                  >
                    حذف
                    <i className="bi bi-x-lg m-5"></i>
                  </button>
                </div>
                <h5 className="record-card__content text-white">
                  {item.commercialType} {item.commercialName} {item.commercialTypeFor}
                </h5>
              </div>
            </motion.div>
          )
        }
        </AnimatePresence>
        }
        </>
     );
}
 
export default CommercialList;