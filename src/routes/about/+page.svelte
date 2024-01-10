<script>
	let email="";
	let password="";
	let isChecked = false;

	const register = () => {
		if(!email) {alert("Ingrese el correo"); return}
		if(!password) {alert("Ingrese la contraseña"); return}
		if(!isChecked) {alert("Acepte los términos"); return}
		else alert("Registro exitoso")
		
		const link = document.querySelector('a[href="/sverdle"]');
        if (link) {
          link.click();
        }
	}

</script>

<svelte:head>
	<title>Sign up</title>
	<meta name="description" content="About this app" />
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

</svelte:head>

<div class="text-column">
	<h1>SIGN UP</h1>

	<div class="bg-white p-5 rounded-5">
		<div class="d-flex justify-content-center">
			<img src="reg.png" alt="register" style="height: 6rem">
		</div>
		<div class="text-center fs-1 fw-bold">Register</div>
		<div>
			<div class="input-group mt-4">
				<input type="text" class="form-control" placeholder="Email" bind:value={email} >
			</div>
			<div class="input-group mt-3">
				<input type="password" class="form-control"  placeholder="Password" bind:value={password}>
			</div>
		</div>
		<div class="d-flex align-items-center mt-3 gap-2">
			<input class="form-check-input" type="checkbox" bind:value={isChecked}>
			<div class="pt-1" style="font-size: 0.9rem;">I accept the terms</div>
		</div>
		<div class="btn btn-info text-white w-100 mt-4" on:click={register}>Registrar</div>
		<a href="/sverdle" style="font-size: 0.9rem;"></a>
		<div class="text-center fs-1 ">
			<a href="/" style="font-size: 0.9rem;">Back to login</a>
		</div>
	</div>
	
</div>
