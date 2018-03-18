import React from 'react';

import Banner from './../Banner';
import Article from './../Article';

const Welcome = () => {
  return (
    <div>

      <Banner 
        backgroundImage="url(assets/img/bg-gift.jpg)"
        title="Latest Blog Posts"
        subTitle="Read and get updated on how we progress."
      />

      <main className="main-content bg-gray">
        <div className="row">
          <div className="col-12 col-lg-6 offset-lg-3">
            <Article />
            <hr/>
            <Article />
            <hr/>
            <Article />
            <hr/>
            <Article />    
            <hr/>        
          </div>
        </div>
      </main>
    </div>
  );
};

export default Welcome;
