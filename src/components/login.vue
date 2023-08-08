<script setup>
	import { ref, reactive, computed } from "vue"

	const title = "Login or register"
	const bgImage = ref("https://images.unsplash.com/photo-1690555575753-7aa27df96b52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80")
	const imageTitle = ref("Kosmos!")
	const copyWrite = ref("Rahman. All rights reserved.")

	const userForm = reactive({
		login: [
			{ value: "", name: "name", type: "text", placeholder: "Name" },
			{ value: "", name: "password", type: "password", placeholder: "Password" },
		],
		register: [
			{ value: "", name: "Name", type: "text", placeholder: "Name" },
			{ value: "", name: "email", type: "email", placeholder: "Email" },
			{ value: "", name: "password", type: "password", placeholder: "Password" },
			{ value: "", name: "cPassword", type: "password", placeholder: "Confirm Password" },
		],
	})
	const users = reactive(["Admin", "admin"])

	const message = ref()

	// user from submission
	function userSubmission(form) {
		let key
		const errors = []
		// user login
		for (const forms in userForm) {
			if (userForm[forms].length <= 2 && forms == form) {
				userForm[forms].forEach((value, index) => {
					// error messge
					if (!value.value) {
						console.log((userForm[forms][index].error = "Invalid " + userForm[forms][index].placeholder))
					}
					// success messge
					if (value.value == users[key]) {
						return (message.value = "Welcome")
					}
				})
			}
			if (userForm[forms].length <= 4 && forms == form) {
				userForm[forms].forEach((value, index) => {
					// get error
					if (!value.value) {
						errors.push("")((userForm[forms][index].error = "Invalid " + userForm[forms][index].placeholder))
					}
					// check password == comfirm password
					if (userForm[forms][index].name == "cPassword") {
						userForm[forms][index - 1].value != userForm[forms][index].value ? (userForm[forms][index].error = "Invalid " + userForm[forms][index].placeholder) : ""
					}
				})

				// reload
				if (errors.length == 0) {
					message.value = userForm[forms] == "register" ? "Registration Successfull" : "Welcome Login Successfull"
					setTimeout(function load() {
						location.assign(window.location.href)
					}, 2000)
				}
			}
		}
	}

	const formDataShow = ref("login")
	function formShow(type) {
		return (formDataShow.value = type)
	}
</script>

<template>
	<section class="flex h-screen w-full">
		<div class="w-1/2 bg-no-repeat bg-cover" :class="`bg-[url(${bgImage})]`">
			<h1 class="mb-5 text-2xl mt-10 ml-10 text-white">{{ imageTitle }}</h1>
		</div>
		<div class="w-1/2 flex flex-col justify-center items-center bg-gray-200">
			<h2 class="mb-5 text-xl text-green-600 font-semibold capitalize">{{ message ?? formDataShow }}</h2>
			<div class="w-full max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" v-if="!message">
				<!-- {{ userForm.login[0].placeholder }} -->
				<div class="mb-4" v-show="key == formDataShow" v-for="(forms, key, index) in userForm" :key="index">
					<template v-for="(form, index) in forms.length" :key="index">
						<label class="block text-gray-700 text-sm font-bold mb-2" :for="forms[index].placeholder"> {{ forms[index].placeholder }} </label>
						<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" :id="forms[index].placeholder" :type="forms[index].type" v-model="forms[index].value" :placeholder="forms[index].placeholder" />
						<p class="text-sm text-rose-500 font-semibold">{{ forms[index].error }}</p>
					</template>
				</div>
				<div class="flex items-center justify-between">
					<button @click="userSubmission(formDataShow)" class="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">{{ formDataShow == "login" ? "Sign In" : "Register" }}</button>
					<button @click="formShow(formDataShow == 'login' ? 'register' : 'login')" type="button" class="inline-block align-baseline font-bold text-sm text-orange-600 hover:text-orange-800">Or {{ formDataShow == "login" ? "Register" : "Sign In" }}</button>
				</div>
				<p class="my-6 text-center text-gray-500 text-xs">&copy;{{ new Date().getFullYear() }} {{ copyWrite }}</p>
				<p class="text-red-500 text-xs font-semibold mx-auto text-center">
					User Name : {{ users[0] }}<br />
					User Password : {{ users[1] }}
				</p>
			</div>
		</div>
	</section>
</template>
<style scoped></style>

