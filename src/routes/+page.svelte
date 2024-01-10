<script>
	import {auth} from '../firebase'
	import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
	import Counter from './Counter.svelte';
	import { navigate } from 'svelte-routing';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import { onMount } from 'svelte';
	//import alertify from 'alertifyjs';

	let resp;

	let email = "";
	let password="";
	let username = "";
	let token = "";
	let userSelected = false;
	let isChecked = false;


	const getGmailUser = async () => {
		try {
			const provider = new  GoogleAuthProvider();
			resp = await signInWithPopup(auth, provider)
			console.log("response: ", resp)
			username = resp.user.displayName;
			password = resp.user.uid;
			token=resp.user.accessToken;
			email=resp.user.email;
			userSelected = true;
		} catch (error) {
			alert("ERROR: ", error)
		}
  	};  

	const getFaceUser = async() => {
		alert("ingreso con facebook pendiente");
	}

	const login = () => {
		if(!email) {alert("Ingrese el correo"); return}
		if(!password) {alert("Ingrese la contraseña"); return}
		if(!isChecked) {alert("Acepte los términos"); return}
		if(!userSelected) {alert("Credenciales incorrectas"); password = ""; email =""; isChecked=false; return}
		else alert("Inicio exitoso")

		const link = document.querySelector('a[href="/sverdle"]');
        if (link) {
          link.click();
        }
	}

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>
		SIGN IN
	</h1>
	<div class="bg-white p-5 rounded-5">
		<div class="d-flex justify-content-center">
			<img src="login.png" alt="login">
		</div>
		<div class="text-center fs-1 fw-bold">Login</div>
		<div>
			<div class="input-group mt-4">
				<input type="text" class="form-control" placeholder="Email" bind:value={email} disabled={userSelected}>
			</div>
			<div class="input-group mt-3">
				<input type="password" class="form-control"  placeholder="Password" bind:value={password} disabled={userSelected}>
			</div>
		</div>
		<div class="d-flex align-items-center mt-3 gap-2">
			<input class="form-check-input" type="checkbox" bind:value={isChecked}>
			<div class="pt-1" style="font-size: 0.9rem;">I accept the terms</div>
		</div>
		<div class="btn btn-info text-white w-100 mt-4" on:click={login}>Enter</div>
		<a href="/sverdle" style="font-size: 0.9rem;"></a>
		<div class="d-flex gap-2 mt-3">
			<div style="font-size: 0.9rem;">Don`t have an account?</div>
			<a href="/about" style="font-size: 0.9rem;">Sign up</a>
		</div>
		<div>
			<div class="border-botton text-center mt-3" style="font-size: 0.9rem;">
				<span></span>
				<div style="font-size: 0.9rem;">Or</div>
			</div>
		</div>
		<div>
			<div class="btn d-flex gap-3 border border-gray rounded px-3 py-2 align-items-center mt-3" on:click={getGmailUser}>
				<img src="google.png" alt="gmail" style="height: 2rem">
				<!--button class="btn btn-primary" on:click={login}> <i class="fab fa-google"></i> Continue with Google</button-->
				<div class="d-flex fw-semibold mt-1.5">Continue with Google</div>
			</div>
			<div class="btn d-flex gap-3 border border-gray rounded px-3 py-2 align-items-center mt-3" on:click={getFaceUser}>
				<img src="facebook.png" alt="facebook" style="height: 2rem">
				<div class="d-flex fw-semibold mt-1.5">Continue with Facebook</div>
			</div>
		</div>

	</div>
	


</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
