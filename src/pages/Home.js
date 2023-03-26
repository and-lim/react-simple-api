import logo from '../logo.svg';
import '../App.css';
import Menu from '../component/Menu.js'
import Footer from '../component/Footer.js'



function Home() {
    return (
      <div className="App">   
          <Menu/>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
         <div class="bg-primary hero-header py-5 pb-5">
            <div class="container  py-5 mt-3">
                <div class="row">
                    <div class="col-lg-6 mx-auto text-center text-lg-center">
                        <h1 class="text-white mb-4 text-slider-items intro-title text-center">React Api</h1>
                        <p class="text-white animated slideInDown">Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd dolor sed magna dolor.</p>
                        <a href="/item" className='btn btn-warning px-3'>Browse Item</a>
                    </div>
                </div>
             
            </div>
         </div>
        <div class="line p-2"></div>


         <section>
    <div class="container my-5">
        <div class="row" style={{rowGap:10}}>
            <h1 class="text-start title mb-2">Category</h1>
            <div class="col-lg-3">
              <a href="/item" className="text-decoration-none">
                <div class="card category-card bg-snack" >
                    <div class="card-body">
                      <h5 class="card-title text-start">Snack</h5>
                    </div>
                </div>
              </a>
            </div>
            <div class="col-lg-3">
              <a href="/item" className="text-decoration-none">
                <div class="card category-card bg-electronic" >
                    <div class="card-body">
                      <h5 class="card-title text-start">Laptop</h5>
                    </div>
                </div>
              </a>
            </div>
        </div>
    </div>
        </section>

        <Footer/>
      </div>
    );
  }
  
  export default Home;
  