import React from 'react';

function HomePage({ onStartJourney }) {
  return (
    <main style={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '4rem 2rem',
      textAlign: 'center'
    }}>
      {/* Hero Section */}
      <div style={{
        maxWidth: '800px',
        marginBottom: '3rem'
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '1rem',
          textShadow: '0 4px 8px rgba(0,0,0,0.3)'
        }}>
          Your Digital Fishing Logbook
        </h1>
        <p style={{
          fontSize: '1.3rem',
          color: 'rgba(255, 255, 255, 0.9)',
          marginBottom: '2rem',
          lineHeight: '1.6'
        }}>
          Track every catch, remember every adventure, and build your fishing legacy with FishVault.
        </p>
        <button 
          style={{
            background: 'linear-gradient(45deg, #ff6b6b, #ee5a6f)',
            color: 'white',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: '50px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 12px 35px rgba(0,0,0,0.3)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
          }}
          onClick={onStartJourney}
        >
          Start Your Journey
        </button>
      </div>

      {/* Features Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        width: '100%'
      }}>
        {[
          { icon: '📝', title: 'Log Your Catches', desc: 'Record species, weight, length, location, and personal notes for every fish you catch.' },
          { icon: '📊', title: 'Track Your Progress', desc: 'View detailed statistics and filter your catch history to see your fishing evolution.' },
          { icon: '🗺️', title: 'Remember Locations', desc: 'Keep track of your favorite fishing spots and when they were most productive.' },
          { icon: '🔒', title: 'Secure & Private', desc: 'Your fishing data is protected with secure authentication and encrypted storage.' },
          { icon: '📱', title: 'Easy to Use', desc: 'Clean, intuitive interface designed specifically for anglers by anglers.' },
          { icon: '🎯', title: 'Set Goals', desc: 'Track personal bests and set fishing goals to keep improving your skills.' }
        ].map((feature, index) => (
          <div key={index} style={{
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{feature.icon}</div>
            <h3 style={{ 
              color: 'white', 
              fontSize: '1.4rem', 
              marginBottom: '0.5rem',
              fontWeight: 'bold'
            }}>
              {feature.title}
            </h3>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.8)', 
              lineHeight: '1.5',
              fontSize: '1rem'
            }}>
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default HomePage;