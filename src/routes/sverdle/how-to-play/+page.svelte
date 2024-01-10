<svelte:head>
	<title>Cómo jugar Sverdle</title>
	<meta name="description" content="How to play Sverdle" />
</svelte:head>

<div class="text-column">
	<h1>Cómo jugar Sverdle</h1>

	<p>
		Sverdle es un clon de <a href="https://www.nytimes.com/games/wordle/index.html">Wordle</a>, el
		juego de adivinanzas de palabras. para jugar, ingresa una palabra en ingles de 5 letras. Por ejemplo:
	</p>

	<div class="example">
		<span class="close">r</span>
		<span class="missing">i</span>
		<span class="close">t</span>
		<span class="missing">z</span>
		<span class="exact">y</span>
	</div>

	<p>
		La <span class="exact">y</span> está en el lugar correcto. <span class="close">r</span> y
		<span class="close">t</span>
		son las letras correctas, pero en el lugar equivocado. Las otras letras están equivocadas y pueden descartarse.
		Hagamos otra suposición:
	</p>

	<div class="example">
		<span class="exact">p</span>
		<span class="exact">a</span>
		<span class="exact">r</span>
		<span class="exact">t</span>
		<span class="exact">y</span>
	</div>

	<p>¡Esta vez acertamos! Tienes <strong>6</strong> conjeturas para entender la palabra.</p>

	<p>
		A diferencia del Wordle original, Sverdle se ejecuta en el servidor en lugar de en el navegador, lo que lo hace
		imposible de engañar. Usa <code>&lt;form&gt;</code> y cookies para enviar datos, lo que significa que puedes
		¡Incluso juega con JavaScript deshabilitado!
	</p>
	<p></p>
	<a href="/sverdle" style="font-size: 1rem;">Back to game</a>
</div>

<style>
	span {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		font-size: 0.8em;
		width: 2.4em;
		height: 2.4em;
		background-color: white;
		box-sizing: border-box;
		border-radius: 2px;
		border-width: 2px;
		color: rgba(0, 0, 0, 0.7);
	}

	.missing {
		background: rgba(255, 255, 255, 0.5);
		color: rgba(0, 0, 0, 0.5);
	}

	.close {
		border-style: solid;
		border-color: var(--color-theme-2);
	}

	.exact {
		background: var(--color-theme-2);
		color: white;
	}

	.example {
		display: flex;
		justify-content: flex-start;
		margin: 1rem 0;
		gap: 0.2rem;
	}

	.example span {
		font-size: 1.4rem;
	}

	p span {
		position: relative;
		border-width: 1px;
		border-radius: 1px;
		font-size: 0.4em;
		transform: scale(2) translate(0, -10%);
		margin: 0 1em;
	}
</style>
