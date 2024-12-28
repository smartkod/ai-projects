import React from 'react';
    import { useSpring, animated } from 'react-spring';

    const seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    function SeasonAndMonths() {
      const [currentSeason, setCurrentSeason] = React.useState(0);
      const [currentMonth, setCurrentMonth] = React.useState(0);

      const seasonSpring = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        config: { duration: 500 }
      });

      const monthSpring = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        config: { duration: 500 }
      });

      const nextSeason = () => {
        setCurrentSeason((currentSeason + 1) % seasons.length);
      };

      const nextMonth = () => {
        setCurrentMonth((currentMonth + 1) % months.length);
      };

      return (
        <div>
          <h1>Seasons and Months</h1>
          <animated.div style={seasonSpring}>
            <h2>Current Season: {seasons[currentSeason]}</h2>
            <button onClick={nextSeason}>Next Season</button>
          </animated.div>
          <animated.div style={monthSpring}>
            <h2>Current Month: {months[currentMonth]}</h2>
            <button onClick={nextMonth}>Next Month</button>
          </animated.div>
        </div>
      );
    }

    export default SeasonAndMonths;
