import React from 'react'
import '../assets/styles/hamperstyles.css'
import HAMP from '../assets/hamp.png'
import LIGHT from '../assets/light.png'
import SMALL from '../assets/small-tree.png'
import TREE from '../assets/tree-book.png'

const HamperCard = () => {

  return (
    <div className='container-fluid hamperContainer'>
       
       <div className="row containerRow g-3">
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="HamperBox">
                <div className="mx-2 hampimageContainer">
                    <img src={HAMP} className="hampImage" />
                </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="HamperBox">
                <div className="mx-2 hampimageContainer">
                    <img src={HAMP} className="hampImage" />
                </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="HamperBox">
                <div className="mx-2 hampimageContainer">
                    <img src={HAMP} className="hampImage" />
                </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="HamperBox">
                <div className="mx-2 hampimageContainer">
                    <img src={HAMP} className="hampImage" />
                </div>
            </div>
          </div>
        <div className="d-flex justify-content-center align-items-center my-4">
            <button className="d-flex justify-content-center align-items-center odrButton px-4 py-1">
                Order Now
            </button>
        </div>
        <div className="lightContainer">
            <img src={LIGHT} alt="Light Decoration" />
        </div>

        {/* Small Tree Decoration */}
        <div className="chrContainer">
            <img src={SMALL} alt="Small Tree" />
        </div>

        {/* Tree Container */}
        <div className="treeContainer">
            <img src={TREE} alt="Tree Book" />
        </div>

      
      </div>    
    </div>
  )
}

export default HamperCard