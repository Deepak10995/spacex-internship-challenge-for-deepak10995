import React from 'react';
import a from '../../assets/images/logo/a.png';
import c from '../../assets/images/logo/c.png';
import eBottom from '../../assets/images/logo/e_bottom.png';
import eTop from '../../assets/images/logo/e_top.png';
import p from '../../assets/images/logo/p.png';
import s from '../../assets/images/logo/s.png';
import XBottomRight from '../../assets/images/logo/x_bottom_right.png';
import xCenter from '../../assets/images/logo/x_center.png';
import xTopLeft from '../../assets/images/logo/x_top_left.png';

function Logo() {
  return (
    <div className='parentImage'>
      <img className='s_logo' src={s} alt='S'></img>
      <img className='p_logo' src={p} alt='P'></img>
      <img className='a_logo' src={a} alt='A'></img>
      <img className='c_logo' src={c} alt='C'></img>
      <img className='eTop_logo' src={eTop} alt='E TOP'></img>
      <img className='eBottom_logo' src={eBottom} alt='E Bottom'></img>
      <img className='x_top_left_logo' src={xTopLeft} alt='X Top Left'></img>
      <img className='x_center_logo' src={xCenter} alt='X Center'></img>
      <img
        className='x_bottom_right_logo'
        src={XBottomRight}
        alt='X Bottom Right'></img>
    </div>
  );
}

export default Logo;
