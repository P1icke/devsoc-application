let currentTheme = 'day';

const themes = {
  day: {
    '--background-color': '#ffffff',
    '--text-color': '#000000',
    '--accent-color': '#007BFF'
  },
  night: {
    '--background-color': '#1e1e1e',
    '--text-color': '#ffffff',
    '--accent-color': '#f1dc19'
  } 
}

const pageContents = {
  day: `
  <nav class="navbar">
    <div class="nav-content">
      <h2 class="nav-title">Richard Ma</h2>
      <div class="toggle-wrapper">
        <span class="toggle-hint">click me →</span>
        <button class="theme-toggle" title="Toggle theme">☀️</button>
      </div>
    </div>
  </nav>
  
  <div class="container">
    <header>
      <h1>About Me</h1>
    </header>
    
    <main>
      <section class="about">
        <h2>Hello!</h2>
        <p>My name is Richard Ma. I'm a third year computer science student at UNSW majoring in Artificial Intelligence. 
          Most of my university courses are focused around algorithms and machine learning, so I am
          applying to the DevSoc training program in hopes of building upon my web development skills
          and gaining more experience working in a group.</p>
      </section>
      
      <section class="favourite-courses">
        <h2>My Favorite Uni Courses</h2>
        <ul>
          <li>COMP3821</li>
          <li>COMP3411</li>
          <li>COMP2511</li>
          <li>COMP1521</li>
        </ul>
      </section>

      <section class="favourite-courses">
        <h2>My Favorite Places in UNSW</h2>
        <ul>
          <li>Anzac Parade Lightrail platform, towards City</li>
          <li>High Street Lightrail platform, towards City</li>
          <li>Just kidding.</li>
          <li>But I'm gatekeeping my study spots so tough luck :p </li>
        </ul>
      </section>
      
    </main>
  </div>
`,
  night: `
  <nav class="navbar">
    <div class="nav-content">
      <h2 class="nav-title">Richard Ma</h2>
      <div class="toggle-wrapper">
        <span class="toggle-hint">click me →</span>
        <button class="theme-toggle" title="Toggle theme">🌙</button>
      </div>
    </div>
  </nav>
  
  <div class="container">
    <header>
      <h1>My Hobbies</h1>
      <p class="subtitle">What do I do in my spare time, on a typical night after uni?</p>
    </header>
    
    <main>
      <section class="music">
        <h2>Piano</h2>
        <p>I love listening to classical music, and I have a long list of piano pieces I wish to be able to play one day.
          The pieces I am currently working on are:</p>
        <ul>
          <li>Barcarolle Op. 60 - Frederic Chopin</li>
          <li>Sonata Op. 57 "Appasionata" - Ludwig van Beethoven</li>
          <li>Reminiscences de Norma - Franz Liszt</li>
          <li>Piano Concerto No. 2 - Sergei Rachmaninoff</li>
        </ul>
        <p>I find piano practice to be a very relaxing yet productive way to rest from my studies and destress,
          however I find myself easily losing track of time and spending hours each night at the piano. </p>
      </section>
      
      <section class="gaming">
        <h2>Computer Games</h2>
        <p>I enjoy playing games that are very challenging, either mechanically or strategically,
          sometimes to the point where I question if I'm even having fun. Here are some of the games I've been playing recently:</p>
        <ul>
          <li>Lies of P</li>
          <li>Faster than Light</li>
          <li>Total War: Three Kingdoms</li>
          <li>Teamfight Tactics (and a certain other Riot Game I will not speak the name of)</li>
        </ul>
      </section>
      
    </main>
  </div>
`
}

function applyTheme(newTheme) {
  const theme = themes[newTheme];
  for (const variable in theme) {
    document.documentElement.style.setProperty(variable, theme[variable]);
  }
}

function toggleTheme() {
  currentTheme = currentTheme === 'day' ? 'night' : 'day';
  applyTheme(currentTheme);
  updateContent(currentTheme);
  
  const toggleButton = document.querySelector('.theme-toggle');
  toggleButton.textContent = currentTheme === 'day' ? '☀️' : '🌙';
}

function updateContent(theme) {
  document.querySelector('#app').innerHTML = pageContents[theme];
  document.querySelector('.theme-toggle').addEventListener('click', toggleTheme);
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#app').innerHTML = pageContents.day;
  
  document.querySelector('.theme-toggle').addEventListener('click', toggleTheme);
  
  applyTheme(currentTheme);
});
