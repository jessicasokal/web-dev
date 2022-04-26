import React, {useState} from "react";
import {useDispatch}
    from "react-redux";
import { createTuit } from '../../../actions/tuits-actions';

const WhatsHappening = () => {
    //let [whatsHappening, setWhatsHappening]
     //   = useState('');
    const dispatch = useDispatch();
  //  const tuitClickHandler = () => {
   ////     dispatch({type: 'create-tuit',
   //         tuit: whatsHappening
   //     });
  //  }

    const [newTuit, setNewTuit] =
        useState({tuit: 'New tuit', postedBy: {userName: 'jessica'}});

    return (
        <div className={'row'}>
            <div className={'d-none d-sm-block col-sm-1'}>
                <img className='wd-who-to-follow-pictures' alt='qwe' src={'../../../images/tesla.jpeg'}/>
            </div>
            <div className={'d-none d-sm-block col-sm-11'}>
               <textarea placeholder="What's Happening?" className={'form-control wd-whats-happening'}
                 onChange={(e) =>
                     setNewTuit({...newTuit,
                         tuit: e.target.value
                     })}>
                </textarea>
            </div>
            <div className={'row pt-3 pb-4'}>
                <div className={'d-none d-sm-block col-sm-3'}>
                    <div className={'d-flex justify-content-between wd-blue'}>
                        <i className="fa-solid fa-image"></i>
                        <i className="fa-solid fa-chart-area"></i>
                        <i className="fa-regular fa-face-smile"></i>
                        <i className="fa-regular fa-calendar"></i>
                    </div>
                </div>
                <div className={'d-none d-sm-block col-sm-8'}>

                </div>
                <div className={'d-none d-sm-block col-sm-1'}>
                    <button className='btn btn-primary btn-block rounded-pill' onClick={() =>
                        createTuit(dispatch, newTuit)}>
                        <div className={'wd-tweet-button'}>Tuit</div>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default WhatsHappening;