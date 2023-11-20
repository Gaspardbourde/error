const root = ReactDOM.createRoot(document.getElementById('root'));  
const main = ReactDOM.createRoot(document.getElementById('main'));

root.render(
    <div className="yellow-box">
       <h1>Hello, world!</h1>
       <p>Hope you are well.</p>
    </div>
 )

 main.render(
    <section>
       <img src="cafe.jpg" alt="sample image" />
       <h2>Nice section heading</h2>
       <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
       <p>At the end of the day, going forward, a new paradigm that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>		
    </section>
)
