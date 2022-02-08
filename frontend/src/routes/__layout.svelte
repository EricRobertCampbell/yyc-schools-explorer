<div id="app">
	<nav>
		<ul>
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/compare">Compare</a>
			</li>
			<li>
				<a href="/about">About</a>
			</li>
		</ul>
	</nav>
	<main>
		<slot />
	</main>
	<footer>
		<p>Here is some footer content</p>
	</footer>
</div>

<style>
	* {
		box-sizing: border-box;
	}
	#app {
		min-height: 100vh;
	}
	footer {
		position: absolute;
		bottom: 0;
	}
</style>
