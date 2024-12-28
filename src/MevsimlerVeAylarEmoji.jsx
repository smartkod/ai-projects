import React from 'react';
    import { useSpring, animated } from 'react-spring';

    const mevsimler = {
      Kış: ['Aralık', 'Ocak', 'Şubat'],
      İlkbahar: ['Mart', 'Nisan', 'Mayıs'],
      Yaz: ['Haziran', 'Temmuz', 'Ağustos'],
      Sonbahar: ['Eylül', 'Ekim', 'Kasım']
    };

    const emojiMevsim = {
      Kış: '☃️',
      İlkbahar: '🌸',
      Yaz: '🌞',
      Sonbahar: '🍂'
    };

    function MevsimlerVeAylarEmoji() {
      const [currentSeason, setCurrentSeason] = React.useState('Kış');

      const seasonSpring = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        config: { duration: 500 }
      });

      const nextSeason = () => {
        const seasons = Object.keys(mevsimler);
        setCurrentSeason(seasons[(seasons.indexOf(currentSeason) + 1) % seasons.length]);
      };

      return (
        <div>
          <h1 style={{ color: 'blue' }}>Mevsimler ve Aylar Emoji Uygulaması</h1>
          <animated.div style={seasonSpring}>
            <h2 style={{ color: 'green' }}>Şu Anki Mevsim: {currentSeason} {emojiMevsim[currentSeason]}</h2>
            <ul style={{ paddingLeft: '20px' }}>
              {mevsimler[currentSeason].map((ay, index) => (
                <li key={index} style={{ color: 'orange' }}>{ay}</li>
              ))}
            </ul>
            <button style={{ backgroundColor: 'yellow' }} onClick={nextSeason}>Sonraki Mevsim</button>
          </animated.div>
        </div>
      );
    }

    export default MevsimlerVeAylarEmoji;
