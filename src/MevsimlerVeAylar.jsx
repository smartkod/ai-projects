import React from 'react';
    import { useSpring, animated } from 'react-spring';

    const mevsimler = ['Kış', 'İlkbahar', 'Yaz', 'Sonbahar'];
    const aylar = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];

    function MevsimlerVeAylar() {
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
        setCurrentSeason((currentSeason + 1) % mevsimler.length);
      };

      const nextMonth = () => {
        setCurrentMonth((currentMonth + 1) % aylar.length);
      };

      return (
        <div>
          <h1 style={{ color: 'blue' }}>Mevsimler ve Aylar</h1>
          <animated.div style={seasonSpring}>
            <h2 style={{ color: 'green' }}>Şu Anki Mevsim: {mevsimler[currentSeason]}</h2>
            <button style={{ backgroundColor: 'yellow' }} onClick={nextSeason}>Sonraki Mevsim</button>
          </animated.div>
          <animated.div style={monthSpring}>
            <h2 style={{ color: 'orange' }}>Şu Anki Ay: {aylar[currentMonth]}</h2>
            <button style={{ backgroundColor: 'pink' }} onClick={nextMonth}>Sonraki Ay</button>
          </animated.div>
        </div>
      );
    }

    export default MevsimlerVeAylar;
