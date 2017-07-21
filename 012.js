import Link from 'next/link';
import Layout from '../components/layout'

export default() => (
  <Layout title='012'>
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

<h1>Changing a React Component’s State with <code>setState()</code></h1> <p className="it">A diferencia de los props, un componente puede cambiar su estado cuando quiera y estos se guardarán hasta que el componente se destruye. Dicho esto, debes cambiar su estado cuidadosamente de lo contrario te encontrarás con problemas.</p> <p className="p">Unlike props, a component can change its state whenever it wants to and these will be saved until the component is destroyed. That being said, you should change your state carefully otherwise you will run into problems.</p> <p className="it">¿Por qué "cuidadosamente"? Bueno, primero debes saber que cualquier cambio del estado de un componente o props hará que automáticamente vuelva a renderizar para que los nuevos valores se reflejen en tu interfaz. Esto significa que los cambios frecuentes harán que tu código se ejecute lentamente, lo cual nunca es una experiencia agradable para el usuario.</p> <p className="p">Why “carefully”? Well, first you need to know that any change of a component’s state or props will automatically cause it to re-render so that the new values are reflected in your interface. This means frequent changes will make your code run slowly, which is never a pleasant user experience.</p> <p className="it">En segundo lugar, React fusiona el estado para que el estado antiguo y el nuevo estado coexistan como un valor combinado. Esto significa que si el estado inicial tiene el nombre de Bob y el país de Australia, y cambia el nombre de Lucy, el país permanecerá establecido en Australia también.</p> <p className="p">Second, React merges state so that old state and new state co-exist as a combined value. This means if your initial state has the name Bob and the country Australia, and you change the name to be Lucy, the country will remain set to Australia too.</p> <p className="it">La combinación de esos dos sucede por qué React tiene una manera especial de establecer el estado llamado, astutamente, <code>setState()</code>. Esto toma nuevos valores para combinar en los valores existentes, y luego activa un re-render. Por lo tanto, vamos a modificar el método <code>buttonClicked()</code> para que cambie el nombre dejando al país intacto:</p> <p className="p">The combination of those two is why React has a special way to set state called, cunningly, <code>setState()</code>. This takes new values to merge into the existing values, then triggers a re-render. So, let’s modify the <code>buttonClicked()</code> method so that it changes the name while leaving the country intact:</p>
<code>src/pages/Detail.js</code>
<hr></hr>
<pre>
buttonClicked() &#123;<br></br>
const newState = &#123;<br></br>
name: chance.first()<br></br>
&#125;;<br></br>
<br></br>
this.setState(newState);<br></br>
&#125;
</pre>
<hr></hr>
<p className="it">Tené en cuenta que he eliminado la llamada a <code>this.forceUpdate()</code> - ya no es necesaria. De hecho, llamar a <code>forceUpdate()</code> sólo es necesario si React no detecta un cambio de estado muy profundo, por lo que no la utilizaremos a partir de ahora.</p> <p className="p">Note that I’ve removed the call to <code>this.forceUpdate()</code> – it’s no longer needed. In fact, calling <code>forceUpdate()</code> is only needed if React didn’t spot a very deep state change, so we won’t be using it from now on.</p> <p className="it">Ese nuevo código hace exactamente lo que dijimos: crea un objeto <code>newState</code> que tiene una nueva key de nombre con un nombre aleatorio, y le dice a React que lo fusione en el estado actual del componente usando <code>this.setState()</code>. Debido a que los cambios de estado activan automáticamente un nuevo procesamiento, verás un nuevo nombre cada vez que hagas clic en el botón, pero el país no cambiará.</p> <p className="p">That new code does exactly what we said: it creates a newState object that has a new name key with a random name, and tells React to merge it into the component’s current state by using <code>this.setState()</code>. Because state changes automatically trigger a re-render, you’ll see a new name every time you click the button, but the country won’t change.</p> <p className="it">En el improbable caso de que estés realizando tantos cambios en el estado y/o en los props que las llamadas constantes a <code>render()</code> están haciendo que tu página se ejecute lentamente, React tiene una solución: se crea un método llamado <code>shouldUpdateComponent()</code> y devuelve false. Ahora tu componente no se volverá a re-renderizar.</p> <p className="p">In the unlikely event that you are making so many changes to state and/or props that the constant calls to <code>render()</code> are making your page run slowly, React has a solution: if you create a method called <code>shouldUpdateComponent()</code> and return false from it, your component won’t be re-rendered.</p> <p className="it">Para usar esto, poné alguna lógica dentro de <code>shouldUpdateComponent()</code> para devolver true o false dependiendo de tus necesidades, o alternativamente siempre podes hacer que devuelva false entonces usá <code>this.forceUpdate()</code> para volver a renderizar según sea necesario - ese método forzará un nuevo procesamiento incluso si <code>shouldUpdateComponent()</code> devuelve false.</p> <p className="p">To  use this, either put some logic inside <code>shouldUpdateComponent()</code> to return either true or   false depending on your needs, or alternatively you can always make it return false then    use <code>this.forceUpdate()</code> to re-render as needed – that method will force a new render even if <code>shouldUpdateComponent()</code> returns false.</p>
<div>
<hr></hr>
<center><nav className="center">
<Link href='/011'><a>&lt;   Anterior</a></Link><span><strong>  |  </strong></span>    
<Link href='/013'><a>Siguiente   &gt;</a></Link>
</nav></center>
<hr></hr>
</div>

</div>

</div>
  </Layout>
)
