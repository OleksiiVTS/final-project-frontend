import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { ToolbarWrapper } from '.';

const CalendarToolbar = () =>
  // { onClickPrev, onClickNext, today }
  {
    const [
      // type,
      setType,
    ] = useState('month');
    const { pathname } = useLocation();

    useEffect(() => {
      if (pathname.includes('day')) {
        setType('day');
        return;
      }

      setType('month');
    }, [pathname]);

    return <ToolbarWrapper></ToolbarWrapper>;
  };

export default CalendarToolbar;
