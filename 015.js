import Layout from '../components/layout';
import Link from 'next/link'

export default() => (
  <Layout title='015'>
    <div>
    <style jsx>{`

                    .col-md-6 {
                        border-radius: 4px;
                        overflow: hidden;
                        box-shadow: 0 9px 9px rgba(0, 0, 0, 0.9);
                        display: block;
                        min-height: 70%;
                        font-family: Verdana;
                        max-width: 1100px;
                        background-color: #E8EDEE;
                        margin: auto;
                        margin-top: auto;
                        margin-right: auto;
                        margin-bottom: auto;
                        margin-left: auto;
                        white-space: pre-wrap;
                        border: none;
                        box-sizing: border-box;
                        color: #2D0D0D;
                        line-height: 1.1;
                        padding: 4.7em;

                    }

                    .home {
                        margin: 1.5em 0;
                        
                    }

                    h1 {
                        color: #867452;
                        font-size: 60px;
                    }

                    h2 {
                        color: #867452;
                        font-size: 40px;
                    }
                    
                    h3 {
                        color: #867452;
                        font-size: 30px;
                    }


                    .it, .listit {
                        color: brown;
                        font-size: 24px;
                        font-style: italic;
                        letter-spacing: 0.04em;
                    }
                    .p, .listitem {
                        color: #75AFAD;
                        font-size: 24px;
                        font-style: italic;
                        letter-spacing: 0.04em;
                    }

                    pre {display: block;
                    font-family: monospace;
                    white-space: pre;
                    margin: 1em 0;
                    font-size: 16px


                    }

                    code
                    {margin: auto,
                        font-family:"Lucida Console";
                        "Andale Mono";
                        "Courier New";
                        Courier;
                        monospace;
                        font-style:normal;
                        color:#395C73;}
                    
                    code strong
                    {color:#000;
                        background:#F5FD11;
                        padding:1px;
                        font-weight:normal;
                    }

                    .interno {
                    font-family: verdana;
                    font-style: italic;
                    color: #395C73;
                    font-size: 24px;    
                    }

                    .sub{
                        text-decoration: underline;
                    }
                `}</style>

    <div className="col-md-6"> 



<h1>Cleaning up and Preparing for a Real Project</h1>
<p className="it">En este punto probablemente te estás preguntando a dónde va este tutorial, así que déjame resumir dónde estás hasta ahora:</p>


<p className="p">At this point you’re probably wondering where this tutorial is going, so let me summarise where you are so far:</p>
<ul>
<li className="it">Cómo instalar Webpack, Babel y React para el desarrollo con ES6.</li>

<li className="p">How to install Webpack, Babel and React for development with ES6.</li>
<li className="it">Cómo crear un componente básico de React e importarlo en una aplicación.</li>

<li className="p">How to create a basic React component and import it into an application.</li>
<li className="it">Cómo escribir JSX simple para procesar contenido.</li>

<li className="p">How to write simple JSX to render content.</li>
<li className="it">Cómo usar los props para dar valores de un componente.</li>

<li className="p">How to use props to give a component values.</li>
<li className="it">Cómo hacer varios elementos a la vez.</li>

<li className="p">How to render several elements at once.</li>
<li className="it">Cómo manejar eventos como <code>onClick</code>.</li>

<li className="p">How to handle events such as <code>onClick</code>.</li>
<li className="it">Cómo utilizar el estado, y cómo se diferencia de los props.</li>

<li className="p">How to use state, and how it differs from props.</li>
<li className="it">Cómo hacer un loop y procesar datos en una array.</li>

<li className="p">How to loop over and render data in an array.</li>
</ul>
<p className="it">Todo esto comenzará a reunirse ahora: vamos a utilizar una llamada Ajax para obtener datos de GitHub. Bueno, técnicamente es Ajaj en lugar de Ajax, porque GitHub proporciona JSON en lugar de XML, pero aún así: es nuestra próxima gran tarea. Si nunca has utilizado Ajax antes, es sólo una forma de obtener datos de forma remota utilizando el navegador web.</p>


<p className="p">All this will begin to come together now: we’re going to use an Ajax call to fetch data from GitHub. Well, technically it’s Ajaj rather than Ajax, because GitHub provides JSON rather than XML, but still: it’s our next big task. If you’ve never used Ajax before, it’s just a way to fetch data remotely using the web browser.</p>

<p className="it">En el terminal, salí de Webpack Dev Server pulsando <code>Ctrl+C</code> y ejecutá este comando:</p>

<p className="p">In the terminal, quit Webpack Dev Server by pressing <code>Ctrl+C</code> and run this command:</p>

<code>npm install --save superagent</code>

<p className="it"><code>superAgent</code> es un cliente Ajax ridículamente ligero con una sintaxis clara y simple que hace que sea fácil de aprender y usar. Vamos a reemplazar todo este "Hola, Scott de Escocia!" con los resultados de una llamada de Ajax a GitHub que se tirará en una lista de compromisos al proyecto de React. Esto requerirá hacer bastantes cambios, pero es casi todo lo que has visto antes.</p>

<p className="p"><code>superAgent</code> is a ridiculously lightweight Ajax client with clear, simple syntax that makes it easy to learn and use. We’re going to replace this whole “Hello, Scott from Scotland!” thing with the results of an Ajax call to GitHub that will pull in a list of commits to the React project. This will require making quite a few changes, but it’s almost all stuff you’ve seen before.</p>

<p className="it">Nota: cuando <code>superAgent</code> haya finalizado la instalación, asegurate de ejecutar <code>webpack-dev-server</code> de nuevo. Primero, encontrá estas líneas en tu constructor:</p>


<p className="p">Note: when <code>superAgent</code> has finished installing, make sure you run <code>webpack-dev-server</code> again. First, find these lines in your constructor:</p>

<code>src/pages/Detail.js</code>
<pre>
&#60;pre&#62;const people = [];<br></br>
for (let i = 0; i &#60; 10; i++) &#123;<br></br>
people.push(&#123;<br></br>
name: chance.first(),<br></br>
country: chance.country(&#123; full: true &#125;)<br></br>
&#125;)<br></br>
&#125;<br></br>
this.state = &#123; people &#125;;

</pre>

<p className="it">... luego borralos todos. Ya no necesitamos people. Mientras estás borrando cosas, seguí adelante y eliminá la posibilidad de importación de la línea 'chance' y todo el método <code>buttonClicked()</code>; Estos no son necesarios en este momento. No te preocupes: todas las cosas que aprendistes resultarán útiles en un próximo capítulo, es sólo que por ahora no lo necesitamos.</p>


<p className="p">…then delete them all. We don’t need people any more. While you’re deleting stuff, go ahead and remove the import Chance from 'chance' line and the whole <code>buttonClicked()</code> method too; these aren’t needed right now. Don’t worry: all that stuff you learned will prove useful in an upcoming chapter, its just that for now we don’t need it.</p>
<p className="it">En su lugar, vamos a crear un estado inicial muy simple: una array vacía de commits. Esto será llenado por <code>superAgent</code> cuando termine su llamada Ajax. Por lo tanto, donde hace un momento estaban las líneas en tu constructor, pone esto en su lugar:</p>

<p className="p">Instead, we’re going to create some very simple initial state: an empty array of commits. This will be filled by <code>superAgent</code> when its Ajax call completes. So, where those lines in your constructor were just a moment ago, put this instead:</p>

<code>src/pages/Detail.js</code>

<pre>
this.state = &#123; commits: [] &#125;;

</pre>
 

<p className="it">En cuanto al método <code>render()</code>, vamos a cambiar los nombres de las variables, pero de lo contrario sólo imprimirá datos estáticos - vamos a llenar los detalles muy pronto, no te preocupes. Cambialo para que sea:</p>


<p className="p">As for the <code>render()</code> method, we’re going to change the variable names but otherwise just print out static data – we’ll fill in the specifics soon enough, don’t worry. Change it to be this:</p>
<pre>

render() &#123;<br></br>
return (&#60;div&#62;<br></br>
&#123;this.state.commits.map((commit, index) =&#62; (<br></br>
&#60;p key=&#123;index&#125;&#62;Some commit data here.&#60;/p&#62;<br></br>
))&#125;<br></br>
&#60;/div&#62;);<br></br>
&#125;
</pre>

<p className="it">Sólo para asegurarte de que estás siguiendolo, así es cómo tu componente ahora mismo debería parecerse:</p>


<p className="p">Just to make sure you’re following along, here’s how your component should look right now:</p>



<code>src/pages/Detail.js</code>

<pre>
class Detail extends React.Component &#123;<br></br>
constructor(props) &#123;<br></br>
super(props);<br></br>
this.state = &#123; commits: [] &#125;;<br></br>
&#125;<br></br>
render() &#123;<br></br>
return (&#60;div&#62;<br></br>
&#123;this.state.commits.map((commit, index) =&#62; (<br></br>
&#60;p key=&#123;index&#125;&#62;Some commit data here.&#60;/p&#62;<br></br>
))&#125;<br></br>
&#60;/div&#62;);<br></br>
&#125;<br></br>
&#125;
</pre>

<p className="it">Una vez que guardás ese archivo, tu página web quedará en blanco. Esto se debe a que la array commits comienza vacía y nunca se llena. Vamos a arreglar eso ahora ...</p>


<p className="p">Once you save that file, your web page will go blank. This is because the commits array starts empty and never gets filled. Let’s fix that now…</p>


<div>
<center><nav className="center">
<Link href='/014'><a>&lt;   Anterior</a></Link><span><strong>  |  </strong></span>    
<Link href='/016'><a>Siguiente   &gt;</a></Link>
</nav></center>
</div>


</div>

</div>
  </Layout>
)
