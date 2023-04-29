import React from 'react';

const ProgressBar = ({ currentStep, totalSteps }) => {
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;
  return (
    <div>
      <div className='progress-container'>
        <div style={{backgroundColor: `${'#' + '0e3047'}`,height: '4px',width: `${progress}%`,}} className='progressBar'></div>
        <div className={ `circle ${currentStep === 1 ? 'activate' : 'activate'}`}>1</div>
        <div className={ `circle ${currentStep >= 2 ? 'activate' : 'none'}`}>2</div>
        <div className={ `circle ${currentStep >= 3 ? 'activate' : 'none'}`}>3</div>
      </div>
    </div>
  );
};

export default ProgressBar;