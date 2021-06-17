<script>
	const handleSubmit = async () => {
		data=await fetchCity(name);
	};
	export let name;
	export let city;

	let data;

	async function fetchCity(name) {
		const response = await fetch(
			`http://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=9592bf3757a114d74d35ea55f24a0741`
		);

		return  response.json();
	}
</script>

<svelte:head>
	<title>SvelteKit</title>
</svelte:head>

<main>
	<h1>Grandma's weather app</h1>
	<form on:submit|preventDefault={handleSubmit}>
		<input type="text" placeholder="Location" bind:value={name} />
	<button type="submit">Search</button>
	</form>

	{#if data}	
		<p id="state">{data.weather[0].main} </p>
		<p id="box"></p>
		<p>{data.timezone}</p>	
		<div class="flex"><p>Wind</p> <p>{data.wind.speed} km/hour</p></div>
		<div class="tryout">
			<div id="min">
				<p>Min</p>
				<p>{data.main.temp_min} °C</p>
			</div>

		 <p id="current">{data.main.temp} °C</p>
		 <div id="max">
			<p>Max</p>
			<p>{data.main.temp_max} °C</p>
		</div>
		</div>
		<p id="test">{data.name}</p>
	{/if}
</main>
<!--
<style>
	@font-face {
		font-family: 'Gelasio';
		font-style: normal;
		font-weight: 400;
		src: local('Gelasio Regular'), local('Gelasio-Regular'),
			url(https://fonts.gstatic.com/s/gelasio/v1/cIf9MaFfvUQxTTqS9C6hYQ.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
			U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}
-->
<style>

	#min {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}
	#max {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	#min p, #max p {
		margin: 0;
	}
	#min p:first-child, #max p:first-child {
		font-size: 8px;
		width: min-content;
	}
	.tryout{
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.tryout > p {
		margin-left: 0;
		margin-right: 0;
	}
	.flex{
		display: flex;
		justify-content: space-between;
		
	}

	.flex > p{
		margin-left: 1;
		margin-right: 1;
	}

	#box{
		width:200px;
		height:200px;
		background-color:#ffffff;
		border-radius: 5px;
		border:none;
	}

	#current
{
	color:#E8AB35;
	font-size:20px;
}

	#state
	{
		color:#E8AB35;
	}
	#test{
		font-weight: bold;
		font-size: 20px;
		width:400px;
		height:25px;
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		background-color: #303641;
		border-radius: 5px;
	}

	input{
		border-radius: 5px;
		height: 25px;
		border:none;
		font-family: 'Montserrat';
		font-size: 12px;
	}

	button{
		background:#E8AB35;
		border-radius: 5px;
		color:white;
		border:none;
		height: 28px;
		width:90px;
		font-family: 'Montserrat';
		font-weight: bold;
		font-size:12px;
		text-transform: uppercase;
	}

	main {
		width:500px;
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		background-color: #4A515D;
		border-radius: 5px;
		box-shadow: #232323 1px 3px 10px;
	}

	h1 {
		color: #ffffff;
		text-transform: lowercase;
		font-size: 4rem;
		font-weight: 700;
		line-height: 1.1;
		margin: 4rem auto;
		max-width: 14rem;
		
	}

	p {
		max-width: 14rem;
		margin: 2rem auto;
		line-height: 1.35;
		color: white;

	}

	@media (min-width: 480px) {
		h1 {
			max-width: none;
		}

		p {
			max-width: none;
		}
	}
</style>
